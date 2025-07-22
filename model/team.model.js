import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  preferredTime: { type: String, required: true },
  preferredDays: { type: [String], required: true },
  skillLevel: { type: String, required: true },
  contactPhone: { type: String, required: true },  // Changed from contactNumber
  contactEmail: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  captain: { type: String, required: true },
  owner: { type: String, required: true },
  sport: { type: String, required: true, default: "football" },
  logo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Team = mongoose.model("Team", teamSchema);

export default Team;