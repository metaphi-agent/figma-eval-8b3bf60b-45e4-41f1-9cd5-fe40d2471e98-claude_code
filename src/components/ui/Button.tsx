import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-neutral-800)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-gradient-to-r from-[var(--color-primary-gradient)] to-[var(--color-primary)] text-white hover:opacity-90 active:opacity-100 rounded-[var(--radius-md)]': variant === 'primary',
          'bg-[var(--color-neutral-700)] text-white border border-[var(--color-neutral-600)] hover:bg-[#1a2555] active:bg-[#1f2a5f] rounded-[var(--radius-md)]': variant === 'secondary',
          'text-[var(--color-neutral-400)] hover:text-white hover:bg-[var(--color-neutral-700)] active:bg-[#1a2555] rounded-[var(--radius-md)]': variant === 'ghost',
          'text-[var(--color-neutral-400)] hover:text-white hover:bg-[var(--color-neutral-700)] rounded-[var(--radius-md)] p-2': variant === 'icon',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm' && variant !== 'icon',
          'px-4 py-2.5 text-sm': size === 'md' && variant !== 'icon',
          'px-6 py-3 text-base': size === 'lg' && variant !== 'icon',
        },
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="w-[18px] h-[18px] flex items-center justify-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="w-[18px] h-[18px] flex items-center justify-center">{icon}</span>}
    </button>
  );
}
