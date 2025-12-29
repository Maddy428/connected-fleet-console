import { Router } from "express";

import { getEvents } from "../services/eventService";

const router = Router();

router.get("/", (req, res) => {
  const events = getEvents(req.query);
  res.json(events);
});

export default router;
