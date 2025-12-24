const { createJob } = require("../controllers/jobController");
const isAuthenticated = require("../middleware/isAut");

const Router = require("express").Router();

Router.post("/postjob", isAuthenticated, createJob)

module.exports = Router;