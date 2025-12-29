export interface Event {
  id: string;
  timestamp: string;
  vehicleId: string;
  level: "INFO" | "WARN" | "ERROR";
  code: string;
  message: string;
}
