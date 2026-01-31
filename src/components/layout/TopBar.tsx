import { ReactNode } from 'react';
import { SearchInput } from '../ui/SearchInput';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';

interface TopBarProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  showSearch?: boolean;
}

export function TopBar({ title, subtitle, actions, showSearch = true }: TopBarProps) {
  return (
    <div className="sticky top-0 z-10 bg-[var(--color-neutral-800)] border-b border-[var(--color-neutral-600)] px-8 py-6">
      <div className="flex items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-white mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-[var(--color-neutral-400)]">{subtitle}</p>}
        </div>

        {showSearch && (
          <div className="flex-1 max-w-md">
            <SearchInput placeholder="Search for..." />
          </div>
        )}

        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </div>
  );
}
