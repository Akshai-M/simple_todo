import mongoose from 'mongoose';


const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    diagonsedWith: {
        type: String,
        requried: true
    },
    address: {
        type: String,
        requried: true
    },
    age: {
        type: Number,
        requried: true
    },
    bloodGroup: {
        type: String,
        requried: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        requried: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, { timestapms: true })


export const Patient = mongoose.model("Patient", patientSchema)