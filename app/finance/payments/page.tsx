"use client"

import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { payments } from "@/src/lib/mock/finance"
import { formatCurrency, formatDate } from "@/lib/utils"

export default function PaymentsPage() {
  const totalPayments = payments.reduce((sum, p) => sum + p.amount, 0)
  const confirmedPayments = payments.filter(p => p.status === "confirmed").reduce((sum, p) => sum + p.amount, 0)

  return (
    <AppShell>
      <PageHeader
        title="Payments"
        subtitle="Payment records and transaction history"
      />

      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalPayments)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Confirmed Payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{formatCurrency(confirmedPayments)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Payments List */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>{payments.length} payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-medium">{payment.clientName}</div>
                      <Badge variant={payment.status === "confirmed" ? "success" : payment.status === "pending" ? "warning" : "destructive"}>
                        {payment.status}
                      </Badge>
                      <Badge variant="outline">{payment.method.replace("_", " ")}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Reference: {payment.reference} • {formatDate(payment.paymentDate)}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-medium text-lg">{formatCurrency(payment.amount)}</div>
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

