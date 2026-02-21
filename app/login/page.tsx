"use client";

import React from "react";

export default function LoginPage() {
  return (
    <div className="bg-[#f5f6f8] dark:bg-[#0f1623] min-h-screen flex flex-col font-['Manrope',_sans-serif]">
      {/* 
          Note: We assume Manrope and Material Symbols are handled globally 
          or via a layout-level font loader. For this generated standalone 
          version, we use the classes directly.
      */}
      <div className="flex-1 flex flex-col max-w-[480px] mx-auto w-full bg-white dark:bg-slate-900 shadow-xl min-h-screen relative overflow-hidden">
        {/* Top Branding Illustration Section */}
        <div className="relative h-[35vh] w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
          </div>
          {/* Brand Illustration / Hero Image */}
          <div className="relative z-10 w-full px-8 flex flex-col items-center">
            <div className="w-24 h-24 bg-[#2e74ff]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#2e74ff]/20">
              <span className="material-symbols-outlined text-[#2e74ff] text-5xl">account_balance_wallet</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Payroll<span className="text-[#2e74ff]">HR</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
              Secure Enterprise Access
            </p>
          </div>
          {/* Bottom Curve Decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white dark:bg-slate-900 rounded-t-[2.5rem]"></div>
        </div>

        {/* Login Form Section */}
        <div className="flex-1 px-8 pt-2 pb-12 flex flex-col">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welcome back</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Sign in to your employee or admin account
            </p>
          </div>

          <form className="space-y-5 flex-1" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-xl">mail</span>
                </div>
                <input
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#2e74ff]/20 focus:border-[#2e74ff] outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                  Password
                </label>
                <a className="text-[#2e74ff] text-xs font-bold hover:underline" href="#">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-xl">lock</span>
                </div>
                <input
                  className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#2e74ff]/20 focus:border-[#2e74ff] outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  placeholder="Enter your password"
                  type="password"
                />
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                  type="button"
                >
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center gap-2 ml-1 py-1">
              <input
                className="w-4 h-4 rounded text-[#2e74ff] focus:ring-[#2e74ff] border-slate-300"
                id="remember"
                type="checkbox"
              />
              <label className="text-slate-600 dark:text-slate-400 text-sm" htmlFor="remember">
                Remember this device
              </label>
            </div>

            {/* Sign In Button */}
            <button
              className="w-full bg-[#2e74ff] hover:bg-[#2e74ff]/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#2e74ff]/25 transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Sign In</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </form>

          {/* Social/SSO Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-semibold tracking-wider">
                Corporate SSO
              </span>
            </div>
          </div>

          {/* SSO Options */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <img
                alt="Google Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZu4eTsMMkKzr17L3deklgfjictrFUNgzJXpzKlgb4zwUwIOJOCamlUvjwC74wcqmmmDQPw9-2vhjfCbHV-xopnYJ4rqufrPtnU1z3OM-f1vi0Yj1OGGU50a5XMK1nQ_1A46uVFhJm4Uo-Bt-TCwPetj9cpIR68OSi0N_zi_ajZhRMo09MhAQ375-EMEPpYOT72djNgbzB9RjgX75ZDEpRhjLS02afiFalzGvwn7iIUo8KVY5cFRvJyoksNWSNCi9-hAfy6z9jIKgg"
              />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <img
                alt="Microsoft Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2_pAOE2PXYbc_Ap4jTycRKeohNbocOKyJ5B8oFfIvHFAeEAwj_AWY_qgotqXIJT7fz1VwQ2e5SYqWg4tnwtSpqkg3kYKMD67DN5RWYpYVaH0JWQEKeRMAbHAZMa5cwQ4NopQ82HZrgk0Qmdh8uCrfD-oeaVcMOHFOOR6TWwjC1uDgdSl9Y11iFMXU4nnLZrEO4a0W0GQPrCO9Gum_8jpqaN4K9p38jdERCL3VPBxx3UOTHXQ5KIqSV-NWW00aithzh0BM2Up7gIb"
              />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Microsoft
              </span>
            </button>
          </div>
        </div>

        {/* Sticky Footer */}
        <footer className="mt-auto py-6 px-8 border-t border-slate-50 dark:border-slate-800">
          <div className="flex justify-center gap-6">
            <a
              className="text-slate-400 hover:text-[#2e74ff] text-[11px] font-bold uppercase tracking-widest transition-colors"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-slate-400 hover:text-[#2e74ff] text-[11px] font-bold uppercase tracking-widest transition-colors"
              href="#"
            >
              Terms
            </a>
            <a
              className="text-slate-400 hover:text-[#2e74ff] text-[11px] font-bold uppercase tracking-widest transition-colors"
              href="#"
            >
              Help
            </a>
          </div>
          <p className="text-center text-slate-300 dark:text-slate-600 text-[10px] mt-4">
            © 2024 PayrollHR Unified Systems. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
