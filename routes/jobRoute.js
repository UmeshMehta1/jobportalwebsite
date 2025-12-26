const { createJob, getAllJobs, getSingleJob, updateJob } = require("../controllers/jobController");
const isAuthenticated = require("../middleware/isAut");
const restrictTo = require("../middleware/resrictTo");

const Router = require("express").Router();

Router.post("/postjob", isAuthenticated, restrictTo("jobprovider"),createJob)
Router.get("/getjobs", getAllJobs)
Router.get("/getjob/:id", getSingleJob)
Router.patch("/applyjob/:id", isAuthenticated, updateJob)

module.exports = Router;