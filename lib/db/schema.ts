import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  integer,
  decimal,
  varchar,
} from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// --- App tables ------------------------------------------------------------
// Add your app tables below. Always include a plain `userId` column so queries
// can be scoped per user — the security model depends on this column existing,
// not on a foreign key. Do NOT add a foreign key constraint
// (`.references(() => user.id, ...)`) unless the user explicitly asks for
// foreign keys or referential integrity; FK constraints make iterating on the
// schema harder.
//
// Example:
//
// import { serial } from "drizzle-orm/pg-core"
//
// School Management System Tables

export const studentProfile = pgTable('student_profile', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  admissionNumber: varchar('admission_number', { length: 20 }).notNull().unique(),
  form: varchar('form', { length: 20 }).notNull(), // e.g., "Form 3 Alpha"
  dateOfBirth: timestamp('date_of_birth'),
  guardianName: text('guardian_name'),
  guardianPhone: varchar('guardian_phone', { length: 20 }),
  guardianEmail: text('guardian_email'),
  emergencyContact: text('emergency_contact'),
  emergencyPhone: varchar('emergency_phone', { length: 20 }),
  house: varchar('house', { length: 50 }), // e.g., "Kipchoge House"
  enrollmentStatus: varchar('enrollment_status', { length: 20 }).default('active'), // active, suspended, graduated
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const teacherProfile = pgTable('teacher_profile', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  employeeId: varchar('employee_id', { length: 20 }).notNull().unique(),
  subject: varchar('subject', { length: 100 }).notNull(),
  department: varchar('department', { length: 100 }),
  qualifications: text('qualifications'),
  yearsOfExperience: integer('years_of_experience'),
  status: varchar('status', { length: 20 }).default('active'), // active, on-leave, departed
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const adminProfile = pgTable('admin_profile', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  role: varchar('role', { length: 50 }).notNull(), // Principal, Administrator, Registrar
  department: varchar('department', { length: 100 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const academicClass = pgTable('academic_class', {
  id: serial('id').primaryKey(),
  form: varchar('form', { length: 20 }).notNull(), // "Form 3 Alpha"
  form_number: varchar('form_number', { length: 10 }).notNull(), // "3"
  class_name: varchar('class_name', { length: 50 }).notNull(), // "Alpha"
  capacity: integer('capacity').notNull().default(40),
  form_teacher_id: text('form_teacher_id'), // user.id of the form teacher
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const subject = pgTable('subject', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  code: varchar('code', { length: 10 }).notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const studentResult = pgTable('student_result', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').notNull(), // references student_profile.id
  subjectId: integer('subject_id').notNull(), // references subject.id
  term: varchar('term', { length: 20 }).notNull(), // "term1", "term2", "term3"
  year: integer('year').notNull(),
  score: decimal('score', { precision: 5, scale: 2 }).notNull(),
  grade: varchar('grade', { length: 3 }).notNull(), // A+, A, B+, B, C, D, F
  remarks: text('remarks'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const studentAttendance = pgTable('student_attendance', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id').notNull(),
  date: timestamp('date').notNull(),
  present: boolean('present').notNull().default(false),
  remarks: text('remarks'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const announcement = pgTable('announcement', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  category: varchar('category', { length: 50 }).notNull(), // academic, sports, health, etc
  targetAudience: varchar('target_audience', { length: 50 }).default('all'), // all, students, teachers, staff
  isUrgent: boolean('is_urgent').default(false),
  postedBy: text('posted_by').notNull(), // user.id
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
