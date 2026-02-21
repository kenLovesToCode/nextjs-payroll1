import React from "react";
import type { Employee } from "./mockData";
import { STATUS_STYLES } from "./mockData";

export interface EmployeeRowProps {
  readonly employee: Readonly<Employee>;
}

export function EmployeeRow({ employee }: EmployeeRowProps) {
  return (
    <tr className="hover:bg-[#2b6cee]/[0.02] transition-colors group">
      {/* Name + Email */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`size-10 rounded-xl ${employee.avatarBg} flex items-center justify-center text-[#2b6cee] font-bold overflow-hidden`}>
            <img alt={employee.name} className="w-full h-full object-cover" src={employee.avatarUrl} />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">{employee.name}</div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 dark:text-slate-500">{employee.email}</div>
          </div>
        </div>
      </td>
      {/* Department */}
      <td className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-300">{employee.department}</td>
      {/* Role */}
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{employee.role}</td>
      {/* Status Badge */}
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${STATUS_STYLES[employee.status]}`}>
          {employee.status}
        </span>
      </td>
      {/* Actions */}
      <td className="px-6 py-4 text-right">
        <button className="p-2 text-slate-400 dark:text-slate-500 hover:text-[#2b6cee] hover:bg-[#2b6cee]/5 rounded-lg transition-all">
          <span className="material-symbols-outlined text-xl">more_vert</span>
        </button>
      </td>
    </tr>
  );
}
