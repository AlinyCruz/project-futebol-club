import  { Model, DataTypes, QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable<Model>('teams', {
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