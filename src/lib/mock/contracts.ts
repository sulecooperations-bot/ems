export interface Contract {
  id: string;
  estateId: string;
  parcelId?: string;
  clientId: string;
  clientName: string;
  type: "lease" | "rental" | "management" | "service";
  status: "active" | "expired" | "pending" | "terminated";
  startDate: string;
  endDate: string;
  monthlyAmount: number;
  totalAmount: number;
  terms: string;
  autoRenew: boolean;
  createdAt: string;
}

export const contracts: Contract[] = [
  { id: "con-001", estateId: "est-001", parcelId: "par-001", clientId: "client-011", clientName: "Tech Solutions Ltd", type: "lease", status: "active", startDate: "2023-06-01", endDate: "2026-05-31", monthlyAmount: 2500000, totalAmount: 90000000, terms: "3-year commercial lease with renewal option", autoRenew: true, createdAt: "2023-05-15" },
  { id: "con-002", estateId: "est-001", parcelId: "par-002", clientId: "client-012", clientName: "Global Finance Corp", type: "lease", status: "active", startDate: "2023-07-01", endDate: "2026-06-30", monthlyAmount: 2200000, totalAmount: 79200000, terms: "3-year commercial lease", autoRenew: true, createdAt: "2023-06-20" },
  { id: "con-003", estateId: "est-002", parcelId: "par-004", clientId: "client-013", clientName: "Dr. Perera", type: "rental", status: "active", startDate: "2023-05-01", endDate: "2025-04-30", monthlyAmount: 180000, totalAmount: 4320000, terms: "2-year residential rental", autoRenew: false, createdAt: "2023-04-15" },
  { id: "con-004", estateId: "est-002", parcelId: "par-005", clientId: "client-014", clientName: "Fernando Family", type: "rental", status: "active", startDate: "2023-08-01", endDate: "2025-07-31", monthlyAmount: 200000, totalAmount: 4800000, terms: "2-year residential rental", autoRenew: false, createdAt: "2023-07-20" },
  { id: "con-005", estateId: "est-003", parcelId: "par-007", clientId: "client-015", clientName: "Heritage Boutique Hotel", type: "lease", status: "active", startDate: "2023-09-01", endDate: "2028-08-31", monthlyAmount: 3500000, totalAmount: 210000000, terms: "5-year commercial lease for heritage property", autoRenew: true, createdAt: "2023-08-15" },
  { id: "con-006", estateId: "est-004", parcelId: "par-011", clientId: "client-016", clientName: "Resort Development", type: "lease", status: "active", startDate: "2024-01-01", endDate: "2029-12-31", monthlyAmount: 4200000, totalAmount: 252000000, terms: "5-year lease for resort development", autoRenew: true, createdAt: "2023-12-10" },
  { id: "con-007", estateId: "est-006", parcelId: "par-015", clientId: "client-017", clientName: "Eastern Trading Co", type: "lease", status: "active", startDate: "2023-10-01", endDate: "2026-09-30", monthlyAmount: 1800000, totalAmount: 64800000, terms: "3-year commercial lease", autoRenew: true, createdAt: "2023-09-20" },
  { id: "con-008", estateId: "est-007", parcelId: "par-018", clientId: "client-018", clientName: "Heritage Museum", type: "lease", status: "active", startDate: "2023-11-01", endDate: "2026-10-31", monthlyAmount: 1500000, totalAmount: 54000000, terms: "3-year lease for museum", autoRenew: true, createdAt: "2023-10-15" },
  { id: "con-009", estateId: "est-008", parcelId: "par-019", clientId: "client-019", clientName: "Northern Housing", type: "rental", status: "active", startDate: "2023-12-01", endDate: "2025-11-30", monthlyAmount: 250000, totalAmount: 6000000, terms: "2-year residential rental", autoRenew: false, createdAt: "2023-11-20" },
  { id: "con-010", estateId: "est-010", parcelId: "par-023", clientId: "client-020", clientName: "Port Logistics", type: "lease", status: "active", startDate: "2024-02-01", endDate: "2027-01-31", monthlyAmount: 3200000, totalAmount: 115200000, terms: "3-year commercial lease for port operations", autoRenew: true, createdAt: "2024-01-15" },
];

