export interface WorkOrder {
  id: string;
  estateId: string;
  assetId?: string;
  parcelId?: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "assigned" | "in-progress" | "completed" | "cancelled";
  category: "maintenance" | "repair" | "inspection" | "emergency" | "upgrade";
  assignedTo?: string;
  assignedToName?: string;
  reportedBy: string;
  reportedDate: string;
  dueDate: string;
  completedDate?: string;
  estimatedCost: number;
  actualCost?: number;
  slaHours: number;
  slaStatus: "on-time" | "at-risk" | "breached";
}

export const workOrders: WorkOrder[] = [
  { id: "wo-001", estateId: "est-001", assetId: "ast-001", title: "AC System Maintenance", description: "Quarterly maintenance for main office building AC system", priority: "medium", status: "completed", category: "maintenance", assignedTo: "tech-001", assignedToName: "John Silva", reportedBy: "Facility Manager", reportedDate: "2024-03-01", dueDate: "2024-03-15", completedDate: "2024-03-12", estimatedCost: 45000, actualCost: 42000, slaHours: 336, slaStatus: "on-time" },
  { id: "wo-002", estateId: "est-002", assetId: "ast-003", title: "Roof Leak Repair", description: "Fix leak in residential villa A roof", priority: "high", status: "in-progress", category: "repair", assignedTo: "tech-002", assignedToName: "Kamal Perera", reportedBy: "Tenant", reportedDate: "2024-03-18", dueDate: "2024-03-25", estimatedCost: 85000, slaHours: 168, slaStatus: "at-risk" },
  { id: "wo-003", estateId: "est-005", assetId: "ast-016", title: "Tea Harvester #2 Repair", description: "Hydraulic system failure in harvester", priority: "urgent", status: "assigned", category: "repair", assignedTo: "tech-003", assignedToName: "Nimal Fernando", reportedBy: "Estate Manager", reportedDate: "2024-03-20", dueDate: "2024-03-22", estimatedCost: 125000, slaHours: 48, slaStatus: "at-risk" },
  { id: "wo-004", estateId: "est-001", assetId: "ast-010", title: "Water Treatment Plant Inspection", description: "Annual inspection and certification", priority: "high", status: "open", category: "inspection", reportedBy: "Compliance Officer", reportedDate: "2024-03-15", dueDate: "2024-04-15", estimatedCost: 95000, slaHours: 720, slaStatus: "on-time" },
  { id: "wo-005", estateId: "est-004", title: "Beachfront Erosion Assessment", description: "Assess and address beachfront erosion", priority: "medium", status: "open", category: "inspection", reportedBy: "Estate Manager", reportedDate: "2024-03-10", dueDate: "2024-04-10", estimatedCost: 150000, slaHours: 720, slaStatus: "on-time" },
  { id: "wo-006", estateId: "est-003", assetId: "ast-005", title: "Heritage Building Structural Assessment", description: "Comprehensive structural assessment for heritage building", priority: "high", status: "in-progress", category: "inspection", assignedTo: "tech-004", assignedToName: "Architect Team", reportedBy: "Heritage Trust", reportedDate: "2024-02-20", dueDate: "2024-04-20", estimatedCost: 250000, slaHours: 1440, slaStatus: "on-time" },
  { id: "wo-007", estateId: "est-001", assetId: "ast-002", title: "Parking Complex Lighting Upgrade", description: "Upgrade to LED lighting system", priority: "low", status: "completed", category: "upgrade", assignedTo: "tech-001", assignedToName: "John Silva", reportedBy: "Facility Manager", reportedDate: "2024-02-15", dueDate: "2024-03-15", completedDate: "2024-03-10", estimatedCost: 180000, actualCost: 175000, slaHours: 720, slaStatus: "on-time" },
  { id: "wo-008", estateId: "est-009", assetId: "ast-017", title: "Mining Excavator Service", description: "Routine service and parts replacement", priority: "medium", status: "assigned", category: "maintenance", assignedTo: "tech-005", assignedToName: "Equipment Specialist", reportedBy: "Mining Manager", reportedDate: "2024-03-12", dueDate: "2024-03-26", estimatedCost: 95000, slaHours: 336, slaStatus: "on-time" },
  { id: "wo-009", estateId: "est-004", assetId: "ast-013", title: "Solar Panel Cleaning", description: "Quarterly cleaning of solar power array", priority: "low", status: "open", category: "maintenance", reportedBy: "Estate Manager", reportedDate: "2024-03-20", dueDate: "2024-04-05", estimatedCost: 35000, slaHours: 360, slaStatus: "on-time" },
  { id: "wo-010", estateId: "est-010", assetId: "ast-018", title: "Cargo Crane Safety Inspection", description: "Monthly safety inspection and certification", priority: "high", status: "completed", category: "inspection", assignedTo: "tech-006", assignedToName: "Safety Inspector", reportedBy: "Port Manager", reportedDate: "2024-03-01", dueDate: "2024-03-08", completedDate: "2024-03-05", estimatedCost: 55000, actualCost: 55000, slaHours: 168, slaStatus: "on-time" },
];

