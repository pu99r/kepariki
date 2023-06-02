const React = require("react");
const Layout = require("./Layout");

function MainPage({ title, name, score }) {
  return (
    <Layout title={title} name={name}>
      <div>Ваш счет:{score}</div>
      <button class="btn btn-primary">
        <a href={`./main`} style={{ textDecoration: "none", color: "black" }}>
          Вернуться домой
        </a>
      </button>
    </Layout>
  );
}

module.exports = MainPage;
