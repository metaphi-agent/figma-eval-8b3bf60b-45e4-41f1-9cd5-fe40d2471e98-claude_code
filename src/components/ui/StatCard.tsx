import { ReactNode } from 'react';
import { TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';
import { Card } from './Card';
import { cn } from '../../utils/cn';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: ReactNode;
  color?: 'purple' | 'yellow' | 'blue' | 'green';
}

export function StatCard({ label, value, change, positive, icon, color = 'purple' }: StatCardProps) {
  return (
    <Card className="relative">
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            'w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center',
            color === 'purple' && 'bg-[var(--color-primary)]/10',
            color === 'yellow' && 'bg-[var(--color-secondary-orange)]/10',
            color === 'blue' && 'bg-[var(--color-secondary-cyan)]/10',
            color === 'green' && 'bg-[var(--color-success)]/10'
          )}
        >
          <span
            className={cn(
              'text-lg',
              color === 'purple' && 'text-[var(--color-primary)]',
              color === 'yellow' && 'text-[var(--color-secondary-orange)]',
              color === 'blue' && 'text-[var(--color-secondary-cyan)]',
              color === 'green' && 'text-[var(--color-success)]'
            )}
          >
            {icon}
          </span>
        </div>
        <button className="text-[var(--color-neutral-400)] hover:text-white transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="space-y-2">
        <div className="text-sm text-[var(--color-neutral-400)]">{label}</div>
        <div className="flex items-end justify-between">
          <div className="text-3xl font-semibold text-white">{value}</div>
          <div
            className={cn(
              'flex items-center gap-1 text-sm font-medium',
              positive ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'
            )}
          >
            {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {change}
          </div>
        </div>
      </div>
    </Card>
  );
}
