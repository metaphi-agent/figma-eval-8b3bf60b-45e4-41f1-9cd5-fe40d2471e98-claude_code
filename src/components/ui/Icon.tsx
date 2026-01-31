import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface IconProps {
  children: ReactNode;
  className?: string;
  size?: number;
}

export function Icon({ children, className, size = 20 }: IconProps) {
  return (
    <span
      className={cn('inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
}
