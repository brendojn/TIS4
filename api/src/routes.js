import { Router } from 'express';
import ProfessorController from './controllers/ProfessorController';
import Session from './modules/auth/session';
import AuthMiddleware from './modules/auth/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: `It's all working fine :]` });
});

routes.post('/professors', ProfessorController.store);
routes.post('/session', Session.store);
routes.use(AuthMiddleware);
routes.put('/professors', ProfessorController.update);

export default routes;
