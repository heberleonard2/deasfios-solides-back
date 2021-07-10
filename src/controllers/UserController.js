const Yup = require('yup');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const userExists = await User.findOne({
      email,
    });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      const { id } = await User.create({
        name,
        email,
        password: hashPassword,
      });
      return res.json({
        id,
        name,
        email,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
  async index(req, res) {
    const userData = await User.findById(req.userId);
    if (!userData) {
      return res.status(400).json({ error: 'Invalid token' });
    }
    const { name, email } = userData;
    return res.json({
      user: {
        name,
        email,
      },
    });
  },
};
