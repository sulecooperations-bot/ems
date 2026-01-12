export interface Inspection {
  id: string;
  estateId: string;
  assetId?: string;
  parcelId?: string;
  type: "routine" | "safety" | "compliance" | "pre-lease" | "post-maintenance";
  status: "scheduled" | "in-progress" | "completed" | "cancelled";
  scheduledDate: string;
  completedDate?: string;
  inspector: string;
  inspectorName: string;
  findings: string;
  score?: number;
  passed: boolean;
  recommendations?: string;
  nextInspectionDate?: string;
}

export const inspections: Inspection[] = [
  { id: "ins-001", estateId: "est-001", assetId: "ast-001", type: "routine", status: "completed", scheduledDate: "2024-02-10", completedDate: "2024-02-10", inspector: "insp-001", inspectorName: "Safety Team Alpha", findings: "All systems operational. Minor wear on HVAC filters.", score: 92, passed: true, recommendations: "Replace HVAC filters within 30 days", nextInspectionDate: "2024-05-10" },
  { id: "ins-002", estateId: "est-002", assetId: "ast-003", type: "safety", status: "completed", scheduledDate: "2024-03-01", completedDate: "2024-03-01", inspector: "insp-002", inspectorName: "Building Inspector", findings: "Roof leak identified. Electrical systems in good condition.", score: 78, passed: false, recommendations: "Urgent roof repair required", nextInspectionDate: "2024-04-01" },
  { id: "ins-003", estateId: "est-005", assetId: "ast-008", type: "compliance", status: "completed", scheduledDate: "2024-01-15", completedDate: "2024-01-15", inspector: "insp-003", inspectorName: "Industrial Compliance", findings: "Factory meets all safety and environmental standards.", score: 95, passed: true, recommendations: "Continue current maintenance schedule", nextInspectionDate: "2025-01-15" },
  { id: "ins-004", estateId: "est-003", assetId: "ast-005", type: "compliance", status: "in-progress", scheduledDate: "2024-03-20", inspector: "insp-004", inspectorName: "Heritage Conservation", findings: "Ongoing structural assessment", score: undefined, passed: false, recommendations: undefined },
  { id: "ins-005", estateId: "est-004", parcelId: "par-011", type: "pre-lease", status: "completed", scheduledDate: "2023-12-15", completedDate: "2023-12-15", inspector: "insp-001", inspectorName: "Safety Team Alpha", findings: "Property ready for lease. All systems functional.", score: 88, passed: true, recommendations: "Standard maintenance schedule applies", nextInspectionDate: "2024-12-15" },
  { id: "ins-006", estateId: "est-001", assetId: "ast-011", type: "safety", status: "scheduled", scheduledDate: "2024-04-20", inspector: "insp-005", inspectorName: "Electrical Safety", findings: "", score: undefined, passed: false },
  { id: "ins-007", estateId: "est-010", assetId: "ast-018", type: "routine", status: "completed", scheduledDate: "2024-03-05", completedDate: "2024-03-05", inspector: "insp-006", inspectorName: "Port Safety", findings: "Crane operational. All safety systems functional.", score: 96, passed: true, recommendations: "Continue monthly inspections", nextInspectionDate: "2024-04-05" },
  { id: "ins-008", estateId: "est-006", type: "compliance", status: "scheduled", scheduledDate: "2024-04-10", inspector: "insp-003", inspectorName: "Industrial Compliance", findings: "", score: undefined, passed: false },
];

