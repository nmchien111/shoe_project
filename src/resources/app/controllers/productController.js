const { render } = require("sass");

class ProductController {

    index(req, res) {
        res.render('product');
    }

    show(req, res) {
        res.send('aaa!!!');
    }
}

module.exports = new ProductController;