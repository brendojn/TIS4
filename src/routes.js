import { Router } from 'express';
import UserController from '../src/api/modules/user/controller';
import ClassroomController from '../src/api/modules/classroom/controller';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: `It's all working fine :)` });
});

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);
routes.post('/classrooms/:userId', ClassroomController.store);

export default routes;
