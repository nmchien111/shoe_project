const newProduct = require('./product')
const newSite = require('./site')
function route(app) {
    app.use('/product', newProduct);
    app.use('/home', newSite);
    app.get('/search', (req, res) => {
        res.render('search');
    });

    // app.get('/product', (req, res) => {
    //     res.render('product');
    // });
}

module.exports = route;