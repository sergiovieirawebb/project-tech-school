const courseSchema = (sequelize, DataTypes) => {
  const courseTable = sequelize.define('Course', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
  }, {
    tableName: 'Courses',
    underscored: true,
    timestamps: false,
  });

  return courseTable;
};

module.exports = courseSchema;
