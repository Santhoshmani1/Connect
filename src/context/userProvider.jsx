/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import UserContext from './context';
import { getCookieValue } from '../helpers/getCookie';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fetched, setFetched] = useState(false);

  const userId = localStorage.getItem("userId");
  const token = getCookieValue("token");
  useEffect(() => {
    if(!fetched) {
      fetch(`https://connect-api.up.railway.app/user/profile` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      
      })
        .then(response => response.json())
        .then(data => {
          setUser(data?.userDetails);
          setFetched(true);
        })
    }
  }, [userId, fetched,token]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;