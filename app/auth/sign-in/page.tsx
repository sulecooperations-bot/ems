"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-to-br from-suleco-cyan to-suleco-blue flex items-center justify-center text-white font-bold text-xl mb-4">
            S
          </div>
          <CardTitle className="text-2xl">SULECO EstateOS</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="admin@suleco.lk" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-suleco-cyan to-suleco-blue">
              Sign In
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              <Link href="/dashboard" className="underline">
                Continue as demo user
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

