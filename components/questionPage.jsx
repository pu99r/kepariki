const React = require("react");
const Layout = require('./Layout');

function QuestionPage({ title, name }) {
  return (
    <Layout title={title} name={name}>
      <div class="card">
        <div class="card-header">
          Название темы
        </div>
        <div class="card-body"> 
          <h5 class="card-title">Текс вопроса: </h5>
          <div>
            <form id="form" action='#' method='get'>
              <input name="answer" type='text' placeholder='Введите ответ: '></input>
              <button type="submit" className="btn-check btn-primary">Узнать ответ</button>
              <button type="click" className="btn-next btn-primary">Next</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = QuestionPage;