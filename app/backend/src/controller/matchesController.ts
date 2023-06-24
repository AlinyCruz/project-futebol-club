import { Request, Response } from 'express';
import MatchesService from '../service/matchesService';

class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async getMatches(req: Request, res: Response): Promise<Response> {
    const listMatches = await this.matchesService.getMatches();
    return res.status(200).json(listMatches);
  }

  public async upMatches(req: Request, res: Response): Promise<Response> {
    await this.matchesService.upMatches(Number(req.params.id));
    return res.status(200).json({ message: 'Finished' });
  }

  public async upMatchesId(req: Request, res: Response): Promise<Response> {
    await this.matchesService.upMatchesId(
      Number(req.params.id),
      req.body.homeTeamGoals,
      req.body.awayTeamGoals,
    );
    return res.status(200).json({ message: 'Ok' });
  }
}

export default MatchesController;
