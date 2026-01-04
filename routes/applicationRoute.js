const Router = require("express").Router();

const {applyForJob} = require("../controllers/applicationController");
const isAuthenticated = require("../middleware/isAut");
const restrictTo = require("../middleware/resrictTo");

Router.post("/apply/:id", isAuthenticated, restrictTo("jobseeker"), applyForJob);

module.exports = Router;