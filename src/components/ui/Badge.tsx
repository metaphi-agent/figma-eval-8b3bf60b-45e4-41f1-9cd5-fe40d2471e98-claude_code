import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: ReactNode;
  variant?: 'online' | 'offline' | 'pending' | 'completed' | 'green' | 'red' | 'yellow' | 'gray' | 'blue' | 'purple' | 'orange';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export function Badge({ children, variant = 'gray', size = 'sm', className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] font-medium',
        {
          'bg-[var(--color-success-light)] text-[var(--color-success)] border border-[var(--color-success)]/20': variant === 'online' || variant === 'green',
          'bg-[var(--color-neutral-700)] text-[var(--color-neutral-400)] border border-[var(--color-neutral-600)]': variant === 'offline' || variant === 'gray',
          'bg-[var(--color-warning-light)] text-[var(--color-secondary-orange)] border border-[var(--color-secondary-orange)]/20': variant === 'pending' || variant === 'yellow' || variant === 'orange',
          'bg-[var(--color-success-light)] text-[var(--color-success)] border border-[var(--color-success)]/20': variant === 'completed',
          'bg-[var(--color-error-light)] text-[var(--color-error)] border border-[var(--color-error)]/20': variant === 'red',
          'bg-[var(--color-secondary-cyan)]/10 text-[var(--color-secondary-cyan)] border border-[var(--color-secondary-cyan)]/20': variant === 'blue',
          'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20': variant === 'purple',
        },
        {
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
        },
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            {
              'bg-[var(--color-success)]': variant === 'online' || variant === 'green' || variant === 'completed',
              'bg-[var(--color-neutral-500)]': variant === 'offline' || variant === 'gray',
              'bg-[var(--color-secondary-orange)]': variant === 'pending' || variant === 'yellow' || variant === 'orange',
              'bg-[var(--color-error)]': variant === 'red',
              'bg-[var(--color-secondary-cyan)]': variant === 'blue',
              'bg-[var(--color-primary)]': variant === 'purple',
            }
          )}
        />
      )}
      {children}
    </span>
  );
}
