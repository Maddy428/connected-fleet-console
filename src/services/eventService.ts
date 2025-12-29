import { db } from "../db";

export function getEvents(filters: any) {
  let sql = "Select * from events where 1=1";

  const params: any[] = [];

  if (filters.vehicleId) {
    sql += " AND vehicleId = ?";
    params.push(filters.vehicleId);
  }

  if (filters.level) {
    sql += " AND level = ?";
    params.push(filters.level);
  }

  return db.prepare(sql).all(...params);
}
