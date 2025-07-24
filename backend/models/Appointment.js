import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    date:String,
    time:String,
    reason:String,
    treatment:String,
    doctors:[String]
},{
    timestamps:true

}
)

export default mongoose.model('Appointment', appointmentSchema);