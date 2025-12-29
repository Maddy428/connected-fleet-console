import express from "express";
import cors from "cors";
import eventsRouter from "./routes/events";
import aggregatesRouter from "./routes/aggregates";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventsRouter);
app.use("/aggregates", aggregatesRouter);
