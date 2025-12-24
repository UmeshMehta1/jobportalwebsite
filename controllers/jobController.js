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
