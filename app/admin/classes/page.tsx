'use client'

import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminClassesPage() {
  const classes = [
    { id: '1', name: 'Form 1 Alpha', level: 'Form 1', students: 35, teacher: 'Mr. John Kipchoge', form: '1A' },
    { id: '2', name: 'Form 1 Beta', level: 'Form 1', students: 34, teacher: 'Ms. Jane Njeri', form: '1B' },
    { id: '3', name: 'Form 2 Alpha', level: 'Form 2', students: 36, teacher: 'Mr. David Omondi', form: '2A' },
    { id: '4', name: 'Form 2 Beta', level: 'Form 2', students: 33, teacher: 'Ms. Sarah Kipchoge', form: '2B' },
    { id: '5', name: 'Form 3 Alpha', level: 'Form 3', students: 37, teacher: 'Mr. Peter Koech', form: '3A' },
    { id: '6', name: 'Form 3 Beta', level: 'Form 3', students: 35, teacher: 'Ms. Grace Kiplagat', form: '3B' },
    { id: '7', name: 'Form 4 Alpha', level: 'Form 4', students: 32, teacher: 'Mr. Samuel Kipchoge', form: '4A' },
    { id: '8', name: 'Form 4 Beta', level: 'Form 4', students: 31, teacher: 'Ms. Caroline Juma', form: '4B' },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <PortalPageHeader
          title="Classes"
          description="Manage school classes and form groups"
        />
        <Button className="bg-primary">
          <Plus className="size-4 mr-2" />
          Add Class
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Class Directory</CardTitle>
          <CardDescription>Total: {classes.length} classes, {classes.reduce((acc, c) => acc + c.students, 0)} students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Form</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Class Teacher</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((cls) => (
                  <TableRow key={cls.id}>
                    <TableCell className="font-medium">{cls.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{cls.level}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold">{cls.students}</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{cls.teacher}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600">
                        <Trash2 className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Form 1</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">69</div>
            <p className="text-xs text-muted-foreground">students across 2 classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Form 2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">69</div>
            <p className="text-xs text-muted-foreground">students across 2 classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Form 3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72</div>
            <p className="text-xs text-muted-foreground">students across 2 classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Form 4</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">63</div>
            <p className="text-xs text-muted-foreground">students across 2 classes</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
