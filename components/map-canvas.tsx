"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MapPin, Layers } from "lucide-react"
import { Parcel } from "@/src/lib/mock/parcels"
import { Estate } from "@/src/lib/mock/estates"

interface MapCanvasProps {
  parcels: Parcel[]
  estate: Estate
}

export function MapCanvas({ parcels, estate }: MapCanvasProps) {
  const [selectedParcel, setSelectedParcel] = useState<string | null>(null)
  const [layers, setLayers] = useState({
    parcels: true,
    assets: true,
    risk: false,
    utilities: false,
  })

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }))
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2">
        <div className="relative bg-slate-100 dark:bg-slate-900 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 aspect-video overflow-hidden">
          {/* SVG Map Canvas */}
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full"
            style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)" }}
          >
            {/* Grid Pattern */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Parcels */}
            {layers.parcels && parcels.map((parcel) => {
              const isSelected = selectedParcel === parcel.id
              return (
                <g key={parcel.id}>
                  <rect
                    x={parcel.bbox.minX * 1000}
                    y={parcel.bbox.minY * 600}
                    width={(parcel.bbox.maxX - parcel.bbox.minX) * 1000}
                    height={(parcel.bbox.maxY - parcel.bbox.minY) * 600}
                    fill={isSelected ? "#3857F9" : "#28F0F1"}
                    fillOpacity={isSelected ? 0.6 : 0.3}
                    stroke={isSelected ? "#3857F9" : "#28F0F1"}
                    strokeWidth={isSelected ? 3 : 2}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedParcel(parcel.id)}
                  />
                  {isSelected && (
                    <text
                      x={(parcel.bbox.minX + parcel.bbox.maxX) * 500}
                      y={(parcel.bbox.minY + parcel.bbox.maxY) * 300}
                      textAnchor="middle"
                      fill="#1e293b"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      {parcel.parcelNumber}
                    </text>
                  )}
                </g>
              )
            })}

            {/* Scale Indicator */}
            <g>
              <line
                x1="50"
                y1="550"
                x2="200"
                y2="550"
                stroke="#1e293b"
                strokeWidth="2"
              />
              <text x="125" y="545" textAnchor="middle" fill="#1e293b" fontSize="12">
                150m
              </text>
            </g>

            {/* Coordinate Display */}
            <g>
              <rect x="800" y="20" width="180" height="60" fill="white" fillOpacity="0.9" rx="4" />
              <text x="890" y="40" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">
                Coordinates
              </text>
              <text x="890" y="55" textAnchor="middle" fill="#1e293b" fontSize="9">
                {estate.coordinates.lat.toFixed(4)} N
              </text>
              <text x="890" y="70" textAnchor="middle" fill="#1e293b" fontSize="9">
                {estate.coordinates.lng.toFixed(4)} E
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        {/* Layer Controls */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-4 w-4" />
                <span className="font-medium">Layers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="parcels"
                  checked={layers.parcels}
                  onCheckedChange={() => toggleLayer("parcels")}
                />
                <Label htmlFor="parcels" className="cursor-pointer">Parcels</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="assets"
                  checked={layers.assets}
                  onCheckedChange={() => toggleLayer("assets")}
                />
                <Label htmlFor="assets" className="cursor-pointer">Assets</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="risk"
                  checked={layers.risk}
                  onCheckedChange={() => toggleLayer("risk")}
                />
                <Label htmlFor="risk" className="cursor-pointer">Risk Zones</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="utilities"
                  checked={layers.utilities}
                  onCheckedChange={() => toggleLayer("utilities")}
                />
                <Label htmlFor="utilities" className="cursor-pointer">Utilities</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected Parcel Details */}
        {selectedParcel && (
          <Card>
            <CardContent className="pt-6">
              {(() => {
                const parcel = parcels.find(p => p.id === selectedParcel)
                if (!parcel) return null
                return (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">Selected Parcel</span>
                    </div>
                    <div>
                      <div className="font-semibold">{parcel.parcelNumber}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {parcel.area} m² • {parcel.landUse}
                      </div>
                    </div>
                    <div className="pt-2 border-t space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <Badge variant={parcel.status === "owned" ? "default" : "secondary"}>
                          {parcel.status}
                        </Badge>
                      </div>
                      {parcel.tenant && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tenant</span>
                          <span className="font-medium">{parcel.tenant}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Value</span>
                        <span className="font-medium">LKR {parcel.value.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      View Details
                    </Button>
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

