# Design System: Login Screen

**Project ID:** 13323405172236838091

## Role-Based Design Philosophies

This design system is bifurcated into two distinct design languages depending on the viewer's role: **Employee Role** and **Accounting/Payroll Role**.

---

# Part 1: Employee Role Design System

**Applies to:** Employee Dashboard, Employee Attendance Console, Employee Directory, Employee Payslip History (Screen IDs: 370d0f22db094baca6155be78b4751bb, 156f36467fdc4c91bb49802efa83f4a6, baf26d8a21c54f44a04c1d74e308824d, 1e9aa0a53ead4901a6ff6cd339335bc5)

## 1. Visual Theme & Atmosphere

The Employee interface feels **welcoming, spacious, and airy**. It prioritizes readability and user engagement over data density. The design uses generous whitespace, distinctly separated card components, and playful micro-animations to create a stress-free environment that encourages daily check-ins and self-service.

## 2. Color Palette & Roles

- **Vivid Neon Green** (`#13ec5b`): The vibrant primary color. Used for prominent calls to action (like "Clock In"), active states, loaders, and branded icons.
- **Mint-Tinted Off-White** (`#f6f8f6`): The light background color. Provides a soft, easy-on-the-eyes canvas that slightly echoes the primary green.
- **Deep Forest Night** (`#102216`): The dark mode background. A rich, dark green-black that maintains the brand's cool, natural tone.
- **Slate Text Palette** (`text-slate-900`, `text-slate-500`): Standard high-contrast dark grey for headings and medium grey for secondary text.

## 3. Typography Rules

- **Font Family:** Manrope
- **Headers:** Punchy and highly visible using extra bold weights (`font-extrabold`) and tight letter spacing (`tracking-tight`) (e.g., "Good Morning!").
- **Body/Secondary Text:** Uses medium or semi-bold weights (`font-medium`, `font-semibold`) to ensure legibility even at smaller sizes.

## 4. Component Stylings

- **Buttons:** Highly rounded or pill-shaped (`rounded-2xl` or `rounded-full` / 9999px). Primary buttons feature a soft, colored drop shadow (`shadow-primary/20`) and scale up slightly on hover (`hover:scale-[1.02]`).
- **Cards/Containers:** Generously rounded corners (`rounded-xl` / 1.5rem). They feature very subtle, thin borders (`border-primary/10`) and a soft shadow that intensifies slightly on hover (`hover:shadow-md`).
- **Icons:** Embedded in soft, highly rounded containers with a tinted translucent background (`bg-primary/10` or `bg-primary/20`).

## 5. Layout Principles

Items are structured using a loose, airy grid (often `gap-6` or `gap-10`). The view is broken into digestible, standalone summary statistics cards and simple vertical feeds rather than dense comprehensive tables.

---

# Part 2: Accounting/Payroll Role Design System

**Applies to:** Payroll Processing, Login Screen, Payroll Preview & Approval, Admin Dashboard, Attendance Tracking (Screen IDs: 004eaedf35d043a396d3c6b0a93b6204, 9d0238f39d96482398a41fd42c2c3556, cac7e25f02c84d44b8566ec27456f460, 2a5e7804fdb74ad0b500f5083469640a, 236d89f7765f4a779358e459da947c80, 94c1cbbe15624f5e8683e9afe6dcf709)

## 1. Visual Theme & Atmosphere

The Accounting interface is **professional, structured, utilitarian, and data-dense**. It is built for productivity and oversight. The design tightly packs information using strict tabular layouts and minimizes design distractions to focus entirely on workflow precision.

## 2. Color Palette & Roles

- **Sharp Corporate Blue** (`#2b6cee`): The primary brand and action color, lending a trustworthy, enterprise-grade feel.
- **Crisp Cool Grey** (`#f6f6f8`): A neutral, sterile light background that ensures data rows pop without tinting.
- **Deep Navy Black** (`#101622`): The dark mode background, maintaining professional contrast and minimizing eye strain during long sessions.
- **Status Success Base** (`#e8f5e9`) & **Text** (`#2e7d32`): Used to quickly mark table rows that are processed and ready.
- **Status Warning Base** (`#fff3e0`) & **Text** (`#ef6c00`): Used to highlight items requiring immediate administrative action or overrides.

## 3. Typography Rules

- **Font Family:** Manrope
- **Numerical Data:** Strictly utilizes tabular numbering (`tabular-nums`) so that columns of currency and system metrics perfectly align vertically, enabling quick scanning.
- **Headers & Labels:** Employs very small (`text-[10px]` or `text-xs`) uppercase text with intense letter-spacing (`tracking-widest`) and heavy font weight (`font-black`) to define data columns without adding noisy visual bulk.

## 4. Component Stylings

- **Buttons:** Rigid and structured, utilizing much tighter corner radii (`rounded-lg` / 0.5rem) to reflect a professional tooling environment.
- **Cards/Containers:** Flattened structure. Relies primarily on crisp 1px outlines (`border-slate-200`) rather than drop shadows to demarcate zones. Corners are modestly rounded (`rounded-xl` / 0.75rem).
- **Data Tables:** Highly structured with edge-to-edge subtle dividers (`divide-slate-100`). Rows feature subtle hover highlights (`hover:bg-slate-50/80`) to help track lines across wide desktop screens.

## 5. Layout Principles

Optimized for horizontal expansion. Relies heavily on flexbox row layouts aligned to the bottom or center for precise data alignment. Uses sticky headers (`sticky top-0`) and sticky footers to ensure persistent oversight of totals during scrolling through large employee lists.
