import { SCHOOL, subjectsForGrade, calculateTotal, isPassing } from '@/lib/school-config'

export { SCHOOL, subjectsForGrade, calculateTotal, isPassing }

export type ResultStatus = 'draft' | 'submitted' | 'published'

export type SubjectResult = {
  subject: string
  code: string
  teacher: string
  assignment: number | null
  mid1: number | null
  mid2: number | null
  final: number | null
  status: ResultStatus
}

export function total(r: SubjectResult): number | null {
  const parts = [r.assignment, r.mid1, r.mid2, r.final]
  if (parts.some((p) => p === null)) return null
  return parts.reduce((a, b) => (a as number) + (b as number), 0) as number
}

export function letterGrade(t: number | null): string {
  if (t === null) return '—'
  if (t >= 95) return 'A+'
  if (t >= 90) return 'A'
  if (t >= 85) return 'B+'
  if (t >= 80) return 'B'
  if (t >= 70) return 'C+'
  if (t >= 60) return 'C'
  if (t >= 50) return 'D'
  return 'F'
}

export const currentStudent = {
  studentId: 'HMB-2023-0418',
  firstName: 'Mahlet',
  lastName: 'Girma',
  grade: 10,
  section: 'A',
  gender: 'Female',
  birthDate: '2010-03-14',
  house: 'Dashen House',
  status: 'Active',
  parentName: 'Girma Assefa',
  parentPhone: '+251 91 224 8830',
  emergencyContact: '+251 91 730 4412',
  address: 'Kebele 11, Bahir Dar',
  admitted: '2023-09-11',
  homeroom: 'W/ro Hirut Bekele',
  avatarInitials: 'MG',
}

export const studentResults: Record<string, SubjectResult[]> = {
  'Semester 1': [
    { subject: 'Mathematics', code: 'MTH-10', teacher: 'W/ro Hirut Bekele', assignment: 9, mid1: 18, mid2: 17, final: 45, status: 'published' },
    { subject: 'English', code: 'ENG-10', teacher: 'Ato Yonas Tadesse', assignment: 8, mid1: 16, mid2: 18, final: 42, status: 'published' },
    { subject: 'Physics', code: 'PHY-10', teacher: 'Ato Abebe Kassa', assignment: 10, mid1: 17, mid2: 16, final: 41, status: 'published' },
    { subject: 'Chemistry', code: 'CHM-10', teacher: 'W/ro Selamawit Abera', assignment: 9, mid1: 15, mid2: 17, final: 40, status: 'published' },
    { subject: 'Biology', code: 'BIO-10', teacher: 'W/ro Meseret Girma', assignment: 8, mid1: 17, mid2: 15, final: 38, status: 'published' },
    { subject: 'Amharic', code: 'AMH-10', teacher: 'Ato Tesfaye Nega', assignment: 10, mid1: 18, mid2: 19, final: 46, status: 'published' },
    { subject: 'Geography', code: 'GEO-10', teacher: 'W/ro Aster Mulu', assignment: 7, mid1: 14, mid2: 16, final: 37, status: 'published' },
    { subject: 'Civics', code: 'CIV-10', teacher: 'Ato Getachew Molla', assignment: 9, mid1: 16, mid2: 17, final: 43, status: 'published' },
  ],
  'Semester 2': [
    { subject: 'Mathematics', code: 'MTH-10', teacher: 'W/ro Hirut Bekele', assignment: 10, mid1: 19, mid2: 18, final: 47, status: 'published' },
    { subject: 'English', code: 'ENG-10', teacher: 'Ato Yonas Tadesse', assignment: 9, mid1: 17, mid2: 18, final: 44, status: 'published' },
    { subject: 'Physics', code: 'PHY-10', teacher: 'Ato Abebe Kassa', assignment: 9, mid1: 18, mid2: 17, final: 43, status: 'published' },
    { subject: 'Chemistry', code: 'CHM-10', teacher: 'W/ro Selamawit Abera', assignment: 10, mid1: 16, mid2: 18, final: 42, status: 'published' },
    { subject: 'Biology', code: 'BIO-10', teacher: 'W/ro Meseret Girma', assignment: 9, mid1: 18, mid2: 16, final: 40, status: 'published' },
    { subject: 'Amharic', code: 'AMH-10', teacher: 'Ato Tesfaye Nega', assignment: 10, mid1: 19, mid2: 19, final: 48, status: 'published' },
    { subject: 'Geography', code: 'GEO-10', teacher: 'W/ro Aster Mulu', assignment: 8, mid1: 15, mid2: 17, final: 39, status: 'published' },
    { subject: 'Civics', code: 'CIV-10', teacher: 'Ato Getachew Molla', assignment: 9, mid1: 17, mid2: 18, final: 44, status: 'published' },
  ],
}

