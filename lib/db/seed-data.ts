import {
  PREPARATORY_SUBJECTS,
  SCHOOL,
  SECONDARY_SUBJECTS,
} from '@/lib/school-config'

export const schoolSeed = {
  name: SCHOOL.name,
  principal: SCHOOL.principal,
  academicYear: SCHOOL.academicYear,
  semesters: SCHOOL.semesters,
  passingAverage: SCHOOL.passingAverage,
  assessmentWeights: SCHOOL.assessmentWeights,
  subjects: [
    ...SECONDARY_SUBJECTS.map((subject) => ({ ...subject, grades: [9, 10] })),
    ...PREPARATORY_SUBJECTS.filter(
      (subject) => !SECONDARY_SUBJECTS.some((secondary) => secondary.name === subject.name),
    ).map((subject) => ({ ...subject, grades: [11, 12] })),
  ],
  bootstrapAdministrator: {
    name: SCHOOL.principal,
    admissionNumber: 'HMBS-ADMIN-01',
    role: 'Principal',
    note: 'Replace the temporary password during first sign-in.',
  },
}

export const importTemplates = {
  students: [
    'admissionNumber',
    'name',
    'grade',
    'section',
    'gender',
    'dateOfBirth',
    'guardianName',
    'guardianPhone',
    'house',
  ],
  teachers: [
    'employeeId',
    'name',
    'phone',
    'email',
    'subjects',
    'classes',
  ],
} as const
