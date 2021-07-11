const User = require('../models/User');
const WorkTime = require('../models/WorkTime');
const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');

module.exports = {
  async index(req, res) {
    const { date } = req.query;
    const userId = req.userId;
    if (date) {
      const parsedDate = new Date(date);

      const worktimes = await WorkTime.find({
        createdAt: {
          $gte: startOfDay(parsedDate),
          $lte: endOfDay(parsedDate),
        },
        user: userId,
      }).sort({ createdAt: 'asc' });
      res.json(worktimes);
    } else {
      const worktimes = await WorkTime.find({
        user: userId,
      }).sort({ createdAt: 'asc' });
      res.json(worktimes);
    }
  },

  async store(req, res) {
    const { description } = req.body;
    const userId = req.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    let type = 'entrance';

    const worktimes = await WorkTime.find({
      user: userId,
    }).sort({ createdAt: 'asc' });

    lastRecord = worktimes[worktimes.length - 1];

    if (lastRecord) {
      type = lastRecord.type === 'entrance' ? 'exit' : 'entrance';
    }

    const workTime = await WorkTime.create({
      type,
      description,
      user: userId,
    });
    return res.json(workTime);
  },
};