export const studentTrend = [
  { term: 'G9 S1', average: 78.4 },
  { term: 'G9 S2', average: 81.1 },
  { term: 'G10 S1', average: 84.6 },
  { term: 'G10 S2', average: 88.3 },
]

export const announcements = [
  {
    id: 'a1',
    title: 'Semester 2 report cards released',
    body: 'Published results for all Grade 9 and Grade 10 sections are now visible in the Results tab. Printed report cards will be issued at the parent conference.',
    audience: 'Students',
    author: 'Registrar’s Office',
    date: '2026-07-20',
    pinned: true,
  },
  {
    id: 'a2',
    title: 'Library reading hall extended hours',
    body: 'During the examination period the reading hall will remain open until 22:00 on weekdays. Boarding students require a house-tutor pass after 21:00.',
    audience: 'All',
    author: 'Dean of Boarding',
    date: '2026-07-11',
    pinned: false,
  },
  {
    id: 'a3',
    title: 'Grade 10 mathematics tutorial — Saturday',
    body: 'An optional revision tutorial covering trigonometry and coordinate geometry will run on Saturday from 09:00 in Room B12.',
    audience: 'Grade 10-A',
    author: 'W/ro Hirut Bekele',
    date: '2026-07-05',
    pinned: false,
  },
  {
    id: 'a4',
    title: 'Inter-house debate registration closes Friday',
    body: 'Each house may register four speakers. Submit names to your house tutor before Friday 16:00.',
    audience: 'Students',
    author: 'Debate Society',
    date: '2026-06-28',
    pinned: false,
  },
  {
    id: 'a5',
    title: 'Staff marks-entry deadline reminder',
    body: 'All Semester 2 final marks must be submitted by 25 July. Draft entries left unsubmitted after that date will be escalated to the Academic Dean.',
    audience: 'Teachers',
    author: 'Academic Dean',
    date: '2026-06-22',
    pinned: false,
  },
]

export const currentTeacher = {
  teacherId: 'HMT-2017-0032',
  firstName: 'Abebe',
  lastName: 'Kassa',
  title: 'Ato',
  department: 'Natural Science',
  subject: 'Physics',
  phone: '+251 91 445 2210',
  email: 'a.kassa@higamodel.edu.et',
  joined: '2017-09-04',
  homeroom: 'Grade 9-B',
  avatarInitials: 'AK',
}

export const teacherAssignments = [
  { id: 'cs-1', classLabel: 'Grade 10-A', subject: 'Physics', code: 'PHY-10', students: 38, entered: 38, status: 'published' as ResultStatus, semester: 'Semester 2' },
  { id: 'cs-2', classLabel: 'Grade 10-B', subject: 'Physics', code: 'PHY-10', students: 36, entered: 36, status: 'submitted' as ResultStatus, semester: 'Semester 2' },
  { id: 'cs-3', classLabel: 'Grade 9-A', subject: 'Physics', code: 'PHY-09', students: 40, entered: 22, status: 'draft' as ResultStatus, semester: 'Semester 2' },
  { id: 'cs-4', classLabel: 'Grade 9-B', subject: 'Physics', code: 'PHY-09', students: 39, entered: 0, status: 'draft' as ResultStatus, semester: 'Semester 2' },
  { id: 'cs-5', classLabel: 'Grade 11-A', subject: 'Advanced Physics', code: 'PHY-11', students: 31, entered: 31, status: 'published' as ResultStatus, semester: 'Semester 2' },
]

