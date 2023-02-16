const express = require('express');
const mainRoutes = require('./routes/main')
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

app.use('/', mainRoutes);

