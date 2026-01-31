import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BarChart3,
  Package,
  ListTodo,
  Star,
  Users,
  DollarSign,
  Puzzle,
  Settings,
  FileText,
  ChevronDown,
  ChevronRight,
  Search,
  ArrowRight,
} from 'lucide-react';
import clsx from 'clsx';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: <Home className="w-5 h-5" />,
    children: [
      { label: 'All pages', href: '/' },
      { label: 'Reports', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Task', href: '/kanban' },
    ],
  },
  {
    label: 'Features',
    icon: <Star className="w-5 h-5" />,
    children: [
      { label: 'All pages', href: '/' },
      { label: 'Contacts', href: '/messages' },
      { label: 'Companies', href: '/' },
      { label: 'Projects', href: '/' },
      { label: 'Tasks', href: '/kanban' },
      { label: 'Board', href: '/kanban' },
      { label: 'Table', href: '/users' },
      { label: 'Crypto', href: '/' },
      { label: 'And many more pages!', href: '/' },
    ],
  },
  {
    label: 'Users',
    icon: <Users className="w-5 h-5" />,
    href: '/users',
  },
  {
    label: 'Pricing',
    icon: <DollarSign className="w-5 h-5" />,
    href: '/',
  },
  {
    label: 'Integrations',
    icon: <Puzzle className="w-5 h-5" />,
    href: '/',
  },
];

const bottomNavItems: NavItem[] = [
  {
    label: 'Settings',
    icon: <Settings className="w-5 h-5" />,
    href: '/',
  },
  {
    label: 'Template pages',
    icon: <FileText className="w-5 h-5" />,
    href: '/',
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Dashboard']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => location.pathname === href;

  const renderNavItem = (item: NavItem, index: number) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.label);

    return (
      <div key={index}>
        {hasChildren ? (
          <>
            <button
              onClick={() => toggleExpand(item.label)}
              className={clsx(
                'w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors',
                isExpanded ? 'text-primary' : 'text-neutral-300 hover:text-white'
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isExpanded && item.children && (
              <div className="ml-4 mt-1 space-y-0.5">
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    to={child.href}
                    className={clsx(
                      'flex items-center px-4 py-2 rounded-lg text-sm transition-colors',
                      isActive(child.href)
                        ? 'bg-neutral-700/50 text-white border-l-2 border-primary'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-700/30'
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
            to={item.href || '/'}
            className={clsx(
              'flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors',
              isActive(item.href || '/')
                ? 'text-primary'
                : 'text-neutral-300 hover:text-white'
            )}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-neutral-800 border-r border-neutral-700/60 flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm" />
          </div>
          <span className="text-xl font-semibold text-white">Dashdark X</span>
          <div className="ml-auto flex items-center gap-1 text-neutral-400">
            <ChevronRight className="w-4 h-4 rotate-180" />
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search for..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-neutral-700 border border-neutral-600 rounded-lg text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map(renderNavItem)}

        {/* Divider */}
        <div className="my-6 border-t border-neutral-700/60" />

        {/* Bottom Navigation */}
        {bottomNavItems.map(renderNavItem)}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-neutral-700/60">
        <div className="flex items-center gap-3 px-2 py-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="John Carter"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Carter</p>
            <p className="text-xs text-neutral-400 truncate">Account settings</p>
          </div>
          <ChevronRight className="w-4 h-4 text-neutral-400" />
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-4 pt-0">
        <button className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-light rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          Get template
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
