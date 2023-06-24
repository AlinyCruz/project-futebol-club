import { Request, Response } from 'express';
import MatchesService from '../service/matchesService';

class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async getMatches(request: Request, response:Response): Promise<Response> {
    const listMatches = await this.matchesService.getMatches();
    return response.status(200).json(listMatches);
  }
}

export default MatchesController;
