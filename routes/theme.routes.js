const router = require("express").Router();
const { Theme } = require("../db/models");
const { QuestionAnswer } = require("../db/models");
const { User } = require("../db/models");
const CardTest = require("../components/Cardtest");
const Finish = require("../components/Finish");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let kk = +id + 1;
    const ThemeAll = await Theme.findAll({ raw: true });
    const ThemeQA = await QuestionAnswer.findAll({
      where: { theme_id: kk },
      raw: true,
    });
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
    const player = await User.findOne({
      where: { name: req.body.name },
      raw: true,
    });
    let score = player.score;
    if (req.body.rightanswer == req.body.answer) {
      score += 10;
      const playerUp = await User.update(
        { score },
        { where: { name: req.body.name }, raw: true }
      );
    }

    let count = Number(req.body.questionid) + 1;
    let kk = +req.body.id + 1;
    const ThemeAll = await Theme.findAll({ raw: true });
    const ThemeQA = await QuestionAnswer.findAll({
      where: { theme_id: kk },
      raw: true,
    });
    if (ThemeQA.length == count) {
      res.send(res.renderComponent(Finish, { score }));
    } else {
        res.send(
          res.renderComponent(CardTest, {
            title: "Quiz",
            id: req.body.id,
            thems: ThemeAll,
            themeqa: ThemeQA,
            qustionid: count,
            score: score
          })
        );

    }
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
