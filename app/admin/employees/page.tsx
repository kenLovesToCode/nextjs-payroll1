"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { EMPLOYEES, DIRECTORY_STATS } from "./mockData";
import { DirectoryStats } from "./DirectoryStats";
import { EmployeeRow } from "./EmployeeRow";

export default function EmployeeDirectory() {
  return (
    <div className="bg-[#f6f6f8] dark:bg-slate-950 text-slate-900 dark:text-white font-['Manrope',_sans-serif] flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-[#2b6cee]/10 shrink-0 z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-8">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 bg-[#2b6cee] rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <h1 className="font-bold text-lg leading-none tracking-tight">Payroll SMB</h1>
              </div>
              <nav className="hidden md:flex items-center gap-1">
                <Link className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-[#2b6cee]/5 rounded-lg transition-colors font-medium text-sm" href="/admin">
                  <span className="material-symbols-outlined text-[20px]">dashboard</span>
                  <span>Dashboard</span>
                </Link>
                <Link className="flex items-center gap-2 px-4 py-2 bg-[#2b6cee]/10 dark:bg-[#2b6cee]/20 text-[#2b6cee] rounded-lg font-semibold text-sm" href="/admin/employees">
                  <span className="material-symbols-outlined text-[20px]">groups</span>
                  <span>Employees</span>
                </Link>
                <Link className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-[#2b6cee]/5 rounded-lg transition-colors font-medium text-sm" href="/admin/payroll">
                  <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                  <span>Payroll</span>
                </Link>
                <Link className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-[#2b6cee]/5 rounded-lg transition-colors font-medium text-sm" href="/admin/attendance">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span>Attendance</span>
                </Link>
              </nav>
            </div>
            {/* Search */}
            <div className="flex-1 max-w-md hidden lg:block">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-xl group-focus-within:text-[#2b6cee] transition-colors">search</span>
                <input
                  className="w-full bg-[#f6f6f8] dark:bg-slate-950 border border-transparent focus:border-[#2b6cee]/20 focus:bg-white dark:bg-slate-900 focus:ring-4 focus:ring-[#2b6cee]/5 rounded-xl py-2 pl-10 pr-4 text-sm transition-all"
                  placeholder="Search team..."
                  type="text"
                />
              </div>
            </div>
            {/* User */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button className="p-2 text-slate-400 dark:text-slate-500 hover:text-[#2b6cee] transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
              <div className="flex items-center gap-3 pl-2">
                <div className="size-9 rounded-full bg-[#2b6cee]/20 flex items-center justify-center text-[#2b6cee] font-bold text-xs">JD</div>
                <div className="hidden xl:flex flex-col">
                  <span className="text-sm font-semibold leading-none">John Doe</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 dark:text-slate-500 mt-1">Super Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1440px] mx-auto p-6 lg:p-8 space-y-8">
          {/* Title + Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                <span>Admin</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-[#2b6cee]">Staff Directory</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Employee Directory</h2>
              <p className="text-slate-500 dark:text-slate-400 dark:text-slate-500 text-base mt-1">Central management for all active and archived team members.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-white dark:bg-slate-900 border border-[#2b6cee]/10 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#2b6cee] transition-colors shadow-sm">
                <span className="material-symbols-outlined">file_download</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-[#2b6cee] hover:bg-[#2b6cee]/90 text-white px-6 py-3 rounded-xl font-bold shadow-xl shadow-[#2b6cee]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                <span className="material-symbols-outlined">person_add</span>
                <span>Add New Employee</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <DirectoryStats stats={DIRECTORY_STATS} />

          {/* Employee Table */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-[#2b6cee]/10 shadow-sm overflow-hidden">
            {/* Filter Toolbar */}
            <div className="p-4 border-b border-[#2b6cee]/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {["Department", "Status", "Employment Type"].map((filter) => (
                  <button
                    key={filter}
                    className="flex items-center gap-2 px-4 py-2 bg-[#f6f6f8] dark:bg-slate-950 border border-transparent rounded-xl text-sm font-semibold hover:border-[#2b6cee]/20 transition-all"
                  >
                    <span>{filter}</span>
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-lg">keyboard_arrow_down</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400 dark:text-slate-500 mr-2">Sort by:</span>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  <span>Recently Added</span>
                  <span className="material-symbols-outlined text-lg">sort</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50/50 dark:bg-slate-800/20 border-b border-[#2b6cee]/5">
                    {["Employee Name", "Department", "Role", "Status", "Actions"].map((col, i) => (
                      <th
                        key={col}
                        className={`px-6 py-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400 dark:text-slate-500 ${i === 4 ? "text-right" : ""}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2b6cee]/5">
                  {EMPLOYEES.map((emp) => (
                    <EmployeeRow key={emp.id} employee={emp} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-[#2b6cee]/5 bg-slate-50 dark:bg-slate-800/50/50 dark:bg-slate-800/20 flex items-center justify-between">
              <div className="text-xs text-slate-500 dark:text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                Showing 1-5 of 124 employees
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded-lg border border-[#2b6cee]/10 hover:bg-white dark:hover:bg-slate-900 dark:bg-slate-900 transition-colors disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <div className="flex items-center gap-1">
                  <button className="size-8 flex items-center justify-center rounded-xl bg-[#2b6cee] text-white text-xs font-bold shadow-lg shadow-[#2b6cee]/20">1</button>
                  <button className="size-8 flex items-center justify-center rounded-xl hover:bg-[#2b6cee]/10 dark:bg-[#2b6cee]/20 text-xs font-bold">2</button>
                  <button className="size-8 flex items-center justify-center rounded-xl hover:bg-[#2b6cee]/10 dark:bg-[#2b6cee]/20 text-xs font-bold">3</button>
                  <span className="text-slate-400 dark:text-slate-500 text-xs px-1">...</span>
                  <button className="size-8 flex items-center justify-center rounded-xl hover:bg-[#2b6cee]/10 dark:bg-[#2b6cee]/20 text-xs font-bold">25</button>
                </div>
                <button className="p-1 rounded-lg border border-[#2b6cee]/10 hover:bg-white dark:hover:bg-slate-900 dark:bg-slate-900 transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
