import { useState } from 'react';
import { Phone, Smile, Paperclip, Send } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Avatar, AvatarGroup } from '../components/ui/Avatar';
import { SearchInput } from '../components/ui/Input';
import clsx from 'clsx';

const contacts = [
  { id: 1, name: 'Patrick Meyer', handle: '@patrickmeyer', time: '5 min ago', unread: true },
  { id: 2, name: 'Sophie Moore', handle: '@sophiemoore', time: '10 min ago', active: true },
  { id: 3, name: 'Matt Cannon', handle: '@mattcannon', time: '15 min ago' },
  { id: 4, name: 'Graham Hills', handle: '@grahamhills', time: '20 min ago' },
  { id: 5, name: 'Sandy Houston', handle: '@sandyhouston', time: '25 min ago' },
];

const messages = [
  {
    id: 1,
    sender: 'Sophie Moore',
    content: "Hello John! Hope you're doing well. I need your help with some reports, are you available for a call later today?",
    time: '10:40 AM',
    isMe: false,
  },
  {
    id: 2,
    sender: 'Sophie Moore',
    content: 'Thank you',
    time: '10:40 AM',
    isMe: false,
  },
  {
    id: 3,
    sender: 'me',
    content: 'Hey Sophie! How are you?',
    time: '11:41 AM',
    isMe: true,
  },
  {
    id: 4,
    sender: 'me',
    content: "For sure, I'll be free after mid-day, let me know what time works for you",
    time: '11:41 AM',
    isMe: true,
  },
  {
    id: 5,
    sender: 'Sophie Moore',
    content: 'What about 2:00 PM? Works for you?',
    time: '11:45 AM',
    isMe: false,
  },
  {
    id: 6,
    sender: 'me',
    content: '',
    time: '11:46 AM',
    isMe: true,
    isImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
  },
  {
    id: 7,
    sender: 'Sophie Moore',
    content: '📎 analytics-reports.pdf',
    time: '11:47 AM',
    isMe: false,
    isFile: true,
  },
];

const activeUsers = [
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face' },
];

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[1]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="p-6 h-[calc(100vh-48px)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold text-white">Messages</h1>
          <div className="w-80">
            <SearchInput placeholder="Search for..." />
          </div>
        </div>
        <Button>Write message</Button>
      </div>

      <div className="grid grid-cols-3 gap-6 h-[calc(100%-80px)]">
        {/* Contacts List */}
        <Card className="flex flex-col overflow-hidden">
          {/* Active Users */}
          <div className="p-4 border-b border-neutral-600">
            <p className="text-sm text-neutral-400 mb-3">Active</p>
            <div className="flex gap-2">
              {activeUsers.map((user, index) => (
                <Avatar key={index} src={user.src} size="md" status="online" />
              ))}
            </div>
          </div>

          {/* Messages Count */}
          <div className="p-4 border-b border-neutral-600 flex items-center justify-between">
            <p className="font-medium text-white">Messages</p>
            <span className="text-xs bg-neutral-600 text-white px-2 py-0.5 rounded-full">
              40
            </span>
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={clsx(
                  'w-full p-4 flex items-start gap-3 border-b border-neutral-600/50 transition-colors text-left',
                  selectedContact.id === contact.id
                    ? 'bg-neutral-600/50'
                    : 'hover:bg-neutral-600/30'
                )}
              >
                <Avatar
                  src={`https://images.unsplash.com/photo-${1470000000000 + contact.id * 1000}?w=40&h=40&fit=crop&crop=face`}
                  name={contact.name}
                  size="md"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white truncate">{contact.name}</p>
                    <span className="text-xs text-neutral-400">{contact.time}</span>
                  </div>
                  <p className="text-sm text-neutral-400 truncate mt-0.5">
                    Lorem ipsum dolor sit amet consectetur non arcu non mauris quis diam lectus commodo.
                  </p>
                </div>
                {contact.unread && (
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="col-span-2 flex flex-col overflow-hidden p-0">
          {/* Chat Header */}
          <div className="p-4 border-b border-neutral-600 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                size="md"
              />
              <div>
                <p className="font-medium text-white">Sophie Moore</p>
                <p className="text-sm text-neutral-400">@sophiemoore</p>
              </div>
            </div>
            <Button variant="primary" size="sm">
              <Phone className="w-4 h-4" />
              Call Sophie
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  'flex gap-3',
                  message.isMe ? 'flex-row-reverse' : ''
                )}
              >
                {!message.isMe && (
                  <Avatar
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                    size="sm"
                  />
                )}
                <div
                  className={clsx(
                    'max-w-md',
                    message.isMe ? 'items-end' : 'items-start'
                  )}
                >
                  {message.isImage ? (
                    <img
                      src={message.imageUrl}
                      alt="Shared image"
                      className="rounded-xl max-w-xs"
                    />
                  ) : message.isFile ? (
                    <div className="px-4 py-3 rounded-xl bg-neutral-600/50">
                      <p className="text-sm text-white">{message.content}</p>
                    </div>
                  ) : (
                    <div
                      className={clsx(
                        'px-4 py-3 rounded-xl',
                        message.isMe
                          ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                          : 'bg-neutral-600/50 text-white'
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  )}
                  <p className="text-xs text-neutral-400 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-neutral-600">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 bg-transparent text-white placeholder:text-neutral-400 focus:outline-none"
              />
              <button className="p-2 hover:bg-neutral-600 rounded-lg transition-colors">
                <Smile className="w-5 h-5 text-neutral-400" />
              </button>
              <button className="p-2 hover:bg-neutral-600 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5 text-neutral-400" />
              </button>
              <Button size="sm">
                Send now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
