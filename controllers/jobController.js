const jobModel = require('../model/JobModel');

const createJob = async(req,res)=>{
    try{
        const {title,description,location,salary,company} = req.body;

        if(!title || !description || !location || !salary || !company){
            return res.status(400).json({message:"All fields are required"});
        }

        const newJob = await jobModel.create({
            title,
            description,
            location,
            salary,
            company,
            UserId: req.user._id
        });

        return res.status(201).json({
            message:"Job created successfully",
            data:newJob
        });

    }catch(error){
        return res.status(500).json({message:"Something went wrong", error: error.message});
    }   

}

exports.createJob = createJob;

//get all jobs

const getAllJobs = async(req,res)=>{
    try{
        const jobs = await jobModel.find().populate("UserId","username email");

        return res.status(200).json({
            message:"Jobs fetched successfully",
            data:jobs
        });

    }catch(error){
        return res.status(500).json({message:"Something went wrong", error: error.message});
    }
}

exports.getAllJobs = getAllJobs;

//get single job by id


const getSingleJob = async(req,res)=>{
    try{
        const jobId = req.params.id;

        const job = await jobModel.findById(jobId).populate("UserId","username email");

        if(!job){
            return res.status(404).json({message:"Job not found"});
        }

        return res.status(200).json({
            message:"Job fetched successfully",
            data:job
        });

    }catch(error){
        return res.status(500).json({message:"Something went wrong", error: error.message});
    }
}

exports.getSingleJob = getSingleJob;

//update job by id

const updateJob = async(req,res)=>{
    try{
        const jobId = req.params.id;
        const {title,description,location,salary,company} = req.body;

        const job = await jobModel.findById(jobId);

        if(!job){
            return res.status(404).json({message:"Job not found"});
        }

        if(job.UserId.toString() !== req.user._id.toString()){
            return res.status(403).json({message:"You are not authorized to update this job"});
        }

        // job.title = title || job.title;
        // job.description = description || job.description;
        // job.location = location || job.location;
        // job.salary = salary || job.salary;
        // job.company = company || job.company;

        // await job.save();

        // Alternatively, using findByIdAndUpdate
        
        const updatedJob = await jobModel.findByIdAndUpdate(jobId, {
            title,
            description,
            location,
            salary,
            company
        }, { new: true });

        return res.status(200).json({
            message:"Job updated successfully",
            data:updatedJob
        });

    }catch(error){
        return res.status(500).json({message:"Something went wrong", error: error.message});
    }
}

exports.updateJob = updateJob;