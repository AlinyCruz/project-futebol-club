import { IMatches } from '../Interfaces/IMatches';
import MatchesModel from '../database/models/matchesModel';

class MatchesService {
  private matches = MatchesModel;

  public async getMatches() {
    const M = await this.matches.findAll();

    const R = M.map((team) => ({
      ...team.dataValues,
    }));
    return R;
  }

  public async getMatchesInProgress(param: boolean) {
    const M = await this.matches.findAll({
      where: { inProgress: param },
    });

    const R = M.map((team) => ({
      ...team.dataValues,
    }));
    return R;
  }

  public async upMatches(matchId: number) {
    await this.matches.update(
      { inProgress: false },
      {
        where: { id: matchId },
      },
    );
    return { message: 'Finished' };
  }

  public async upMatchesId(matchId: number, goalHome: number, goalAway: number) {
    await this.matches.update(
      {
        homeTeamGoals: goalHome,
        awayTeamGoals: goalAway,
      },
      {
        where: { id: matchId },
      },
    );
    return { message: 'Ok' };
  }

  public async postMatches(param: IMatches) {
    const affectedRows = await this.matches.create({
      homeTeamId: param.homeTeamId,
      homeTeamGoals: param.homeTeamGoals,
      awayTeamId: param.awayTeamId,
      awayTeamGoals: param.awayTeamGoals,
      inProgress: true,
    });

    return affectedRows.dataValues;
  }
}

export default MatchesService;
