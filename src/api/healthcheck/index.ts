import { Router } from 'express';
import { healtCheck } from './healthcheci.controller';

const router = Router();

router.get('/', healtCheck)

export default router;