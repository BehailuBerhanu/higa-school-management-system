'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import {
  adminProfile,
  studentProfile,
  teacherProfile,
  academicClass,
  announcement,
  subject,
} from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

async function verifyAdmin() {
  const userId = await getUserId()
  const admin = await db
    .select()
    .from(adminProfile)
    .where(eq(adminProfile.userId, userId))
    .limit(1)

  if (!admin[0]) throw new Error('Admin access required')
  return admin[0]
}

export async function getAllStudents() {
  await verifyAdmin()
  const students = await db
    .select()
    .from(studentProfile)
    .orderBy(desc(studentProfile.createdAt))
    .limit(100)

  return students
}

export async function getAllTeachers() {
  await verifyAdmin()
  const teachers = await db
    .select()
    .from(teacherProfile)
    .orderBy(desc(teacherProfile.createdAt))
    .limit(100)

  return teachers
}

export async function getAllClasses() {
  await verifyAdmin()
  const classes = await db
    .select()
    .from(academicClass)
    .orderBy(academicClass.form)

  return classes
}

export async function getAllSubjects() {
  await verifyAdmin()
  const subjects = await db
    .select()
    .from(subject)
    .orderBy(subject.name)

  return subjects
}

export async function createAnnouncement(
  title: string,
  content: string,
  category: string,
  targetAudience: string = 'all',
  isUrgent: boolean = false
) {
  const userId = await getUserId()
  await verifyAdmin()

  const result = await db
    .insert(announcement)
    .values({
      title,
      content,
      category,
      targetAudience,
      isUrgent,
      postedBy: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning()

  revalidatePath('/admin')
  return result[0]
}

export async function getAnnouncements() {
  await verifyAdmin()
  const announcements = await db
    .select()
    .from(announcement)
    .orderBy(desc(announcement.createdAt))
    .limit(50)

  return announcements
}

export async function updateAnnouncementStatus(
  id: number,
  title: string,
  content: string
) {
  await verifyAdmin()

  const updated = await db
    .update(announcement)
    .set({
      title,
      content,
      updatedAt: new Date(),
    })
    .where(eq(announcement.id, id))
    .returning()

  revalidatePath('/admin')
  return updated[0]
}

export async function getStudentStats() {
  await verifyAdmin()

  const totalStudents = await db
    .select()
    .from(studentProfile)
    .limit(1)

  const activeStudents = await db
    .select()
    .from(studentProfile)
    .where(eq(studentProfile.enrollmentStatus, 'active'))
    .limit(1)

  return {
    total: totalStudents.length,
    active: activeStudents.length,
  }
}

export async function getTeacherStats() {
  await verifyAdmin()

  const totalTeachers = await db
    .select()
    .from(teacherProfile)
    .limit(1)

  const activeTeachers = await db
    .select()
    .from(teacherProfile)
    .where(eq(teacherProfile.status, 'active'))
    .limit(1)

  return {
    total: totalTeachers.length,
    active: activeTeachers.length,
  }
}
