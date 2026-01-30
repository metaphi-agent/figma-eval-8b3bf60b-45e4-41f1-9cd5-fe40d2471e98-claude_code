import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { StatCard } from '../components/ui/StatCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Users, Calendar, UserPlus, Download, Pencil, Trash2, MoreVertical } from 'lucide-react';
import { dashboardStats, recentOrders } from '../data/mockData';

export function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome Message */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-1">Welcome back, John</h2>
            <p className="text-neutral-400">Here are your recent sales and new customers.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="md">
              Overview
            </Button>
            <Button variant="primary" size="md">
              Download
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            label="Total Users"
            value="50.8K"
            change="+10%"
            positive={true}
            icon={<Users size={20} />}
            color="purple"
          />
          <StatCard
            label="Total Sales"
            value="23.6K"
            change="+8%"
            positive={true}
            icon={<Calendar size={20} />}
            color="yellow"
          />
          <StatCard
            label="New Users"
            value="756"
            change="+2%"
            positive={true}
            icon={<Users size={20} />}
            color="blue"
          />
          <StatCard
            label="Total Signups"
            value="2.3K"
            change="-1%"
            positive={false}
            icon={<UserPlus size={20} />}
            color="red"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Revenue</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">$240.8K</span>
                  <span className="text-sm text-green-300">+25%</span>
                </div>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  <span className="text-neutral-400">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full" />
                  <span className="text-neutral-400">Sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-300 rounded-full" />
                  <span className="text-neutral-400">Gross Income</span>
                </div>
              </div>
            </div>

            {/* Placeholder Chart */}
            <div className="h-64 bg-dark-bg rounded-lg flex items-center justify-center text-neutral-500">
              <div className="text-center">
                <div className="text-6xl mb-2">📊</div>
                <p>Revenue Chart</p>
              </div>
            </div>
          </Card>

          {/* Sales Overview */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Sales Overview</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">$144.6K</span>
                  <span className="text-sm text-red-300">-25%</span>
                </div>
              </div>
              <button className="text-neutral-400 hover:text-white transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Placeholder Chart */}
            <div className="h-64 bg-dark-bg rounded-lg flex items-center justify-center text-neutral-500">
              <div className="text-center">
                <div className="text-6xl mb-2">📈</div>
                <p>Sales Chart</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reports Overview */}
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Reports overview</h3>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Overview
                </Button>
                <Button variant="primary" size="sm">
                  Download
                </Button>
              </div>
            </div>

            {/* Circular Chart */}
            <div className="flex items-center gap-8 mb-8">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-dark-bg" />
                <div className="absolute inset-0 rounded-full border-8 border-primary-500 border-t-transparent border-r-transparent rotate-45" style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }} />
                <div className="text-center">
                  <div className="text-3xl font-semibold text-white">23,648</div>
                  <div className="text-sm text-neutral-400">Total Orders</div>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span className="text-sm text-neutral-300">{order.product}</span>
                    </div>
                    <span className="text-sm font-medium text-white">{order.id}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders Table */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4">Recent orders</h4>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-sm text-white">{order.product}</span>
                      </div>
                      <span className="text-sm text-neutral-400">{order.date}</span>
                      <span className="text-sm font-medium text-white">{order.amount}</span>
                    </div>
                    <Badge variant={order.status === 'Completed' ? 'green' : 'yellow'}>
                      {order.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Users by Country */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Users by country</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-white">12.4K</span>
                  <span className="text-sm text-green-300">+15%</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-48 bg-dark-bg rounded-lg flex items-center justify-center text-neutral-500 mb-6">
              <div className="text-center">
                <div className="text-5xl mb-2">🗺️</div>
                <p className="text-sm">World Map</p>
              </div>
            </div>

            {/* Country Stats */}
            <div className="space-y-3">
              {[
                { country: 'United States', value: '18.6 K', percent: 35 },
                { country: 'United Kingdom', value: '8.2 K', percent: 28 },
                { country: 'Australia', value: '5.4 K', percent: 20 },
                { country: 'India', value: '3.8 K', percent: 15 },
              ].map((item) => (
                <div key={item.country}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-neutral-300">{item.country}</span>
                    <span className="text-sm font-medium text-white">{item.value}</span>
                  </div>
                  <div className="h-1.5 bg-dark-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
