"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function EmployeeDashboard() {
  return (
    <div className="bg-[#f6f8f6] dark:bg-[#102216] text-slate-900 dark:text-slate-100 antialiased font-['Manrope',_sans-serif]">
      <div className="relative flex min-h-screen flex-col">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b border-[#13ec5b]/10 bg-white/80 dark:bg-[#102216]/80 backdrop-blur-md px-6 md:px-12 py-3">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#13ec5b] text-slate-900">
                <span className="material-symbols-outlined text-2xl font-bold">payments</span>
              </div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">PayrollHR</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-semibold text-[#13ec5b] transition-colors" href="/dashboard">Dashboard</Link>
              <Link className="text-sm font-medium text-slate-500 hover:text-[#13ec5b] transition-colors" href="/attendance">Attendance</Link>
              <Link className="text-sm font-medium text-slate-500 hover:text-[#13ec5b] transition-colors" href="/payslips">Payslips</Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#13ec5b]/20 hover:text-[#13ec5b] transition-all">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#13ec5b]/20 hover:text-[#13ec5b] transition-all">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#13ec5b]/20">
                <img
                  alt="Profile"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYYPJhOVwYnUK6Z9tE8u5mihopR8s4NFkrNvJ4SYLbmb5dv3wdrvxtNF066BAoNCoO8TfMkt-eSaA7liHoJvg4AkUyKEqdWEKJF-DBh0sh9da9ISZCkXBgC878QFfNjB5APZe3yPglpCRYNisqulQgvLNEpm0qrjkBxuOzOb6-6XVaFc5sQ23rLofKCcV-o5cH9uZGl-5lz3KRAKl2v3iJ0ZfTMPecJLEQoT1dD8OIpSNvnHxiv0ktGAVdstT_Ri6HbIhGjTk0iQuk"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl flex-1 px-6 md:px-12 py-10">
          {/* Welcome Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Good Morning, Alex! 👋</h2>
              <p className="mt-2 text-lg text-slate-500 dark:text-slate-400 font-medium">Monday, October 23rd, 2023</p>
            </div>
            {/* Quick Action: Clock In */}
            <div className="flex items-center gap-3">
              <button className="group flex items-center gap-3 rounded-2xl bg-[#13ec5b] px-8 py-4 font-bold text-slate-900 shadow-lg shadow-[#13ec5b]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">alarm_on</span>
                <span className="text-lg">Clock In Now</span>
              </button>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Stats Overview Section */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              {/* Card: Next Pay Day */}
              <div className="group relative overflow-hidden rounded-xl border border-[#13ec5b]/10 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Next Pay Day</p>
                  <span className="material-symbols-outlined text-[#13ec5b] bg-[#13ec5b]/10 p-2 rounded-lg">event_repeat</span>
                </div>
                <h3 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">In 5 Days</h3>
                <p className="mt-1 text-sm font-medium text-[#13ec5b]">Friday, Oct 28</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#13ec5b] group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Card: Total Hours */}
              <div className="group relative overflow-hidden rounded-xl border border-[#13ec5b]/10 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Weekly Hours</p>
                  <span className="material-symbols-outlined text-[#13ec5b] bg-[#13ec5b]/10 p-2 rounded-lg">timer</span>
                </div>
                <h3 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">32 / 40 hrs</h3>
                <div className="mt-4 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-full w-[80%] rounded-full bg-[#13ec5b] shadow-[0_0_8px_rgba(19,236,91,0.4)]"></div>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">80% of weekly goal complete</p>
              </div>

              {/* Card: Leave Balance */}
              <div className="group relative overflow-hidden rounded-xl border border-[#13ec5b]/10 bg-white dark:bg-slate-900 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Leave Balance</p>
                  <span className="material-symbols-outlined text-[#13ec5b] bg-[#13ec5b]/10 p-2 rounded-lg">beach_access</span>
                </div>
                <h3 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">12 Days</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">Available Paid Time Off</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#13ec5b] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Main Feed Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Activity Feed */}
              <div className="rounded-xl border border-[#13ec5b]/5 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Recent Activity</h3>
                  <button className="text-sm font-semibold text-[#13ec5b] hover:underline">View History</button>
                </div>
                <div className="space-y-6">
                  {/* Entry 1 */}
                  <div className="flex gap-4">
                    <div className="relative flex h-fit flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#13ec5b]/20 text-[#13ec5b]">
                        <span className="material-symbols-outlined text-xl">login</span>
                      </div>
                      <div className="mt-2 h-10 w-px bg-slate-200 dark:bg-slate-800"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-900 dark:text-white text-lg">Clocked In</p>
                        <span className="text-sm font-medium text-slate-400">Today, 8:59 AM</span>
                      </div>
                      <p className="mt-1 text-slate-500 dark:text-slate-400">Headquarters Office • Floor 4</p>
                    </div>
                  </div>

                  {/* Entry 2 */}
                  <div className="flex gap-4">
                    <div className="relative flex h-fit flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
                        <span className="material-symbols-outlined text-xl">logout</span>
                      </div>
                      <div className="mt-2 h-10 w-px bg-slate-200 dark:bg-slate-800"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-900 dark:text-white text-lg">Clocked Out</p>
                        <span className="text-sm font-medium text-slate-400">Oct 20, 5:15 PM</span>
                      </div>
                      <p className="mt-1 text-slate-500 dark:text-slate-400">Remote Work • Home Office</p>
                    </div>
                  </div>

                  {/* Entry 3 */}
                  <div className="flex gap-4">
                    <div className="relative flex h-fit flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
                        <span className="material-symbols-outlined text-xl">login</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-slate-900 dark:text-white text-lg">Clocked In</p>
                        <span className="text-sm font-medium text-slate-400">Oct 20, 9:02 AM</span>
                      </div>
                      <p className="mt-1 text-slate-500 dark:text-slate-400">Remote Work • Home Office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Upcoming Holidays */}
              <div className="rounded-xl border border-[#13ec5b]/5 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Company Holidays</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-lg bg-[#f6f8f6] dark:bg-[#102216] p-3">
                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm">
                      <span className="text-[10px] font-bold text-[#13ec5b] uppercase">Nov</span>
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white leading-none">11</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Veterans Day</p>
                      <p className="text-xs text-slate-500">Friday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg bg-[#f6f8f6] dark:bg-[#102216] p-3">
                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-sm">
                      <span className="text-[10px] font-bold text-[#13ec5b] uppercase">Nov</span>
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white leading-none">24</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Thanksgiving</p>
                      <p className="text-xs text-slate-500">Thursday</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Helpful Links */}
              <div className="rounded-xl border border-[#13ec5b]/10 bg-gradient-to-br from-[#13ec5b]/10 to-transparent p-6">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#13ec5b] transition-colors" href="#">
                      <span className="material-symbols-outlined text-base">description</span>
                      Employee Handbook
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#13ec5b] transition-colors" href="#">
                      <span className="material-symbols-outlined text-base">health_and_safety</span>
                      Benefit Summary
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#13ec5b] transition-colors" href="#">
                      <span className="material-symbols-outlined text-base">support_agent</span>
                      Contact HR Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile Floating Action Button */}
        <div className="fixed bottom-6 right-6 md:hidden">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#13ec5b] text-slate-900 shadow-xl active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-3xl font-bold">alarm_on</span>
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-auto border-t border-[#13ec5b]/5 bg-white dark:bg-slate-900 px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm font-medium text-slate-500">© 2023 PayrollHR Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-sm font-medium text-slate-500 hover:text-[#13ec5b]" href="#">Privacy Policy</a>
              <a className="text-sm font-medium text-slate-500 hover:text-[#13ec5b]" href="#">Help Center</a>
              <a className="text-sm font-medium text-slate-500 hover:text-[#13ec5b]" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
