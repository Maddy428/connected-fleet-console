import express from "express";
import cors from "cors";
import eventsRouter from "./routes/events";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventsRouter);
