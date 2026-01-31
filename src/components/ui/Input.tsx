import clsx from 'clsx';
import { Search } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({ label, error, icon, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-neutral-300 mb-1.5">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          className={clsx(
            'w-full bg-neutral-700 border rounded-lg text-white placeholder:text-neutral-400 focus:outline-none transition-colors',
            icon ? 'pl-10 pr-4' : 'px-4',
            'py-2.5 text-sm',
            error
              ? 'border-red-500 focus:border-red-400'
              : 'border-neutral-600 focus:border-primary/50',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

interface SearchInputProps extends Omit<InputProps, 'icon'> {}

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <Input
      icon={<Search className="w-4 h-4" />}
      placeholder="Search for..."
      className={className}
      {...props}
    />
  );
}
