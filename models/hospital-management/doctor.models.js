import mongoose from 'mongoose';



const doctorSchema = new mongoose.Schema({
    name: {
        type:String,
        requreid: true,
    },
    Salary: {
        type: String,
        requried: true,

    },
    qualification: {
        type:String,
        requried: true
    },
    experience: {
        type:Number,
        default:0
    },
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        }
    ]
}, {timestapms:true})


export const Doctor = mongoose.model("Doctor", doctorSchema)