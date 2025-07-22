import Team from "../model/team.model.js";

export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });
    res.status(200).json(teams);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const createTeam = async (req, res) => {
  try {
    const teamData = req.body;
    const newTeam = new Team(teamData);
    const savedTeam = await newTeam.save();
    res.status(201).json(savedTeam);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: error.message });
  }
};