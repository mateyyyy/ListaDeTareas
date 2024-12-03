import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [blur, setBlur] = useState('');

  return (
    <MyContext.Provider value={{ blur, setBlur }}>
      {children}
    </MyContext.Provider>
  );
};
