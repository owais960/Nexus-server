import mongoose from "mongoose";

const matchSchema = mongoose.Schema({
  title: String,
  category: String,
  playingSide: String,
  image: String,
  location: String,
  entryFees: String,
  winningPrize: String,
  rules: String,
  contactEmail: String,
  contactPhone: String,
  contactWhatsapp: String,
  startDate: Date,
  endDate: Date
});

const Match = mongoose.model("Match", matchSchema);
export default Match;