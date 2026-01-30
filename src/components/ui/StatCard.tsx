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
  color?: string;
}

export function StatCard({ label, value, change, positive, icon, color = 'purple' }: StatCardProps) {
  return (
    <Card className="relative">
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center',
            color === 'purple' && 'bg-purple-50',
            color === 'yellow' && 'bg-yellow-50',
            color === 'blue' && 'bg-blue-50',
            color === 'red' && 'bg-red-50'
          )}
        >
          <span
            className={cn(
              'text-lg',
              color === 'purple' && 'text-primary-500',
              color === 'yellow' && 'text-yellow-300',
              color === 'blue' && 'text-blue-400',
              color === 'red' && 'text-red-300'
            )}
          >
            {icon}
          </span>
        </div>
        <button className="text-neutral-400 hover:text-white transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="space-y-2">
        <div className="text-sm text-neutral-400">{label}</div>
        <div className="flex items-end justify-between">
          <div className="text-3xl font-semibold text-white">{value}</div>
          <div
            className={cn(
              'flex items-center gap-1 text-sm font-medium',
              positive ? 'text-green-300' : 'text-red-300'
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
