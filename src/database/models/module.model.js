const moduleSchema = (sequelize, DataTypes) => {
  const moduleTable = sequelize.define('Module', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.DECIMAL,
    qtdBlock: DataTypes.DECIMAL,
  }, {
    tableName: 'Modules',
    underscored: true,
    timestamps: false,
  });

  return moduleTable;
};

module.exports = moduleSchema;
