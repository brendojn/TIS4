import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: `It's all working fine :]` });
});

export default routes;
