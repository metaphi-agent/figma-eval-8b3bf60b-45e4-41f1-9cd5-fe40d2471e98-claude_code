import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Plus } from 'lucide-react';

const columns = [
  {
    title: 'To Do',
    tasks: [
      { id: 1, title: 'Design new landing page', description: 'Create mockups for the new homepage', badge: 'Design', color: 'purple' as const },
      { id: 2, title: 'User research', description: 'Conduct interviews with 10 users', badge: 'Research', color: 'blue' as const },
    ],
  },
  {
    title: 'In Progress',
    tasks: [
      { id: 3, title: 'Implement authentication', description: 'Add OAuth2 login flow', badge: 'Development', color: 'sky' as const },
      { id: 4, title: 'Database optimization', description: 'Improve query performance', badge: 'Development', color: 'sky' as const },
    ],
  },
  {
    title: 'Review',
    tasks: [
      { id: 5, title: 'Marketing campaign', description: 'Q4 social media strategy', badge: 'Marketing', color: 'yellow' as const },
    ],
  },
  {
    title: 'Done',
    tasks: [
      { id: 6, title: 'Fix login bug', description: 'Resolved authentication issue', badge: 'Development', color: 'sky' as const },
      { id: 7, title: 'Update documentation', description: 'API docs are now complete', badge: 'Design', color: 'purple' as const },
    ],
  },
];

export function Kanban() {
  return (
    <Layout title="Kanban">
      <div className="grid grid-cols-4 gap-6 h-[calc(100vh-180px)]">
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <span className="text-xs text-neutral-400">{column.tasks.length}</span>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto">
              {column.tasks.map((task) => (
                <Card key={task.id} className="cursor-pointer hover:border-primary-500/50 transition-colors">
                  <Badge variant={task.color} className="mb-2">
                    {task.badge}
                  </Badge>
                  <h4 className="text-sm font-medium text-white mb-1">{task.title}</h4>
                  <p className="text-xs text-neutral-400">{task.description}</p>
                </Card>
              ))}
              <button className="w-full p-4 border-2 border-dashed border-dark-border rounded-lg text-neutral-400 hover:text-white hover:border-primary-500/50 transition-colors flex items-center justify-center gap-2">
                <Plus size={16} />
                <span className="text-sm">Add task</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
