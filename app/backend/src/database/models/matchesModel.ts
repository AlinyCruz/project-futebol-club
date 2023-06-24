import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import TeamsModel from './teamsModel';

class MatchesModel extends Model<InferAttributes<MatchesModel>,
InferCreationAttributes<MatchesModel>> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  timestamps: false,
  modelName: 'matches',
  underscored: true,
});

MatchesModel.belongsTo(TeamsModel, { foreignKey: 'homeTeamId' as 'homeTeam' });
MatchesModel.belongsTo(TeamsModel, { foreignKey: 'awayTeamId' as 'awayTeam' });

TeamsModel.hasMany(MatchesModel, { foreignKey: 'homeTeamId' as 'homeTeam' });
TeamsModel.hasMany(MatchesModel, { foreignKey: 'awayTeamId' as 'awayTeam' });

export default MatchesModel;
