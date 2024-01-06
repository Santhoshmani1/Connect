import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";

const User = () => {
  const [user, setUser] = useState({});
  const userId = useParams().id;
  useEffect(() => {
    fetch(`https://connect-api.up.railway.app/member/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.userDetails);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <>
      <UserProfile userDetails={user} />
    </>
  );
};

export default User;
