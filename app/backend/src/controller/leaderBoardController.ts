import { Request, Response } from 'express';
import LeaderBoardService from '../service/leaderBoardService';

class LeaderBoardController {
  constructor(
    private leaderBoardService = new LeaderBoardService(),
  ) {}

  public async getLeaderBoard(req: Request, res: Response): Promise<Response> {
    const l = await this.leaderBoardService.getLeaderBoard();

    return res.status(200).json(l);
  }
}

export default LeaderBoardController;
