class SiteController {

    index(req, res) {
        res.render('home');
    }

    show(req, res) {
        res.send('aaa!!!');
    }
}

module.exports = new SiteController;