import { MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
  };
  iconBgColor?: string;
}

export function StatsCard({
  icon,
  label,
  value,
  change,
  iconBgColor = 'bg-primary/20',
}: StatsCardProps) {
  return (
    <div className="bg-neutral-700 rounded-2xl border border-neutral-600/50 p-5 flex items-center gap-4">
      <div
        className={clsx(
          'w-12 h-12 rounded-xl flex items-center justify-center',
          iconBgColor
        )}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-neutral-300 mb-1">
          <span className="truncate">{label}</span>
          <MoreHorizontal className="w-4 h-4 text-neutral-400 flex-shrink-0" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-white">{value}</span>
          {change && (
            <span
              className={clsx(
                'text-xs px-1.5 py-0.5 rounded',
                change.positive
                  ? 'bg-green-900/50 text-green-400'
                  : 'bg-red-900/50 text-red-500'
              )}
            >
              {change.positive ? '+' : ''}{change.value}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

interface UserStatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconBgColor?: string;
}

export function UserStatsCard({
  icon,
  label,
  value,
  iconBgColor = 'bg-primary/20',
}: UserStatsCardProps) {
  return (
    <div className="bg-neutral-700 rounded-2xl border border-neutral-600/50 p-5">
      <div className="flex items-start justify-between">
        <div
          className={clsx(
            'w-12 h-12 rounded-full flex items-center justify-center',
            iconBgColor
          )}
        >
          {icon}
        </div>
        <MoreHorizontal className="w-5 h-5 text-neutral-400" />
      </div>
      <div className="mt-4">
        <p className="text-sm text-neutral-300 mb-1">{label}</p>
        <p className="text-2xl font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
