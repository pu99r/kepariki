const React = require("react");
const Layout = require("./Layout");

function MainPageReg({ title }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
      </head>
      <body>
        <form action="/main" method="POST">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label namereg">
              Как Вас зовут?
            </label>
            <input
              type="text"
              name="nameID"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </div>
        </form>
      </body>
    </html>
  );
}
module.exports = MainPageReg;
