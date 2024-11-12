import React from 'react';
import DashboardLayout from './Dashboard/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Top Bar */}
      <div className="h-16 bg-discord-dark-light flex items-center px-4 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-discord-purple rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">
              {user?.email?.[0]?.toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-white font-semibold">{user?.email}</h2>
            <p className="text-gray-400 text-sm">Online</p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <DashboardLayout />
      </div>
    </div>
  );
};

export default Dashboard;
