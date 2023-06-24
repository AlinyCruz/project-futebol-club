import  { Model, DataTypes, QueryInterface } from 'sequelize';
import { Team } from '../../Interfaces/IMatches';

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model<Team>>('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      teamName: {
        allowNull: false,
        field: 'team_name',
        type: DataTypes.STRING,
      },
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('teams');
  },
};