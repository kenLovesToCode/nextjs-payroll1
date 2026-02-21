import React from "react";
import type { DirectoryStat } from "./mockData";

export interface DirectoryStatsProps {
  readonly stats: Readonly<DirectoryStat[]>;
}

export function DirectoryStats({ stats }: DirectoryStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-5 rounded-2xl border border-[#2b6cee]/10 flex items-center gap-5 shadow-sm"
        >
          <div className={`size-14 rounded-2xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}>
            <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{stat.value}</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
