"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ QuestionAnswer }) {
      this.hasMany(QuestionAnswer, { foreignKey: 'theme_id' })
    }
  }
  Theme.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
