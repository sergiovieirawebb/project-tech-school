const courseModuleSchema = (sequelize) => {
  const courseModuleTable = sequelize.define('CourseModule', {}, {
    timestamps: false,
  });

  courseModuleTable.associate = (models) => {
    models.Course.belongsToMany(models.Module, {
      foreignKey: 'id_course',
      otherKey: 'id_module',
      through: courseModuleTable,
      as: 'modules',
    });

    models.Module.belongsToMany(models.Course, {
      foreignKey: 'id_module',
      otherKey: 'id_course',
      through: courseModuleTable,
      as: 'course',
    });
  };

  return courseModuleTable;
};

module.exports = courseModuleSchema;
