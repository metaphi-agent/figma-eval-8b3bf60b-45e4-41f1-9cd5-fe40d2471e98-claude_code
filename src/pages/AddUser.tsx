import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { User, Users, CreditCard, Bell, Upload, Phone, Briefcase, MapPin, Globe, Mail, Pencil } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input, SearchInput } from '../components/ui/Input';
import { Avatar } from '../components/ui/Avatar';
import clsx from 'clsx';

const tabs = [
  { id: 'personal', label: 'Personal Information', icon: Pencil },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'notifications', label: 'Notifications', icon: Bell },
];

export default function AddUserPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'personal';
  const [formData, setFormData] = useState({
    fullName: 'John Carter',
    email: 'john@dashdark.com',
    shortDescription: '',
    phone: '(123) 456 - 7890',
    position: 'CEO & Founder',
    location: 'New York, NY',
    website: 'dashdark.com',
  });

  const setTab = (tab: string) => {
    setSearchParams({ tab });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Add User</h1>
        <div className="w-80">
          <SearchInput placeholder="Search for..." />
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar - Credentials */}
        <div className="w-72 shrink-0">
          <Card className="p-4">
            <h3 className="text-sm font-medium text-neutral-400 mb-4 px-2">Credentials</h3>
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setTab(tab.id)}
                    className={clsx(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm transition-colors',
                      currentTab === tab.id
                        ? 'bg-neutral-600/50 text-primary'
                        : 'text-neutral-300 hover:bg-neutral-600/30 hover:text-white'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {currentTab === 'personal' && (
            <div className="space-y-6">
              {/* Personal Information Card */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-white mb-1">Personal information</h2>
                <p className="text-sm text-neutral-400 mb-6">Lorem ipsum dolor sit amet consectetur adipiscing.</p>

                {/* Full name */}
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <User className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">Full name</span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Email address */}
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <Mail className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">Email address</span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Photo */}
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-neutral-300">Photo</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-6">
                        {/* Avatar with delete */}
                        <div className="flex flex-col items-center gap-1">
                          <Avatar
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                            size="xl"
                          />
                          <button className="text-xs text-neutral-400 hover:text-red-400 transition-colors">
                            Delete
                          </button>
                        </div>

                        {/* Upload area */}
                        <div className="flex-1 border-2 border-dashed border-neutral-600 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                          <div className="w-10 h-10 bg-neutral-700 rounded-lg mx-auto mb-3 flex items-center justify-center">
                            <Upload className="w-5 h-5 text-neutral-400" />
                          </div>
                          <p className="text-sm">
                            <span className="text-primary">Click to upload</span>
                            <span className="text-neutral-400"> or drag and drop</span>
                          </p>
                          <p className="text-xs text-neutral-500 mt-1">
                            SVG, PNG, JPG or GIF (max. 800 x 400px)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Short description */}
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <Pencil className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">Short description</span>
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={formData.shortDescription}
                        onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                        placeholder="Write a short bio about you..."
                        rows={4}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 resize-none placeholder:text-neutral-500"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Basic Information Card */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-white mb-1">Basic information</h2>
                <p className="text-sm text-neutral-400 mb-6">Lorem ipsum dolor sit amet consectetur adipiscing.</p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <Phone className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">Phone</span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Position */}
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <Briefcase className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">Position</span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <MapPin className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">Location</span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-6">
                    <div className="w-40 flex items-center gap-2 pt-2.5">
                      <Globe className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-300">Website</span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {currentTab === 'team' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-white mb-1">Team Information</h2>
              <p className="text-sm text-neutral-400 mb-6">Manage your team members and permissions.</p>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input label="Team Name" placeholder="Enter team name" />
                  <Input label="Job Role" placeholder="Enter job role" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-neutral-600/30 rounded-xl">
                    <input type="checkbox" className="w-4 h-4 rounded border-neutral-500 accent-primary" />
                    <span className="text-white">🎨 Design</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-600/30 rounded-xl">
                    <input type="checkbox" className="w-4 h-4 rounded border-neutral-500 accent-primary" />
                    <span className="text-white">💻 Develop</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-600/30 rounded-xl">
                    <input type="checkbox" className="w-4 h-4 rounded border-neutral-500 accent-primary" />
                    <span className="text-white">📊 Billing</span>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {currentTab === 'billing' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-white mb-1">Payment Methods</h2>
              <p className="text-sm text-neutral-400 mb-6">Set up your payment method.</p>

              <div className="space-y-4">
                <div className="p-4 bg-neutral-600/30 rounded-xl border-2 border-primary">
                  <div className="flex items-center gap-4">
                    <input type="radio" name="payment" defaultChecked className="w-4 h-4 accent-primary" />
                    <div className="flex-1">
                      <p className="text-white font-medium">Credit card</p>
                      <p className="text-sm text-neutral-400">We support Mastercard, Visa, Discover and Stripe</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-xs text-white font-bold">VISA</div>
                      <div className="w-10 h-6 bg-red-500 rounded flex items-center justify-center text-xs text-white font-bold">MC</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  <Input label="Card Number" placeholder="**** **** **** ****" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Expiry Date" placeholder="MM / YY" />
                    <Input label="CVV" placeholder="***" />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {currentTab === 'notifications' && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-white mb-1">Device notifications</h2>
              <p className="text-sm text-neutral-400 mb-6">Configure your notification preferences.</p>

              <div className="space-y-4">
                {[
                  { label: 'Push notifications', sublabel: 'Receive push notifications', enabled: true },
                  { label: 'Email notifications', sublabel: 'Receive email notifications', enabled: false },
                  { label: 'Slack notifications', sublabel: 'Receive Slack notifications', enabled: true },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-neutral-600/30 rounded-xl">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-sm text-neutral-400">{item.sublabel}</p>
                    </div>
                    <button
                      className={clsx(
                        'w-12 h-6 rounded-full transition-colors relative',
                        item.enabled ? 'bg-primary' : 'bg-neutral-600'
                      )}
                    >
                      <span
                        className={clsx(
                          'absolute top-1 w-4 h-4 rounded-full bg-white transition-transform',
                          item.enabled ? 'right-1' : 'left-1'
                        )}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
