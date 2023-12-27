import { Link } from "react-router-dom";
import Header from "./shared/Header";
const SignupPrompt = () => {
  return (
    <>
    <Header />
      <div className="prompt-to-sign-container w-4/5 mx-auto h-screen px-10 py-40">
        <h2 className="text-4xl text-center font-bold p-10 border rounded-xl bg-gray-100 text-red-500">Sign up and get started</h2>

        <h3 className="text-xl text-center font-semibold p-2"></h3>

        <div className="flex justify-center items-center p-10">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg hover:bg-blue-800 rounded-xl">
          <Link to={"/signup"}>
            Sign up
          </Link>
        </button>
        </div>
      </div>
    </>
  );
};

export default SignupPrompt;
