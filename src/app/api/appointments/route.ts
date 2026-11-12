import { NextResponse } from 'next/server';
import { getAppointments, addAppointment, updateAppointmentStatus } from '@/lib/db';

export async function GET() {
  try {
    const appointments = getAppointments();
    return NextResponse.json({ success: true, appointments });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch appointments' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, age, category, date, timeSlot, notes } = body;

    if (!fullName || !phone || !date || !timeSlot || !category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: fullName, phone, date, timeSlot, category' },
        { status: 400 }
      );
    }

    const appointment = addAppointment({
      fullName: String(fullName).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : '',
      age: Number(age) || 0,
      category: String(category).trim(),
      date: String(date).trim(),
      timeSlot: String(timeSlot).trim(),
      notes: notes ? String(notes).trim() : '',
    });

    return NextResponse.json({
      success: true,
      message: 'Appointment request submitted successfully',
      appointment,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit appointment' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, doctorNotes } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'Missing id or status' }, { status: 400 });
    }

    const updated = updateAppointmentStatus(id, status, doctorNotes);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, appointment: updated });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update appointment' }, { status: 500 });
  }
}

