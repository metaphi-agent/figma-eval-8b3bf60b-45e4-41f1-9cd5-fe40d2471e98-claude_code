import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: ReactNode;
}

const sizeClasses = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-sm',
  lg: 'w-10 h-10 text-base',
  xl: 'w-12 h-12 text-lg',
};

export function Avatar({ src, alt, fallback, size = 'md', className, children }: AvatarProps) {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-semibold overflow-hidden',
        'bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB]',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className="w-full h-full object-cover" />
      ) : children ? (
        children
      ) : (
        <span className="text-white">{fallback}</span>
      )}
    </div>
  );
}
