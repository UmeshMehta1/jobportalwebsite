const applicationModel = require("../model/applicationModel");
const jobModel = require("../model/JobModel");
const userModel = require("../model/authModel");

//apply for a job
const applyForJob = async(req,res)=>{
    try{
        const jobId = req.params.id;
        const userId = req.user._id;
        // const {status} = req.body;

        // if(!status){
        //     return res.status(400).json({message:"Status is required"});
        // }

        //check if job exists
        const job = await jobModel.findOne({_id: jobId});
        console.log("job",job)

        
        if(!job){
            return res.status(404).json({message:"Job not found"});
        }

        //check if user has already applied for the job
        const alreadyApplied = await applicationModel.findOne({JobId: jobId, UserId: userId});

        if(alreadyApplied){
            return res.status(409).json({message:"You have already applied for this job"});
        }     

        //create application
        const application = await applicationModel.create({
            JobId: jobId,
            UserId: userId,
        });

        return res.status(201).json({
            message:"Applied for job successfully",
            data:application
        });

    }catch(error){
        return res.status(500).json({message:"Something went wrong", error: error.message});
    }
}

exports.applyForJob = applyForJob;



// //get all applications for a user
// const getUserApplications = async(req,res)=>{
//     try{
//         const userId = req.user._id;

//         const applications = await applicationModel.find({UserId: userId})
//             .populate("JobId")
//             .populate("UserId","username email");

//         return res.status(200).json({
//             message:"Applications fetched successfully",
//             data:applications
//         });

//     }catch(error){
//         return res.status(500).json({message:"Something went wrong", error: error.message});
//     }
// }

// exports.getUserApplications = getUserApplications;

// //get all applications for a job (for job provider)
// const getJobApplications = async(req,res)=>{
//     try{
//         const jobId = req.params.id;

//         const applications = await applicationModel.find({JobId: jobId})
//             .populate("JobId")
//             .populate("UserId","username email");
//         return res.status(200).json({
//             message:"Applications fetched successfully",
//             data:applications
//         });             
//     }catch(error){
//         return res.status(500).json({message:"Something went wrong", error: error.message});
//     }
// }

// exports.getJobApplications = getJobApplications;