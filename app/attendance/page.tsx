"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function EmployeeAttendance() {
  return (
    <div className="bg-[#f6f8f7] dark:bg-[#112118] text-slate-900 dark:text-slate-100 min-h-screen font-['Manrope',_sans-serif]">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-20 py-4 sticky top-0 z-50">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white min-w-[140px]">
            <div className="size-8 bg-[#13ec5b] rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#112118]">bolt</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">PayrollHR</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center gap-10">
            <Link className="text-slate-600 dark:text-slate-400 hover:text-[#13ec5b] transition-colors text-sm font-semibold" href="/dashboard">Dashboard</Link>
            <Link className="text-[#13ec5b] text-sm font-bold border-b-2 border-[#13ec5b] pb-1" href="/attendance">Attendance</Link>
            <Link className="text-slate-600 dark:text-slate-400 hover:text-[#13ec5b] transition-colors text-sm font-semibold" href="/payslips">Payslips</Link>
          </nav>
          <div className="flex items-center gap-4 min-w-[140px] justify-end">
            <ThemeToggle />
            <button className="flex items-center justify-center rounded-xl size-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-xl size-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div
              className="size-10 rounded-full border-2 border-[#13ec5b]/20 bg-cover bg-center"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAg_F4v95wmoXBKzUqZl_bSagbdxarE_E7y_yF3nEToHSUH1Dy73QUVSi_a2c5XVVbssUof002oSDOOCfrB3BqAXro_qwy5PUgiAG5UnuvVoK-umya_Y8t82q6tD1HNSCZSsVM8FGjlAl9JxL4LeD19gfbNV8NCMF0Oz1Hfsq51Xll3DDS50SsuLT09Bg8Qupr09Uj211ujLgOqQAmbepcy1L8xEC_D_cNdeGyoI43QTM9PLXIiNPZ89jqEKp_ZrJYDgiY2SoMAWFAd")` }}
            ></div>
          </div>
        </header>

        <main className="max-w-[1024px] mx-auto w-full px-4 py-8 flex flex-col gap-8">
          {/* Welcome */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Good Morning, Alex</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              Monday, October 23, 2023
            </p>
          </div>

          {/* Clock Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-8 md:p-12 text-center border border-slate-100 dark:border-slate-800">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest">Current Time</span>
                <p className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
                  10:45:22<span className="text-[#13ec5b] text-4xl ml-2">AM</span>
                </p>
              </div>
              <div className="w-full max-w-md bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-left">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Shift Schedule</p>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">09:00 AM - 06:00 PM</p>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Time Elapsed</p>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold">1h 45m 22s</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#13ec5b]/30 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <button className="relative flex items-center justify-center gap-3 px-12 py-6 bg-[#13ec5b] text-[#112118] rounded-full font-black text-xl shadow-lg shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined font-bold text-2xl">logout</span>
                  Clock Out
                </button>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Remote - San Francisco, CA
              </p>
            </div>
          </div>

          {/* Weekly Attendance Log */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Weekly Attendance Log</h2>
              <button className="flex items-center gap-2 text-[#13ec5b] font-bold text-sm hover:underline">
                <span className="material-symbols-outlined text-sm">download</span>
                Export Log
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Time In</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Time Out</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Hours</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="bg-[#13ec5b]/[0.03] dark:bg-[#13ec5b]/[0.02]">
                      <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">Oct 23, 2023</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">09:00 AM</td>
                      <td className="px-6 py-4 text-sm text-slate-400 dark:text-slate-500 italic">--:--</td>
                      <td className="px-6 py-4 text-sm font-bold text-[#13ec5b]">Active</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-[#13ec5b]/20 text-[#13ec5b] uppercase">On Time</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">Oct 20, 2023</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">08:55 AM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">05:30 PM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">8h 35m</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-[#13ec5b]/20 text-[#13ec5b] uppercase">On Time</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">Oct 19, 2023</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">09:15 AM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">05:45 PM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">8h 30m</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 uppercase">Late (15m)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">Oct 18, 2023</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">08:50 AM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">05:20 PM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">8h 30m</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-[#13ec5b]/20 text-[#13ec5b] uppercase">On Time</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">Oct 17, 2023</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">09:02 AM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">05:35 PM</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">8h 33m</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-[#13ec5b]/20 text-[#13ec5b] uppercase">On Time</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <button className="text-sm font-bold text-slate-500 hover:text-[#13ec5b] transition-colors py-2 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                View Historical Data
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto py-10 text-center border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-400 text-sm font-medium">© 2023 PayrollHR SMB Solutions. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
