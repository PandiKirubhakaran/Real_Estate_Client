import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ childer }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {childer}
    </AuthContext.Provider>
  );
};
