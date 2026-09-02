export const SCHOOL = {
  name: 'Higa Model Boarding School',
  principal: 'Temesgen Daniel Mekuria',
  addressUrl: 'https://maps.app.goo.gl/TnWGoweQ38cKpGcm6',
  admissionPrefix: 'HMBS',
  loginIdentifier: 'admissionNumber',
  academicYear: '2025/2026',
  semesters: ['Semester 1', 'Semester 2'] as const,
  passingAverage: 75,
  assessmentWeights: {
    mid1: 20,
    mid2: 20,
    final: 50,
    assignment: 10,
  },
} as const

export const SECONDARY_SUBJECTS = [
  { name: 'Mathematics', code: 'MATH' },
  { name: 'Physics', code: 'PHYS' },
  { name: 'Chemistry', code: 'CHEM' },
  { name: 'Biology', code: 'BIOL' },
  { name: 'English', code: 'ENGL' },
  { name: 'Information Technology', code: 'IT' },
  { name: 'Amharic', code: 'AMH' },
  { name: 'Kembatissa', code: 'KEM' },
  { name: 'History', code: 'HIST' },
  { name: 'Geography', code: 'GEOG' },
  { name: 'Economics', code: 'ECON' },
  { name: 'Citizenship', code: 'CIV' },
  { name: 'HPE', code: 'HPE' },
] as const

export const PREPARATORY_SUBJECTS = [
  { name: 'Mathematics', code: 'MATH' },
  { name: 'Physics', code: 'PHYS' },
  { name: 'Chemistry', code: 'CHEM' },
  { name: 'Biology', code: 'BIOL' },
  { name: 'English', code: 'ENGL' },
  { name: 'Information Technology', code: 'IT' },
  { name: 'Web Development and Design', code: 'WEB' },
  { name: 'Agriculture', code: 'AGRI' },
] as const

export function subjectsForGrade(grade: number) {
  return grade >= 11 ? PREPARATORY_SUBJECTS : SECONDARY_SUBJECTS
}

export function generateAdmissionNumber(sequence: number, year = new Date().getFullYear()) {
  const serial = String(sequence).padStart(4, '0')
  return `${SCHOOL.admissionPrefix}-${serial}-${String(year).slice(-2)}`
}

export function calculateTotal(scores: {
  mid1: number
  mid2: number
  final: number
  assignment: number
}) {
  return scores.mid1 + scores.mid2 + scores.final + scores.assignment
}

export function isPassing(average: number) {
  return average >= SCHOOL.passingAverage
}

export const CONDUCT_RATINGS = ['A', 'B', 'C', 'D', 'E'] as const
export type ConductRating = (typeof CONDUCT_RATINGS)[number]
