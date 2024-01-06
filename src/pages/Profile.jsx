import { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import SignupPrompt from "../components/SignupPrompt";
import UserContext from "../context/context";
import { getCookieValue } from "../helpers/getCookie";

const Profile = () => {
  const accessToken = getCookieValue("token");
  const userId = localStorage.getItem("userId");
  const userDetails = useContext(UserContext) || {};

  return (
    
    <div>
      {!accessToken && (
        <SignupPrompt />
      )}
      {accessToken && (
        <ProfileCard userDetails={userDetails} userId={userId} />
      )}
    </div>
  );
};

export default Profile;
