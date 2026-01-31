import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  path?: string;
  children?: { label: string; path: string }[];
}

export function SidebarItem({ label, icon, path, children }: SidebarItemProps) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(
    children ? children.some((child) => location.pathname === child.path) : false
  );

  const isActive = path ? location.pathname === path : false;
  const hasActiveChild = children ? children.some((child) => location.pathname === child.path) : false;

  if (children) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-md)] transition-all duration-200',
            isExpanded || hasActiveChild
              ? 'text-[var(--color-primary)] bg-[#1A0F2E]'
              : 'text-[var(--color-neutral-400)] hover:text-white hover:bg-[var(--color-neutral-700)]'
          )}
        >
          <span className="w-[18px] h-[18px] flex items-center justify-center">{icon}</span>
          <span className="flex-1 text-left text-sm font-medium">{label}</span>
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        {isExpanded && (
          <div className="ml-9 mt-1 space-y-1">
            {children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className={cn(
                  'block px-3 py-2 text-sm rounded-[var(--radius-md)] transition-colors',
                  location.pathname === child.path
                    ? 'text-white bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent border-l-2 border-[var(--color-primary)]'
                    : 'text-[var(--color-neutral-400)] hover:text-white hover:bg-[var(--color-neutral-700)]'
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={path || '#'}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-[var(--radius-md)] transition-all duration-200',
        isActive
          ? 'text-white bg-[var(--color-neutral-700)]'
          : 'text-[var(--color-neutral-400)] hover:text-white hover:bg-[var(--color-neutral-700)]'
      )}
    >
      <span className="w-[18px] h-[18px] flex items-center justify-center">{icon}</span>
      <span className="text-sm font-medium flex-1">{label}</span>
      {!children && <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
    </Link>
  );
}
