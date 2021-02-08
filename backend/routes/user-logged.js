const router = require("express").Router();

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



module.exports = router;