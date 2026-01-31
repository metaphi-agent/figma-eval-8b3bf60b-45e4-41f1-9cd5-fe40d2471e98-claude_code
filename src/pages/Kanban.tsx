import { useState } from 'react';
import { Plus, MoreHorizontal, MessageSquare, Paperclip } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SearchInput } from '../components/ui/Input';
import { Avatar, AvatarGroup } from '../components/ui/Avatar';

interface Task {
  id: string;
  title: string;
  description: string;
  tags: string[];
  comments: number;
  attachments: number;
  checklist?: { checked: boolean; label: string }[];
  avatars?: { src?: string; name?: string }[];
}

interface Column {
  id: string;
  title: string;
  count: number;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To do',
    count: 2,
    tasks: [
      {
        id: '1',
        title: 'Landing page design & development',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Development'],
        comments: 2,
        attachments: 4,
        checklist: [
          { checked: true, label: 'About page' },
          { checked: false, label: 'Careers page' },
        ],
        avatars: [
          { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
        ],
      },
      {
        id: '2',
        title: 'Landing page design',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Design'],
        comments: 8,
        attachments: 6,
        avatars: [
          { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
        ],
      },
    ],
  },
  {
    id: 'in_progress',
    title: 'In progress',
    count: 3,
    tasks: [
      {
        id: '3',
        title: 'Mobile app UI/UX design & development',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Development'],
        comments: 10,
        attachments: 2,
        avatars: [
          { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
        ],
      },
      {
        id: '4',
        title: 'Fix homepage bugs',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Development'],
        comments: 6,
        attachments: 12,
        avatars: [
          { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
        ],
      },
      {
        id: '5',
        title: 'Secret marketing page',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Development'],
        comments: 4,
        attachments: 8,
        checklist: [
          { checked: true, label: 'Approved budget' },
          { checked: false, label: 'Initial design review' },
          { checked: false, label: 'First design concept' },
          { checked: false, label: 'Second design concept' },
        ],
        avatars: [
          { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face' },
        ],
      },
    ],
  },
  {
    id: 'completed',
    title: 'Completed',
    count: 4,
    tasks: [
      {
        id: '6',
        title: 'SEO campaign',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Marketing'],
        comments: 12,
        attachments: 10,
        avatars: [
          { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
        ],
      },
      {
        id: '7',
        title: 'Target definition meeting',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Marketing'],
        comments: 6,
        attachments: 14,
        avatars: [
          { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
        ],
      },
      {
        id: '8',
        title: 'Launch product promotion',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Marketing'],
        comments: 8,
        attachments: 2,
        avatars: [
          { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
        ],
      },
      {
        id: '9',
        title: 'Twitter campaign',
        description: 'Lorem ipsum dolor sit amet consectetur sed id massa morbi porta malesuada dictumst.',
        tags: ['Marketing'],
        comments: 2,
        attachments: 12,
        avatars: [
          { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' },
          { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face' },
        ],
      },
    ],
  },
];

const tagColors: Record<string, 'cyan' | 'purple' | 'success'> = {
  Development: 'cyan',
  Design: 'purple',
  Marketing: 'success',
};

export default function KanbanPage() {
  const [columns] = useState(initialColumns);

  return (
    <div className="p-6 h-[calc(100vh-48px)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold text-white">Kanban</h1>
          <div className="w-80">
            <SearchInput placeholder="Search for..." />
          </div>
        </div>
        <Button>
          Sort by
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto">
        <div className="flex gap-6 h-full min-w-max pb-4">
          {columns.map((column) => (
            <div key={column.id} className="w-80 flex flex-col">
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-white">{column.title}</h3>
                  <span className="text-xs bg-neutral-600 text-white px-2 py-0.5 rounded-full">
                    {column.count}
                  </span>
                </div>
                <MoreHorizontal className="w-5 h-5 text-neutral-400" />
              </div>

              {/* Add Card Button */}
              <button className="w-full p-4 mb-4 border-2 border-dashed border-neutral-600 rounded-xl text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
              </button>

              {/* Tasks */}
              <div className="flex-1 space-y-4 overflow-y-auto">
                {column.tasks.map((task) => (
                  <Card key={task.id} className="p-4">
                    {/* Avatars */}
                    {task.avatars && (
                      <div className="flex items-center justify-between mb-3">
                        <AvatarGroup avatars={task.avatars} size="sm" max={3} />
                        <div className="flex items-center gap-3 text-xs text-neutral-400">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            {task.comments}
                          </span>
                          <span className="flex items-center gap-1">
                            <Paperclip className="w-3 h-3" />
                            {task.attachments}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Title & Description */}
                    <h4 className="font-medium text-white mb-2">{task.title}</h4>
                    <p className="text-sm text-neutral-400 mb-3 line-clamp-2">
                      {task.description}
                    </p>

                    {/* Checklist */}
                    {task.checklist && (
                      <div className="space-y-2 mb-3">
                        {task.checklist.map((item, index) => (
                          <label
                            key={index}
                            className="flex items-center gap-2 text-sm cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={item.checked}
                              readOnly
                              className="w-4 h-4 rounded border-neutral-500 bg-neutral-700"
                            />
                            <span
                              className={
                                item.checked ? 'text-neutral-400 line-through' : 'text-white'
                              }
                            >
                              {item.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Tags & Menu */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {task.tags.map((tag) => (
                          <Badge key={tag} variant={tagColors[tag] || 'default'}>
                            <span className="mr-1">
                              {tag === 'Development' && '⚡'}
                              {tag === 'Design' && '🎨'}
                              {tag === 'Marketing' && '📈'}
                            </span>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <button className="p-1 hover:bg-neutral-600 rounded">
                        <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
