"use client";

import React from "react";
import Link from "next/link";

export default function EmployeePayslips() {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 min-h-screen font-['Manrope',_sans-serif]">
      <div className="relative flex flex-col w-full">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 text-[#2b6cee]">
                <span className="material-symbols-outlined text-2xl font-bold">bubble_chart</span>
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">PayrollHR</h1>
              </div>
              <nav className="hidden md:flex items-center gap-8">
                <Link className="px-1 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-[#13ec5b] transition-all relative" href="/dashboard">Dashboard</Link>
                <Link className="px-1 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-[#13ec5b] transition-all relative" href="/attendance">Attendance</Link>
                <Link className="px-1 py-2 text-sm font-semibold text-slate-900 dark:text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-500 after:rounded-full" href="/payslips">Payslips</Link>
              </nav>
              <div className="flex items-center gap-1">
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2.5 right-2.5 flex h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-slate-900"></span>
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </button>
                <div className="ml-2 h-8 w-8 rounded-full bg-[#2b6cee]/10 border border-[#2b6cee]/20 flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#2b6cee]/20 transition-all">
                  <img
                    alt="User profile"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAScvkTbkqHgoJRIG4-57kgRbrMZwjVCbKPwJaHUsrMw7ujRD2G6ih_xS4Di9UE0cYuuurQPd8VvVH5SaqRW-1hFybKnCLGKDV0KgHHLzLq8dIBB5KkAksqpYHHMMMu6TkqCS7qyEY3-vtK9rmPEkLWIgPVnVxlX0dDsBoknLvJ6SyFXiWfxiI08yIFtO1iTfA6JpT5z2KzabYY7wxwBsT2SiLUn9l6TKzOSzcJJA8MlQIV7BHu7DfG4SFTzrZr1pWc1KFrm2K3b2SG"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          {/* Welcome & Quick Stats */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Welcome back, Alex!</h2>
                <p className="mt-1 text-slate-500 dark:text-slate-400">Here&apos;s a quick look at your recent earnings and upcoming pay period.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 min-w-[200px]">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Next Pay Date</p>
                    <p className="font-bold text-slate-900 dark:text-white">Nov 5, 2023</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 min-w-[200px]">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hours Logged</p>
                    <p className="font-bold text-slate-900 dark:text-white">72.5 hrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Payslip Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-[#2b6cee]/20 shadow-xl shadow-[#2b6cee]/5">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.07]">
                <span className="material-symbols-outlined text-[12rem]">receipt_long</span>
              </div>
              <div className="p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                      Status: Paid on Oct 20, 2023
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Pay Period: Oct 1 — Oct 15, 2023</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Gross Earnings</span>
                      <span className="text-xl font-bold text-slate-900 dark:text-white">$5,240.00</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Total Deductions</span>
                      <span className="text-xl font-bold text-red-500">-$1,120.50</span>
                    </div>
                    <div className="flex flex-col col-span-2 sm:col-span-1">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Net Pay</span>
                      <span className="text-3xl font-extrabold text-[#2b6cee]">$4,119.50</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#2b6cee] text-white font-bold rounded-xl hover:bg-[#2b6cee]/90 transition-all shadow-lg shadow-[#2b6cee]/20">
                    <span className="material-symbols-outlined">download</span>
                    Download PDF
                  </button>
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                    <span className="material-symbols-outlined">visibility</span>
                    View Details
                  </button>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-[#2b6cee]/10 via-[#2b6cee]/50 to-[#2b6cee]/10"></div>
            </div>
          </div>

          {/* Past Pay Periods */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Past Pay Periods</h3>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                  <input
                    className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-[#2b6cee]/20 focus:border-[#2b6cee] outline-none transition-all"
                    placeholder="Search by month..."
                    type="text"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  2023
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {/* Period 1 */}
              <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#2b6cee]/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Sep 16 — Sep 30, 2023</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Paid on Oct 5, 2023</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
                  <div className="text-right">
                    <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Net Amount</p>
                    <p className="font-bold text-slate-900 dark:text-white">$4,119.50</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-[#2b6cee] hover:bg-[#2b6cee]/5 rounded-lg transition-all" title="View Details">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#2b6cee]/10 text-[#2b6cee] font-bold rounded-lg hover:bg-[#2b6cee] hover:text-white transition-all text-sm">
                      <span className="material-symbols-outlined text-sm">download</span>
                      PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* Period 2 */}
              <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#2b6cee]/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Sep 1 — Sep 15, 2023</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Paid on Sep 20, 2023</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
                  <div className="text-right">
                    <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Net Amount</p>
                    <p className="font-bold text-slate-900 dark:text-white">$4,085.20</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-[#2b6cee] hover:bg-[#2b6cee]/5 rounded-lg transition-all" title="View Details">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#2b6cee]/10 text-[#2b6cee] font-bold rounded-lg hover:bg-[#2b6cee] hover:text-white transition-all text-sm">
                      <span className="material-symbols-outlined text-sm">download</span>
                      PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* Period 3 - Bonus */}
              <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-amber-200 dark:border-amber-800/50 hover:border-amber-400/40 hover:shadow-md transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1 bg-amber-400"></div>
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
                    <span className="material-symbols-outlined">card_giftcard</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-slate-900 dark:text-white">Aug 1 — Aug 15, 2023</p>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 uppercase tracking-tighter">Performance Bonus</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Paid on Aug 20, 2023</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto md:gap-12">
                  <div className="text-right">
                    <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Net Amount</p>
                    <p className="font-bold text-slate-900 dark:text-white">$5,419.50</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-[#2b6cee] hover:bg-[#2b6cee]/5 rounded-lg transition-all" title="View Details">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#2b6cee]/10 text-[#2b6cee] font-bold rounded-lg hover:bg-[#2b6cee] hover:text-white transition-all text-sm">
                      <span className="material-symbols-outlined text-sm">download</span>
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <button className="px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm">
                Load Older Payslips
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2 opacity-60">
                <span className="material-symbols-outlined text-[#2b6cee]">bubble_chart</span>
                <p className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">PayrollHR Inc. © 2023</p>
              </div>
              <div className="flex gap-8">
                <a className="text-xs font-medium text-slate-500 hover:text-[#2b6cee] transition-colors" href="#">Support</a>
                <a className="text-xs font-medium text-slate-500 hover:text-[#2b6cee] transition-colors" href="#">Privacy</a>
                <a className="text-xs font-medium text-slate-500 hover:text-[#2b6cee] transition-colors" href="#">Compliance</a>
              </div>
              <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ID: EMP-2904-AT</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
