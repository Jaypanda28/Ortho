import { NextResponse } from 'next/server';
import { getInquiries, addInquiry, saveInquiries } from '@/lib/db';

export async function GET() {
  try {
    const inquiries = getInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ success: false, error: 'Name, phone and message are required' }, { status: 400 });
    }

    const inquiry = addInquiry({
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : '',
      subject: subject ? String(subject).trim() : 'General Inquiry',
      message: String(message).trim(),
    });

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to submit inquiry' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    const inquiries = getInquiries();
    const idx = inquiries.findIndex((i) => i.id === id);
    if (idx === -1) {
      return NextResponse.json({ success: false, error: 'Inquiry not found' }, { status: 404 });
    }
    inquiries[idx].status = status;
    saveInquiries(inquiries);
    return NextResponse.json({ success: true, inquiry: inquiries[idx] });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update inquiry' }, { status: 500 });
  }
}

