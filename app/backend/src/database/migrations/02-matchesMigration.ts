import  {
  Model,
  DataTypes,
  QueryInterface
} from 'sequelize';

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model>('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      homeTeamId: {
        primaryKey: true,
        references: {
          key: 'id',
          model: 'teams'
        },
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'home_team_id',
    },
      homeTeamGoals: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'home_team_goals',
    },
      awayTeamId: {
        primaryKey: true,
        references: {
          key: 'id',
          model: 'teams'
        },
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
        field: 'in_progress'
    },
  })
},
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('matches');
  },
};