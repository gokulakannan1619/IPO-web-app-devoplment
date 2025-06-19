import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { mockIPOStats } from '../../data/mockData';

export const Dashboard: React.FC = () => {
  const quickLinks = [
    { name: 'NSE India', url: '#', icon: '🏛️' },
    { name: 'BSE India', url: '#', icon: '📈' },
    { name: 'SEBI', url: '#', icon: '⚖️' },
    { name: 'Money Control', url: '#', icon: '💰' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* IPO Statistics */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">IPO Dashboard India</h3>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                20 IPO In Gain
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <StatsCard
                title="IPO In Loss"
                value={mockIPOStats.ipoInLoss}
                color="#8B5CF6"
                size="medium"
              />
              <StatsCard
                title="Total IPO"
                value={mockIPOStats.totalIPO}
                color="#F97316"
                size="large"
              />
              <StatsCard
                title="IPO In Gain"
                value={mockIPOStats.ipoInGain}
                color="#06B6D4"
                size="medium"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <p className="text-gray-500 text-sm mb-4">
              Adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-medium text-gray-900">{link.name}</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Board IPO Chart */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Main Board IPO</h3>
                <p className="text-sm text-gray-500">From 01 Jan 2024</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                View Report
              </button>
            </div>
            
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto relative">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="8"
                    strokeDasharray={`${(mockIPOStats.upcomingIPO / 42) * 301.59} 301.59`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">15</div>
                    <div className="text-xs text-gray-500">Afternoon</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center mb-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Upcomming</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">{mockIPOStats.upcomingIPO}</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">New Listed</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">{mockIPOStats.newListed}</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Ongoing</span>
                </div>
                <div className="text-sm font-semibold text-gray-900">{mockIPOStats.ongoing}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};