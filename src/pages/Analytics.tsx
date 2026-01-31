import { Eye, Users, TrendingUp, Bell, Download, MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { StatsCard } from '../components/ui/StatsCard';
import { Card, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Avatar, AvatarGroup } from '../components/ui/Avatar';
import { DonutChart } from '../components/blocks/Charts';

const avatars = [
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
];

const products = [
  { name: 'iPhone 14 Pro Max', price: '$1,099.00', image: '📱' },
  { name: 'Apple Watch SE', price: '$799.00', image: '⌚' },
];

const orders = [
  { id: '#4012', name: 'John Carter', email: 'john@google.com', date: 'Jan 30, 2024', country: 'United States', status: 'Completed', amount: '$1,843.02' },
  { id: '#4022', name: 'Sophie Moore', email: 'sophie@webflow.com', date: 'Jan 27, 2024', country: 'United Kingdom', status: 'Completed', amount: '$3,875.02' },
  { id: '#4032', name: 'Matt Cannon', email: 'matt@facebook.com', date: 'Jan 26, 2024', country: 'Australia', status: 'Completed', amount: '$1,249.00' },
  { id: '#4042', name: 'Graham Hills', email: 'graham@twitter.com', date: 'Jan 21, 2024', status: 'Pending', country: 'India', amount: '$1,000.02' },
  { id: '#4052', name: 'Sandy Houston', email: 'sandy@youtube.com', date: 'Jan 17, 2024', country: 'Australia', status: 'Cancelled', amount: '$3,343.00' },
  { id: '#4062', name: 'Sonny Houston', email: 'sonny@youtube.com', date: 'Jun 6, 2024', country: 'Canada', status: 'Completed', amount: '$3,848.00' },
  { id: '#4072', name: 'Andy Smith', email: 'andy@reddit.com', date: 'Jun 15, 2024', country: 'United States', status: 'Completed', amount: '$1,148.00' },
];

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Analytics</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors">
            <Download className="w-4 h-4" />
            Export data
          </button>
          <Button>Create report</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard
          icon={<Eye className="w-5 h-5 text-primary" />}
          label="Sale Products"
          value="50.8K"
          change={{ value: '28.4%', positive: true }}
          iconBgColor="bg-primary/20"
        />
        <StatsCard
          icon={<Users className="w-5 h-5 text-cyan" />}
          label="Stock Products"
          value="23.6K"
          change={{ value: '12.6%', positive: true }}
          iconBgColor="bg-cyan/20"
        />
        <StatsCard
          icon={<TrendingUp className="w-5 h-5 text-teal" />}
          label="Sale Products"
          value="756"
          change={{ value: '3.1%', positive: false }}
          iconBgColor="bg-teal/20"
        />
        <StatsCard
          icon={<Bell className="w-5 h-5 text-yellow-500" />}
          label="Average Revenue"
          value="2.3K"
          change={{ value: '11.3%', positive: true }}
          iconBgColor="bg-yellow-500/20"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Website Visitors */}
        <Card>
          <CardHeader
            title="Website Visitors"
            action={
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>Oct 2024 - Dec 2024</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            }
          />
          <DonutChart
            value="150k"
            label=""
            segments={[
              { color: '#CB3CFF', percentage: 40 },
              { color: '#05C3DD', percentage: 30 },
              { color: '#00BFA5', percentage: 30 },
            ]}
          />
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-neutral-300">Organic</span>
              </div>
              <span className="text-white">30%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-neutral-300">Social</span>
              </div>
              <span className="text-white">50%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-neutral-300">Direct</span>
              </div>
              <span className="text-white">20%</span>
            </div>
          </div>
        </Card>

        {/* Revenue by customer type */}
        <Card>
          <CardHeader title="Revenue by customer type" subtitle="$240.8K" />
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="success">+24.6%</Badge>
            <span className="text-xs text-neutral-400">vs previous sales</span>
            <span className="text-xs text-neutral-400 ml-auto">New customers</span>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-2 h-40">
            {[65, 80, 45, 90, 55, 70, 85, 50, 75, 60, 45, 95].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div
                  className="bg-gradient-to-t from-primary/50 to-primary rounded-t"
                  style={{ height: `${height * 0.6}%` }}
                />
                <div
                  className="bg-gradient-to-t from-cyan/50 to-cyan rounded-t"
                  style={{ height: `${height * 0.4}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-neutral-400">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </Card>

        {/* Team progress & Website Visitors */}
        <div className="space-y-4">
          <Card>
            <CardHeader title="Team progress" />
            <div className="space-y-3">
              {[
                { name: 'John Carter', role: 'Project manager', progress: 85 },
                { name: 'Sophie Moore', role: 'Customer service', progress: 45 },
                { name: 'Matt Cannon', role: 'Developer', progress: 75 },
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <Avatar
                    src={`https://images.unsplash.com/photo-${member.name === 'John Carter' ? '1472099645785-5658abf4ff4e' : member.name === 'Sophie Moore' ? '1494790108377-be9c29b29330' : '1507003211169-0a1dd7228f2d'}?w=40&h=40&fit=crop&crop=face`}
                    size="sm"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{member.name}</p>
                    <p className="text-xs text-neutral-400">{member.role}</p>
                  </div>
                  <span className="text-sm text-white">{member.progress}%</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="Website Visitors" />
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1A2747" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#CB3CFF"
                    strokeWidth="8"
                    strokeDasharray="200"
                    strokeDashoffset="40"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">80%</span>
                  <span className="text-xs text-neutral-400">Transaction</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-neutral-300">Sell</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-neutral-300">Distribute</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-neutral-300">Return</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Products and Orders Status */}
      <div className="grid grid-cols-4 gap-4">
        {/* Products */}
        <Card>
          <CardHeader title="Products" />
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.name} className="flex items-center gap-3 p-3 bg-neutral-600/30 rounded-lg">
                <div className="w-12 h-12 bg-neutral-500/30 rounded-lg flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{product.name}</p>
                  <p className="text-xs text-neutral-400">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Orders Status Table */}
        <div className="col-span-3">
          <Card>
            <CardHeader
              title="Orders Status"
              action={
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neutral-400">Jan 2024</span>
                  <Button variant="ghost" size="sm">Create order</Button>
                </div>
              }
            />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-neutral-400 border-b border-neutral-600">
                    <th className="py-3 text-left font-medium">ID</th>
                    <th className="py-3 text-left font-medium">Client</th>
                    <th className="py-3 text-left font-medium">Phone</th>
                    <th className="py-3 text-left font-medium">Country</th>
                    <th className="py-3 text-left font-medium">Status</th>
                    <th className="py-3 text-right font-medium">Total</th>
                    <th className="py-3 text-right font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-600/30">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-neutral-600/20">
                      <td className="py-3 text-white">{order.id}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <Avatar
                            src={`https://images.unsplash.com/photo-147209964${order.id.slice(-1)}?w=40&h=40&fit=crop&crop=face`}
                            size="sm"
                          />
                          <div>
                            <p className="text-white">{order.name}</p>
                            <p className="text-xs text-neutral-400">{order.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-neutral-300">{order.date}</td>
                      <td className="py-3 text-neutral-300">{order.country}</td>
                      <td className="py-3">
                        <Badge
                          variant={
                            order.status === 'Completed'
                              ? 'success'
                              : order.status === 'Pending'
                              ? 'warning'
                              : 'error'
                          }
                        >
                          {order.status}
                        </Badge>
                      </td>
                      <td className="py-3 text-right text-white">{order.amount}</td>
                      <td className="py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1 hover:bg-neutral-600 rounded">
                            <Pencil className="w-4 h-4 text-neutral-400" />
                          </button>
                          <button className="p-1 hover:bg-neutral-600 rounded">
                            <Trash2 className="w-4 h-4 text-neutral-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
