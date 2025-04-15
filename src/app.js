const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const exphbs = require('express-handlebars');
const path = require('path')
const route = require('./resources/routes')

app.use(express.urlencoded({
    extended: true
}
));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

console.log('Views directory:', path.join(__dirname, 'resources/views'));
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
