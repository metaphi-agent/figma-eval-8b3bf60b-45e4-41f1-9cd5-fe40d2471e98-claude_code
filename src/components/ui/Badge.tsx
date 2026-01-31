import clsx from 'clsx';

type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'default' | 'purple' | 'cyan';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-green-900/50 text-green-400 border-green-500/30',
  error: 'bg-red-900/50 text-red-400 border-red-500/30',
  warning: 'bg-yellow-900/50 text-yellow-400 border-yellow-500/30',
  info: 'bg-blue-900/50 text-blue-400 border-blue-500/30',
  default: 'bg-neutral-600/50 text-neutral-300 border-neutral-500/30',
  purple: 'bg-primary/20 text-primary-light border-primary/30',
  cyan: 'bg-cyan/20 text-cyan border-cyan/30',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
