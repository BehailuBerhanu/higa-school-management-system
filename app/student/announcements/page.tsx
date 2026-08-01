'use client'

import { useState } from 'react'
import { PortalPageHeader } from '@/components/portal/portal-ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle, Bell, Filter } from 'lucide-react'

const announcements = [
  { id: '1', title: 'Term 3 Exams Schedule Released', content: 'The schedule for Term 3 final examinations has been published.', date: '2024-11-15', category: 'academic', isUrgent: false },
  { id: '2', title: 'Sports Day Registration', content: 'All students interested in participating must register with their house captains.', date: '2024-11-14', category: 'sports', isUrgent: true },
  { id: '3', title: 'Health Screening Program', content: 'Annual health screening will take place next week.', date: '2024-11-13', category: 'health', isUrgent: false },
]

export default function StudentAnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredAnnouncements = announcements.filter((ann) => {
    const matchesSearch = ann.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ann.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || ann.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = ['academic', 'events', 'administrative', 'health', 'sports']

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      academic: 'bg-blue-100 text-blue-800',
      events: 'bg-purple-100 text-purple-800',
      administrative: 'bg-orange-100 text-orange-800',
      health: 'bg-red-100 text-red-800',
      sports: 'bg-green-100 text-green-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-8">
      <PortalPageHeader
        title="Announcements"
        description="Stay updated with school announcements and important notices"
      />

      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            placeholder="Search announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sm:max-w-sm"
          />
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="capitalize">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {announcement.isUrgent && (
                        <AlertCircle className="size-4 text-red-500" />
                      )}
                      <Badge className={getCategoryColor(announcement.category)}>
                        {announcement.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <CardDescription>
                      {new Date(announcement.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{announcement.content}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <Bell className="mx-auto size-12 text-muted-foreground/30 mb-3" />
            <p className="text-muted-foreground">No announcements match your search</p>
          </div>
        )}
      </div>
    </div>
  )
}
