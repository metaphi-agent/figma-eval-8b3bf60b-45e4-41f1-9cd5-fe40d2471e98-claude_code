import { Card, CardHeader } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface RevenueChartProps {
  revenue: string;
  change: { value: string; positive: boolean };
}

export function RevenueChart({ revenue, change }: RevenueChartProps) {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm text-neutral-300 mb-1">Total revenue</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-white">{revenue}</span>
            <Badge variant={change.positive ? 'success' : 'error'}>
              {change.positive ? '+' : ''}{change.value}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-neutral-300">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-neutral-300">Expenses</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Jan 2024 - Dec 2024</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CB3CFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#CB3CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 50, 100, 150, 200].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="800"
              y2={y}
              stroke="#1A2747"
              strokeDasharray="4 4"
            />
          ))}
          {/* Revenue area */}
          <path
            d="M0,200 C100,180 150,100 200,120 C250,140 300,80 400,60 C500,40 600,100 700,80 C750,70 800,90 800,90 L800,250 L0,250 Z"
            fill="url(#revenueGradient)"
          />
          {/* Revenue line */}
          <path
            d="M0,200 C100,180 150,100 200,120 C250,140 300,80 400,60 C500,40 600,100 700,80 C750,70 800,90 800,90"
            fill="none"
            stroke="#CB3CFF"
            strokeWidth="2"
          />
          {/* Expenses line */}
          <path
            d="M0,220 C100,200 200,180 300,160 C400,140 500,120 600,130 C700,140 800,110 800,110"
            fill="none"
            stroke="#05C3DD"
            strokeWidth="2"
          />
          {/* Data point */}
          <circle cx="400" cy="60" r="6" fill="#CB3CFF" />
          <circle cx="400" cy="60" r="10" fill="#CB3CFF" fillOpacity="0.3" />
        </svg>

        {/* Tooltip */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-neutral-600 rounded-lg px-3 py-2 text-sm shadow-lg">
          <p className="text-white font-medium">$125.2k</p>
          <p className="text-neutral-300 text-xs">June 21, 2023</p>
          <Badge variant="success" className="mt-1">+19.5%</Badge>
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-neutral-400 -ml-8">
          <span>250K</span>
          <span>200K</span>
          <span>150K</span>
          <span>100K</span>
          <span>50K</span>
          <span>25K</span>
          <span>0K</span>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-4 text-xs text-neutral-400">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(
          (month) => (
            <span key={month}>{month}</span>
          )
        )}
      </div>
    </Card>
  );
}

interface ProfitChartProps {
  profit: string;
  change: { value: string; positive: boolean };
}

export function ProfitChart({ profit, change }: ProfitChartProps) {
  return (
    <Card>
      <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span>Total profit</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-white">{profit}</span>
        <Badge variant={change.positive ? 'success' : 'error'}>
          {change.positive ? '+' : ''}{change.value}
        </Badge>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-16">
        {[60, 80, 40, 90, 70, 50, 85, 75, 55, 65, 80, 45].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-neutral-400">
        <span>12 AM</span>
        <span>8 AM</span>
        <span>4 PM</span>
        <span>11 PM</span>
      </div>
      <p className="text-right text-xs text-neutral-300 mt-2">Last 12 months</p>
      <p className="text-right text-xs text-primary mt-1">View report</p>
    </Card>
  );
}

interface SessionsChartProps {
  sessions: string;
  change: { value: string; positive: boolean };
}

export function SessionsChart({ sessions, change }: SessionsChartProps) {
  return (
    <Card>
      <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>Total sessions</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-white">{sessions}</span>
        <Badge variant={change.positive ? 'success' : 'error'}>
          {change.positive ? '+' : ''}{change.value}
        </Badge>
      </div>

      {/* Mini line chart */}
      <div className="relative h-16">
        <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
          <path
            d="M0,50 C20,45 40,30 60,35 C80,40 100,20 120,25 C140,30 160,15 180,20 C190,22 200,18 200,18"
            fill="none"
            stroke="#05C3DD"
            strokeWidth="2"
          />
          <circle cx="200" cy="18" r="4" fill="#05C3DD" />
        </svg>
        <div className="absolute right-0 top-0 text-xs text-cyan">10k visitors</div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-neutral-400">
        <span>12 AM</span>
        <span>8 AM</span>
        <span>4 PM</span>
        <span>11 PM</span>
      </div>
      <p className="text-right text-xs text-primary mt-2">View report</p>
    </Card>
  );
}

interface DonutChartProps {
  value: string;
  label: string;
  segments: Array<{ color: string; percentage: number }>;
}

export function DonutChart({ value, label, segments }: DonutChartProps) {
  let currentAngle = -90;

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        {segments.map((segment, index) => {
          const angle = (segment.percentage / 100) * 360;
          const largeArcFlag = angle > 180 ? 1 : 0;

          const startX = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
          const startY = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
          const endX = 50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
          const endY = 50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180);

          const path = `M ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY}`;
          currentAngle += angle;

          return (
            <path
              key={index}
              d={path}
              fill="none"
              stroke={segment.color}
              strokeWidth="8"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-xs text-neutral-300">{label}</span>
      </div>
    </div>
  );
}

export function DeviceDonutChart() {
  return (
    <Card>
      <CardHeader title="Reports overview" action={
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 rounded border-neutral-500 bg-neutral-700" />
          <span className="text-sm text-neutral-300">Select date</span>
          <button className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white">
            Export data
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button className="px-3 py-1.5 bg-primary text-white text-sm rounded-lg">
            Create report
          </button>
        </div>
      } />

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <DonutChart
            value="23,648"
            label="Users by device"
            segments={[
              { color: '#CB3CFF', percentage: 60 },
              { color: '#05C3DD', percentage: 25 },
              { color: '#00BFA5', percentage: 15 },
            ]}
          />
          <div className="mt-6 space-y-3 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-neutral-300">Desktop users</span>
              </div>
              <span className="text-sm font-medium text-white">15,624</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-sm text-neutral-300">Phone app users</span>
              </div>
              <span className="text-sm font-medium text-white">5,546</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-sm text-neutral-300">Laptop users</span>
              </div>
              <span className="text-sm font-medium text-white">2,478</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white mb-4">Recent orders</h4>
          <div className="flex items-center gap-4 text-xs text-neutral-400 mb-3">
            <span className="text-primary">Jan 2024</span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-neutral-400 border-b border-neutral-600">
                <th className="py-2 text-left font-medium">Order</th>
                <th className="py-2 text-left font-medium">Date</th>
                <th className="py-2 text-left font-medium">Status</th>
                <th className="py-2 text-right font-medium">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-600/30">
              {[
                { id: '#1532', date: 'Dec 30, 11:06 AM', status: 'Paid', amount: '$329.40' },
                { id: '#1531', date: 'Dec 29, 2:59 AM', status: 'Pending', amount: '$117.24' },
                { id: '#1530', date: 'Dec 29, 12:54 AM', status: 'Pending', amount: '$52.16' },
                { id: '#1529', date: 'Dec 28, 2:32 PM', status: 'Paid', amount: '$350.52' },
                { id: '#1528', date: 'Dec 27, 2:10 PM', status: 'Pending', amount: '$246.78' },
                { id: '#1527', date: 'Dec 26, 9:48 AM', status: 'Paid', amount: '$64.00' },
              ].map((order) => (
                <tr key={order.id}>
                  <td className="py-2 text-white">{order.id}</td>
                  <td className="py-2 text-neutral-300">{order.date}</td>
                  <td className="py-2">
                    <Badge variant={order.status === 'Paid' ? 'success' : 'warning'}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-2 text-right text-white">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
