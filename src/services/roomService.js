import { 
    collection, 
    addDoc, 
    doc, 
    updateDoc, 
    deleteDoc,
    arrayUnion,
    arrayRemove,
    serverTimestamp,
    onSnapshot
  } from 'firebase/firestore';
  import { db } from '../firebase/config';
  
  export const roomService = {
    createRoom: async (name, creatorId) => {
      try {
        return await addDoc(collection(db, 'rooms'), {
          name,
          createdBy: creatorId,
          createdAt: serverTimestamp(),
          participants: [creatorId],
          isActive: true
        });
      } catch (error) {
        console.error('Error creating room:', error);
        throw error;
      }
    },
  
    joinRoom: async (roomId, userId) => {
      try {
        const roomRef = doc(db, 'rooms', roomId);
        await updateDoc(roomRef, {
          participants: arrayUnion(userId)
        });
      } catch (error) {
        console.error('Error joining room:', error);
        throw error;
      }
    },
  
    leaveRoom: async (roomId, userId) => {
      try {
        const roomRef = doc(db, 'rooms', roomId);
        await updateDoc(roomRef, {
          participants: arrayRemove(userId)
        });
      } catch (error) {
        console.error('Error leaving room:', error);
        throw error;
      }
    },
  
    deleteRoom: async (roomId) => {
      try {
        await deleteDoc(doc(db, 'rooms', roomId));
      } catch (error) {
        console.error('Error deleting room:', error);
        throw error;
      }
    },
  
    subscribeToRoom: (roomId, callback) => {
      return onSnapshot(doc(db, 'rooms', roomId), callback);
    },
  
    subscribeToRooms: (callback) => {
      return onSnapshot(collection(db, 'rooms'), callback);
    }
  };
  
  export default roomService;
  