import { Router } from 'express';
import MatchesController from '../controller/matchesController';

const matchesRouter = Router();

matchesRouter.get('/', MatchesController.getMatches);

export default matchesRouter;
