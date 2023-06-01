"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ QuestionAnswers }) {
      this.hasMany(QuestionAnswers, { foreignKey: 'theme_id' })
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
