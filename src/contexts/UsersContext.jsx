import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Add or update user in online users
    const userRef = doc(db, 'users', user.uid);
    setDoc(userRef, {
      email: user.email,
      lastSeen: new Date(),
      online: true
    }, { merge: true });

    // Subscribe to online users
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOnlineUsers(users);
    });

    // Cleanup on disconnect
    return () => {
      updateDoc(userRef, {
        online: false,
        lastSeen: new Date()
      });
      unsubscribe();
    };
  }, [user]);

  return (
    <UsersContext.Provider value={{ onlineUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
