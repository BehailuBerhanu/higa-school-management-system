'use client'

import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { studentPortal } from '@/lib/data/portal'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

export default function StudentProfilePage() {
  const student = studentPortal.students[0]

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="My Profile"
        description="View and manage your personal information"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="pb-4">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="size-20">
                <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                  {student.name.split(' ').map((n) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <CardTitle>{student.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{student.admissionNumber}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="secondary">{student.class}</Badge>
              </div>
              <Separator />
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Academic Standing</p>
                <p className="text-muted-foreground">Rank: {student.classRank} out of {student.classSize}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-muted-foreground" />
                  <span className="text-sm">{student.email}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-muted-foreground" />
                  <span className="text-sm">+254 (701) 123-456</span>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Home Address</label>
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm">P.O. Box 5000, Nairobi, Kenya</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Academic Information</CardTitle>
          <CardDescription>Current and historical academic details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Admission Date</p>
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-muted-foreground" />
                <span className="font-medium">January 15, 2021</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Class</p>
              <Badge className="bg-primary/10 text-primary">{student.class}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Merit Points</p>
              <span className="font-medium text-lg">{student.meritPoints}</span>
            </div>
          </div>
          <Separator />
          <div>
            <p className="text-sm font-semibold mb-3">Co-curricular Activities</p>
            <div className="flex flex-wrap gap-2">
              {['Debate Club', 'Robotics', 'Volleyball', 'Drama Club'].map((activity) => (
                <Badge key={activity} variant="outline">
                  {activity}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contact</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Guardian Name</label>
            <p className="text-sm font-medium">John Kipchoge</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Relationship</label>
            <p className="text-sm font-medium">Father</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Phone</label>
            <p className="text-sm font-medium">+254 (712) 345-678</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <p className="text-sm font-medium">john.kipchoge@example.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
