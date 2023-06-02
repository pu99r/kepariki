"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionAnswer extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: "theme_id" });
    }
  }
  QuestionAnswer.init(
    {
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Themes",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "QuestionAnswer",
    }
  );
  return QuestionAnswer;
};
