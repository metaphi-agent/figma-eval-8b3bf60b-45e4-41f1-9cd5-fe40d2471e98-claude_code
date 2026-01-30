import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const months = ['January', 'February', 'March', 'April', 'May', 'June'];
const daysInMonth = [31, 28, 31, 30, 31, 30];

export function Calendar() {
  return (
    <Layout title="Calendar">
      <div className="space-y-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-white">January 2024</h2>
            <div className="flex gap-2">
              <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <Button variant="primary" size="md" icon={<Plus size={18} />}>
            Create schedule
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-3 gap-6">
          {months.map((month, monthIndex) => (
            <Card key={month}>
              <div className="text-center mb-4">
                <h3 className="text-sm font-semibold text-white">{month} 2024</h3>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-xs text-neutral-400 py-1">
                    {day}
                  </div>
                ))}
                {Array.from({ length: daysInMonth[monthIndex] }, (_, i) => i + 1).map((day) => (
                  <button
                    key={day}
                    className="aspect-square text-center text-xs text-neutral-300 hover:bg-primary-500 hover:text-white rounded transition-colors"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {[
              { title: 'Team Meeting', date: 'Jan 15, 2024', time: '10:00 AM' },
              { title: 'Client Presentation', date: 'Jan 18, 2024', time: '2:00 PM' },
              { title: 'Project Deadline', date: 'Jan 25, 2024', time: '5:00 PM' },
            ].map((event, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-dark-bg rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{event.title}</div>
                  <div className="text-xs text-neutral-400">{event.date} at {event.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
}
