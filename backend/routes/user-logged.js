const router = require("express").Router();
const product = require('../controller/product.controller');

// admin route
router.get("/", (req, res) => {
    res.json({
        error: null,
        data: {
            title: "My dashboard",
            content: "dashboard content",
            user: req.user,
        },
    });
});


router.post('/product', product.create);

router.put('/product/:Id', product.update);

router.delete('/product/:Id', product.delete);



module.exports = router;