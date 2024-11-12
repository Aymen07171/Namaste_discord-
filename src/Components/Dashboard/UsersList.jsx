import React from 'react';

const UsersList = ({ users }) => {
  const onlineUsers = users.filter(user => user.online);
  const offlineUsers = users.filter(user => !user.online);

  const UserItem = ({ user, status }) => (
    <div className="flex items-center space-x-2 p-2 rounded hover:bg-discord-hover">
      <div className="relative">
        <div className="w-8 h-8 bg-discord-purple rounded-full flex items-center justify-center">
          <span className="text-white text-sm">{user.email[0].toUpperCase()}</span>
        </div>
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-discord-dark-light ${
          status === 'online' ? 'bg-green-500' : 'bg-gray-500'
        }`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-white truncate">{user.email}</div>
        <div className="text-xs text-gray-400">{status}</div>
      </div>
    </div>
  );

  return (
    <div className="flex-shrink-0 h-1/2 overflow-y-auto p-3 border-b border-gray-800">
      <h3 className="text-gray-400 text-xs uppercase font-semibold mb-2">
        Online Users — {onlineUsers.length}
      </h3>
      <div className="space-y-1">
        {onlineUsers.map(user => (
          <UserItem key={user.id} user={user} status="online" />
        ))}
      </div>

      <h3 className="text-gray-400 text-xs uppercase font-semibold mt-4 mb-2">
        Offline Users — {offlineUsers.length}
      </h3>
      <div className="space-y-1">
        {offlineUsers.map(user => (
          <UserItem key={user.id} user={user} status="offline" />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
