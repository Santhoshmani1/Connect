import SignupPrompt from "../components/SignupPrompt";
import { getCookieValue } from "../helpers/cookiehelpers.js";
import Header from "../components/shared/Header";
import { Link } from "react-router-dom";

const Account = () => {
  const accessToken = getCookieValue("token");
  return (
    <div>
      <Header />
      {!accessToken && <SignupPrompt />}
      <div className="account-wrapper lg:pt-40 text-2xl">
        <Link to="profile" className="m-4 shadow-sm shadow-black">
          <div className="p-2 border w-1/2 lg:w-1/3  text-center mx-auto flex justify-center items-center">
            My Profile <span className="material-icons">person</span>
          </div>
        </Link>
        <Link to="myteams" className="m-4 shadow-sm shadow-black">
          <div className="p-2 border w-1/2  lg:w-1/3 text-center mx-auto flex justify-center items-center">
            My Teams <span className="material-icons">people</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Account;
