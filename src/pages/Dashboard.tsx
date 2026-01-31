import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { StatCard } from '../components/ui/StatCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { BarChart3, Users, TrendingUp, MoreVertical, Download } from 'lucide-react';

export function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome Message */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-1">Welcome back, John</h2>
            <p className="text-sm text-[var(--color-neutral-400)]">Monitor your sales metrics and support updates seamlessly.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="md">
              Export data
            </Button>
            <Button variant="primary" size="md" icon={<Download size={18} />}>
              Download
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            label="Progressions"
            value="50.8K"
            change="+10.2%"
            positive={true}
            icon={<BarChart3 size={20} />}
            color="purple"
          />
          <StatCard
            label="Monthly users"
            value="23.6K"
            change="+8.1%"
            positive={false}
            icon={<Users size={20} />}
            color="yellow"
          />
          <StatCard
            label="New sign ups"
            value="756"
            change="+3.5%"
            positive={true}
            icon={<TrendingUp size={20} />}
            color="blue"
          />
          <StatCard
            label="Subscriptions"
            value="2.3K"
            change="+2.4%"
            positive={true}
            icon={<Users size={20} />}
            color="green"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Total Revenue Chart */}
          <Card>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">Total revenue</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">$240.8K</span>
                  <span className="text-sm text-[var(--color-success)] flex items-center gap-1">
                    <TrendingUp size={14} />
                    +25%
                  </span>
                </div>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                  <span className="text-[var(--color-neutral-400)]">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-secondary-cyan)] rounded-full" />
                  <span className="text-[var(--color-neutral-400)]">Expenses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
                  <span className="text-[var(--color-neutral-400)]">net cost - Dec 2024</span>
                </div>
              </div>
            </div>

            {/* Placeholder Chart */}
            <div className="h-64 bg-[var(--color-neutral-800)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-neutral-500)]">
              <div className="text-center">
                <div className="text-6xl mb-2">📊</div>
                <p className="text-sm">Line Chart Placeholder</p>
              </div>
            </div>
          </Card>

          {/* Total Profit Chart */}
          <Card>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">Total profit</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-white">$144.6K</span>
                  <span className="text-sm text-[var(--color-success)] flex items-center gap-1">
                    <TrendingUp size={14} />
                    +12.5%
                  </span>
                </div>
              </div>
              <button className="text-[var(--color-neutral-400)] hover:text-white transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Placeholder Chart */}
            <div className="h-64 bg-[var(--color-neutral-800)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-neutral-500)]">
              <div className="text-center">
                <div className="text-6xl mb-2">📈</div>
                <p className="text-sm">Bar Chart Placeholder</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reports Overview */}
          <Card className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold text-white">Reports overview</h3>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  Export data
                </Button>
                <Button variant="primary" size="sm" icon={<Download size={16} />}>
                  Download
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Circular Chart */}
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="var(--color-neutral-600)"
                      strokeWidth="16"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="16"
                      strokeDasharray="502.65"
                      strokeDashoffset="125.66"
                      transform="rotate(-90 100 100)"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="var(--color-secondary-cyan)"
                      strokeWidth="16"
                      strokeDasharray="502.65"
                      strokeDashoffset="377"
                      transform="rotate(-90 100 100)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-semibold text-white">23,648</div>
                    <div className="text-xs text-[var(--color-neutral-400)]">Users by devices</div>
                  </div>
                </div>

                <div className="space-y-3 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                      <span className="text-sm text-[var(--color-neutral-400)]">Desktop users</span>
                    </div>
                    <span className="text-sm font-medium text-white">15,624</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--color-secondary-cyan)] rounded-full" />
                      <span className="text-sm text-[var(--color-neutral-400)]">Phone app users</span>
                    </div>
                    <span className="text-sm font-medium text-white">5,546</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--color-neutral-600)] rounded-full" />
                      <span className="text-sm text-[var(--color-neutral-400)]">Laptop users</span>
                    </div>
                    <span className="text-sm font-medium text-white">2,478</span>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div>
                <h4 className="text-base font-semibold text-white mb-4">Recent orders</h4>
                <div className="space-y-2">
                  {[
                    { id: '#1532', date: 'Dec 30, 10:54 AM', amount: '$204.90', status: 'Paid' },
                    { id: '#1531', date: 'Dec 29, 2:30 AM', amount: '$97.14', status: 'Pending' },
                    { id: '#1530', date: 'Dec 29, 12:54 AM', status: 'Pending', amount: '$14.00' },
                    { id: '#1529', date: 'Dec 28, 1:29 PM', amount: '$109.00', status: 'Paid' },
                    { id: '#1528', date: 'Dec 27, 2:57 PM', amount: '$385.02', status: 'Pending' },
                    { id: '#1527', date: 'Dec 26, 9:16 AM', amount: '$14.00', status: 'Paid' },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-3 bg-[var(--color-neutral-800)] rounded-[var(--radius-md)] hover:bg-[var(--color-neutral-700)]/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                        <span className="text-sm text-white font-medium">{order.id}</span>
                      </div>
                      <span className="text-xs text-[var(--color-neutral-400)]">{order.date}</span>
                      <Badge variant={order.status === 'Paid' ? 'green' : 'orange'} size="sm">
                        {order.status}
                      </Badge>
                      <span className="text-sm font-medium text-white">{order.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Users by Country */}
          <Card>
            <div className="mb-6">
              <h3 className="text-base font-semibold text-white mb-2">Users by country</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-white">12.4 K</span>
                <span className="text-sm text-[var(--color-success)] flex items-center gap-1">
                  <TrendingUp size={14} />
                  +15%
                </span>
              </div>
              <button className="text-xs text-[var(--color-primary)] hover:underline mt-1">
                Export
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="h-48 bg-[var(--color-neutral-800)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-neutral-500)] mb-6">
              <div className="text-center">
                <div className="text-5xl mb-2">🗺️</div>
                <p className="text-xs">World Map</p>
              </div>
            </div>

            {/* Country Stats */}
            <div className="space-y-4">
              {[
                { country: 'United States', value: '1.86 K', percent: 35, color: 'var(--color-primary)' },
                { country: 'United Kingdom', value: '743', percent: 28, color: 'var(--color-secondary-cyan)' },
                { country: 'Canada', value: '124', percent: 20, color: 'var(--color-secondary-orange)' },
                { country: 'Australia', value: '82', percent: 15, color: 'var(--color-success)' },
                { country: 'India', value: '23', percent: 10, color: 'var(--color-neutral-500)' },
              ].map((item) => (
                <div key={item.country}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-[var(--color-neutral-400)]">{item.country}</span>
                    <span className="text-sm font-medium text-white">{item.value}</span>
                  </div>
                  <div className="h-1.5 bg-[var(--color-neutral-800)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.percent}%`, backgroundColor: item.color }}
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
