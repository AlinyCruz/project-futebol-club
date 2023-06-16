import { Request, Response } from 'express';
import TeamsService from '../service/teamsService';

class ListController {
  public static async getTeams(req: Request, res: Response): Promise<Response> {
    const listTeams = await TeamsService.getTeams();
    return res.status(200).json(listTeams);
  }
}

export default ListController;
