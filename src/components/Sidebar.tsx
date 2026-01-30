import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  DollarSign,
  Puzzle,
  Settings,
  FileText,
  ChevronRight,
  ChevronDown,
  Search,
  Star,
  ChevronLeft,
} from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { cn } from '../utils/cn';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: <Home size={18} />,
    children: [
      { label: 'All pages', path: '/' },
      { label: 'Reports', path: '/dashboard-2' },
      { label: 'Products', path: '/dashboard-3' },
      { label: 'Task', path: '#' },
    ],
  },
  {
    label: 'Features',
    icon: <Star size={18} />,
    path: '#',
  },
  {
    label: 'Users',
    icon: <Users size={18} />,
    path: '/users',
  },
  {
    label: 'Pricing',
    icon: <DollarSign size={18} />,
    path: '#',
  },
  {
    label: 'Integrations',
    icon: <Puzzle size={18} />,
    path: '#',
  },
];

const bottomNavItems: NavItem[] = [
  {
    label: 'Settings',
    icon: <Settings size={18} />,
    path: '#',
  },
  {
    label: 'Template pages',
    icon: <FileText size={18} />,
    children: [
      { label: 'Messages', path: '/messages' },
      { label: 'Kanban', path: '/kanban' },
      { label: 'Calendar', path: '/calendar' },
      { label: 'Products', path: '/products' },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Dashboard']);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const isActive = (path?: string, children?: { path: string }[]) => {
    if (path) return location.pathname === path;
    if (children) return children.some((child) => location.pathname === child.path);
    return false;
  };

  return (
    <div className="w-[300px] h-screen bg-dark-bg border-r border-dark-border flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[#CB3CFF] to-[#7F25FB] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <span className="text-xl font-semibold text-white">Dashdark X</span>
        </div>
        <div className="flex gap-1">
          <button className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <Input
          placeholder="Search for..."
          icon={<Search size={18} />}
          className="w-full"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto">
        {navItems.map((item) => (
          <div key={item.label} className="mb-1">
            {item.children ? (
              <>
                <button
                  onClick={() => toggleExpand(item.label)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded transition-colors',
                    expandedItems.includes(item.label)
                      ? 'text-primary-500 bg-[#1A0F2E]'
                      : 'text-neutral-300 hover:text-white hover:bg-dark-surface'
                  )}
                >
                  {item.icon}
                  <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                  {expandedItems.includes(item.label) ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
                {expandedItems.includes(item.label) && (
                  <div className="ml-9 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={cn(
                          'block px-3 py-2 text-sm rounded transition-colors',
                          location.pathname === child.path
                            ? 'text-white bg-gradient-to-r from-primary-500/20 to-transparent border-l-2 border-primary-500'
                            : 'text-neutral-400 hover:text-white hover:bg-dark-surface'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path || '#'}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded transition-colors',
                  isActive(item.path)
                    ? 'text-white bg-dark-surface'
                    : 'text-neutral-300 hover:text-white hover:bg-dark-surface'
                )}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )}
          </div>
        ))}

        <div className="h-px bg-dark-border my-4" />

        {bottomNavItems.map((item) => (
          <div key={item.label} className="mb-1">
            {item.children ? (
              <>
                <button
                  onClick={() => toggleExpand(item.label)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded transition-colors',
                    expandedItems.includes(item.label)
                      ? 'text-primary-500 bg-[#1A0F2E]'
                      : 'text-neutral-300 hover:text-white hover:bg-dark-surface'
                  )}
                >
                  {item.icon}
                  <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
                  {expandedItems.includes(item.label) ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
                {expandedItems.includes(item.label) && (
                  <div className="ml-9 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={cn(
                          'block px-3 py-2 text-sm rounded transition-colors',
                          location.pathname === child.path
                            ? 'text-white bg-gradient-to-r from-primary-500/20 to-transparent border-l-2 border-primary-500'
                            : 'text-neutral-400 hover:text-white hover:bg-dark-surface'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path || '#'}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded transition-colors',
                  isActive(item.path)
                    ? 'text-white bg-dark-surface'
                    : 'text-neutral-300 hover:text-white hover:bg-dark-surface'
                )}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
                <ChevronRight size={16} className="ml-auto" />
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-3 border-t border-dark-border">
        <Link
          to="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded hover:bg-dark-surface transition-colors"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold">
            JC
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">John Carter</div>
            <div className="text-xs text-neutral-400 truncate">Account settings</div>
          </div>
          <ChevronRight size={16} className="text-neutral-400" />
        </Link>
      </div>

      {/* CTA Button */}
      <div className="p-6">
        <Button variant="primary" size="lg" className="w-full" icon={<ChevronRight size={18} />} iconPosition="right">
          Get template
        </Button>
      </div>
    </div>
  );
}
