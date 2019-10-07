/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import path from 'path';
import fs from 'fs';

import choicesquestion from '../controllers/choices_questionCtrl';

const router = Router();

router
  .route('/')
  .get(choicesquestion.GetAll)
  .post(choicesquestion.Create);

router
  .route('/:id')
  .get(choicesquestion.GetOneById)
  .put(choicesquestion.UpdateById)
  .delete(choicesquestion.Delete);

export default router;
