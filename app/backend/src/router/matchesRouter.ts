import { Request, Response, Router } from 'express';
import MatchesController from '../controller/matchesController';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchesController.getMatches(req, res));

export default matchesRouter;
