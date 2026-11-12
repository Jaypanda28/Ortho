'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Lock,
  LogOut,
  RefreshCw,
  Edit3,
  Sliders,
  Mail,
  Home,
  Check,
  FileText
} from 'lucide-react';
import { Appointment, Inquiry, ClinicSettings } from '@/lib/db';

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'appointments' | 'patients' | 'inquiries' | 'schedule'>('appointments');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [settings, setSettings] = useState<ClinicSettings | null>(null);

  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [doctorNotesInput, setDoctorNotesInput] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'maharana2026' || pin === 'admin123' || pin === '6000') {
      setIsAuthenticated(true);
      setAuthError('');
      fetchData();
    } else {
      setAuthError('Invalid Security PIN. (Hint: maharana2026 or admin123)');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [aptRes, inqRes, setRes] = await Promise.all([
        fetch('/api/appointments'),
        fetch('/api/inquiries'),
        fetch('/api/settings'),
      ]);
      const aptData = await aptRes.json();
      const inqData = await inqRes.json();
      const setData = await setRes.json();

      if (aptData.success) setAppointments(aptData.appointments);
      if (inqData.success) setInquiries(inqData.inquiries);
      if (setData.success) setSettings(setData.settings);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: Appointment['status'], notes?: string) => {
    try {
      const res = await fetch('/api/appointments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus, doctorNotes: notes }),
      });
      const data = await res.json();
      if (data.success) {
        setAppointments((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus, doctorNotes: notes ?? a.doctorNotes } : a))
        );
        if (selectedAppointment && selectedAppointment.id === id) {
          setSelectedAppointment({ ...selectedAppointment, status: newStatus, doctorNotes: notes ?? selectedAppointment.doctorNotes });
        }
        setActionSuccess(`Appointment ${newStatus.toLowerCase()} successfully.`);
        setTimeout(() => setActionSuccess(''), 4000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateInquiryStatus = async (id: string, newStatus: Inquiry['status']) => {
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filteredAppointments = appointments.filter((apt) => {
    const matchesStatus = statusFilter === 'ALL' || apt.status === statusFilter;
    const matchesSearch =
      apt.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.phone.includes(searchTerm) ||
      apt.referenceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Calculate statistics
  const todayStr = new Date().toISOString().split('T')[0];
  const totalApts = appointments.length;
  const todayApts = appointments.filter((a) => a.date === todayStr || a.date === '2026-11-12').length;
  const pendingApts = appointments.filter((a) => a.status === 'PENDING').length;
  const confirmedApts = appointments.filter((a) => a.status === 'CONFIRMED').length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-gold-500/40 relative">
          <div className="text-center mb-6">
            <div className="relative w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gold-500 shadow-lg bg-navy-900">
              <Image
                src="/images/logo-circle.png"
                alt="Dr. Maharana Bone & Joint Clinic Official Logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-heading font-bold text-navy-900">
              Clinic Staff Portal
            </h1>
            <p className="text-xs text-textSecondary mt-1">
              Dr. Maharana Bone & Joint Clinic Administration
            </p>
          </div>

          {authError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-navy-900 mb-1">
                Enter Security PIN
              </label>
              <input
                type="password"
                placeholder="Enter authorized PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-center tracking-widest text-lg font-mono"
                autoFocus
              />
              <p className="text-[11px] text-slate-500 mt-2 text-center">
                Demo access PIN: <strong className="text-navy-900 font-mono">maharana2026</strong>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-navy-950 gold-gradient-bg hover:opacity-95 shadow transition"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-navy-900 flex items-center justify-center space-x-1">
              <Home className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-navy-900">
      
      {/* Top Header */}
      <header className="bg-navy-950 text-white px-6 py-4 border-b border-gold-500/30 sticky top-0 z-30 shadow-md">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-500/70 shadow bg-navy-900 shrink-0">
              <Image
                src="/images/logo-circle.png"
                alt="Dr. Maharana Bone & Joint Clinic Official Logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="block font-heading font-bold text-white text-base">
                Dr. Maharana Bone & Joint Clinic
              </span>
              <span className="block text-[10px] text-gold-400 tracking-wider uppercase font-semibold">
                Clinical Reception & OPD Management
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              target="_blank"
              className="text-xs text-slate-300 hover:text-gold-400 flex items-center space-x-1 transition hidden sm:flex"
            >
              <Home className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </Link>
            <button
              onClick={() => fetchData()}
              className="p-2 rounded-lg bg-navy-900 text-slate-300 hover:text-white transition"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="py-1.5 px-3 rounded-lg text-xs bg-red-900/40 text-red-300 hover:bg-red-800 transition flex items-center space-x-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {actionSuccess && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs flex items-center space-x-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{actionSuccess}</span>
          </div>
        )}

        {/* Analytics Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase">Today's Visits</span>
              <Calendar className="w-4 h-4 text-gold-600" />
            </div>
            <span className="block text-3xl font-heading font-bold text-navy-900 mt-2">
              {todayApts}
            </span>
            <span className="text-[11px] text-slate-400">Scheduled for 6 PM - 10 PM</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase">Pending Requests</span>
              <AlertCircle className="w-4 h-4 text-amber-500" />
            </div>
            <span className="block text-3xl font-heading font-bold text-amber-600 mt-2">
              {pendingApts}
            </span>
            <span className="text-[11px] text-slate-400">Needs staff confirmation</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase">Confirmed</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="block text-3xl font-heading font-bold text-emerald-700 mt-2">
              {confirmedApts}
            </span>
            <span className="text-[11px] text-slate-400">Patient slots locked</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase">Total Patients</span>
              <Users className="w-4 h-4 text-navy-800" />
            </div>
            <span className="block text-3xl font-heading font-bold text-navy-900 mt-2">
              {totalApts}
            </span>
            <span className="text-[11px] text-slate-400">Registered records</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
              activeTab === 'appointments'
                ? 'bg-navy-900 text-white shadow'
                : 'bg-white text-slate-600 hover:text-navy-900'
            }`}
          >
            Appointments ({appointments.length})
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
              activeTab === 'inquiries'
                ? 'bg-navy-900 text-white shadow'
                : 'bg-white text-slate-600 hover:text-navy-900'
            }`}
          >
            Contact Inquiries ({inquiries.length})
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
              activeTab === 'schedule'
                ? 'bg-navy-900 text-white shadow'
                : 'bg-white text-slate-600 hover:text-navy-900'
            }`}
          >
            OPD Timings & Doctor Info
          </button>
        </div>

        {/* TAB 1: APPOINTMENTS MANAGEMENT */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            
            {/* Search & Filter Controls */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by Patient Name, Phone, Ref ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="flex items-center space-x-2 w-full md:w-auto">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-500">Status:</span>
                {['ALL', 'PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition ${
                      statusFilter === st
                        ? 'bg-navy-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Appointments Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-navy-50 text-navy-900 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Ref ID</th>
                      <th className="py-3 px-4">Patient Name</th>
                      <th className="py-3 px-4">Date & Slot</th>
                      <th className="py-3 px-4">Specialty / Reason</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAppointments.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-slate-400">
                          No appointments matching criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredAppointments.map((apt) => (
                        <tr key={apt.id} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 px-4 font-mono font-bold text-navy-900">
                            {apt.referenceId}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-semibold text-navy-900 block">{apt.fullName}</span>
                            <span className="text-[11px] text-slate-500">{apt.phone} • Age: {apt.age || 'N/A'}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-medium text-navy-900 block">{apt.date}</span>
                            <span className="text-[11px] text-gold-700 font-semibold">{apt.timeSlot}</span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-700">
                            {apt.category}
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                apt.status === 'CONFIRMED'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : apt.status === 'PENDING'
                                  ? 'bg-amber-100 text-amber-800'
                                  : apt.status === 'COMPLETED'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {apt.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-2">
                            <button
                              onClick={() => {
                                setSelectedAppointment(apt);
                                setDoctorNotesInput(apt.doctorNotes || '');
                              }}
                              className="px-2.5 py-1 bg-navy-100 text-navy-900 hover:bg-navy-900 hover:text-white rounded text-[11px] font-semibold transition"
                            >
                              Details
                            </button>

                            {/* WhatsApp Notification Button */}
                            <a
                              href={`https://wa.me/${apt.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                                `Hello ${apt.fullName}, this is Dr. Maharana Bone & Joint Clinic. Your appointment (Ref: ${apt.referenceId}) for ${apt.category} on ${apt.date} at ${apt.timeSlot} has been confirmed. Clinic Address: Modern Health Care, Unit-6, Bhubaneswar.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-600 hover:text-white rounded text-[11px] font-semibold transition inline-flex items-center space-x-1"
                              title="Send WhatsApp confirmation to patient"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: INQUIRIES MANAGEMENT */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inquiries.map((inq) => (
                <div key={inq.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-navy-900">{inq.name}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          inq.status === 'REPLIED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {inq.status}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 mb-2">
                      <span>{inq.phone}</span> • <span>{inq.email || 'No email provided'}</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-3 text-xs">
                      <span className="font-semibold text-navy-900 block mb-1">Subject: {inq.subject}</span>
                      <p className="text-slate-600">{inq.message}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </span>
                    <div className="space-x-2">
                      {inq.status === 'UNREAD' ? (
                        <button
                          onClick={() => handleUpdateInquiryStatus(inq.id, 'REPLIED')}
                          className="px-2.5 py-1 text-[11px] bg-emerald-600 text-white rounded font-medium hover:bg-emerald-700 transition"
                        >
                          Mark Replied
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUpdateInquiryStatus(inq.id, 'UNREAD')}
                          className="px-2.5 py-1 text-[11px] bg-slate-200 text-slate-700 rounded font-medium hover:bg-slate-300 transition"
                        >
                          Mark Unread
                        </button>
                      )}
                      <a
                        href={`tel:${inq.phone}`}
                        className="px-2.5 py-1 text-[11px] bg-navy-900 text-white rounded font-medium inline-flex items-center space-x-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SCHEDULE & DOCTOR CLINIC INFO */}
        {activeTab === 'schedule' && settings && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm max-w-3xl space-y-6">
            <div>
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">
                Clinic Information & Timings
              </h3>
              <p className="text-xs text-slate-500">
                Verified clinic details active across all public pages.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block uppercase font-bold text-[10px]">Clinic Name</span>
                <span className="font-bold text-navy-900">{settings.clinicName}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block uppercase font-bold text-[10px]">Doctor</span>
                <span className="font-bold text-navy-900">{settings.doctorName}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block uppercase font-bold text-[10px]">Qualifications</span>
                <span className="font-bold text-navy-900">{settings.degrees}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-400 block uppercase font-bold text-[10px]">OPD Hours</span>
                <span className="font-bold text-emerald-800">{settings.opdTimings}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 sm:col-span-2">
                <span className="text-slate-400 block uppercase font-bold text-[10px]">Clinic Address</span>
                <span className="font-bold text-navy-900">{settings.address}, {settings.city}, {settings.state}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-navy-900 mb-2">
                Active Slot Schedule (6:00 PM – 10:00 PM)
              </h4>
              <div className="flex flex-wrap gap-2">
                {settings.availableTimeSlots.map((slot) => (
                  <span
                    key={slot}
                    className="px-3 py-1 bg-navy-50 text-navy-900 border border-navy-200 rounded-lg text-xs font-medium"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Appointment Detail & Status Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gold-500/30 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs text-gold-600 font-bold uppercase">Appointment Record</span>
                <h3 className="text-xl font-heading font-bold text-navy-900">
                  {selectedAppointment.referenceId}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="text-slate-400 hover:text-navy-900 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl">
                <div>
                  <span className="text-slate-400 block">Patient Name:</span>
                  <span className="font-bold text-navy-900">{selectedAppointment.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Age:</span>
                  <span className="font-bold text-navy-900">{selectedAppointment.age || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Phone:</span>
                  <span className="font-bold text-navy-900">{selectedAppointment.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Email:</span>
                  <span className="font-bold text-navy-900">{selectedAppointment.email || 'N/A'}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 block">Date & Preferred Time:</span>
                <span className="font-bold text-navy-900 text-sm">
                  {selectedAppointment.date} at {selectedAppointment.timeSlot}
                </span>
              </div>

              <div>
                <span className="text-slate-400 block">Specialty / Reason:</span>
                <span className="font-medium text-navy-900">{selectedAppointment.category}</span>
              </div>

              {selectedAppointment.notes && (
                <div>
                  <span className="text-slate-400 block">Patient Problem / Symptoms:</span>
                  <p className="bg-slate-50 p-2.5 rounded-lg text-slate-700 italic">
                    "{selectedAppointment.notes}"
                  </p>
                </div>
              )}

              {/* Doctor / Clinical Notes */}
              <div>
                <label className="text-slate-600 block font-semibold mb-1">
                  Doctor / Reception Notes:
                </label>
                <textarea
                  rows={2}
                  value={doctorNotesInput}
                  onChange={(e) => setDoctorNotesInput(e.target.value)}
                  placeholder="Add clinical observation, X-ray review plan..."
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            {/* Change Status Buttons */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-semibold text-slate-500 block uppercase">
                Update Status:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleUpdateStatus(selectedAppointment.id, 'CONFIRMED', doctorNotesInput)}
                  className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition"
                >
                  Confirm Slot
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedAppointment.id, 'COMPLETED', doctorNotesInput)}
                  className="py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition"
                >
                  Mark Done
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedAppointment.id, 'CANCELLED', doctorNotesInput)}
                  className="py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition"
                >
                  Cancel Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

