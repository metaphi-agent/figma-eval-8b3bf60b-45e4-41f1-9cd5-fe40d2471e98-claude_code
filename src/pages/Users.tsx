import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { users } from '../data/mockData';
import { Link } from 'react-router-dom';

export function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  return (
    <Layout title="Users">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <span className="text-primary-500">👥</span>
              </div>
              <button className="ml-auto text-neutral-400 hover:text-white">⋮</button>
            </div>
            <div className="text-sm text-neutral-400 mb-1">Total Users</div>
            <div className="text-2xl font-semibold text-white">250</div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                <span className="text-yellow-300">👤</span>
              </div>
              <button className="ml-auto text-neutral-400 hover:text-white">⋮</button>
            </div>
            <div className="text-sm text-neutral-400 mb-1">New Users</div>
            <div className="text-2xl font-semibold text-white">15</div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <span className="text-green-300">✓</span>
              </div>
              <button className="ml-auto text-neutral-400 hover:text-white">⋮</button>
            </div>
            <div className="text-sm text-neutral-400 mb-1">Top Users</div>
            <div className="text-2xl font-semibold text-white">200</div>
          </Card>

          <Card>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-blue-400">○</span>
              </div>
              <button className="ml-auto text-neutral-400 hover:text-white">⋮</button>
            </div>
            <div className="text-sm text-neutral-400 mb-1">Other Users</div>
            <div className="text-2xl font-semibold text-white">35</div>
          </Card>
        </div>

        {/* Users Table */}
        <Card padding="none">
          <div className="p-6 border-b border-dark-border">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">All Users</h2>
              <span className="text-sm text-neutral-400">1 - 10 of 256</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="px-6 py-4 text-left">
                    <input type="checkbox" className="w-4 h-4 rounded border-dark-border bg-dark-surface" />
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b border-dark-border hover:bg-dark-surface/50 transition-colors">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 rounded border-dark-border bg-dark-surface" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{user.name}</div>
                          <div className="text-xs text-neutral-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-300">{user.phone}</td>
                    <td className="px-6 py-4 text-sm text-neutral-300">{user.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs">
                          {user.company.charAt(0)}
                        </div>
                        <span className="text-sm text-neutral-300">{user.company}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={user.status === 'Online' ? 'green' : 'gray'}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-neutral-400 hover:text-white transition-colors">
                          <Pencil size={16} />
                        </button>
                        <button className="p-1.5 text-neutral-400 hover:text-red-300 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-dark-border flex items-center justify-between">
            <div className="text-sm text-neutral-400">1 - 10 of 460</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-400">Rows per page:</span>
                <select className="bg-dark-surface border border-dark-border rounded px-3 py-1.5 text-sm text-white">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-neutral-400 hover:text-white disabled:opacity-50" disabled={currentPage === 1}>
                  <ChevronLeft size={18} />
                </button>
                <button className="p-2 text-neutral-400 hover:text-white">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
