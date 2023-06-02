const router = require("express").Router();
const { Theme } = require("../db/models");
const { QuestionAnswer } = require("../db/models");
const { User } = require("../db/models");
const CardTest = require("../components/Cardtest");

router.get("/:id", async (req, res) => {
  try {
    const ThemeAll = await Theme.findAll({ raw: true });
    const ThemeQA = await QuestionAnswer.findAll({ raw: true });

    const { id } = req.params;
    res.send(
      res.renderComponent(CardTest, {
        title: "Quiz",
        id: id,
        thems: ThemeAll,
        themeqa: ThemeQA,
        qustionid: 0,
      })
    );
  } catch ({ message }) {
    res.json(message);
  }
});

router.post("/", async (req, res) => {
  try {
    let count = Number(req.body.questionid) + 1
    const ThemeAll = await Theme.findAll({ raw: true });
    const ThemeQA = await QuestionAnswer.findAll({ raw: true });
    res.send(
      res.renderComponent(CardTest, {
        title: "Quiz",
        id: req.body.id,
        thems: ThemeAll,
        themeqa: ThemeQA,
        qustionid: count,
      })
    );
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
