'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import {
  studentProfile,
  studentResult,
  studentAttendance,
  announcement,
  subject,
} from '@/lib/db/schema'
import { eq, and, desc } from 'drizzle-orm'
import { headers } from 'next/headers'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getStudentProfile() {
  const userId = await getUserId()
  const profile = await db
    .select()
    .from(studentProfile)
    .where(eq(studentProfile.userId, userId))
    .limit(1)
  return profile[0] || null
}

export async function updateStudentProfile(data: {
  guardianName?: string
  guardianPhone?: string
  guardianEmail?: string
  emergencyContact?: string
  emergencyPhone?: string
}) {
  const userId = await getUserId()
  const profile = await db
    .select()
    .from(studentProfile)
    .where(eq(studentProfile.userId, userId))
    .limit(1)

  if (!profile[0]) throw new Error('Student profile not found')

  const updated = await db
    .update(studentProfile)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(studentProfile.userId, userId))
    .returning()

  return updated[0]
}

export async function getStudentResults(term: string = 'term3') {
  const userId = await getUserId()
  const profile = await getStudentProfile()
  if (!profile) throw new Error('Student profile not found')

  const results = await db
    .select({
      id: studentResult.id,
      subjectName: subject.name,
      score: studentResult.score,
      grade: studentResult.grade,
      term: studentResult.term,
      year: studentResult.year,
      remarks: studentResult.remarks,
    })
    .from(studentResult)
    .innerJoin(subject, eq(studentResult.subjectId, subject.id))
    .where(
      and(
        eq(studentResult.studentId, profile.id),
        eq(studentResult.term, term)
      )
    )
    .orderBy(desc(studentResult.createdAt))

  return results
}

export async function getStudentAnnouncements() {
  const announcements = await db
    .select()
    .from(announcement)
    .where(
      and(
        eq(announcement.targetAudience, 'all'),
        eq(announcement.targetAudience, 'students')
      )
    )
    .orderBy(desc(announcement.createdAt))
    .limit(20)

  return announcements
}

export async function getStudentAttendance(month?: Date) {
  const userId = await getUserId()
  const profile = await getStudentProfile()
  if (!profile) throw new Error('Student profile not found')

  const startOfMonth = month
    ? new Date(month.getFullYear(), month.getMonth(), 1)
    : new Date(new Date().getFullYear(), new Date().getMonth(), 1)

  const endOfMonth = new Date(
    startOfMonth.getFullYear(),
    startOfMonth.getMonth() + 1,
    0
  )

  const attendance = await db
    .select()
    .from(studentAttendance)
    .where(
      and(
        eq(studentAttendance.studentId, profile.id),
        and(
          eq(studentAttendance.date, startOfMonth),
          eq(studentAttendance.date, endOfMonth)
        )
      )
    )
    .orderBy(desc(studentAttendance.date))

  return attendance
}
