'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import {
  teacherProfile,
  studentResult,
  studentAttendance,
  academicClass,
  studentProfile,
  subject,
} from '@/lib/db/schema'
import { eq, and, desc } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getTeacherProfile() {
  const userId = await getUserId()
  const profile = await db
    .select()
    .from(teacherProfile)
    .where(eq(teacherProfile.userId, userId))
    .limit(1)
  return profile[0] || null
}

export async function getTeacherClasses() {
  const userId = await getUserId()
  const teacher = await getTeacherProfile()
  if (!teacher) throw new Error('Teacher profile not found')

  const classes = await db
    .select()
    .from(academicClass)
    .where(eq(academicClass.form_teacher_id, userId))

  return classes
}

export async function getClassStudents(classId: number) {
  const userId = await getUserId()
  const classRecord = await db
    .select()
    .from(academicClass)
    .where(and(eq(academicClass.id, classId)))
    .limit(1)

  if (!classRecord[0]) throw new Error('Class not found')

  const students = await db
    .select()
    .from(studentProfile)
    .where(eq(studentProfile.form, classRecord[0].form))
    .orderBy(studentProfile.admissionNumber)

  return students
}

export async function recordStudentAttendance(
  studentId: number,
  date: Date,
  present: boolean,
  remarks?: string
) {
  const userId = await getUserId()
  const teacher = await getTeacherProfile()
  if (!teacher) throw new Error('Unauthorized')

  const existing = await db
    .select()
    .from(studentAttendance)
    .where(
      and(
        eq(studentAttendance.studentId, studentId),
        eq(studentAttendance.date, date)
      )
    )
    .limit(1)

  if (existing[0]) {
    await db
      .update(studentAttendance)
      .set({ present, remarks })
      .where(eq(studentAttendance.id, existing[0].id))
  } else {
    await db.insert(studentAttendance).values({
      studentId,
      date,
      present,
      remarks,
      createdAt: new Date(),
    })
  }

  revalidatePath('/teacher/attendance')
}

export async function submitMarks(
  studentId: number,
  subjectId: number,
  term: string,
  score: number,
  remarks?: string
) {
  const userId = await getUserId()
  const teacher = await getTeacherProfile()
  if (!teacher) throw new Error('Unauthorized')

  if (score < 0 || score > 100) throw new Error('Score must be between 0 and 100')

  const grade =
    score >= 90
      ? 'A+'
      : score >= 85
        ? 'A'
        : score >= 80
          ? 'B+'
          : score >= 75
            ? 'B'
            : score >= 70
              ? 'C'
              : score >= 60
                ? 'D'
                : 'F'

  const existing = await db
    .select()
    .from(studentResult)
    .where(
      and(
        eq(studentResult.studentId, studentId),
        eq(studentResult.subjectId, subjectId),
        eq(studentResult.term, term)
      )
    )
    .limit(1)

  if (existing[0]) {
    await db
      .update(studentResult)
      .set({
        score: score.toString(),
        grade,
        remarks,
        updatedAt: new Date(),
      })
      .where(eq(studentResult.id, existing[0].id))
  } else {
    await db.insert(studentResult).values({
      studentId,
      subjectId,
      term,
      year: new Date().getFullYear(),
      score: score.toString(),
      grade,
      remarks,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  revalidatePath('/teacher/marks')
}
