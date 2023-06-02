const router = require("express").Router();
const MainPage = require("../components/MainPage");
const { User } = require("../db/models");
const { Theme } = require("../db/models");
const { QuestionAnswer } = require("../db/models");
const CardTest = require("../components/Cardtest");

router.post("/", async (req, res) => {
  try {
    let user;
    const name = req.body.nameID;
    user = await User.findOne({ where: { name: name } });
    if (!user) {
      user = await User.create({ name: name, score: 0 });
    }
    const ThemeAll = await Theme.findAll({ raw: true });

    res.app.locals.name = user.name;
    res.send(
      res.renderComponent(MainPage, {
        title: "Reg page",
        thems: ThemeAll,
      })
    );
  } catch ({ message }) {
    res.json(message);
  }
});



module.exports = router;
