const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, name }) {
  return (
    <Layout title={title} name={name}>
      <h1>ff</h1>
    </Layout>
  );
}

module.exports = MainPage;