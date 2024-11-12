import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-16 bg-discord-darker flex flex-col items-center py-3 space-y-4">
      <div className="w-12 h-12 bg-discord-purple rounded-full flex items-center justify-center">
        <span className="text-white font-semibold">
          {user?.email?.[0]?.toUpperCase()}
        </span>
      </div>
      <div className="w-12 h-0.5 bg-gray-700" />
      <button
        onClick={logout}
        className="w-12 h-12 bg-discord-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        title="Logout"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
