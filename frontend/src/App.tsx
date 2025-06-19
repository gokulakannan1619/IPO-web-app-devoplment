import React, { useState, createContext } from 'react';
import { AuthWrapper } from './components/AuthWrapper';
import { Dashboard } from './components/dashboard/Dashboard';
import { IPOTable } from './components/ipo/IPOTable';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { useAuth, useAuthProvider, AuthContext } from './hooks/useAuth';
import { mockIPOData } from './data/mockData';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user) {
    return <AuthWrapper />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'manage-ipo':
        return <IPOTable ipos={mockIPOData} title="Upcomming IPO | Dashboard" />;
      case 'ipo-subscription':
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">IPO Subscription</h2>
              <p className="text-gray-600">This feature is coming soon.</p>
            </div>
          </div>
        );
      case 'ipo-allotment':
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">IPO Allotment</h2>
              <p className="text-gray-600">This feature is coming soon.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Settings</h2>
              <p className="text-gray-600">Settings panel is coming soon.</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function App() {
  const authValue = useAuthProvider();

  return (
    <AuthContext.Provider value={authValue}>
      <AppContent />
    </AuthContext.Provider>
  );
}

export default App;