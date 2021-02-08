const Product = require('../model/product');

exports.create = (req, res) => {

    // creat a notes
    const product = new Product({
        ProductName: req.body.ProductName,
        Brand: req.body.Brand,
        Price: req.body.Price,
        Category: req.user.Category
    });

    // Save product in database
    product.save()
        .then(data => {
            res.send(product);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findAll = (req, res) => {
    Product.find()
        .then(product => {
            res.send(product);
            //console.log(product);
            // res.render('home', { product: product });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while"
            });
        });
};

exports.findOne = (req, res) => {
    Product.findById(req.params.Id)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.Id
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error retrieving Product with id " + req.params.Id
            });
        });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body.ProductName) {
        return res.status(400).send({
            message: "ProductName can not be empty"
        });
    }

    // Find note and update it with the request body
    Product.findByIdAndUpdate(req.params.Id, {
        ProductName: req.body.ProductName,
        Brand: req.body.Brand,
        Price: req.body.Price,
        Category: req.user.Category
        }, { product: true })
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.Id
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Error updating Product with id " + req.params.Id
            });
        });
};

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.Id)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.Id
                });
            }
            res.send({ message: "Product deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.Id
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.Id
            });
        });
};