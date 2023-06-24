import TeamsModel from '../database/models/teamsModel';
import MatchesModel from '../database/models/matchesModel';

class MatchesService {
  private matches = MatchesModel;
  private teams = TeamsModel;

  public async getMatches() {
    const M = await this.matches.findAll({ include: [
      { model: this.teams,
        as: 'homeTeam',
        attributes: ['teamName'] },
      { model: this.teams,
        as: 'awayTeam',
        attributes: ['teamName'] },
    ] });
    // const M = await this.matches.findAll();
    return M;
  }
}

export default MatchesService;
