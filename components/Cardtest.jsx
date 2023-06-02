const React = require("react");
const Layout = require("./Layout");

function CardTest({ title, name, id, thems, themeqa, qustionid, score = 0 }) {
  return (
    <Layout title={title} name={name} met>
      <div class="card cardpp">
        <div class="card-header">{thems[id].name}</div>
        <div class="card-body">
          <div>Очки: {score}</div>
          <h5 class="card-title">
            Вопрос {qustionid + 1}: {themeqa[qustionid].question}
          </h5>
          <div>
            <form id="form" action="/theme" method="post">
              <input
                name="answer"
                type="text"
                placeholder="Введите ответ: "
              ></input>

              <button type="click" className="btn-next btn-primary">
                Next
              </button>
              <input name="id" type="hidden" value={id} />
              <input name="name" type="hidden" value={name} />
              <input
                name="rightanswer"
                type="hidden"
                value={themeqa[qustionid].answer}
              />
              <input name="questionid" type="hidden" value={qustionid} />
            </form>
            <div>
              <button type="submit" className="btn-next btn-primary poopa">
                Узнать ответ
              </button>
              <div className="rightname">{themeqa[qustionid].answer}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
module.exports = CardTest;
