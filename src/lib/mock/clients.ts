export interface Client {
  id: string;
  name: string;
  type: "owner" | "tenant" | "organization";
  email: string;
  phone: string;
  address?: string;
  status: "active" | "inactive";
  createdAt: string;
  estates?: string[];
  contracts?: string[];
}

export const clients: Client[] = [
  { id: "client-001", name: "Premier Holdings Ltd", type: "owner", email: "contact@premierholdings.lk", phone: "+94 11 234 5678", address: "123 Galle Road, Colombo 03", status: "active", createdAt: "2022-05-10", estates: ["est-001"] },
  { id: "client-002", name: "Heritage Properties", type: "owner", email: "info@heritageproperties.lk", phone: "+94 81 223 4567", address: "45 Temple Street, Kandy", status: "active", createdAt: "2021-11-20", estates: ["est-002"] },
  { id: "client-003", name: "Colonial Estates Group", type: "owner", email: "admin@colonialestates.lk", phone: "+94 91 222 3456", address: "12 Church Street, Galle", status: "active", createdAt: "2023-01-15", estates: ["est-003"] },
  { id: "client-004", name: "Coastal Ventures", type: "owner", email: "hello@coastalventures.lk", phone: "+94 31 223 4567", address: "Beach Road, Negombo", status: "active", createdAt: "2023-06-22", estates: ["est-004"] },
  { id: "client-005", name: "Highland Estates", type: "owner", email: "contact@highlandestates.lk", phone: "+94 52 222 3456", address: "Tea Estate Road, Nuwara Eliya", status: "active", createdAt: "2021-08-12", estates: ["est-005"] },
  { id: "client-006", name: "Eastern Properties", type: "owner", email: "info@easternproperties.lk", phone: "+94 65 222 3456", address: "Main Street, Batticaloa", status: "active", createdAt: "2023-05-05", estates: ["est-006"] },
  { id: "client-007", name: "Cultural Heritage Trust", type: "organization", email: "trust@culturalheritage.lk", phone: "+94 25 222 3456", address: "Heritage Square, Anuradhapura", status: "active", createdAt: "2022-12-18", estates: ["est-007"] },
  { id: "client-008", name: "Northern Holdings", type: "owner", email: "contact@northernholdings.lk", phone: "+94 21 222 3456", address: "Jaffna Town, Jaffna", status: "active", createdAt: "2023-04-14", estates: ["est-008"] },
  { id: "client-009", name: "Gemstone Enterprises", type: "owner", email: "info@gemstone.lk", phone: "+94 36 222 3456", address: "Gem Street, Ratnapura", status: "active", createdAt: "2023-08-30", estates: ["est-009"] },
  { id: "client-010", name: "Portside Developments", type: "owner", email: "hello@portside.lk", phone: "+94 26 222 3456", address: "Port Road, Trincomalee", status: "active", createdAt: "2023-02-08", estates: ["est-010"] },
  
  // Tenants
  { id: "client-011", name: "Tech Solutions Ltd", type: "tenant", email: "office@techsolutions.lk", phone: "+94 11 234 5679", status: "active", createdAt: "2023-06-10", contracts: ["con-001"] },
  { id: "client-012", name: "Global Finance Corp", type: "tenant", email: "contact@globalfinance.lk", phone: "+94 11 234 5680", status: "active", createdAt: "2023-07-15", contracts: ["con-002"] },
  { id: "client-013", name: "Dr. Perera", type: "tenant", email: "dr.perera@email.lk", phone: "+94 81 223 4568", status: "active", createdAt: "2023-05-20", contracts: ["con-003"] },
  { id: "client-014", name: "Fernando Family", type: "tenant", email: "fernando@email.lk", phone: "+94 81 223 4569", status: "active", createdAt: "2023-08-10", contracts: ["con-004"] },
  { id: "client-015", name: "Heritage Boutique Hotel", type: "tenant", email: "reservations@heritagehotel.lk", phone: "+94 91 222 3457", status: "active", createdAt: "2023-09-05", contracts: ["con-005"] },
];

