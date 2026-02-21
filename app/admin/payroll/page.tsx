"use client";

import React from "react";
import Link from "next/link";

export default function PayrollProcessing() {
  return (
    <div className="bg-[#f6f6f8] text-slate-900 min-h-screen flex flex-col font-['Manrope',_sans-serif]">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
        <div className="w-full px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="bg-[#2b6cee] text-white p-1.5 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
              </div>
              <h1 className="text-xl font-extrabold tracking-tight text-[#2b6cee]">Payroll Pro</h1>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <Link className="text-slate-500 hover:text-[#2b6cee] font-medium text-sm transition-colors py-5" href="/admin">Dashboard</Link>
              <Link className="text-slate-500 hover:text-[#2b6cee] font-medium text-sm transition-colors py-5" href="/admin/employees">Employees</Link>
              <Link className="text-[#2b6cee] font-bold text-sm border-b-2 border-[#2b6cee] py-5" href="/admin/payroll">Payroll</Link>
              <Link className="text-slate-500 hover:text-[#2b6cee] font-medium text-sm transition-colors py-5" href="/admin/attendance">Attendance</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-[#2b6cee]/20 placeholder:text-slate-400" placeholder="Search employees..." type="text" />
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200">
              <img className="w-full h-full object-cover" alt="Admin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBgqbWQPM_hyheX1daZ74fjbrqQtPYSkmuuJjg7VlYTar4uRfW64DlfmiQkxK1eWnEyrYGXyX4abLPZDi2FEk0ZfljIyrQI1ZG0QEd9YTz1bP-uCQVVFK6ayHKrHGm7J-z29OFc6iqrs4ggBcSiYxNWZxUgR8pB-OB8FhoWCTY_7n4fOsGOsnzpBv6-VfeR0irM7L-H2nTa3-VW8vwxEyX7Y1UsUlLXoV0OxgbUk4V4bpipD9bxRy45VMX_M0LMQLUvfiUUDIArmqt" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full px-6 py-8 flex flex-col gap-6">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Payroll Processing</h2>
            <div className="flex items-center gap-2 mt-2 text-slate-500 font-medium">
              <span className="material-symbols-outlined text-base">calendar_month</span>
              <span>Pay Period: October 1–31, 2023</span>
              <span className="mx-2 text-slate-300">•</span>
              <span className="text-slate-400">Monthly Cycle</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50">
              <span className="material-symbols-outlined text-lg">download</span>
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2b6cee] text-white rounded-lg text-sm font-bold shadow-lg shadow-[#2b6cee]/20 hover:brightness-110">
              <span className="material-symbols-outlined text-lg">add</span>
              Add Adjustment
            </button>
          </div>
        </div>

        {/* Processing Status */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Processing Status</span>
              <span className="text-sm font-bold text-[#2b6cee]">85% Complete</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div className="bg-[#2b6cee] h-full rounded-full transition-all duration-500" style={{ width: "85%" }}></div>
            </div>
            <p className="mt-2 text-xs text-slate-400">38 of 45 employees processed and validated.</p>
          </div>
          <div className="flex gap-8 md:border-l border-slate-100 md:pl-8">
            <div className="text-center">
              <p className="text-2xl font-black text-slate-900 tabular-nums">45</p>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Headcount</p>
            </div>
            <div className="text-center px-8 border-x border-slate-100">
              <p className="text-2xl font-black text-[#2e7d32] tabular-nums">38</p>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ready</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-[#ef6c00] tabular-nums">7</p>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Action Required</p>
            </div>
          </div>
        </div>

        {/* Employee Payroll Table */}
        <div className="bg-white rounded-xl border border-slate-200 flex-1 overflow-hidden flex flex-col mb-24">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-8 text-xs font-bold text-slate-500 uppercase tracking-widest w-[25%]">Employee</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Basic Pay</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Allowances</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Deductions</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Net Pay</th>
                  <th className="py-4 px-8 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Row 1 - Ready */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100">
                        <img className="h-full w-full object-cover" alt="Alex Rivera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHHjKgH6w4ULDwmP5LJio_NGQcKiDXLIZ9ELxFLLBzXl6AtUpz7QD7QhmzBd3IzGjd4CJk-gLtmVPFc-ojPwNRff-RJ4EtqlwcR4Fk6RdQ3iU51axY46c_3vHIbFChNAV1m13_drzSRGCCd__CVBgM4oVKF62-FuSrd14wygtt6PtfrznAbJRUn8VMyCJLyDv00H_xedvxmjaFLaboPCboMbEUCBTzgfeb_OF6mS7znr7bZ39NKNXiP8D7CHLDgz-kMfv7iMQVXXys" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Alex Rivera</p>
                        <p className="text-xs text-slate-500">Sr. Product Designer</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#e8f5e9] text-[#2e7d32]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32] mr-2"></span>
                      Ready
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right tabular-nums font-medium text-slate-700">$6,500.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-slate-600">$450.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-red-500">-$1,245.00</td>
                  <td className="py-5 px-6 text-right tabular-nums font-bold text-slate-900">$5,705.00</td>
                  <td className="py-5 px-8 text-right">
                    <button className="p-2 text-slate-400 hover:text-[#2b6cee] transition-colors">
                      <span className="material-symbols-outlined text-xl">edit_square</span>
                    </button>
                  </td>
                </tr>
                {/* Row 2 - Ready */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100">
                        <img className="h-full w-full object-cover" alt="Sarah Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwildx1f1MbFsT_BAixyriYLJKqALpIUvsy26ipvmzEVluRJWaZZfjUY9DbAoCGTuat-7tyy9KPXYJ2nGv1Oxc-t-QR1PwFsaTMZ3SnJZGmMh2Z6hq2uTCiew_0FmHcAxPwC7MSw2KHBzDe-rfNDw7qv1cqPgxvurq-RF-q3KNdGCFiyVWizvBR5x99z8DOfsl2WR-zMUCO-edFd19pSOBdlcbf3zXkFyDpTtM_X2qcRs8moqQ3-BxxEBPXQMSLI7ExeRU04RITGOq" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Sarah Chen</p>
                        <p className="text-xs text-slate-500">Engineering Manager</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#e8f5e9] text-[#2e7d32]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32] mr-2"></span>
                      Ready
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right tabular-nums font-medium text-slate-700">$8,200.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-slate-600">$300.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-red-500">-$1,840.00</td>
                  <td className="py-5 px-6 text-right tabular-nums font-bold text-slate-900">$6,660.00</td>
                  <td className="py-5 px-8 text-right">
                    <button className="p-2 text-slate-400 hover:text-[#2b6cee] transition-colors">
                      <span className="material-symbols-outlined text-xl">edit_square</span>
                    </button>
                  </td>
                </tr>
                {/* Row 3 - Warning */}
                <tr className="bg-[#fff3e0]/10 hover:bg-[#fff3e0]/20 transition-colors">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100">
                        <img className="h-full w-full object-cover" alt="Marcus Thorne" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbzEE8z9ySHJUa8fBsiOuFgEh_yu4m4__JQoowrUVhQy_fNFholSUiSqoyB2A-PEZYlske556SJduqnc81rHB02X2gICfc4_wrC_kYaDYVmajiZREwA2JchebRLzzgPkt1mi4WS_GfBnT3rMUYDMVsIFGtcwEG6ra4kctkpqJrDnI1-l_ZQSI5Q9_Y0XI9eOxalQCh3RGEwUQG3o1_Y8VDkIYoOr7FTOG48-Hn6W2dZ5656lDKP9aSzfi7X8KamjrudGesmjyzGO4U" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Marcus Thorne</p>
                        <p className="text-xs text-slate-500">Account Executive</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#fff3e0] text-[#ef6c00]">
                      <span className="material-symbols-outlined text-xs mr-1">priority_high</span>
                      Missing Tax Info
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right tabular-nums font-medium text-slate-700">$5,200.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-slate-600">$1,200.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-slate-400 italic">Calculating...</td>
                  <td className="py-5 px-6 text-right tabular-nums font-bold text-slate-900">--</td>
                  <td className="py-5 px-8 text-right">
                    <button className="px-4 py-1.5 bg-[#ef6c00] text-white rounded-lg text-xs font-bold hover:brightness-110 shadow-sm transition-all">
                      Fix Info
                    </button>
                  </td>
                </tr>
                {/* Row 4 - Ready */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-5 px-8">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-100">
                        <img className="h-full w-full object-cover" alt="Elena Vasquez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMHzCXrrERYzHmNnwzgWVyEuIFcFsRe-_pDinHRfycGBsQpJJmy4bNXM34_lCKpapQRz7C15KAZGEkzpXxpswIRyIgdQm_p-ETL71d3_CNBXpAcYuyvoxznCghFr7xIM9rgjXTK3TBE5b9IoV696UPpVt8Y5pfyuab0Rv9dDhcVNHIJNdRzpmClYUnMagEZkmLzubuQxk2x1NmDgT-Xk0eADWQeW43xKffnRS8kp4o5bqk1j2uu1YB-ZJmhwZO9_qUnedyzJyKu1Jt" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Elena Vasquez</p>
                        <p className="text-xs text-slate-500">Marketing Specialist</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#e8f5e9] text-[#2e7d32]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32] mr-2"></span>
                      Ready
                    </span>
                  </td>
                  <td className="py-5 px-6 text-right tabular-nums font-medium text-slate-700">$4,800.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-slate-600">$150.00</td>
                  <td className="py-5 px-6 text-right tabular-nums text-red-500">-$980.00</td>
                  <td className="py-5 px-6 text-right tabular-nums font-bold text-slate-900">$3,970.00</td>
                  <td className="py-5 px-8 text-right">
                    <button className="p-2 text-slate-400 hover:text-[#2b6cee] transition-colors">
                      <span className="material-symbols-outlined text-xl">edit_square</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-8 py-5 border-t border-slate-200 flex justify-between items-center bg-slate-50/50">
            <span className="text-sm text-slate-500">Showing <span className="font-bold text-slate-700">4</span> of <span className="font-bold text-slate-700">45</span> employees</span>
            <div className="flex gap-2">
              <button className="p-1.5 border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Footer with Totals */}
      <footer className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-slate-200 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] z-50">
        <div className="w-full px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Total Gross Payroll</span>
              <span className="text-2xl font-black text-slate-900 tabular-nums">$284,540.00</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Total Taxes &amp; Ded.</span>
              <span className="text-2xl font-black text-red-500 tabular-nums">-$52,140.32</span>
            </div>
            <div className="flex flex-col border-l border-slate-200 pl-16">
              <span className="text-[10px] uppercase font-black text-[#2b6cee] tracking-widest mb-1">Total Net Amount</span>
              <span className="text-3xl font-black text-[#2b6cee] tabular-nums">$232,399.68</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="hidden md:block px-6 py-3 font-bold text-slate-600 hover:text-slate-900 transition-colors">
              Save for later
            </button>
            <button className="flex items-center gap-3 px-10 py-4 bg-[#2e7d32] text-white rounded-xl font-black text-lg shadow-lg shadow-green-500/20 hover:brightness-110 active:scale-[0.98] transition-all">
              <span>Review &amp; Finalize</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
