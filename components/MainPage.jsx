const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, name, thems }) {
  return (
    <Layout title={title} name={name}>
      <div>
        <button class="btn btn-primary">
          <a href={`./main/0`}style={{ textDecoration: 'none', color: 'black' }}>
            {thems[0].name}
          </a>
        </button>
        <button class="btn btn-primary">
          <a href={`./main/1`}style={{ textDecoration: 'none', color: 'black' }}>
            {thems[1].name}
          </a>
        </button>
        <button class="btn btn-primary">
          <a href={`./main/2`}style={{ textDecoration: 'none', color: 'black' }}>
            {thems[2].name}
          </a>
        </button>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
