'use client'

import { useState } from 'react'
import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Bell, Lock, Eye, Shield } from 'lucide-react'

export default function StudentSettingsPage() {
  const [notifications, setNotifications] = useState({
    announcements: true,
    results: true,
    events: true,
    assignments: true,
    email: true,
    sms: false,
  })

  const [theme, setTheme] = useState('system')

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Settings"
        description="Manage your account preferences and notifications"
      />

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="size-5 text-primary" />
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose what updates you want to receive</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">In-Portal Notifications</h3>
            {[
              { id: 'announcements', label: 'Announcements', description: 'New school announcements' },
              { id: 'results', label: 'Results', description: 'When exam results are released' },
              { id: 'events', label: 'Events', description: 'Upcoming school events' },
              { id: 'assignments', label: 'Assignments', description: 'New assignments from teachers' },
            ].map((notif) => (
              <div key={notif.id} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-sm">{notif.label}</p>
                  <p className="text-xs text-muted-foreground">{notif.description}</p>
                </div>
                <Switch
                  checked={notifications[notif.id as keyof typeof notifications]}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({ ...prev, [notif.id]: checked }))
                  }
                />
              </div>
            ))}
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">External Notifications</h3>
            {[
              { id: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
              { id: 'sms', label: 'SMS Alerts', description: 'Urgent alerts via SMS' },
            ].map((notif) => (
              <div key={notif.id} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-sm">{notif.label}</p>
                  <p className="text-xs text-muted-foreground">{notif.description}</p>
                </div>
                <Switch
                  checked={notifications[notif.id as keyof typeof notifications]}
                  onCheckedChange={(checked) =>
                    setNotifications((prev) => ({ ...prev, [notif.id]: checked }))
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Eye className="size-5 text-primary" />
            <div>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize your portal experience</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium">Theme</label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Choose how the portal appears</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="size-5 text-primary" />
            <div>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="font-medium text-sm">Password</p>
            <p className="text-sm text-muted-foreground mb-3">Last changed 3 months ago</p>
            <Button variant="outline" size="sm">
              Change Password
            </Button>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="font-medium text-sm">Two-Factor Authentication</p>
            <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security</p>
            <Button variant="outline" size="sm">
              Enable 2FA
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="size-5 text-primary" />
            <div>
              <CardTitle>Privacy</CardTitle>
              <CardDescription>Control your data and privacy settings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-sm">Show profile to other students</p>
              <p className="text-xs text-muted-foreground">Allow other students to find you</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium text-sm">Show academic standing</p>
              <p className="text-xs text-muted-foreground">Display your class rank publicly</p>
            </div>
            <Switch defaultChecked={false} />
          </div>

          <Separator />

          <div className="space-y-2 pt-2">
            <p className="font-medium text-sm">Data & Privacy</p>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Download My Data
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Privacy Policy
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3 pt-4">
        <Button>Save Changes</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  )
}
