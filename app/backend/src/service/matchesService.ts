import TeamsModel from '../database/models/teamsModel';
import { IMatches } from '../Interfaces/IMatches';
import MatchesModel from '../database/models/matchesModel';

class MatchesService {
  public static async getMatches(): Promise<IMatches[]> {
    const list = await MatchesModel.findAll({ include: [
      { model: TeamsModel, as: 'team', attributes: ['teamName'], foreignKey: 'homeTeamId' },
      { model: TeamsModel, as: 'team', attributes: ['teamName'], foreignKey: 'awayTeamId' }],
    });
    const matchesList: IMatches[] = list.map((l) => {
      const matche: IMatches = {
        id: l.id,
        homeTeamId: l.homeTeamId,
        homeTeamGoals: 0,
        awayTeamId: l.awayTeamId,
        awayTeamGoals: 0,
        inProgress: true,
        // homeTeam: team,
        // awayTeam: team,
      };
      return matche;
    });
    return matchesList;
  }
}

export default MatchesService;
