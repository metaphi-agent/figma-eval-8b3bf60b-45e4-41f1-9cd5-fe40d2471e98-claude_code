import { InputHTMLAttributes, forwardRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from './Input';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder = 'Search for...', className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        placeholder={placeholder}
        icon={<Search size={18} />}
        iconPosition="left"
        className={className}
        {...props}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';
