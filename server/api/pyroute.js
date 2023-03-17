const router = require("express").Router();

module.exports = router;

router.use("/data", require("./data.js"));
