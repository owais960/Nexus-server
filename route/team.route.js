import express from 'express';
import { getTeams, createTeam } from '../controller/team.controller.js';

const router = express.Router();

router.get("/", getTeams);
router.post("/", createTeam);

export default router;