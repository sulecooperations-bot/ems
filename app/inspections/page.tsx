"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"
import { inspections } from "@/src/lib/mock/inspections"
import { formatDate } from "@/lib/utils"

export default function InspectionsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredInspections = inspections.filter(inspection => {
    if (statusFilter !== "all" && inspection.status !== statusFilter) return false
    return true
  })

  return (
    <AppShell>
      <PageHeader
        title="Inspections"
        subtitle="Scheduled inspections and compliance tracking"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Inspection
          </Button>
        }
      />

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inspections</CardTitle>
            <CardDescription>{filteredInspections.length} inspections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredInspections.map((inspection) => (
                <div key={inspection.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-medium capitalize">{inspection.type} Inspection</div>
                      <Badge variant={inspection.status === "completed" ? "success" : inspection.status === "in-progress" ? "default" : "secondary"}>
                        {inspection.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Inspector: {inspection.inspectorName} • Scheduled: {formatDate(inspection.scheduledDate)}
                    </div>
                    {inspection.findings && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {inspection.findings}
                      </div>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    {inspection.score && (
                      <div className="font-medium text-lg mb-2">Score: {inspection.score}</div>
                    )}
                    <Badge variant={inspection.passed ? "success" : "destructive"}>
                      {inspection.passed ? "Passed" : "Failed"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}

