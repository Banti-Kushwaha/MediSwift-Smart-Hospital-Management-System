import app from "./app.js";
import cloudinary from "cloudinary";
// import { User } from "./models/userSchema.js";
// const createAdmin = async () => {
//   const existingAdmin = await User.findOne({ email: "admin@gmail.com" });

//   if (!existingAdmin) {
//     await User.create({
//       firstName: "admin",
//       lastName: "admin",
//       email: "admin@gmail.com",
//       phone: "9999999999",
//       nic: "123456789012",
//       dob: "2000-01-01",
//       gender: "Male",
//       password: "admin1234",
//       role: "Admin",
//     });

//     console.log("Admin created successfully");
//   } else {
//     console.log("Admin already exists");
//   }
// };

// import { Appointment } from "./models/appointmentSchema.js";

// const createFakeAppointments = async () => {
//   try {
//     const doctor = await User.findOne({ role: "Doctor" });
//     const patient = await User.findOne({ role: "Patient" });

//     if (!doctor || !patient) {
//       console.log("Doctor or Patient not found");
//       return;
//     }

//     const existingAppointment = await Appointment.findOne({
//       email: "karan.patel@gmail.com",
//     });

//     if (!existingAppointment) {
//       await Appointment.create({
//         firstName: "Karan",
//         lastName: "Patel",
//         email: "karan.patel@gmail.com",
//         phone: "93456789012",
//         nic: "3456789012345",
//         dob: "1995-11-10",
//         gender: "Male",
//         appointment_date: "2026-04-01",
//         department: doctor.doctorDepartment,
//         doctor: {
//           firstName: doctor.firstName,
//           lastName: doctor.lastName,
//         },
//         hasVisited: false,
//         address: "Madurai, Tamil Nadu",
//         doctorId: doctor._id,
//         patientId: patient._id,
//       });

//       console.log("Fake Appointment Created Successfully");
//     } else {
//       console.log("Fake Appointment Already Exists");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  // await createAdmin();
  // await createFakeAppointments();
});
