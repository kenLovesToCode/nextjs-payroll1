"use client";

import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="bg-[#f6f6f8] text-slate-900 min-h-screen font-['Manrope',_sans-serif]">
      {/* Admin Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#2b6cee] size-9 rounded-lg flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined text-xl">payments</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-slate-900 font-bold text-base leading-tight">Payroll Admin</h1>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <Link className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#2b6cee]/10 text-[#2b6cee] text-sm font-semibold" href="/admin">
                  <span className="material-symbols-outlined text-[20px]">dashboard</span>
                  Dashboard
                </Link>
                <Link className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors" href="/admin/employees">
                  <span className="material-symbols-outlined text-[20px]">group</span>
                  Employees
                </Link>
                <Link className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors" href="/admin/payroll">
                  <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                  Payroll
                </Link>
                <Link className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors" href="/admin/attendance">
                  <span className="material-symbols-outlined text-[20px]">event_available</span>
                  Attendance
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden lg:flex items-center gap-2 bg-[#2b6cee] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#2b6cee]/90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">play_arrow</span>
                Run Payroll
              </button>
              <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
              <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-50 relative transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div
                className="size-8 rounded-full bg-slate-200 bg-cover bg-center border border-slate-200 shadow-sm"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRk0Hv8_drw7KYy4mugYZVwD7A3d1FbjYyyz25rVujH6PoyvHLRIaejW-7IJ03rMINoXlOMrldyHV5huRdNGfmIapoI0xSvEWa-yhC1g7OrsCjgsUIoMdkuHM61Tttn5-lf0RswdlC7ekSkqhnaXJHYgiFz6xz0IdliZ-oMso9TAFXsRtO0JF3Pcr83G5T8TGAem_b7qTSxC1v887GfMZGt44NrbcXvkGbVeSnelwzbqkqdT_CqD-MTRqlW8a49qxTalI_wxblHqgv')` }}
              ></div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
            <p className="text-slate-500 text-sm">Welcome back, here&apos;s what&apos;s happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 md:flex-none">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <span className="material-symbols-outlined text-lg">search</span>
              </span>
              <input className="pl-10 pr-4 py-2 rounded-lg border-slate-200 bg-white focus:ring-[#2b6cee] focus:border-[#2b6cee] text-sm w-full md:w-64" placeholder="Search data..." type="text" />
            </div>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <span className="material-symbols-outlined">badge</span>
              </span>
              <span className="text-green-500 text-xs font-bold">+2.5%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Total Employees</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">124</h3>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-purple-50 text-purple-600">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </span>
              <span className="text-slate-400 text-xs font-medium">Monthly</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Active Payroll</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">$45,200</h3>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-orange-50 text-orange-600">
                <span className="material-symbols-outlined">calendar_today</span>
              </span>
              <span className="text-[#2b6cee] text-xs font-bold">Soon</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Next Pay Date</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Oct 25, 2023</h3>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-green-50 text-green-600">
                <span className="material-symbols-outlined">checklist_rtl</span>
              </span>
              <span className="text-green-500 text-xs font-bold">Optimal</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Attendance Rate</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">98.2%</h3>
          </div>
        </div>

        {/* Payroll Processing Status */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Payroll Processing Status</h3>
              <p className="text-slate-500 text-sm">October Payroll Cycle • Processing direct deposits</p>
            </div>
            <span className="inline-flex px-3 py-1 bg-[#2b6cee]/10 text-[#2b6cee] text-sm font-bold rounded-full w-fit">75% Complete</span>
          </div>
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div className="h-full bg-[#2b6cee]" style={{ width: "75%" }}></div>
          </div>
          <div className="flex justify-between mt-3 text-[10px] sm:text-xs font-medium text-slate-400">
            <span>Data Collection</span>
            <span>Review</span>
            <span className="text-[#2b6cee]">Disbursement</span>
            <span>Completion</span>
          </div>
        </div>

        {/* Activity Feed + Bar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Recent Activities</h3>
              <button className="text-[#2b6cee] text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <span className="material-symbols-outlined text-sm">person_add</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">New employee added</p>
                  <p className="text-xs text-slate-500">Sarah Jenkins joined Marketing</p>
                  <p className="text-[10px] text-slate-400 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <span className="material-symbols-outlined text-sm">task_alt</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Tax filing submitted</p>
                  <p className="text-xs text-slate-500">Q3 2023 documentation sent</p>
                  <p className="text-[10px] text-slate-400 mt-1">Yesterday</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <span className="material-symbols-outlined text-sm">payments</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Bonus approved</p>
                  <p className="text-xs text-slate-500">Performance bonuses approved</p>
                  <p className="text-[10px] text-slate-400 mt-1">Oct 12, 2023</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                  <span className="material-symbols-outlined text-sm">history_edu</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Policy update</p>
                  <p className="text-xs text-slate-500">Updated overtime calculations</p>
                  <p className="text-[10px] text-slate-400 mt-1">Oct 10, 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Payroll Expenses Chart */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-bold text-slate-900">Monthly Payroll Expenses</h3>
                <p className="text-slate-500 text-sm">Summary of expenditures over last 6 months</p>
              </div>
              <select className="text-xs font-semibold bg-slate-50 border-none rounded-lg focus:ring-[#2b6cee] py-1.5 pl-3 pr-8">
                <option>Last 6 Months</option>
                <option>Year to Date</option>
              </select>
            </div>
            <div className="flex items-end justify-between h-56 gap-4 px-4">
              {[
                { month: "May", height: "65%", highlight: false },
                { month: "Jun", height: "72%", highlight: false },
                { month: "Jul", height: "85%", highlight: false },
                { month: "Aug", height: "78%", highlight: false },
                { month: "Sep", height: "92%", highlight: false },
                { month: "Oct", height: "100%", highlight: true },
              ].map((bar) => (
                <div key={bar.month} className="flex flex-col items-center flex-1 gap-3 group h-full">
                  <div className="w-full bg-slate-100 rounded-t-lg relative flex items-end overflow-hidden h-full">
                    <div
                      className={`w-full ${bar.highlight ? "bg-[#2b6cee]" : "bg-[#2b6cee]/40 group-hover:bg-[#2b6cee]/60"} transition-colors rounded-t-lg`}
                      style={{ height: bar.height }}
                    ></div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${bar.highlight ? "text-[#2b6cee]" : "text-slate-400"}`}>
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#2b6cee]"></span>
                  <span className="text-xs text-slate-500">Current Month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#2b6cee]/40"></span>
                  <span className="text-xs text-slate-500">Historical Average</span>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-700">Total YTD: <span className="text-[#2b6cee]">$264,800</span></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
