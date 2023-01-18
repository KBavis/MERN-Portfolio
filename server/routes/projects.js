var express = require("express");
var router = express.Router();
const { getProjects } = require("../controllers/projectController");

router.get("/", getProjects);

module.exports = router;
