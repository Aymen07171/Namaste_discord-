import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { roomService } from '../../services/roomService';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';

const RoomChat = ({ room }) => {
  const { user } = useAuth();
  const [participants, setParticipants] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [stream, setStream] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, 'rooms', room.id),
      (doc) => {
        const roomData = doc.data();
        setParticipants(roomData?.participants || []);
      }
    );

    return () => {
      unsubscribe();
      handleDisconnect();
    };
  }, [room.id]);

  const handleConnect = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(mediaStream);
      setIsConnected(true);
      await roomService.joinRoom(room.id, user.uid);
    } catch (error) {
      console.error('Error connecting to room:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
      setIsConnected(false);
      await roomService.leaveRoom(room.id, user.uid);
    } catch (error) {
      console.error('Error disconnecting from room:', error);
    }
  };

  const toggleMute = () => {
    if (stream) {
      stream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex-1 bg-discord-dark flex flex-col">
      <div className="h-12 bg-discord-dark-light flex items-center px-4 border-b border-gray-800">
        <h3 className="text-white font-semibold">{room.name}</h3>
      </div>

      <div className="flex-1 p-4 flex">
        <div className="flex-1">
          <div className="bg-discord-dark-light rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">Voice Channel</h4>
              <div className="flex space-x-2">
                {isConnected && (
                  <button
                    onClick={toggleMute}
                    className={`p-2 rounded ${
                      isMuted ? 'bg-red-500' : 'bg-gray-600'
                    } text-white hover:opacity-90 transition-opacity`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isMuted ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      )}
                    </svg>
                  </button>
                )}
                <button
                  onClick={isConnected ? handleDisconnect : handleConnect}
                  className={`px-4 py-2 rounded ${
                    isConnected
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                  } text-white transition-colors`}
                >
                  {isConnected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {participants.map((participantId) => (
                <div
                  key={participantId}
                  className={`flex items-center space-x-2 p-2 rounded ${
                    participantId === user.uid ? 'bg-discord-selected' : 'bg-discord-dark'
                  }`}
                >
                  <div className="w-8 h-8 bg-discord-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {participantId.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-white text-sm">
                      {participantId === user.uid ? 'You' : `User ${participantId.slice(0, 6)}`}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-400 text-xs">Connected</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomChat;
