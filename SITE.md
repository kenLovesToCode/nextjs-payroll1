# Site Vision: Next.js PayrollHR Portal

A dual-purpose payroll and employee management system built with Next.js 15, Tailwind CSS, and TypeScript. The system is split into two distinct user experiences: a welcoming, vibrant Employee self-service portal and a high-density, professional Accounting/Admin dashboard.

**Stitch Project ID:** 13323405172236838091

## Role Definitions

- **Employee:** Targeted at individual contributors for clocking in/out, viewing payslips, and managing attendance. Styles: Neon Green, spacious, rounded.
- **Accounting:** Targeted at payroll admins for processing salaries, managing employee records, and reporting. Styles: Corporate Blue, high-density, tabular.

## Sitemap

- [x] **Home (Login)** - Unified entry point for both roles.
- [x] **Employee Dashboard** - Overview for employees (Clock in, pay day countdown).
- [x] **Employee Attendance** - Calendar/list view of personal attendance history.
- [x] **Employee Payslips** - History and downloadable PDF payslips.
- [x] **Admin Dashboard** - High-level overview of processing status and headcount.
- [x] **Payroll Processing** - Main table for calculating and validating monthly cycles.
- [ ] **Employee Directory** - List of all staff with search and filter for admins. → `cac7e25f02c84d44b8566ec27456f460`
- [x] **Attendance Tracking** - Admin view of company-wide clock-in/out data.

## Roadmap (Build Order)

1. **Phase 1: Foundation** - Build the Login Page and the two main Dashboards.
2. **Phase 2: Employee Portal** - Build Attendance and Payslip pages.
3. **Phase 3: Payroll Desk** - Build Processing, Directory, and Tracking views.
4. **Phase 4: Integration** - Manual wiring of dynamic authentication and real data fetching.
