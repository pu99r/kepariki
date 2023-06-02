require('@babel/register');
const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();
const PORT = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);

const mainregRoute = require('./routes/mainreg.routes');
const mainRoute = require('./routes/main.routes');
const themeRoute = require('./routes/theme.routes');

app.use('/', mainregRoute);
app.use('/main', mainRoute);
app.use('/theme', themeRoute);


app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту`);
});
