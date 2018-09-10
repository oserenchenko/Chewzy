

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      notNull: true,
      isEmail: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    }
  });
  return User;
};
