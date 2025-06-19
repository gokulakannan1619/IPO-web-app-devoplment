import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  CreditCard, 
  FileText, 
  TrendingUp, 
  Users, 
  HelpCircle,
  Building2
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'manage-ipo', label: 'Manage IPO', icon: Building2 },
  { id: 'ipo-subscription', label: 'IPO Subscription', icon: FileText },
  { id: 'ipo-allotment', label: 'IPO Allotment', icon: TrendingUp },
];

const otherItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'api-manager', label: 'API Manager', icon: CreditCard },
  { id: 'accounts', label: 'Accounts', icon: Users },
  { id: 'help', label: 'Help', icon: HelpCircle },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <div className="text-white font-bold text-sm">BF</div>
          </div>
          <span className="ml-2 text-lg font-bold text-gray-900">Bluestock Fintech</span>
        </div>
      </div>

      <div className="flex-1 py-6">
        <div className="px-4 mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            MENU
          </h3>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            OTHERS
          </h3>
          <nav className="space-y-1">
            {otherItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};