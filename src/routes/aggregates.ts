import { Router } from "express";
import { db } from "../db";

const router = Router();

router.get("/errors-per-vechicle", (req, res) => {
  const result = db
    .prepare(
      `
        SELECT vehicleId, COUNT(*) as count FROM events WHERE level = 'ERROR' GROUP BY vehicleID    
    `
    )
    .all();
  res.json(result);
});

export default router;