export type RosterRow = {
  id: string
  studentId: string
  name: string
  assignment: number | null
  mid1: number | null
  mid2: number | null
  final: number | null
}

export const roster: RosterRow[] = [
  { id: 'r1', studentId: 'HMB-2023-0401', name: 'Abel Tsegaye', assignment: 9, mid1: 17, mid2: 16, final: 42 },
  { id: 'r2', studentId: 'HMB-2023-0404', name: 'Bethlehem Assefa', assignment: 10, mid1: 19, mid2: 18, final: 46 },
  { id: 'r3', studentId: 'HMB-2023-0409', name: 'Dagmawi Haile', assignment: 7, mid1: 14, mid2: 13, final: 34 },
  { id: 'r4', studentId: 'HMB-2023-0412', name: 'Eden Wolde', assignment: 8, mid1: 16, mid2: 17, final: 41 },
  { id: 'r5', studentId: 'HMB-2023-0418', name: 'Mahlet Girma', assignment: 9, mid1: 18, mid2: 17, final: 43 },
  { id: 'r6', studentId: 'HMB-2023-0421', name: 'Kaleb Desta', assignment: 6, mid1: 12, mid2: 15, final: 31 },
  { id: 'r7', studentId: 'HMB-2023-0425', name: 'Liya Alemu', assignment: 10, mid1: 18, mid2: 19, final: 45 },
  { id: 'r8', studentId: 'HMB-2023-0430', name: 'Nahom Berhanu', assignment: 8, mid1: 15, mid2: 14, final: 38 },
  { id: 'r9', studentId: 'HMB-2023-0433', name: 'Rahel Tadesse', assignment: 9, mid1: 17, mid2: 18, final: 44 },
  { id: 'r10', studentId: 'HMB-2023-0437', name: 'Samuel Fikru', assignment: null, mid1: null, mid2: null, final: null },
  { id: 'r11', studentId: 'HMB-2023-0441', name: 'Tsion Mengistu', assignment: 10, mid1: 16, mid2: 17, final: 40 },
  { id: 'r12', studentId: 'HMB-2023-0446', name: 'Yohannes Girmay', assignment: 7, mid1: 13, mid2: 16, final: 36 },
]

export type AdminStudent = {
  id: string
  studentId: string
  name: string
  grade: number
  section: string
  gender: 'Male' | 'Female'
  house: string
  parentName: string
  parentPhone: string
  average: number
  rank: number
  status: 'Active' | 'Graduated' | 'Withdrawn'
}

