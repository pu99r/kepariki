const React = require("react");

function NavBar({ name }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Main
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cars">
          Cars
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://auto.ru/">
          Link
        </a>
      </li>
    </ul>
  );
}
module.exports = NavBar;
