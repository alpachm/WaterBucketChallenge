import { solveWaterJugProblem } from "./../controllers/solution.controller";
import express from "express";

const router = express.Router();

router.post("/", solveWaterJugProblem)

export default router;