import React, { createContext, useState, useEffect } from 'react';
import ExpiredTokenModal from './ExpiredTokenModal';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const expire = localStorage.getItem('expire');

    if (accessToken && new Date() < new Date(expire)) {
      setIsAuthenticated(true);
    }
    else{
      if (localStorage.getItem('accessToken')) setShowModal(true);
    }
  }, []);

  const handleCloseModel = () =>{
    setShowModal(false)
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expire');
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
      {showModal && <ExpiredTokenModal onClose={handleCloseModel}/>}
    </AuthContext.Provider>
  );
};