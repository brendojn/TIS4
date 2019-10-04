import { Router } from 'express';
import ProfessorController from './controllers/ProfessorController';
import Session from './modules/auth/session';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: `It's all working fine :]` });
});

routes.post('/professors', ProfessorController.store);
routes.post('/session', Session.store);

export default routes;
