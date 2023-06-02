const React = require('react');
const Layout = require('./Layout');

function CardTest({ title, name, id }) {
  return (
    <Layout title={title} name={name}>
      <div>Card Test {id}</div>
    </Layout>
  );
}
module.exports = CardTest;