export const adminStudents: AdminStudent[] = [
  { id: 's1', studentId: 'HMB-2023-0401', name: 'Abel Tsegaye', grade: 10, section: 'A', gender: 'Male', house: 'Abay', parentName: 'Tsegaye Bekele', parentPhone: '+251 91 220 1188', average: 84.2, rank: 6, status: 'Active' },
  { id: 's2', studentId: 'HMB-2023-0404', name: 'Bethlehem Assefa', grade: 10, section: 'A', gender: 'Female', house: 'Dashen', parentName: 'Assefa Kebede', parentPhone: '+251 91 330 4471', average: 92.6, rank: 1, status: 'Active' },
  { id: 's3', studentId: 'HMB-2023-0409', name: 'Dagmawi Haile', grade: 10, section: 'B', gender: 'Male', house: 'Simien', parentName: 'Haile Wondimu', parentPhone: '+251 91 118 9930', average: 68.4, rank: 24, status: 'Active' },
  { id: 's4', studentId: 'HMB-2023-0412', name: 'Eden Wolde', grade: 9, section: 'A', gender: 'Female', house: 'Tana', parentName: 'Wolde Gebre', parentPhone: '+251 91 662 1104', average: 81.9, rank: 9, status: 'Active' },
  { id: 's5', studentId: 'HMB-2023-0418', name: 'Mahlet Girma', grade: 10, section: 'A', gender: 'Female', house: 'Dashen', parentName: 'Girma Assefa', parentPhone: '+251 91 224 8830', average: 88.3, rank: 3, status: 'Active' },
  { id: 's6', studentId: 'HMB-2023-0421', name: 'Kaleb Desta', grade: 9, section: 'B', gender: 'Male', house: 'Abay', parentName: 'Desta Alemu', parentPhone: '+251 91 445 7712', average: 62.1, rank: 31, status: 'Active' },
  { id: 's7', studentId: 'HMB-2023-0425', name: 'Liya Alemu', grade: 11, section: 'A', gender: 'Female', house: 'Simien', parentName: 'Alemu Tesfa', parentPhone: '+251 91 907 3320', average: 90.4, rank: 2, status: 'Active' },
  { id: 's8', studentId: 'HMB-2023-0430', name: 'Nahom Berhanu', grade: 11, section: 'B', gender: 'Male', house: 'Tana', parentName: 'Berhanu Mola', parentPhone: '+251 91 553 2018', average: 75.6, rank: 14, status: 'Active' },
  { id: 's9', studentId: 'HMB-2023-0433', name: 'Rahel Tadesse', grade: 12, section: 'A', gender: 'Female', house: 'Dashen', parentName: 'Tadesse Fikre', parentPhone: '+251 91 771 6642', average: 86.8, rank: 4, status: 'Active' },
  { id: 's10', studentId: 'HMB-2022-0337', name: 'Samuel Fikru', grade: 12, section: 'B', gender: 'Male', house: 'Abay', parentName: 'Fikru Nega', parentPhone: '+251 91 209 8845', average: 79.2, rank: 11, status: 'Graduated' },
  { id: 's11', studentId: 'HMB-2023-0441', name: 'Tsion Mengistu', grade: 8, section: 'A', gender: 'Female', house: 'Tana', parentName: 'Mengistu Ayele', parentPhone: '+251 91 336 5527', average: 83.7, rank: 7, status: 'Active' },
  { id: 's12', studentId: 'HMB-2023-0446', name: 'Yohannes Girmay', grade: 7, section: 'A', gender: 'Male', house: 'Simien', parentName: 'Girmay Abate', parentPhone: '+251 91 884 2290', average: 71.3, rank: 19, status: 'Withdrawn' },
]

export const adminTeachers = [
  { id: 't1', teacherId: 'HMT-2017-0032', name: 'Abebe Kassa', department: 'Natural Science', subjects: ['Physics'], classes: 5, homeroom: 'Grade 9-B', phone: '+251 91 445 2210', status: 'Active' },
  { id: 't2', teacherId: 'HMT-2009-0004', name: 'Hirut Bekele', department: 'Mathematics', subjects: ['Mathematics'], classes: 6, homeroom: 'Grade 10-A', phone: '+251 91 220 3341', status: 'Active' },
  { id: 't3', teacherId: 'HMT-2014-0019', name: 'Selamawit Abera', department: 'Natural Science', subjects: ['Chemistry'], classes: 4, homeroom: '—', phone: '+251 91 118 7742', status: 'Active' },
  { id: 't4', teacherId: 'HMT-2012-0011', name: 'Yonas Tadesse', department: 'Languages', subjects: ['English'], classes: 6, homeroom: 'Grade 11-A', phone: '+251 91 662 9083', status: 'Active' },
  { id: 't5', teacherId: 'HMT-2019-0048', name: 'Meseret Girma', department: 'Natural Science', subjects: ['Biology'], classes: 5, homeroom: 'Grade 8-A', phone: '+251 91 907 2214', status: 'Active' },
  { id: 't6', teacherId: 'HMT-2011-0008', name: 'Tesfaye Nega', department: 'Languages', subjects: ['Amharic'], classes: 7, homeroom: '—', phone: '+251 91 553 4419', status: 'On leave' },
  { id: 't7', teacherId: 'HMT-2016-0026', name: 'Aster Mulu', department: 'Social Science', subjects: ['Geography'], classes: 5, homeroom: 'Grade 7-A', phone: '+251 91 771 3308', status: 'Active' },
  { id: 't8', teacherId: 'HMT-2008-0002', name: 'Getachew Molla', department: 'Social Science', subjects: ['Civics'], classes: 4, homeroom: '—', phone: '+251 91 209 5560', status: 'Active' },
]

