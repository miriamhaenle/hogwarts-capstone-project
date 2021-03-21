import express from 'express';
import { pruneDatabase } from '../controller/maintenance.controller.js';

const router = express.Router();

router.get('/prune-database', pruneDatabase);

export default router;
