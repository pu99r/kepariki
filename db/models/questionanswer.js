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
        type: Sequelize.TEXT,
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      theme_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
