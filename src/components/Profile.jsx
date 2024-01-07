import { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import UserContext from "../context/context";
const Profile = () => {
  const userId = localStorage.getItem("userId");
  const userDetails = useContext(UserContext) || {};

  console.log(userDetails);
  return (
    <>
      <ProfileCard userDetails={userDetails} userId={userId} />
    </>
  );
};

export default Profile;
