import TeamsModel from '../database/models/teamsModel';

class TeamsService {
  public static async getTeams(): Promise<unknown> {
    const list = await TeamsModel.findAll();
    return list;
  }
}

export default TeamsService;
