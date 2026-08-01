import { getAnnouncements } from '@/app/actions/admin'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const announcements = await getAnnouncements()
    return NextResponse.json(announcements)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}
