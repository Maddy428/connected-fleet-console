import Database from "better-sqlite3";

export const db = new Database("src/data/events.db");

db.prepare(
  `
      CREATE TABLE ID NOT EXITS events(
        id TEXT PRIMARY KEY,
        timestamp TEXT,
        vehicleId TEXT,
        level TEXT,
        code TEXT,
        message TEXT
      )
    `
).run();
