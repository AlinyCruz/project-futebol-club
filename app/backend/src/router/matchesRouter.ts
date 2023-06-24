import { Request, Response, Router } from 'express';
import MatchesController from '../controller/matchesController';
import validadeToken from '../middleware/validateToken';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/', (req: Request, res: Response) => matchesController.getMatches(req, res));
matchesRouter.patch(
  '/:id/finish',
  validadeToken,
  (req: Request, res: Response) => matchesController.upMatches(req, res),
);
matchesRouter.patch(
  '/:id',
  validadeToken,
  (req: Request, res: Response) => matchesController.upMatchesId(req, res),
);

export default matchesRouter;
