module.exports = function(sequelize, DataTypes) {
  var Favorite = sequelize.define("Favorite", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cuisines: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userRating: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photoUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    priceLevel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reviews: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Favorite.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Favorite.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Favorite;
};