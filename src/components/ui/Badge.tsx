import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: ReactNode;
  variant?: 'green' | 'red' | 'yellow' | 'gray' | 'blue' | 'purple' | 'sky';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'gray', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded font-medium',
        {
          'bg-green-50 text-green-300': variant === 'green',
          'bg-red-50 text-red-300': variant === 'red',
          'bg-yellow-50 text-yellow-300': variant === 'yellow',
          'bg-neutral-700 text-neutral-300': variant === 'gray',
          'bg-blue-50 text-blue-300': variant === 'blue',
          'bg-purple-50 text-primary-500': variant === 'purple',
          'bg-sky-50 text-blue-400': variant === 'sky',
        },
        {
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
