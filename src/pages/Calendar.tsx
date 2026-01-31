import { useState } from 'react';
import { Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
import clsx from 'clsx';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const weekDays = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];

const people = [
  { name: 'Eddie Lobanovskiy', email: 'laboanovskiy@gmail.com' },
  { name: 'Alexey Stave', email: 'alexeyst@gmail.com' },
  { name: 'Anton Tkacheve', email: 'tkacheveanton@gmail.com' },
];

function generateCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  const days: (number | null)[] = [];

  // Previous month's trailing days
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startingDay - 1; i >= 0; i--) {
    days.push(prevMonthLastDay - i);
  }

  // Current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Next month's leading days
  const remainingDays = 35 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push(i);
  }

  return days;
}

function MonthCalendar({ month, year }: { month: number; year: number }) {
  const days = generateCalendarDays(year, month);
  const today = new Date();
  const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
  const currentDay = today.getDate();

  return (
    <div>
      <h3 className="text-sm font-medium text-white mb-2">
        {months[month]} {year}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((day, i) => (
          <div key={i} className="text-xs text-neutral-400 py-1">
            {day}
          </div>
        ))}
        {days.map((day, i) => {
          const isToday = isCurrentMonth && day === currentDay && i >= new Date(year, month, 1).getDay() && i < new Date(year, month, 1).getDay() + new Date(year, month + 1, 0).getDate();
          const isOutsideMonth = i < new Date(year, month, 1).getDay() || i >= new Date(year, month, 1).getDay() + new Date(year, month + 1, 0).getDate();

          return (
            <div
              key={i}
              className={clsx(
                'text-xs py-1 rounded cursor-pointer transition-colors',
                isToday
                  ? 'bg-primary text-white'
                  : isOutsideMonth
                  ? 'text-neutral-600'
                  : 'text-neutral-300 hover:bg-neutral-600'
              )}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function CalendarPage() {
  const [selectedYear] = useState(2021);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Calendar</h1>
        <Button>
          Monthly
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Create Schedule Button */}
          <Button className="w-full">
            <Plus className="w-4 h-4" />
            Create Schedule
          </Button>

          {/* Mini Calendar */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-white">December 2, 2021</span>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-neutral-600 rounded">
                  <ChevronLeft className="w-4 h-4 text-neutral-400" />
                </button>
                <button className="p-1 hover:bg-neutral-600 rounded">
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </button>
              </div>
            </div>
            <MonthCalendar month={11} year={2021} />
          </Card>

          {/* People */}
          <Card>
            <h3 className="text-sm font-medium text-white mb-4">People</h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-600 rounded-lg text-sm text-white placeholder:text-neutral-400 focus:outline-none"
              />
            </div>
            <div className="space-y-3">
              {people.map((person, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar name={person.name} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{person.name}</p>
                    <p className="text-xs text-primary truncate">{person.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* My Schedule Button */}
          <button className="w-full py-3 px-4 border border-neutral-600 rounded-xl text-white text-sm hover:bg-neutral-600/30 transition-colors">
            My Schedule
          </button>
        </div>

        {/* Year Calendar */}
        <div className="col-span-3">
          <Card>
            <div className="grid grid-cols-3 gap-8">
              {Array.from({ length: 12 }, (_, i) => (
                <MonthCalendar key={i} month={i} year={selectedYear} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
