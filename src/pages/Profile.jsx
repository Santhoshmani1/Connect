import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import SignupPrompt from "../components/SignupPrompt";

const Profile = () => {
  const [userDetails, setUserDetails] = useState("");
  const userId = localStorage.getItem("userId");
  

  async function getUserDetails(userId) {
    await fetch(`https://connect-api.up.railway.app/user/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        setUserDetails(res.userDetails);
      })
      .catch((err) => console.log(err));
  }
  console.log(userDetails);

  useEffect(() => {
    getUserDetails(userId);
  }, [userId]);

  return (
    
    <div>
      {!userId && (
        <SignupPrompt />
      )}
      {userId && (
        <ProfileCard userDetails={userDetails} userId={userId} />
      )}
    </div>
  );
};

export default Profile;
