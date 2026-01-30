import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Search, Smile, Paperclip, Send } from 'lucide-react';

const contacts = [
  { name: 'Sarah Brown', message: 'Hey there! How are you doing today?', time: '2 min', avatar: 'SB', online: true },
  { name: 'Emily Davis', message: 'See you tomorrow!', time: '15 min', avatar: 'ED', online: false },
  { name: 'Laura Martin', message: 'Thanks for your help!', time: '1 hour', avatar: 'LM', online: true },
  { name: 'Jessica Taylor', message: 'Can we reschedule?', time: '3 hours', avatar: 'JT', online: false },
  { name: 'Michael Brown', message: 'Project looks great!', time: '1 day', avatar: 'MB', online: false },
];

export function Messages() {
  return (
    <Layout title="Messages">
      <Card padding="none" className="h-[calc(100vh-180px)]">
        <div className="grid grid-cols-12 h-full">
          {/* Contacts List */}
          <div className="col-span-4 border-r border-dark-border flex flex-col">
            <div className="p-4 border-b border-dark-border">
              <Input placeholder="Search..." icon={<Search size={18} />} />
            </div>
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <button
                  key={contact.name}
                  className="w-full p-4 flex items-center gap-3 hover:bg-dark-surface transition-colors border-b border-dark-border"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold">
                      {contact.avatar}
                    </div>
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-300 border-2 border-dark-surface rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{contact.name}</span>
                      <span className="text-xs text-neutral-400">{contact.time}</span>
                    </div>
                    <p className="text-sm text-neutral-400 truncate">{contact.message}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-dark-border flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold">
                  SB
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-300 border-2 border-dark-surface rounded-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-white">Sarah Brown</h3>
                <p className="text-xs text-green-300">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  SB
                </div>
                <div>
                  <div className="bg-dark-surface rounded-lg rounded-tl-none p-3 max-w-md">
                    <p className="text-sm text-white">Hey there! How are you doing today?</p>
                  </div>
                  <span className="text-xs text-neutral-500 mt-1 block">2 minutes ago</span>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div>
                  <div className="bg-primary-500 rounded-lg rounded-tr-none p-3 max-w-md">
                    <p className="text-sm text-white">I'm doing great! Thanks for asking. How about you?</p>
                  </div>
                  <span className="text-xs text-neutral-500 mt-1 block text-right">Just now</span>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-dark-border">
              <div className="flex items-center gap-3">
                <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                  <Smile size={20} />
                </button>
                <button className="p-2 text-neutral-400 hover:text-white transition-colors">
                  <Paperclip size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-dark-surface border border-dark-border rounded px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button variant="primary" size="md" icon={<Send size={18} />}>
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
