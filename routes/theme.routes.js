const router = require("express").Router();
const { Theme } = require("../db/models");
const { QuestionAnswer } = require("../db/models");
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
      })
    );
  } catch ({ message }) {
    res.json(message);
  }
});
module.exports = router;
