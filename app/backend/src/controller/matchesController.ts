import { Request, Response } from 'express';
import MatchesService from '../service/matchesService';

class MatchesController {
  public static async getMatches(request: Request, response:Response): Promise<Response> {
    const listMatches = await MatchesService.getMatches();
    return response.status(200).json(listMatches);
  }
}

export default MatchesController;