export const adminSubjects = [
  { id: 'sub1', name: 'Mathematics', code: 'MTH', department: 'Mathematics', grades: '1 – 12', classes: 22, teachers: 7 },
  { id: 'sub2', name: 'English', code: 'ENG', department: 'Languages', grades: '1 – 12', classes: 22, teachers: 6 },
  { id: 'sub3', name: 'Amharic', code: 'AMH', department: 'Languages', grades: '1 – 12', classes: 22, teachers: 5 },
  { id: 'sub4', name: 'Physics', code: 'PHY', department: 'Natural Science', grades: '7 – 12', classes: 14, teachers: 4 },
  { id: 'sub5', name: 'Chemistry', code: 'CHM', department: 'Natural Science', grades: '7 – 12', classes: 14, teachers: 4 },
  { id: 'sub6', name: 'Biology', code: 'BIO', department: 'Natural Science', grades: '7 – 12', classes: 14, teachers: 4 },
  { id: 'sub7', name: 'Geography', code: 'GEO', department: 'Social Science', grades: '5 – 12', classes: 18, teachers: 3 },
  { id: 'sub8', name: 'Civics', code: 'CIV', department: 'Social Science', grades: '5 – 12', classes: 18, teachers: 3 },
  { id: 'sub9', name: 'ICT', code: 'ICT', department: 'Technology', grades: '7 – 12', classes: 14, teachers: 2 },
]

export const adminClasses = [
  { id: 'c1', label: 'Grade 7-A', grade: 7, section: 'A', students: 41, homeroom: 'Aster Mulu', subjects: 9, year: '2025/2026' },
  { id: 'c2', label: 'Grade 8-A', grade: 8, section: 'A', students: 39, homeroom: 'Meseret Girma', subjects: 9, year: '2025/2026' },
  { id: 'c3', label: 'Grade 9-A', grade: 9, section: 'A', students: 40, homeroom: 'Selamawit Abera', subjects: 10, year: '2025/2026' },
  { id: 'c4', label: 'Grade 9-B', grade: 9, section: 'B', students: 39, homeroom: 'Abebe Kassa', subjects: 10, year: '2025/2026' },
  { id: 'c5', label: 'Grade 10-A', grade: 10, section: 'A', students: 38, homeroom: 'Hirut Bekele', subjects: 10, year: '2025/2026' },
  { id: 'c6', label: 'Grade 10-B', grade: 10, section: 'B', students: 36, homeroom: 'Tesfaye Nega', subjects: 10, year: '2025/2026' },
  { id: 'c7', label: 'Grade 11-A', grade: 11, section: 'A', students: 31, homeroom: 'Yonas Tadesse', subjects: 8, year: '2025/2026' },
  { id: 'c8', label: 'Grade 12-A', grade: 12, section: 'A', students: 29, homeroom: 'Getachew Molla', subjects: 8, year: '2025/2026' },
]

export const academicYears = [
  { id: 'y1', name: '2025/2026', start: '2025-09-08', end: '2026-07-31', active: true, classes: 24, students: 1482 },
  { id: 'y2', name: '2024/2025', start: '2024-09-09', end: '2025-07-31', active: false, classes: 23, students: 1421 },
  { id: 'y3', name: '2023/2024', start: '2023-09-11', end: '2024-07-31', active: false, classes: 22, students: 1368 },
]

