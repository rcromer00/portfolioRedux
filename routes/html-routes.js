const path = require("path");
const router = require("express").Router();


router.get("/portfolio", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/portfolio.html"));
    console.log(_dirname, req);
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/contact.html"));
    console.log(_dirname, req);
});

router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
    console.log(_dirname, req);
});

module.exports = router;