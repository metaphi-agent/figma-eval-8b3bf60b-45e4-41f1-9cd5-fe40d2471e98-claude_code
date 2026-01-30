import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
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
        'inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-150',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-bg',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB] text-white hover:opacity-90 active:opacity-100': variant === 'primary',
          'bg-dark-surface text-white border border-dark-border hover:bg-[#0F1A45] active:bg-[#111C4A]': variant === 'secondary',
          'text-neutral-300 hover:text-white hover:bg-dark-surface active:bg-[#0F1A45]': variant === 'ghost',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="w-4 h-4">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="w-4 h-4">{icon}</span>}
    </button>
  );
}
