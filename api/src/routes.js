import { Router } from 'express';
import ProfessorController from './controllers/ProfessorController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: `It's all working fine :]` });
});

routes.post('/professors', ProfessorController.store);

export default routes;
