import Match from "../model/match.model.js";

// Add this create function
export const createTournament = async (req, res) => {
  const newTournament = new Match(req.body);
  try {
    await newTournament.save();
    res.status(201).json(newTournament);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Keep existing getMatch function
export const getMatch = async(req, res) => {
  try {
    const match = await Match.find().sort({ createdAt: -1 });
    res.status(200).json(match);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};