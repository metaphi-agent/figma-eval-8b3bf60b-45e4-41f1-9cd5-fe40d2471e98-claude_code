import { Eye, Users, TrendingUp, Bell, Download } from 'lucide-react';
import { StatsCard } from '../components/ui/StatsCard';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { RevenueChart, ProfitChart, SessionsChart, DeviceDonutChart } from '../components/blocks/Charts';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Welcome back, John</h1>
          <p className="text-sm text-neutral-300 mt-0.5">
            Measure your advertising ROI and report website traffic.
          </p>
        </div>
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
          label="Pageviews"
          value="50.8K"
          change={{ value: '28.4%', positive: true }}
          iconBgColor="bg-primary/20"
        />
        <StatsCard
          icon={<Users className="w-5 h-5 text-cyan" />}
          label="Monthly users"
          value="23.6K"
          change={{ value: '12.6%', positive: true }}
          iconBgColor="bg-cyan/20"
        />
        <StatsCard
          icon={<TrendingUp className="w-5 h-5 text-teal" />}
          label="New sign ups"
          value="756"
          change={{ value: '3.1%', positive: false }}
          iconBgColor="bg-teal/20"
        />
        <StatsCard
          icon={<Bell className="w-5 h-5 text-yellow-500" />}
          label="Subscriptions"
          value="2.3K"
          change={{ value: '11.3%', positive: true }}
          iconBgColor="bg-yellow-500/20"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <RevenueChart
            revenue="$240.8K"
            change={{ value: '24.6%', positive: true }}
          />
        </div>
        <div className="space-y-4">
          <ProfitChart
            profit="$144.6K"
            change={{ value: '28.5%', positive: true }}
          />
          <SessionsChart
            sessions="400"
            change={{ value: '16.8%', positive: true }}
          />
        </div>
      </div>

      {/* Reports Overview */}
      <DeviceDonutChart />

      {/* Users by Country */}
      <Card>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Users by country</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold text-white">12.4 K</span>
              <Badge variant="success">+28.5%</Badge>
            </div>
          </div>
          <button className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
            Export
            <Download className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Country list */}
          <div className="space-y-4">
            {[
              { country: 'United states', percentage: 30, color: 'bg-primary' },
              { country: 'United Kingdom', percentage: 20, color: 'bg-cyan' },
              { country: 'Canada', percentage: 20, color: 'bg-teal' },
              { country: 'Australia', percentage: 15, color: 'bg-yellow-500' },
              { country: 'Spain', percentage: 15, color: 'bg-red-500' },
            ].map((item) => (
              <div key={item.country} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-sm text-neutral-300 flex-1">{item.country}</span>
                <span className="text-sm text-white">{item.percentage}%</span>
              </div>
            ))}
          </div>

          {/* World map placeholder */}
          <div className="relative h-64 bg-neutral-600/30 rounded-xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 800 400" className="w-full h-full opacity-50">
              {/* Simplified world map dots */}
              {Array.from({ length: 100 }).map((_, i) => (
                <circle
                  key={i}
                  cx={100 + (i % 20) * 30 + Math.random() * 10}
                  cy={50 + Math.floor(i / 20) * 60 + Math.random() * 10}
                  r="3"
                  fill="#1A2747"
                />
              ))}
              {/* Highlight markers */}
              <circle cx="180" cy="140" r="8" fill="#CB3CFF" />
              <circle cx="380" cy="120" r="6" fill="#05C3DD" />
              <circle cx="580" cy="280" r="6" fill="#00BFA5" />
            </svg>
            <div className="absolute bottom-4 right-4 bg-neutral-700 rounded-lg px-3 py-2 text-sm">
              <p className="text-cyan font-medium">1.86 K</p>
              <p className="text-xs text-neutral-400">Australia</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
