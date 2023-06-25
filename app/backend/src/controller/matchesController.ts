import { Request, Response } from 'express';
import MatchesService from '../service/matchesService';
import TeamsService from '../service/teamsService';
import { IMatches } from '../Interfaces/IMatches';

class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async getMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;
    let listMatches = [] as IMatches[];
    if (inProgress) {
      const progress = inProgress === 'true';
      listMatches = await this.matchesService.getMatchesInProgress(progress);
    }
    if (!inProgress) {
      listMatches = await this.matchesService.getMatches();
    }
    const listTeams = await TeamsService.getTeams();

    const R = listMatches.map((team) => ({
      ...team,
      homeTeam: { teamName: listTeams.find((t) => t.id === team.homeTeamId)?.teamName },
      awayTeam: { teamName: listTeams.find((t) => t.id === team.awayTeamId)?.teamName },
    }));

    return res.status(200).json(R);
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
