export interface Document {
  id: string;
  estateId?: string;
  parcelId?: string;
  assetId?: string;
  contractId?: string;
  title: string;
  type: "contract" | "inspection" | "maintenance" | "legal" | "financial" | "plan" | "certificate" | "other";
  category: string;
  fileType: "pdf" | "image" | "word" | "excel" | "other";
  size: number; // in bytes
  uploadedBy: string;
  uploadedDate: string;
  tags: string[];
  description?: string;
}

export const documents: Document[] = [
  { id: "doc-001", estateId: "est-001", contractId: "con-001", title: "Lease Agreement - Tech Solutions Ltd", type: "contract", category: "Legal", fileType: "pdf", size: 2456789, uploadedBy: "Legal Team", uploadedDate: "2023-05-15", tags: ["lease", "commercial", "active"] },
  { id: "doc-002", estateId: "est-001", assetId: "ast-001", title: "Building Inspection Report - Feb 2024", type: "inspection", category: "Safety", fileType: "pdf", size: 1234567, uploadedBy: "Safety Team Alpha", uploadedDate: "2024-02-10", tags: ["inspection", "safety", "building"] },
  { id: "doc-003", estateId: "est-002", assetId: "ast-003", title: "Roof Repair Work Order", type: "maintenance", category: "Maintenance", fileType: "pdf", size: 456789, uploadedBy: "Facility Manager", uploadedDate: "2024-03-18", tags: ["repair", "roof", "urgent"] },
  { id: "doc-004", estateId: "est-003", title: "Heritage Building Certificate", type: "certificate", category: "Legal", fileType: "pdf", size: 987654, uploadedBy: "Heritage Trust", uploadedDate: "2023-01-20", tags: ["heritage", "certificate", "legal"] },
  { id: "doc-005", estateId: "est-004", contractId: "con-006", title: "Resort Development Lease Agreement", type: "contract", category: "Legal", fileType: "pdf", size: 3456789, uploadedBy: "Legal Team", uploadedDate: "2023-12-10", tags: ["lease", "resort", "long-term"] },
  { id: "doc-006", estateId: "est-005", assetId: "ast-008", title: "Factory Compliance Certificate 2024", type: "certificate", category: "Compliance", fileType: "pdf", size: 1123456, uploadedBy: "Industrial Compliance", uploadedDate: "2024-01-15", tags: ["compliance", "factory", "certificate"] },
  { id: "doc-007", estateId: "est-001", title: "Estate Master Plan", type: "plan", category: "Planning", fileType: "image", size: 5678901, uploadedBy: "Planning Team", uploadedDate: "2020-01-10", tags: ["plan", "master-plan", "layout"] },
  { id: "doc-008", estateId: "est-002", contractId: "con-003", title: "Residential Rental Agreement - Dr. Perera", type: "contract", category: "Legal", fileType: "pdf", size: 876543, uploadedBy: "Legal Team", uploadedDate: "2023-04-15", tags: ["rental", "residential", "active"] },
  { id: "doc-009", estateId: "est-010", assetId: "ast-018", title: "Crane Safety Inspection - March 2024", type: "inspection", category: "Safety", fileType: "pdf", size: 2345678, uploadedBy: "Port Safety", uploadedDate: "2024-03-05", tags: ["inspection", "safety", "crane", "port"] },
  { id: "doc-010", estateId: "est-004", assetId: "ast-013", title: "Solar Array Installation Report", type: "maintenance", category: "Installation", fileType: "pdf", size: 3456789, uploadedBy: "Installation Team", uploadedDate: "2023-10-20", tags: ["solar", "installation", "renewable"] },
];

