const studentSchema = (sequelize, DataTypes) => {
  const studentTable = sequelize.define('Student', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    idCourse: DataTypes.INTEGER,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    // role: DataTypes.STRING,
  }, {
    tableName: 'Students',
    underscored: true,
    timestamps: false,
  });

  studentTable.associate = (models) => {
    studentTable.belongsTo(models.Course, {
      foreignKey: 'id_course',
      as: 'course',
    });
  };

  return studentTable;
};

module.exports = studentSchema;
