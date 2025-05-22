const express = require("express");
const authmiddleware = require("../middlewares/authmiddleware");

//const Donor = require("../models/Donor"); // <-- Add this
//const Consumer = require("../models/Consumer"); // <-- Add this

const {
    createInventoryController,
    getInventoryController,
    getDonarsController,
    getHospitalController,
    getDonarsForHospitalController,
    getInventoryHospitalController,
    getHospitalForDonarController,
    getRecentInventoryController,
} = require("../controllers/inventoryController");



const router = express.Router();

// routes

// ADD INVENTORY || POST
router.post("/create-inventory", authmiddleware, createInventoryController)
router.get("/get-inventory", authmiddleware, getInventoryController)

//GET DONAR RECORDS
router.get("/get-donars", authmiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authmiddleware, getHospitalController);

//GET DONAR RECORDS FOR HOSPITAL
router.get("/get-donars-for-hospital", authmiddleware, getDonarsForHospitalController);

//GET HOSPITAL BLOOD RECORDS
router.post("/get-inventory-hospital", authmiddleware, getInventoryHospitalController);

//GET HOSPITAL RECORDS FOR DONAR
router.get("/get-hospitals-for-donar", authmiddleware, getHospitalForDonarController);

//GET RECENT BLOOD RECORDS
router.get("/get-recent-inventory", authmiddleware, getRecentInventoryController);

module.exports = router;


// // SIMPLIFIED DONOR REGISTRATION + CONSUMER MATCHING
// router.post("/donate", async (req, res) => {
//   try {
//     const { name, bloodType, email, ...otherDetails } = req.body;

//     const donor = new Donor({
//       name,
//       bloodType,
//       email,
//       ...otherDetails,
//       donatedAt: new Date(),
//     });

//     const savedDonor = await donor.save();

//     // Find consumer with matching blood type and notify
//     const consumer = await Consumer.findOne({
//       bloodType: donor.bloodType,
//       isNotified: false,
//     }).sort({ requestDate: 1 });

//     let notificationMessage;

//     if (consumer) {
//       consumer.isNotified = true;
//       await consumer.save();
//       notificationMessage = `📩 Notification: ${consumer.email} matched with donor ${donor.name}`;
//     } else {
//       notificationMessage = "No matching consumer found.";
//     }

//     res.status(201).json({
//       message: "✅ Donor registered successfully.",
//       notification: notificationMessage,
//     });
//   } catch (error) {
//     console.error("Error in /donate:", error);
//     res.status(500).json({ error: "Server error during donation." });
//   }
// });
