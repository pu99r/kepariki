const router = require('express').Router();
const MainPage = require('../components/MainPage');
const { User } = require('../db/models');
const { Theme } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const name = req.body.nameID;
    const findname = await User.findOne({ where: { name: name } });
    if (findname == null) {
      const result = await User.create({ name: name, score: 0 });
    }
    const ThemeAll = await Theme.findAll({ raw: true });
    res.send(
      res.renderComponent(MainPage, {
        title: 'Reg page',
        name: req.body.nameID,
        thems: ThemeAll
      })
    );
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
