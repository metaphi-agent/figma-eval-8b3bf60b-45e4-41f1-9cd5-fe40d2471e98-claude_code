import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, iconPosition = 'left', className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-300 mb-1.5">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-2.5 bg-dark-surface border border-dark-border rounded',
              'text-white placeholder:text-neutral-500',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'transition-colors duration-150',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              icon && iconPosition === 'left' && 'pl-10',
              icon && iconPosition === 'right' && 'pr-10',
              error && 'border-red-300 focus:ring-red-300',
              className
            )}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-300">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
