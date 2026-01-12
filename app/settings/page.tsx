"use client"

import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Users, Building2, Palette, Plug } from "lucide-react"

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeader
        title="Settings"
        subtitle="System configuration and preferences"
      />

      <Tabs defaultValue="organization" className="space-y-4">
        <TabsList>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="users">Users & Roles</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="organization" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                <CardTitle>Organization Settings</CardTitle>
              </div>
              <CardDescription>Manage your organization details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Organization Name</Label>
                <Input placeholder="SULECO Ltd" />
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Input placeholder="123 Business Street, Colombo" />
              </div>
              <div className="space-y-2">
                <Label>Contact Email</Label>
                <Input type="email" placeholder="contact@suleco.lk" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <CardTitle>Users & Roles</CardTitle>
              </div>
              <CardDescription>Manage user accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                User management interface coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theme" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <CardTitle>Theme Settings</CardTitle>
              </div>
              <CardDescription>Customize appearance and branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-8 text-muted-foreground">
                Theme customization coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Plug className="h-5 w-5" />
                <CardTitle>Integrations</CardTitle>
              </div>
              <CardDescription>Connect with third-party services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                Integration settings coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}

