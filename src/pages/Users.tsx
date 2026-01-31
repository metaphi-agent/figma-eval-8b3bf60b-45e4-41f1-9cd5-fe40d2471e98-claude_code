import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Plus, MoreHorizontal } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SearchInput } from '../components/ui/Input';
import { Avatar } from '../components/ui/Avatar';
import { UserStatsCard } from '../components/ui/StatsCard';
import { Pagination } from '../components/ui/Table';

const users = [
  { id: 1, name: 'John Carter', email: 'john@google.com', phone: '(414) 907 - 1274', location: 'United States', company: 'Google', status: 'Online' },
  { id: 2, name: 'Sophie Moore', email: 'sophie@webflow.com', phone: '(240) 480 - 4277', location: 'United Kingdom', company: 'Webflow', status: 'Offline' },
  { id: 3, name: 'Matt Cannon', email: 'matt@facebook.com', phone: '(318) 698 - 9889', location: 'Australia', company: 'Facebook', status: 'Offline' },
  { id: 4, name: 'Graham Hills', email: 'graham@twitter.com', phone: '(540) 627 - 3890', location: 'India', company: 'Twitter', status: 'Online' },
  { id: 5, name: 'Sandy Houston', email: 'sandy@youtube.com', phone: '(440) 410 - 3848', location: 'Canada', company: 'YouTube', status: 'Offline' },
  { id: 6, name: 'Andy Smith', email: 'andy@reddit.com', phone: '(504) 458 - 3268', location: 'United States', company: 'Reddit', status: 'Online' },
  { id: 7, name: 'Lilly Woods', email: 'lilly@spotify.com', phone: '(361) 692 - 1819', location: 'Australia', company: 'Spotify', status: 'Offline' },
  { id: 8, name: 'Patrick Meyer', email: 'patrick@pinterest.com', phone: '(760) 582 - 5670', location: 'United Kingdom', company: 'Pinterest', status: 'Online' },
  { id: 9, name: 'Frances Willen', email: 'frances@twitch.com', phone: '(216) 496 - 5864', location: 'Canada', company: 'Twitch', status: 'Offline' },
  { id: 10, name: 'Ernest Houston', email: 'ernest@linkedin.com', phone: '(704) 339 - 8813', location: 'India', company: 'LinkedIn', status: 'Offline' },
];

const companyLogos: Record<string, string> = {
  Google: 'G',
  Webflow: 'W',
  Facebook: 'f',
  Twitter: 'X',
  YouTube: '▶',
  Reddit: '🔴',
  Spotify: '🎵',
  Pinterest: 'P',
  Twitch: '🎮',
  LinkedIn: 'in',
};

export default function UsersPage() {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const toggleRowSelection = (id: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllRows = () => {
    if (selectedRows.size === users.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(users.map((u) => u.id)));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold text-white">Users</h1>
          <div className="w-80">
            <SearchInput placeholder="Search for..." />
          </div>
        </div>
        <Button onClick={() => navigate('/users/add')}>
          <Plus className="w-4 h-4" />
          Add user
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <UserStatsCard
          icon={<span className="text-xl">👥</span>}
          label="Total Users"
          value="250"
          iconBgColor="bg-primary/20"
        />
        <UserStatsCard
          icon={<span className="text-xl">👤</span>}
          label="New Users"
          value="15"
          iconBgColor="bg-yellow-500/20"
        />
        <UserStatsCard
          icon={<span className="text-xl">💜</span>}
          label="Top Users"
          value="200"
          iconBgColor="bg-teal/20"
        />
        <UserStatsCard
          icon={<span className="text-xl">💙</span>}
          label="Other Users"
          value="35"
          iconBgColor="bg-cyan/20"
        />
      </div>

      {/* Users Table */}
      <Card className="p-0 overflow-hidden">
        <div className="p-6 pb-4 flex items-center justify-between border-b border-neutral-600/50">
          <h3 className="text-lg font-semibold text-white">All Users</h3>
          <span className="text-sm text-primary">1 - 10 of 256</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-neutral-400 border-b border-neutral-600/50">
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === users.length}
                    onChange={toggleAllRows}
                    className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary"
                  />
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    👤 Name
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    📞 Phone
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    📍 Location
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    🏢 Company
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    ⚡ Status
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-600/30">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className={`hover:bg-neutral-600/20 transition-colors ${
                    selectedRows.has(user.id) ? 'bg-primary/10' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(user.id)}
                      onChange={() => toggleRowSelection(user.id)}
                      className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={`https://images.unsplash.com/photo-${1470000000000 + user.id * 1000}?w=40&h=40&fit=crop&crop=face`}
                        name={user.name}
                        size="sm"
                      />
                      <div>
                        <p className="font-medium text-white">{user.name}</p>
                        <p className="text-xs text-neutral-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-neutral-300">{user.phone}</td>
                  <td className="px-4 py-4 text-neutral-300">{user.location}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-600 flex items-center justify-center text-xs">
                        {companyLogos[user.company]}
                      </div>
                      <span className="text-neutral-300">{user.company}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={user.status === 'Online' ? 'success' : 'default'}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-neutral-600 rounded-lg transition-colors">
                        <Pencil className="w-4 h-4 text-neutral-400" />
                      </button>
                      <button className="p-1.5 hover:bg-neutral-600 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-neutral-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={26}
          totalItems={460}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </Card>
    </div>
  );
}
