

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      notNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "beginTime",
      defaultValue: sequelize.literal("NOW()")
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "beginTime",
      defaultValue: sequelize.literal("NOW()")
    }
  });
  return User;
};
