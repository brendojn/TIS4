/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import path from 'path';
import fs from 'fs';

import {
  GetAll,
  Create,
  GetOneById,
  UpdateById,
  Delete,
} from '../controllers/open_questionCtrl';

const router = Router();

router
  .route('/')
  .get(GetAll)
  .post(Create);

router
  .route('/:id')
  .get(GetOneById)
  .put(UpdateById)
  .delete(Delete);

export default router;
