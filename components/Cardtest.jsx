const React = require("react");
const Layout = require("./Layout");

function CardTest({ title, name, id, thems, themeqa, qustionid = 0 }) {
  return (
    <Layout title={title} name={name} met>
      <div class="card">
        <div class="card-header">{thems[id].name}</div>
        <div class="card-body">
          <h5 class="card-title">
            Текс вопроса: {themeqa[qustionid].question}
          </h5>
          <div>
            <form id="form" action="/main" method="post">
              <input
                name="answer"
                type="text"
                placeholder="Введите ответ: "
              ></input>
              <button type="submit" className="btn-next btn-primary">
                Узнать ответ
              </button>
              <button type="click" className="btn-next btn-primary">
                Next
              </button>
              <div>{themeqa[qustionid].answer}</div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
module.exports = CardTest;
