import { Search, Bell } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 bg-dark-surface border-b border-dark-border flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-white">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="w-80">
          <Input
            placeholder="Search for..."
            icon={<Search size={18} />}
            className="h-10"
          />
        </div>

        <button className="relative p-2 text-neutral-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
        </button>

        <Button variant="primary" size="sm">
          Add user
        </Button>
      </div>
    </header>
  );
}
