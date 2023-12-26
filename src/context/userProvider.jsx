import  { useState, useEffect } from 'react';
import UserContext from './context';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    fetch(`https://connect-api.up.railway.app/user/`+userId)
      .then(response => response.json())
      .then(data => setUser(data?.userDetails))
    }, [userId]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;