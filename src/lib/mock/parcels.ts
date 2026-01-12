export interface Parcel {
  id: string;
  estateId: string;
  parcelNumber: string;
  area: number; // in square meters
  coordinates: { lat: number; lng: number };
  bbox: { minX: number; minY: number; maxX: number; maxY: number }; // for SVG rendering
  landUse: "residential" | "commercial" | "agricultural" | "industrial" | "mixed";
  status: "owned" | "leased" | "vacant";
  owner?: string;
  tenant?: string;
  value: number;
}

export const parcels: Parcel[] = [
  // Colombo Central Business Complex
  { id: "par-001", estateId: "est-001", parcelNumber: "CBC-001", area: 2500, coordinates: { lat: 6.9271, lng: 79.8612 }, bbox: { minX: 0.1, minY: 0.1, maxX: 0.3, maxY: 0.3 }, landUse: "commercial", status: "leased", tenant: "Tech Solutions Ltd", value: 125000000 },
  { id: "par-002", estateId: "est-001", parcelNumber: "CBC-002", area: 1800, coordinates: { lat: 6.9275, lng: 79.8615 }, bbox: { minX: 0.3, minY: 0.1, maxX: 0.5, maxY: 0.3 }, landUse: "commercial", status: "leased", tenant: "Global Finance Corp", value: 98000000 },
  { id: "par-003", estateId: "est-001", parcelNumber: "CBC-003", area: 3200, coordinates: { lat: 6.9278, lng: 79.8618 }, bbox: { minX: 0.1, minY: 0.3, maxX: 0.4, maxY: 0.6 }, landUse: "commercial", status: "owned", value: 165000000 },
  
  // Kandy Hillside Residential Estate
  { id: "par-004", estateId: "est-002", parcelNumber: "KHR-001", area: 1200, coordinates: { lat: 7.2906, lng: 80.6337 }, bbox: { minX: 0.2, minY: 0.2, maxX: 0.4, maxY: 0.4 }, landUse: "residential", status: "leased", tenant: "Dr. Perera", value: 45000000 },
  { id: "par-005", estateId: "est-002", parcelNumber: "KHR-002", area: 1500, coordinates: { lat: 7.2910, lng: 80.6340 }, bbox: { minX: 0.4, minY: 0.2, maxX: 0.6, maxY: 0.4 }, landUse: "residential", status: "leased", tenant: "Fernando Family", value: 52000000 },
  { id: "par-006", estateId: "est-002", parcelNumber: "KHR-003", area: 980, coordinates: { lat: 7.2914, lng: 80.6343 }, bbox: { minX: 0.2, minY: 0.4, maxX: 0.35, maxY: 0.6 }, landUse: "residential", status: "vacant", value: 38000000 },
  
  // Galle Fort Heritage Property
  { id: "par-007", estateId: "est-003", parcelNumber: "GFH-001", area: 850, coordinates: { lat: 6.0329, lng: 80.2170 }, bbox: { minX: 0.3, minY: 0.3, maxX: 0.5, maxY: 0.5 }, landUse: "mixed", status: "leased", tenant: "Heritage Boutique Hotel", value: 75000000 },
  { id: "par-008", estateId: "est-003", parcelNumber: "GFH-002", area: 620, coordinates: { lat: 6.0332, lng: 80.2173 }, bbox: { minX: 0.5, minY: 0.3, maxX: 0.65, maxY: 0.45 }, landUse: "commercial", status: "leased", tenant: "Art Gallery", value: 42000000 },
  
  // Negombo Beachfront Development
  { id: "par-009", estateId: "est-004", parcelNumber: "NBD-001", area: 4500, coordinates: { lat: 7.2083, lng: 79.8358 }, bbox: { minX: 0.1, minY: 0.1, maxX: 0.4, maxY: 0.4 }, landUse: "residential", status: "owned", value: 185000000 },
  { id: "par-010", estateId: "est-004", parcelNumber: "NBD-002", area: 3200, coordinates: { lat: 7.2087, lng: 79.8361 }, bbox: { minX: 0.4, minY: 0.1, maxX: 0.7, maxY: 0.4 }, landUse: "commercial", status: "vacant", value: 145000000 },
  { id: "par-011", estateId: "est-004", parcelNumber: "NBD-003", area: 2800, coordinates: { lat: 7.2091, lng: 79.8364 }, bbox: { minX: 0.1, minY: 0.4, maxX: 0.35, maxY: 0.7 }, landUse: "mixed", status: "leased", tenant: "Resort Development", value: 125000000 },
  
  // Nuwara Eliya Tea Estate
  { id: "par-012", estateId: "est-005", parcelNumber: "NTE-001", area: 125000, coordinates: { lat: 6.9497, lng: 80.7891 }, bbox: { minX: 0.1, minY: 0.1, maxX: 0.5, maxY: 0.5 }, landUse: "agricultural", status: "owned", value: 450000000 },
  { id: "par-013", estateId: "est-005", parcelNumber: "NTE-002", area: 98000, coordinates: { lat: 6.9505, lng: 80.7898 }, bbox: { minX: 0.5, minY: 0.1, maxX: 0.9, maxY: 0.5 }, landUse: "agricultural", status: "owned", value: 380000000 },
  { id: "par-014", estateId: "est-005", parcelNumber: "NTE-003", area: 45000, coordinates: { lat: 6.9513, lng: 80.7905 }, bbox: { minX: 0.1, minY: 0.5, maxX: 0.4, maxY: 0.9 }, landUse: "agricultural", status: "owned", value: 165000000 },
  
  // Batticaloa Commercial Hub
  { id: "par-015", estateId: "est-006", parcelNumber: "BCH-001", area: 2200, coordinates: { lat: 7.7172, lng: 81.7004 }, bbox: { minX: 0.2, minY: 0.2, maxX: 0.5, maxY: 0.5 }, landUse: "commercial", status: "leased", tenant: "Eastern Trading Co", value: 68000000 },
  { id: "par-016", estateId: "est-006", parcelNumber: "BCH-002", area: 1800, coordinates: { lat: 7.7176, lng: 81.7007 }, bbox: { minX: 0.5, minY: 0.2, maxX: 0.75, maxY: 0.5 }, landUse: "commercial", status: "vacant", value: 55000000 },
  
  // Anuradhapura Heritage Site
  { id: "par-017", estateId: "est-007", parcelNumber: "AHS-001", area: 1500, coordinates: { lat: 8.3114, lng: 80.4037 }, bbox: { minX: 0.25, minY: 0.25, maxX: 0.55, maxY: 0.55 }, landUse: "mixed", status: "owned", value: 95000000 },
  { id: "par-018", estateId: "est-007", parcelNumber: "AHS-002", area: 1100, coordinates: { lat: 8.3118, lng: 80.4040 }, bbox: { minX: 0.55, minY: 0.25, maxX: 0.75, maxY: 0.5 }, landUse: "residential", status: "leased", tenant: "Heritage Museum", value: 62000000 },
  
  // Jaffna Peninsula Estate
  { id: "par-019", estateId: "est-008", parcelNumber: "JPE-001", area: 3200, coordinates: { lat: 9.6615, lng: 80.0255 }, bbox: { minX: 0.15, minY: 0.15, maxX: 0.45, maxY: 0.45 }, landUse: "residential", status: "leased", tenant: "Northern Housing", value: 88000000 },
  { id: "par-020", estateId: "est-008", parcelNumber: "JPE-002", area: 2800, coordinates: { lat: 9.6619, lng: 80.0258 }, bbox: { minX: 0.45, minY: 0.15, maxX: 0.7, maxY: 0.45 }, landUse: "commercial", status: "vacant", value: 75000000 },
  
  // Ratnapura Gem Mining Estate
  { id: "par-021", estateId: "est-009", parcelNumber: "RGM-001", area: 85000, coordinates: { lat: 6.6828, lng: 80.4014 }, bbox: { minX: 0.1, minY: 0.1, maxX: 0.6, maxY: 0.6 }, landUse: "industrial", status: "owned", value: 320000000 },
  { id: "par-022", estateId: "est-009", parcelNumber: "RGM-002", area: 62000, coordinates: { lat: 6.6835, lng: 80.4021 }, bbox: { minX: 0.6, minY: 0.1, maxX: 0.95, maxY: 0.55 }, landUse: "industrial", status: "owned", value: 245000000 },
  
  // Trincomalee Portside Property
  { id: "par-023", estateId: "est-010", parcelNumber: "TPP-001", area: 2800, coordinates: { lat: 8.5874, lng: 81.2152 }, bbox: { minX: 0.2, minY: 0.2, maxX: 0.5, maxY: 0.5 }, landUse: "commercial", status: "leased", tenant: "Port Logistics", value: 115000000 },
  { id: "par-024", estateId: "est-010", parcelNumber: "TPP-002", area: 2100, coordinates: { lat: 8.5878, lng: 81.2155 }, bbox: { minX: 0.5, minY: 0.2, maxX: 0.75, maxY: 0.5 }, landUse: "industrial", status: "vacant", value: 85000000 },
];

