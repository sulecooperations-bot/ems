export interface Invoice {
  id: string;
  estateId?: string;
  contractId?: string;
  clientId: string;
  clientName: string;
  type: "rent" | "service" | "maintenance" | "penalty" | "other";
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  amount: number;
  dueDate: string;
  issuedDate: string;
  paidDate?: string;
  description: string;
  lineItems: { description: string; amount: number }[];
}

export interface Payment {
  id: string;
  invoiceId: string;
  clientId: string;
  clientName: string;
  amount: number;
  method: "bank_transfer" | "cheque" | "cash" | "card" | "online";
  paymentDate: string;
  reference: string;
  status: "pending" | "confirmed" | "failed";
  notes?: string;
}

export const invoices: Invoice[] = [
  { id: "inv-001", estateId: "est-001", contractId: "con-001", clientId: "client-011", clientName: "Tech Solutions Ltd", type: "rent", status: "paid", amount: 2500000, dueDate: "2024-03-05", issuedDate: "2024-02-25", paidDate: "2024-03-02", description: "Monthly lease payment - March 2024", lineItems: [{ description: "Office Space Lease", amount: 2500000 }] },
  { id: "inv-002", estateId: "est-001", contractId: "con-002", clientId: "client-012", clientName: "Global Finance Corp", type: "rent", status: "paid", amount: 2200000, dueDate: "2024-03-05", issuedDate: "2024-02-25", paidDate: "2024-03-01", description: "Monthly lease payment - March 2024", lineItems: [{ description: "Office Space Lease", amount: 2200000 }] },
  { id: "inv-003", estateId: "est-002", contractId: "con-003", clientId: "client-013", clientName: "Dr. Perera", type: "rent", status: "paid", amount: 180000, dueDate: "2024-03-05", issuedDate: "2024-02-25", paidDate: "2024-03-03", description: "Monthly rental payment - March 2024", lineItems: [{ description: "Residential Rental", amount: 180000 }] },
  { id: "inv-004", estateId: "est-002", contractId: "con-004", clientId: "client-014", clientName: "Fernando Family", type: "rent", status: "paid", amount: 200000, dueDate: "2024-03-05", issuedDate: "2024-02-25", paidDate: "2024-03-04", description: "Monthly rental payment - March 2024", lineItems: [{ description: "Residential Rental", amount: 200000 }] },
  { id: "inv-005", estateId: "est-003", contractId: "con-005", clientId: "client-015", clientName: "Heritage Boutique Hotel", type: "rent", status: "paid", amount: 3500000, dueDate: "2024-03-05", issuedDate: "2024-02-25", paidDate: "2024-03-01", description: "Monthly lease payment - March 2024", lineItems: [{ description: "Heritage Property Lease", amount: 3500000 }] },
  { id: "inv-006", estateId: "est-001", assetId: "ast-001", clientId: "client-001", clientName: "Premier Holdings Ltd", type: "maintenance", status: "sent", amount: 42000, dueDate: "2024-04-15", issuedDate: "2024-03-12", description: "AC System Maintenance - March 2024", lineItems: [{ description: "AC Maintenance Service", amount: 42000 }] },
  { id: "inv-007", estateId: "est-004", contractId: "con-006", clientId: "client-016", clientName: "Resort Development", type: "rent", status: "sent", amount: 4200000, dueDate: "2024-04-05", issuedDate: "2024-03-25", description: "Monthly lease payment - April 2024", lineItems: [{ description: "Resort Development Lease", amount: 4200000 }] },
  { id: "inv-008", estateId: "est-006", contractId: "con-007", clientId: "client-017", clientName: "Eastern Trading Co", type: "rent", status: "overdue", amount: 1800000, dueDate: "2024-03-05", issuedDate: "2024-02-25", description: "Monthly lease payment - March 2024", lineItems: [{ description: "Commercial Space Lease", amount: 1800000 }] },
  { id: "inv-009", estateId: "est-010", contractId: "con-010", clientId: "client-020", clientName: "Port Logistics", type: "rent", status: "sent", amount: 3200000, dueDate: "2024-04-05", issuedDate: "2024-03-25", description: "Monthly lease payment - April 2024", lineItems: [{ description: "Port Operations Lease", amount: 3200000 }] },
  { id: "inv-010", estateId: "est-005", assetId: "ast-016", clientId: "client-005", clientName: "Highland Estates", type: "maintenance", status: "draft", amount: 125000, dueDate: "2024-04-22", issuedDate: "2024-03-20", description: "Tea Harvester #2 Repair", lineItems: [{ description: "Hydraulic System Repair", amount: 125000 }] },
];

export const payments: Payment[] = [
  { id: "pay-001", invoiceId: "inv-001", clientId: "client-011", clientName: "Tech Solutions Ltd", amount: 2500000, method: "bank_transfer", paymentDate: "2024-03-02", reference: "TXN-2024-0302-001", status: "confirmed" },
  { id: "pay-002", invoiceId: "inv-002", clientId: "client-012", clientName: "Global Finance Corp", amount: 2200000, method: "bank_transfer", paymentDate: "2024-03-01", reference: "TXN-2024-0301-002", status: "confirmed" },
  { id: "pay-003", invoiceId: "inv-003", clientId: "client-013", clientName: "Dr. Perera", amount: 180000, method: "bank_transfer", paymentDate: "2024-03-03", reference: "TXN-2024-0303-003", status: "confirmed" },
  { id: "pay-004", invoiceId: "inv-004", clientId: "client-014", clientName: "Fernando Family", amount: 200000, method: "bank_transfer", paymentDate: "2024-03-04", reference: "TXN-2024-0304-004", status: "confirmed" },
  { id: "pay-005", invoiceId: "inv-005", clientId: "client-015", clientName: "Heritage Boutique Hotel", amount: 3500000, method: "bank_transfer", paymentDate: "2024-03-01", reference: "TXN-2024-0301-005", status: "confirmed" },
];

