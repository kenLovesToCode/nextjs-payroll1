// Mock data for Employee Directory — extracted from Stitch design
// Stitch screen: cac7e25f02c84d44b8566ec27456f460

export type EmployeeStatus = "Active" | "On Leave" | "Terminated";

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  status: EmployeeStatus;
  avatarUrl: string;
  avatarBg: string;
}

export interface DirectoryStat {
  icon: string;
  value: string;
  label: string;
  iconBg: string;
  iconColor: string;
}

export const DIRECTORY_STATS: DirectoryStat[] = [
  {
    icon: "how_to_reg",
    value: "118",
    label: "Active Staff",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: "event_busy",
    value: "6",
    label: "On Leave",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: "trending_up",
    value: "12%",
    label: "Growth MoM",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

export const EMPLOYEES: Employee[] = [
  {
    id: "emp-001",
    name: "Alex Johnson",
    email: "alex.j@company.com",
    department: "Engineering",
    role: "Senior Fullstack Dev",
    status: "Active",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5FtD29MHtwASnzar28f-1Us6pQxznAHamARX3ouB21ciAKod8F2Hdqb4kKLCj51XxgK2GUG7YScgVMbeUF-mKa-Fn6nO0DRLahdX-Bhcgev0KjIhaD0JQZ4xf7HJ4z6k0OdQ3-bIO9LbxMyoZyKDoBYOhtk2ceGx5vs2YjZEoaMtSQl-_EyS5eTC3IUCuHoh4U8YL8ToSPT-7HBBg7NowO7NRBSfFEBpxIi-7q9_qFpfmVlVT0bJS6h17C7mIhti7XWoHTFXBunAZ",
    avatarBg: "bg-blue-100",
  },
  {
    id: "emp-002",
    name: "Sarah Miller",
    email: "s.miller@company.com",
    department: "Marketing",
    role: "Brand Specialist",
    status: "Active",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7n2rSekMqSLmVVdPClICNKI5NF_-7y-xYWzW11ItNWIRiWkbYeyAMPq-nJKyuDEFI4z7-Jkf1KaiP-80f2T-RTztW3ksKfvddd4yssOHxE0jNO3WWcD1IejerMQh6gpYeH2eL2--pAqjBQvzXnv2dnfZ2PjWGx8y23ioNPAptnRFk6_PBqvRjg2nSgFVP-Mw2XV7oju6O1l9SYEwnJq641E9tdFYMu0IfpPM6llDE6e5SROXLMKOUVFkWPTBpcFwHQ8C_iV3IrGuz",
    avatarBg: "bg-purple-100",
  },
  {
    id: "emp-003",
    name: "Michael Chen",
    email: "m.chen@company.com",
    department: "Sales",
    role: "Regional Manager",
    status: "On Leave",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvENXTHot4JccssPKFyh1RWC_O2wJEVsGWBwdfjF86qvW_mlwUMweyssEVfonSPWRddZn9bHVYzEyUoXZsBFJ2Frh8hkUehs_CCuVOcMYjepLJcqzuRAEh7LSGYmldkeucz_rpVifrBRGB0F0m4paQAWJWFrEwt4zyJ-mQvivACrPbDGXm0uovp15k1YHk30eY21JzX1nATOvFUGTItDA9oj3gaeZ9VLevscdPcBlHOiXI2GL_OeLeQeQnzwdMoGz2LojhYyFwW5UX",
    avatarBg: "bg-orange-100",
  },
  {
    id: "emp-004",
    name: "Emily Watson",
    email: "emily.w@company.com",
    department: "Engineering",
    role: "QA Lead",
    status: "Active",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQH1GLoCCRJyAixcG5hgZDXu0bqwkDY9kWqyOEZupNcGCOiuxcARyRFfOn9V6GxjKPegPNpooE9gZ6CkO3Y3i5U1HwdNkkVGyw7zFu7jYVDb_J6jZhK-aYQntTJoYAA5NB_wjmnc6krzLnOlneccBqPPsSJdt_W3ZQaagrqGmQrPRRRTF90Oa0lzP5SHaEOffL-X4KI_ZVjWhWeTTpCCkwKlPrj-c6AYkBkdqIE1_oNtnMquS09rC0BteXkX_K2a2kFUl2_8usFWJZ",
    avatarBg: "bg-rose-100",
  },
  {
    id: "emp-005",
    name: "Robert Taylor",
    email: "r.taylor@company.com",
    department: "HR",
    role: "Lead Recruiter",
    status: "Terminated",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLYWQ7OCQiYHZo-6iX_rY_QupgPBI9ok4Hfgd5dXPqTSlZSzeos1nScd9whEP75_jxeYoZqFziSg-t-giMFqa1vG6KePpJAW7_n1sKETzNxCQcAuvUTxbxtsk61KpxNSp9b7yknS_1gRgRtEgNaDMrwfDlQVDZeDbqvJjjv9FhyahUzhmlYeCznGb7cL-Frx9P12x3eCu1eR2aJqMKpCmLjGu2DINksDjefDiNY0MpESVVacjSqLNMZbkaWrzdHRFkd36SZxf2-LNC",
    avatarBg: "bg-slate-100",
  },
];

export const STATUS_STYLES: Record<EmployeeStatus, string> = {
  Active: "bg-[#e6f4ea] text-[#1e4620] border border-emerald-200",
  "On Leave": "bg-[#fff4e5] text-[#663c00] border border-amber-200",
  Terminated: "bg-[#fce8e8] text-[#611a15] border border-rose-200",
};
