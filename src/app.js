const express = require('express');
const mainRoutes = require('./routes/main')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

app.use('/', mainRoutes);

