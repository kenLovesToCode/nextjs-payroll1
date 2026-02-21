"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AttendanceTracking() {
  return (
    <div className="bg-[#f6f6f8] dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen font-['Manrope',_sans-serif]">
      <div className="layout-container flex h-full flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#2b6cee]">
              <div className="size-8 bg-[#2b6cee]/10 dark:bg-[#2b6cee]/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-[#2b6cee]">rocket_launch</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">PayrollHR</h2>
            </div>
            <nav className="flex items-center gap-6">
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-[#2b6cee] transition-colors" href="/admin">Dashboard</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-[#2b6cee] transition-colors" href="/admin/employees">Employees</Link>
              <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-[#2b6cee] transition-colors" href="/admin/payroll">Payroll</Link>
              <Link className="text-[#2b6cee] text-sm font-semibold leading-normal" href="/admin/attendance">Attendance</Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="relative flex min-w-40 max-w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-xl">search</span>
              <input className="w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#2b6cee]/20 placeholder:text-slate-400 dark:text-slate-500" placeholder="Search employees..." />
            </label>
            <div className="flex gap-2">
              <ThemeToggle />
              <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-700">
                <span className="material-symbols-outlined text-xl">notifications</span>
              </button>
              <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-700">
                <span className="material-symbols-outlined text-xl">settings</span>
              </button>
            </div>
            <div className="rounded-full size-10 overflow-hidden border-2 border-slate-100 dark:border-slate-800/50">
              <img alt="User Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtK4OhxszNerCXOtajdEbmhkwrUtGNlV21Mc8jeRfgSmxgpBD0mBPeuLBS2rStj4q3Utw75bKzAahlH5vAnCjOEtXoEeiZyaOn_5T_MfGS9tSeURxWdcitasSazeHOSjcXyriPmYacnUQ26BJXvrKJ3ej6wGz3UuZolP4hT91q1vKPaahIy0ldc4ohY99GW7lpnMcsNWOxg4h5dSyvUfbxmPab6DCtHdiM9fxcFIC0ITXG9cJFpjt0iPXTd42wjLQIqV568HowYTvX" />
            </div>
          </div>
        </header>

        <main className="max-w-[1200px] mx-auto w-full px-6 py-8">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight mb-2">Attendance Tracking</h1>
            <p className="text-slate-500 dark:text-slate-400 dark:text-slate-500">Monitor employee check-ins, leave requests, and overtime in one place.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 dark:text-slate-400 dark:text-slate-500 text-sm font-medium">Total Present Today</span>
                <span className="material-symbols-outlined text-emerald-500">group</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">124</span>
                <span className="text-emerald-600 text-sm font-semibold mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_up</span>+5.2%
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 dark:text-slate-400 dark:text-slate-500 text-sm font-medium">Pending Leaves</span>
                <span className="material-symbols-outlined text-amber-500">event_busy</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">8</span>
                <span className="text-slate-400 dark:text-slate-500 text-sm font-semibold mb-1">vs yesterday</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-500 dark:text-slate-400 dark:text-slate-500 text-sm font-medium">Overtime Hours</span>
                <span className="material-symbols-outlined text-orange-500">timer</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">42 hrs</span>
                <span className="text-rose-500 text-sm font-semibold mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">trending_down</span>-2.1%
                </span>
              </div>
            </div>
          </div>

          {/* Table with Tabs */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 pt-4 border-b border-slate-100 dark:border-slate-800/50">
              <div className="flex gap-8 overflow-x-auto">
                <a className="border-b-2 border-[#2b6cee] pb-4 px-1" href="#">
                  <span className="text-sm font-bold text-[#2b6cee]">Daily Attendance</span>
                </a>
                <a className="border-b-2 border-transparent hover:border-slate-300 pb-4 px-1 transition-all" href="#">
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400 dark:text-slate-500">Leave Requests</span>
                </a>
                <a className="border-b-2 border-transparent hover:border-slate-300 pb-4 px-1 transition-all" href="#">
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400 dark:text-slate-500">Overtime</span>
                </a>
              </div>
              <div className="flex items-center gap-3 pb-4 pt-2 sm:pt-0">
                <button className="flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  Oct 1, 2023 - Oct 31, 2023
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-[#2b6cee] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#2b6cee]/90 transition-all">
                  <span className="material-symbols-outlined text-lg">download</span>
                  Export CSV
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50/50 dark:bg-slate-800/20">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 dark:text-slate-500">Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 dark:text-slate-500">Employee Name</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 dark:text-slate-500">Time In</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 dark:text-slate-500">Time Out</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 dark:text-slate-500 text-center">Total Hours</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 dark:text-slate-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: "Alex Rivera", role: "Product Designer", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCYbPDD8LhgOIeFbP5Z6n3k20UXU5Q5q9UfETOen2IlpzIZIkpLj-EsiRQSHr729Hseh6rsugIwQNdX4G3U1S1YUTsXBgINKgAtOTLbTsp8HJB3RtUBE47bf5sBd6dtcruKkYLIK4rKpoQlZo-NXgoA9qARWAIHGZTR-5Y6F-BwbUe49Scp_mqpfpvWqREWPaKewL1luEHbInEOkDlTgswGOE1bEFwvq9qtLxeV3eNTPR4h1zEDT20AogEHt0_W7B04CGeBlLqyhxI", timeIn: "08:54 AM", timeOut: "05:32 PM", hours: "9h 38m", overtime: true, status: "Present" },
                    { name: "Sarah Chen", role: "Software Engineer", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwwTTzMB8NJe8yIyehhN6l5hCBZQdin14v6ULcRsn97DK5pIgPhzoNnOnaVM4vWo0uwGLEESg6W1RYL-pIsUVO-6ibRaFr1SQRwL6TezSWWsGdNI_3d5cNGYndV9Ka8XnNOXIIQfUi3Pu5zWZRSH2B9a1x2Ec1JaRKWnok6lzVB_Mvc2jiiGBpJ9WHCugVDCTejoN0GKG8IeATHJwck-rX47-Y_TAlRXRx2U6Eg8r_xn_wTsd93r1VaQgXNLejaoXlLxMSe7U6youT", timeIn: "09:02 AM", timeOut: "06:05 PM", hours: "9h 03m", overtime: true, status: "Present" },
                    { name: "Marcus Johnson", role: "Account Executive", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-Oyy4p5o1EPtmBhRj_nyHwaRGguPRWgkNXvVDnEXlaaGYhVVF8BwayxknvTkJyhma8vUbwWHCM1B7X3IFbtPaVZYBBUh0PXBfmm85pQrU9uHREIUO0O7bO1G6lUx1xvuhnWLt69XsqhxceIJfcbo1j3uKr3nfKWpKWpRcBGreWAKWTJd2JoIGsxy0wNBvxtDaGQcBU3q1xH4FJg1pQZzaRzacS637E_YSptE5vsQ9jQSpeHnpmOquJa2fhX1j6SXJq03iUcT7MleT", timeIn: "08:58 AM", timeOut: "05:01 PM", hours: "8h 03m", overtime: false, status: "Present" },
                    { name: "Elena Rodriguez", role: "Marketing Manager", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDp9G54e_5kajEKv4v5VbM8EzwZPw1GTAnCiaZoR039NIyAAqPj4GtJY3Fzu3Kng4zMvplWf0_1STdHWCJhQ5scMCNRjGYyp2pQg_th2IEUpNdWxlDXGy4Go_yNA85tDAyqsa-L964Mf9NmA69RUSrxjdwJ3OqzMdBSi6ny0oVgqHSW4-pFAoleQP2gePbVoaYccOC14OrB8oh-Su3tQXc8wPBt249k1Ej-0hhnBrbN3qO3Wdij3OZk6XVhLVeziik8wpUsvhpUYcnH", timeIn: "---", timeOut: "---", hours: "0h 0m", overtime: false, status: "Sick Leave" },
                    { name: "David Kim", role: "Support Lead", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBnh6Gf5solSDObDiC1zR6Yr7vKJBXZgV33evjpEGvjDqCgjcG88I571zFH2TTSQ9TH7uhCuIgtGgXj1hg638Pp6oNDsZsXGECe2tipOGivSj_e8-i6EjKN8UmWdXOMr-S9aNNTxQE6yX9_WUSCpItYW-CcTmHyl-nSfC58mvfat4Y9V2BK1a4KYSyNwHwqIiJI2rO1kNpgK7OenbvVPekkQixQxAu-iJ82h62i1pBuBCp-hZRYlxxiOgUYhXdNddXIvBIAPsCUTgC", timeIn: "08:45 AM", timeOut: "06:15 PM", hours: "9h 30m", overtime: true, status: "Present" },
                  ].map((emp) => (
                    <tr key={emp.name} className="hover:bg-slate-50 dark:hover:bg-slate-800/80 dark:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">Oct 24, 2023</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img alt="Avatar" className="size-8 rounded-full" src={emp.avatar} />
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{emp.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-500">{emp.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{emp.timeIn}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200">{emp.timeOut}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold ${
                          emp.overtime
                            ? "bg-[#fff7ed] text-[#9a3412]"
                            : emp.hours === "0h 0m"
                            ? "bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                        }`}>
                          {emp.hours}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold uppercase ${
                          emp.status === "Present"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
              <p className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">Showing 1 to 5 of 124 employees</p>
              <div className="flex gap-2">
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 dark:bg-slate-800/50">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="size-8 flex items-center justify-center rounded bg-[#2b6cee] text-white text-xs font-bold">1</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 dark:bg-slate-800/50 text-xs font-bold">2</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 dark:bg-slate-800/50 text-xs font-bold">3</button>
                <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 dark:bg-slate-800/50">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
