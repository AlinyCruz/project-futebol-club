import { Team } from '../Interfaces/IMatches';
import TeamsModel from '../database/models/teamsModel';

class TeamsService {
  public static async getTeams(): Promise<Team[]> {
    const list = await TeamsModel.findAll();
    return list;
  }

  public static async getTeamsId(id: number): Promise<unknown> {
    const listId = await TeamsModel.findOne({ where: { id } });
    return listId;
  }
}

export default TeamsService;
