const Router = require("express").Router();

const {applyJob} = require("../controllers/applicationController");
const isAuthenticated = require("../middleware/isAut");
const restrictTo = require("../middleware/resrictTo");

Router.post("/apply/:jobId", isAuthenticated, restrictTo("jobseeker"), applyJob);

module.exports = Router;