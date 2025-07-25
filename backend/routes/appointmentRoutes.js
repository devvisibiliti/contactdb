import express from 'express';
import Appointment from '../models/Appointment.js';
const router = express.Router();

// Create Appointment
router.post('/', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    const saved = await newAppointment.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get All Appointments (Admin panel)
// router.get('/', async (req, res) => {
//   try {
//     const appointments = await Appointment.find().sort({ createdAt: -1 });
//     res.json(appointments);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch appointments' });
//   }
// });

export default router;