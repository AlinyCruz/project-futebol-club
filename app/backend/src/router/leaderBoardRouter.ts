import { Request, Response, Router } from 'express';
import LeaderBoardController from '../controller/leaderBoardController';

const leaderBoardRouter = Router();
const leaderBoardController = new LeaderBoardController();

leaderBoardRouter.get('/home', (req: Request, res: Response) =>
  leaderBoardController.getLeaderBoard(req, res));

export default leaderBoardRouter;
