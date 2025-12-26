const { createJob, getAllJobs } = require("../controllers/jobController");
const isAuthenticated = require("../middleware/isAut");

const Router = require("express").Router();

Router.post("/postjob", isAuthenticated, createJob)
Router.get("/getjobs", getAllJobs)

module.exports = Router;