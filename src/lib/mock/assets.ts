export interface Asset {
  id: string;
  estateId: string;
  parcelId?: string;
  name: string;
  type: "building" | "infrastructure" | "equipment" | "utility";
  category: string;
  status: "operational" | "maintenance" | "inactive" | "damaged";
  condition: "excellent" | "good" | "fair" | "poor";
  value: number;
  installedDate: string;
  lastInspection?: string;
  nextMaintenance?: string;
  location?: string;
}

export const assets: Asset[] = [
  // Buildings
  { id: "ast-001", estateId: "est-001", parcelId: "par-001", name: "Main Office Building", type: "building", category: "Commercial", status: "operational", condition: "excellent", value: 45000000, installedDate: "2020-05-15", lastInspection: "2024-02-10", nextMaintenance: "2024-08-15" },
  { id: "ast-002", estateId: "est-001", parcelId: "par-002", name: "Parking Complex", type: "building", category: "Parking", status: "operational", condition: "good", value: 28000000, installedDate: "2021-03-20", lastInspection: "2024-01-05", nextMaintenance: "2024-07-20" },
  { id: "ast-003", estateId: "est-002", parcelId: "par-004", name: "Residential Villa A", type: "building", category: "Residential", status: "operational", condition: "excellent", value: 35000000, installedDate: "2019-11-10", lastInspection: "2024-03-01", nextMaintenance: "2024-09-10" },
  { id: "ast-004", estateId: "est-002", parcelId: "par-005", name: "Residential Villa B", type: "building", category: "Residential", status: "operational", condition: "good", value: 32000000, installedDate: "2020-02-18", lastInspection: "2024-02-15", nextMaintenance: "2024-08-18" },
  { id: "ast-005", estateId: "est-003", parcelId: "par-007", name: "Heritage Building", type: "building", category: "Heritage", status: "operational", condition: "fair", value: 55000000, installedDate: "1850-01-01", lastInspection: "2024-01-20", nextMaintenance: "2024-06-20" },
  
  // Infrastructure
  { id: "ast-006", estateId: "est-001", name: "Main Access Road", type: "infrastructure", category: "Road", status: "operational", condition: "good", value: 12000000, installedDate: "2020-01-10", lastInspection: "2024-02-28", nextMaintenance: "2024-10-10" },
  { id: "ast-007", estateId: "est-004", name: "Beachfront Walkway", type: "infrastructure", category: "Walkway", status: "operational", condition: "excellent", value: 8500000, installedDate: "2023-09-05", lastInspection: "2024-03-10", nextMaintenance: "2024-09-05" },
  { id: "ast-008", estateId: "est-005", name: "Tea Processing Factory", type: "building", category: "Industrial", status: "operational", condition: "good", value: 125000000, installedDate: "2018-06-20", lastInspection: "2024-01-15", nextMaintenance: "2024-07-20" },
  { id: "ast-009", estateId: "est-005", name: "Factory Access Road", type: "infrastructure", category: "Road", status: "operational", condition: "fair", value: 15000000, installedDate: "2018-05-10", lastInspection: "2024-02-05", nextMaintenance: "2024-08-10" },
  
  // Utilities
  { id: "ast-010", estateId: "est-001", name: "Water Treatment Plant", type: "utility", category: "Water", status: "operational", condition: "excellent", value: 18000000, installedDate: "2020-04-12", lastInspection: "2024-03-05", nextMaintenance: "2024-09-12" },
  { id: "ast-011", estateId: "est-001", name: "Electrical Substation", type: "utility", category: "Power", status: "operational", condition: "good", value: 22000000, installedDate: "2020-03-25", lastInspection: "2024-02-20", nextMaintenance: "2024-08-25" },
  { id: "ast-012", estateId: "est-002", name: "Septic System", type: "utility", category: "Waste", status: "operational", condition: "good", value: 6500000, installedDate: "2019-10-15", lastInspection: "2024-01-10", nextMaintenance: "2024-07-15" },
  { id: "ast-013", estateId: "est-004", name: "Solar Power Array", type: "utility", category: "Power", status: "operational", condition: "excellent", value: 35000000, installedDate: "2023-10-20", lastInspection: "2024-03-15", nextMaintenance: "2024-09-20" },
  { id: "ast-014", estateId: "est-005", name: "Irrigation System", type: "infrastructure", category: "Water", status: "operational", condition: "good", value: 28000000, installedDate: "2018-08-30", lastInspection: "2024-02-10", nextMaintenance: "2024-08-30" },
  
  // Equipment
  { id: "ast-015", estateId: "est-005", name: "Tea Harvester #1", type: "equipment", category: "Agricultural", status: "operational", condition: "good", value: 8500000, installedDate: "2021-05-10", lastInspection: "2024-01-25", nextMaintenance: "2024-07-10" },
  { id: "ast-016", estateId: "est-005", name: "Tea Harvester #2", type: "equipment", category: "Agricultural", status: "maintenance", condition: "fair", value: 7500000, installedDate: "2020-11-15", lastInspection: "2024-02-28", nextMaintenance: "2024-04-15" },
  { id: "ast-017", estateId: "est-009", name: "Mining Excavator", type: "equipment", category: "Mining", status: "operational", condition: "good", value: 45000000, installedDate: "2022-03-20", lastInspection: "2024-02-15", nextMaintenance: "2024-08-20" },
  { id: "ast-018", estateId: "est-010", name: "Cargo Crane", type: "equipment", category: "Port", status: "operational", condition: "excellent", value: 65000000, installedDate: "2023-06-10", lastInspection: "2024-03-01", nextMaintenance: "2024-09-10" },
];

