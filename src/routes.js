import { Router } from 'express';
import ProfessorController from '../src/api/modules/professor/controller';
import ClassroomController from '../src/api/modules/classroom/controller';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: `It's all working fine :)` });
});

routes.post('/professors', ProfessorController.store);
routes.post('/classrooms/:professorId', ClassroomController.store);

export default routes;
