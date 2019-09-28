import { Router } from 'express';
import UserController from './api/modules/user/controller';
import SessionController from './api/modules/session/controller';
import ClassroomController from './api/modules/classroom/controller';
import authMiddlawre from './api/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: `It's all working fine :)` });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddlawre);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);
routes.post('/classrooms', ClassroomController.store);

export default routes;
