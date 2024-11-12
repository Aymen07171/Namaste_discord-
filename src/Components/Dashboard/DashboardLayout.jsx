import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuth } from '../../contexts/AuthContext';
import { useUsers } from '../../contexts/UsersContext';
import Sidebar from './Sidebar';
import RoomsList from './RoomsList';
import RoomChat from './RoomChat';
import UsersList from './UsersList';

const DashboardLayout = () => {
  const { user } = useAuth();
  const { onlineUsers } = useUsers();
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const roomsQuery = query(
      collection(db, 'rooms'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(roomsQuery, (snapshot) => {
      const roomsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        creatorEmail: onlineUsers.find(u => u.id === doc.data().createdBy)?.email
      }));
      setRooms(roomsData);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [onlineUsers]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center bg-discord-dark">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-full bg-discord-dark">
      <Sidebar activeRoom={activeRoom} />
      <div className="flex flex-1">
        <div className="flex flex-col w-60 bg-discord-dark-light">
          <UsersList users={onlineUsers} />
          <RoomsList 
            rooms={rooms}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
            currentUser={user}
          />
        </div>
        <div className="flex-1">
          {activeRoom ? (
            <RoomChat room={activeRoom} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Welcome to Discord</h3>
                <p className="text-sm">Select a room to join or create a new one</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
