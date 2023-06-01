const router = require("express").Router();
const MainPageReg = require("../components/MainPageReg");

router.get("/", (req, res) => {
  try {
    res.send(res.renderComponent(MainPageReg, { title: "Reg page" }));
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
