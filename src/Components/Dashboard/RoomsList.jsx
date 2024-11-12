import React, { useState } from 'react';
import { roomService } from '../../services/roomService';

const RoomsList = ({ rooms, activeRoom, setActiveRoom, currentUser }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;

    try {
      const roomRef = await roomService.createRoom(newRoomName, currentUser.uid);
      setNewRoomName('');
      setIsCreating(false);
      setActiveRoom({
        id: roomRef.id,
        name: newRoomName,
        createdBy: currentUser.uid,
        participants: [currentUser.uid]
      });
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-400 text-xs uppercase font-semibold">
          Available Rooms — {rooms.length}
        </h3>
        <button
          onClick={() => setIsCreating(true)}
          className="text-gray-400 hover:text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {isCreating && (
        <form onSubmit={handleCreateRoom} className="mb-4">
          <input
            type="text"
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            placeholder="Room name"
            className="w-full px-3 py-2 bg-discord-dark rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <div className="flex justify-end mt-2 space-x-2">
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="px-3 py-1 text-sm text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        {rooms.map(room => {
          const isUserInRoom = room.participants?.includes(currentUser.uid);
          const participantCount = room.participants?.length || 0;

          return (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room)}
              className={`w-full p-3 rounded-md text-left transition-colors ${
                activeRoom?.id === room.id
                  ? 'bg-discord-selected text-white'
                  : 'text-gray-400 hover:bg-discord-hover hover:text-gray-200'
              }`}
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{room.name}</span>
                  <span className="text-xs bg-discord-dark px-2 py-1 rounded">
                    {participantCount} {participantCount === 1 ? 'user' : 'users'}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Created by {room.creatorEmail || 'Unknown'}
                </div>
                {isUserInRoom && (
                  <div className="text-xs text-green-400 mt-1">
                    You are in this room
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsList;
