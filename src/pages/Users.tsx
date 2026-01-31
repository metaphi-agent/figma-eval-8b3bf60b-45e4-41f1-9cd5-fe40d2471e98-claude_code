import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { StatCard } from '../components/ui/StatCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Avatar } from '../components/ui/Avatar';
import { DataTable, Column } from '../components/data/DataTable';
import { Pagination } from '../components/data/Pagination';
import { Users as UsersIcon, UserPlus, Award, Circle, Pencil, Trash2, MoreVertical } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  companyLogo?: string;
  status: 'Online' | 'Offline';
}

const mockUsers: User[] = [
  { id: '1', name: 'John Carter', email: 'john@google.com', phone: '(414) 907 - 1274', location: 'United States', company: 'Google', status: 'Online' },
  { id: '2', name: 'Sophie Moore', email: 'sophie@webflow.com', phone: '(240) 480 - 4277', location: 'United Kingdom', company: 'Webflow', status: 'Offline' },
  { id: '3', name: 'Matt Cannon', email: 'matt@facebook.com', phone: '(318) 698 - 9889', location: 'Australia', company: 'Facebook', status: 'Offline' },
  { id: '4', name: 'Graham Hills', email: 'graham@twitter.com', phone: '(640) 627 - 3890', location: 'India', company: 'Twitter', status: 'Online' },
  { id: '5', name: 'Sandy Houston', email: 'sandy@youtube.com', phone: '(441) 410 - 3848', location: 'Canada', company: 'YouTube', status: 'Offline' },
  { id: '6', name: 'Andy Smith', email: 'andy@reddit.com', phone: '(604) 458 - 3208', location: 'United States', company: 'Reddit', status: 'Online' },
  { id: '7', name: 'Lilly Woods', email: 'lilly@spotify.com', phone: '(361) 692 - 1819', location: 'Australia', company: 'Spotify', status: 'Offline' },
  { id: '8', name: 'Patrick Meyer', email: 'patrick@pinterest.com', phone: '(760) 582 - 5670', location: 'United Kingdom', company: 'Pinterest', status: 'Online' },
  { id: '9', name: 'Frances Willen', email: 'frances@twitch.com', phone: '(216) 496 - 5864', location: 'Canada', company: 'Twitch', status: 'Offline' },
  { id: '10', name: 'Ernest Houston', email: 'ernest@linkedin.com', phone: '(704) 339 - 8813', location: 'India', company: 'LinkedIn', status: 'Offline' },
];

export function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const columns: Column<User>[] = [
    {
      key: 'name',
      header: 'Name',
      sortable: true,
      render: (user) => (
        <div className="flex items-center gap-3">
          <Avatar size="md" fallback={user.name.split(' ').map(n => n[0]).join('')} />
          <div>
            <div className="text-sm font-medium text-white">{user.name}</div>
            <div className="text-xs text-[var(--color-neutral-400)]">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'phone',
      header: 'Phone',
      sortable: true,
      render: (user) => <span className="text-sm text-[var(--color-neutral-300)]">{user.phone}</span>,
    },
    {
      key: 'location',
      header: 'Location',
      sortable: true,
      render: (user) => <span className="text-sm text-[var(--color-neutral-300)]">{user.location}</span>,
    },
    {
      key: 'company',
      header: 'Company',
      sortable: true,
      render: (user) => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-semibold">
            {user.company.charAt(0)}
          </div>
          <span className="text-sm text-[var(--color-neutral-300)]">{user.company}</span>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (user) => (
        <Badge variant={user.status === 'Online' ? 'online' : 'offline'} dot>
          {user.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      header: '',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-[var(--color-neutral-400)] hover:text-white transition-colors">
            <Pencil size={16} />
          </button>
          <button className="p-1.5 text-[var(--color-neutral-400)] hover:text-[var(--color-error)] transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Layout title="Users">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-[var(--radius-md)] flex items-center justify-center">
                <UsersIcon size={20} className="text-[var(--color-primary)]" />
              </div>
              <button className="text-[var(--color-neutral-400)] hover:text-white transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="text-sm text-[var(--color-neutral-400)] mb-1">Total Users</div>
            <div className="text-2xl font-semibold text-white">250</div>
          </Card>

          <Card>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-[var(--color-secondary-orange)]/10 rounded-[var(--radius-md)] flex items-center justify-center">
                <UserPlus size={20} className="text-[var(--color-secondary-orange)]" />
              </div>
              <button className="text-[var(--color-neutral-400)] hover:text-white transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="text-sm text-[var(--color-neutral-400)] mb-1">New Users</div>
            <div className="text-2xl font-semibold text-white">15</div>
          </Card>

          <Card>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-[var(--color-success)]/10 rounded-[var(--radius-md)] flex items-center justify-center">
                <Award size={20} className="text-[var(--color-success)]" />
              </div>
              <button className="text-[var(--color-neutral-400)] hover:text-white transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="text-sm text-[var(--color-neutral-400)] mb-1">Top Users</div>
            <div className="text-2xl font-semibold text-white">200</div>
          </Card>

          <Card>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-[var(--color-secondary-cyan)]/10 rounded-[var(--radius-md)] flex items-center justify-center">
                <Circle size={20} className="text-[var(--color-secondary-cyan)]" />
              </div>
              <button className="text-[var(--color-neutral-400)] hover:text-white transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="text-sm text-[var(--color-neutral-400)] mb-1">Other Users</div>
            <div className="text-2xl font-semibold text-white">35</div>
          </Card>
        </div>

        {/* Users Table */}
        <Card padding="none">
          <div className="p-6 border-b border-[var(--color-neutral-600)]">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">All Users</h2>
              <span className="text-sm text-[var(--color-neutral-400)]">
                {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, 256)} of 256
              </span>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={mockUsers}
            selectable
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
            getRowId={(user) => user.id}
          />

          <div className="p-6 border-t border-[var(--color-neutral-600)]">
            <Pagination
              currentPage={currentPage}
              totalItems={256}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={setItemsPerPage}
            />
          </div>
        </Card>
      </div>
    </Layout>
  );
}
