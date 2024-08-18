import {Request, Response, NextFunction} from "express"
import { ExtendedRequest } from "interfaces/extended.interfaces";

const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

const waterJugSolver = (x: number, y: number, z: number): Array<any> | string => {
    if (z > Math.max(x, y) || z % gcd(x, y) !== 0) {
      return "No solution possible.";
    }
  
    let actions = [];
    let jugX = 0;
    let jugY = 0;
    let step = 1;
  
    while (jugX !== z && jugY !== z) {
      if (jugX === 0) {
        jugX = x;
        actions.push({ step: step++, bucketX: jugX, bucketY: jugY, action: "Fill bucket X" });
      } else if (jugY === y) {
        jugY = 0;
        actions.push({ step: step++, bucketX: jugX, bucketY: jugY, action: "Empty bucket Y" });
      } else {
        const transferAmount = Math.min(jugX, y - jugY);
        jugX -= transferAmount;
        jugY += transferAmount;
        actions.push({ step: step++, bucketX: jugX, bucketY: jugY, action: "Transfer from bucket X to Y" });
      }
  
      if (jugX === z || jugY === z) {
        actions.push({ step: step, bucketX: jugX, bucketY: jugY, action: "Solved" });
        break;
      }
    }
  
    return actions;
  };

export const solveWaterJugProblem = (req: Request, res: Response, next: NextFunction) => {
    const { x_capacity, y_capacity, z_amount_wanted }: ExtendedRequest = req.body;
  
    if (!x_capacity || !y_capacity || !z_amount_wanted) {
      return res.status(400).json({ error: "All fields (x_capacity, y_capacity, z_amount_wanted) are required." });
    }
  
    const x = x_capacity;
    const y = y_capacity;
    const z = z_amount_wanted;
  
    if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <= 0) {
      return res.status(400).json({ error: "Invalid input values. X, Y, and Z must be positive integers." });
    }
  
    const result = waterJugSolver(x, y, z);
  
    if (typeof result === "string") {
      return res.status(200).json({ message: result });
    }
  
    return res.status(200).json({ solution: result });
  };