export const publishQueue = [
  { id: 'p1', classLabel: 'Grade 10-A', semester: 'Semester 2', subjectsSubmitted: 10, subjectsTotal: 10, status: 'published' as ResultStatus, publishedAt: '2026-07-20' },
  { id: 'p2', classLabel: 'Grade 10-B', semester: 'Semester 2', subjectsSubmitted: 10, subjectsTotal: 10, status: 'submitted' as ResultStatus, publishedAt: null },
  { id: 'p3', classLabel: 'Grade 9-A', semester: 'Semester 2', subjectsSubmitted: 8, subjectsTotal: 10, status: 'draft' as ResultStatus, publishedAt: null },
  { id: 'p4', classLabel: 'Grade 9-B', semester: 'Semester 2', subjectsSubmitted: 6, subjectsTotal: 10, status: 'draft' as ResultStatus, publishedAt: null },
  { id: 'p5', classLabel: 'Grade 11-A', semester: 'Semester 2', subjectsSubmitted: 8, subjectsTotal: 8, status: 'published' as ResultStatus, publishedAt: '2026-07-19' },
  { id: 'p6', classLabel: 'Grade 12-A', semester: 'Semester 2', subjectsSubmitted: 8, subjectsTotal: 8, status: 'published' as ResultStatus, publishedAt: '2026-07-18' },
]

export const adminUsers = [
  { id: 'u1', name: 'Dr. Alemayehu Tesfaye', identifier: 'a.tesfaye', role: 'Admin', lastActive: '2026-07-31 08:12', status: 'Active' },
  { id: 'u2', name: 'Hirut Bekele', identifier: 'HMT-2009-0004', role: 'Teacher', lastActive: '2026-07-30 17:40', status: 'Active' },
  { id: 'u3', name: 'Abebe Kassa', identifier: 'HMT-2017-0032', role: 'Teacher', lastActive: '2026-07-31 07:55', status: 'Active' },
  { id: 'u4', name: 'Mahlet Girma', identifier: 'HMB-2023-0418', role: 'Student', lastActive: '2026-07-29 20:03', status: 'Active' },
  { id: 'u5', name: 'Registrar Office', identifier: 'registrar', role: 'Admin', lastActive: '2026-07-31 09:20', status: 'Active' },
  { id: 'u6', name: 'Tesfaye Nega', identifier: 'HMT-2011-0008', role: 'Teacher', lastActive: '2026-06-14 12:31', status: 'Suspended' },
]

export const auditLog = [
  { id: 'l1', actor: 'Registrar Office', action: 'Published results', target: 'Grade 10-A · Semester 2', time: '2026-07-20 14:02' },
  { id: 'l2', actor: 'Abebe Kassa', action: 'Submitted marks', target: 'Grade 10-B · Physics', time: '2026-07-19 16:48' },
  { id: 'l3', actor: 'Dr. Alemayehu Tesfaye', action: 'Created student', target: 'HMB-2026-0512', time: '2026-07-19 09:14' },
  { id: 'l4', actor: 'Hirut Bekele', action: 'Edited marks', target: 'Grade 10-A · Mathematics', time: '2026-07-18 11:36' },
  { id: 'l5', actor: 'Registrar Office', action: 'Suspended user', target: 'HMT-2011-0008', time: '2026-06-15 10:05' },
  { id: 'l6', actor: 'Dr. Alemayehu Tesfaye', action: 'Updated grade bands', target: 'Grading configuration', time: '2026-06-02 15:22' },
]

export const enrollmentByGrade = [
  { grade: 'G7', students: 168 },
  { grade: 'G8', students: 154 },
  { grade: 'G9', students: 201 },
  { grade: 'G10', students: 193 },
  { grade: 'G11', students: 142 },
  { grade: 'G12', students: 128 },
]

export const performanceByGrade = [
  { grade: 'G7', average: 79.2 },
  { grade: 'G8', average: 80.6 },
  { grade: 'G9', average: 77.8 },
  { grade: 'G10', average: 82.4 },
  { grade: 'G11', average: 84.1 },
  { grade: 'G12', average: 86.9 },
]

export const gradeDistribution = [
  { grade: 'A+', count: 12 },
  { grade: 'A', count: 28 },
  { grade: 'B+', count: 35 },
  { grade: 'B', count: 42 },
  { grade: 'C', count: 38 },
  { grade: 'D', count: 18 },
  { grade: 'F', count: 5 },
]

// Aggregated portal data for convenience
export const studentPortal = {
  students: adminStudents,
  teachers: adminTeachers,
  announcements,
}

export const schoolData = {
  announcements,
}
