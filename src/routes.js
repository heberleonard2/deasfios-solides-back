const express = require('express');

const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const WorkTimeController = require('./controllers/WorkTimeController');
const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/users', UserController.index);

routes.get('/worktime', WorkTimeController.index);
routes.post('/worktime', WorkTimeController.store);

routes.get('/dashboard', (req, res) => {
  res.json({ message: 'ta logado' });
});

module.exports = routes;
