import { Button } from '../ui/Button';
import { SearchInput } from '../ui/Input';
import { Download, Plus } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
}

export function PageHeader({
  title,
  subtitle,
  showSearch = false,
  searchPlaceholder = 'Search for...',
  primaryAction,
  secondaryAction,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 pb-0">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          {subtitle && <p className="text-sm text-neutral-300 mt-0.5">{subtitle}</p>}
        </div>
        {showSearch && (
          <div className="w-80">
            <SearchInput placeholder={searchPlaceholder} />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {secondaryAction && (
          <button className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
            {secondaryAction.icon || <Download className="w-4 h-4" />}
            {secondaryAction.label}
          </button>
        )}
        {primaryAction && (
          <Button onClick={primaryAction.onClick}>
            {primaryAction.icon || <Plus className="w-4 h-4" />}
            {primaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
