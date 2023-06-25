import { LeaderBoard } from '../Interfaces/IMatches';
import MatchesModel from '../database/models/matchesModel';

const query = `SELECT teamsTFC.team_name AS name,
  SUM(CASE
      WHEN matchesTFC.home_team_goals > matchesTFC.away_team_goals THEN 3
      WHEN matchesTFC.home_team_goals = matchesTFC.away_team_goals THEN 1
      ELSE 0
    END
  ) AS totalPoints,

  COUNT(*) AS totalGames,
  SUM(CASE
      WHEN matchesTFC.home_team_goals > matchesTFC.away_team_goals THEN 1
      ELSE 0
    END
  ) AS totalVictories,

  SUM(CASE
      WHEN matchesTFC.home_team_goals = matchesTFC.away_team_goals THEN 1
      ELSE 0
    END
  ) AS totalDraws,

  SUM(CASE
      WHEN matchesTFC.home_team_goals < matchesTFC.away_team_goals THEN 1
      ELSE 0
    END
  ) AS totalLosses,

  SUM(matchesTFC.home_team_goals) AS goalsFavor,
  SUM(matchesTFC.away_team_goals) AS goalsOwn,
  SUM(matchesTFC.home_team_goals) - SUM(matchesTFC.away_team_goals) AS goalsBalance,
  ROUND(
    (SUM(CASE
          WHEN matchesTFC.home_team_goals > matchesTFC.away_team_goals THEN 3
          WHEN matchesTFC.home_team_goals = matchesTFC.away_team_goals THEN 1
          ELSE 0
        END
      ) / (COUNT(*) * 3)
    ) * 100,
    2
  ) AS efficiency

FROM
  TRYBE_FUTEBOL_CLUBE.matches as matchesTFC
  INNER JOIN TRYBE_FUTEBOL_CLUBE.teams as teamsTFC ON matchesTFC.home_team_id = teamsTFC.id

WHERE
  matchesTFC.in_progress = 0

GROUP BY
  team_name

ORDER BY
  totalPoints DESC,
  totalVictories DESC,
  goalsBalance DESC,
  goalsFavor DESC;`;

class leaderBoardService {
  private matches = MatchesModel;

  public async getLeaderBoard(): Promise<LeaderBoard[]> {
    const r = await this.matches.sequelize?.query(query, { type: 'SELECT' });
    return r as unknown as LeaderBoard[];
  }
}

export default leaderBoardService;
