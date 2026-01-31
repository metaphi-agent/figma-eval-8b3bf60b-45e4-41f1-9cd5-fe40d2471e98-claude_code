import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Check, Upload } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Avatar } from '../components/ui/Avatar';
import clsx from 'clsx';

const steps = [
  { id: 1, label: 'Credentials', description: 'Provide your account username and password credential.' },
  { id: 2, label: 'Personal Information', description: 'Provide your personal information.' },
  { id: 3, label: 'Setting', description: 'Set up your account preferences.' },
  { id: 4, label: 'Billing', description: 'Add your billing information.' },
];

export default function AddUserPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStep = parseInt(searchParams.get('step') || '1');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    country: 'US',
    address: '',
    // ... add more fields as needed
  });

  const goToStep = (step: number) => {
    setSearchParams({ step: step.toString() });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      goToStep(currentStep + 1);
    } else {
      navigate('/users');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-white">Add User</h1>
        <div className="w-80">
          <Input placeholder="Search for..." />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Sidebar Steps */}
        <Card className="p-6">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(step.id)}
                className={clsx(
                  'w-full flex items-start gap-4 p-4 rounded-xl text-left transition-colors',
                  currentStep === step.id
                    ? 'bg-neutral-600/50'
                    : 'hover:bg-neutral-600/30'
                )}
              >
                <div
                  className={clsx(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0',
                    currentStep > step.id
                      ? 'bg-green-500 text-white'
                      : currentStep === step.id
                      ? 'bg-primary text-white'
                      : 'bg-neutral-600 text-neutral-300'
                  )}
                >
                  {currentStep > step.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={clsx(
                      'font-medium',
                      currentStep >= step.id ? 'text-white' : 'text-neutral-400'
                    )}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">{step.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* User Profile Section */}
          <div className="mt-8 pt-6 border-t border-neutral-600">
            <div className="text-center">
              <div className="relative inline-block">
                <Avatar size="xl" name="Upload photo" />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Upload className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="mt-3 text-sm text-neutral-300">
                Allowed *.jpeg, *.jpg and *.png
              </p>
              <p className="text-xs text-neutral-400">Max size of 5 MB</p>
            </div>

            <p className="text-sm text-neutral-400 mt-6">
              Basic information
              <br />
              <span className="text-neutral-300">
                Used to identify you on the platform
              </span>
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-neutral-400">📞 Phone:</span>
                <span className="text-white">+001 1234 - 1234</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-neutral-400">✉️ Email:</span>
                <span className="text-white">john.keanu@g...</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-neutral-400">📍 Location:</span>
                <span className="text-white">United states</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-neutral-400">🏢 Address:</span>
                <span className="text-white">United states</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Form Content */}
        <Card className="col-span-2 p-6">
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Personal Information
              </h3>
              <p className="text-sm text-neutral-400 mb-6">
                Provide your account username and password credentials.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Input
                  label="Phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <div className="col-span-2">
                  <label className="block text-sm text-neutral-300 mb-1.5">
                    Country
                  </label>
                  <select
                    className="w-full bg-neutral-700 border border-neutral-600 rounded-lg text-white px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  >
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <Input
                    label="Address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Team Information
              </h3>
              <p className="text-sm text-neutral-400 mb-6">
                Provide your team information.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input label="Team Name" placeholder="Enter team name" />
                  <Input label="Job Role" placeholder="Enter job role" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-neutral-600/30 rounded-xl">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-neutral-500"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-white">🎨 Design</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-600/30 rounded-xl">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-neutral-500"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-white">💻 Develop</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-600/30 rounded-xl">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-neutral-500"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-white">📊 Billing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Payment Methods
              </h3>
              <p className="text-sm text-neutral-400 mb-6">
                Set up your payment method.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-neutral-600/30 rounded-xl border-2 border-primary">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="w-4 h-4"
                    />
                    <div className="flex-1">
                      <p className="text-white font-medium">Credit card</p>
                      <p className="text-sm text-neutral-400">
                        We support Mastercard, Visa, Discover and Stripe
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-xs text-white">
                        VISA
                      </div>
                      <div className="w-10 h-6 bg-red-500 rounded flex items-center justify-center text-xs text-white">
                        MC
                      </div>
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

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Billing address
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Used for invoices and receipts.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm text-neutral-300">
                      The billing is the same as contact address
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <Input label="Country" placeholder="Select country" />
                    <Input label="State" placeholder="Select state" />
                    <Input label="City" placeholder="Enter city" />
                    <Input label="Zip" placeholder="Enter zip code" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Device notifications
              </h3>
              <p className="text-sm text-neutral-400 mb-6">
                Configure your notification preferences.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Push notifications', sublabel: 'Receive push notifications', enabled: true },
                  { label: 'Email notifications', sublabel: 'Receive email notifications', enabled: false },
                  { label: 'Slack notifications', sublabel: 'Receive Slack notifications', enabled: true },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-neutral-600/30 rounded-xl"
                  >
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

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Summary notifications
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Set up notification frequency.
                </p>

                <div className="space-y-3">
                  {['Daily summary', 'Weekly summary', 'Monthly summary'].map(
                    (label, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-3 p-4 bg-neutral-600/30 rounded-xl cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="summary"
                          defaultChecked={index === 0}
                          className="w-4 h-4"
                        />
                        <span className="text-white">{label}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-600">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {currentStep === 4 ? 'Save user' : 'Next step'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
