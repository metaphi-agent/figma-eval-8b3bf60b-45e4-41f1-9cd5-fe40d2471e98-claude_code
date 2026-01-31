import { Search, Bell } from 'lucide-react';
import { SearchInput } from './ui/SearchInput';
import { Button } from './ui/Button';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-20 bg-[var(--color-neutral-800)] border-b border-[var(--color-neutral-600)] flex items-center justify-between px-8">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="w-96">
          <SearchInput placeholder="Search for..." />
        </div>

        <button className="relative p-2 text-[var(--color-neutral-400)] hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-primary)] rounded-full" />
        </button>

        <Button variant="primary" size="md">
          Add user
        </Button>
      </div>
    </header>
  );
}
