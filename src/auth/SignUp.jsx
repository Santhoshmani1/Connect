import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import handleFormValues from "./validation";
import { useState } from "react";
import {
  getCookieValue,
  setAccessTokenCookie,
} from "../helpers/cookiehelpers.js";

const SignUp = () => {
  function checkUserStatus() {
    const token = getCookieValue("token");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      document.location.href = "/account";
    }
  }
  checkUserStatus();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [signupError, setSignupError] = useState("");

  async function registerUser(data) {
    await fetch("https://connect-api.up.railway.app/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message == "success") {
          setAccessTokenCookie(result.accessToken);
          document.location.href = "/account";
        }
      })
      .catch((err) => {
        console.log(err);
        setSignupError("Unable to Signup");
        console.log(signupError);
      });
  }

  function handleSignup(e) {
    e.preventDefault();
    const data = { name, email, password };
    const errors = handleFormValues(data);
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    setErrors([]);
    console.log(data);
    registerUser(data);
  }
  return (
    <div>
      <Header />
      <div>
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h2
                  className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-center"
                  style={{
                    fontFamily: "Poppins,Ariel,sans-serif",
                    letterSpacing: "0.4px",
                  }}
                >
                  Signup
                </h2>
                <h3 className="text-xl text-center leading-tight">Welcome!</h3>
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={handleSignup}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-600"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-600"
                      required
                      autoComplete="username"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-600"
                      required
                      autoComplete="current-password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center bg-blue-600 text-white hover:bg-blue-700 px-10 py-3 mx-30 lg:mx-35"
                  >
                    Signup
                  </button>
                  <div>
                    {errors.length > 0 &&
                      errors.map((error) => (
                        <div
                          key={error}
                          className=""
                          style={{ fontFamily: "sans-serif" }}
                        >
                          <li className="text-zinc-600">{error}</li>
                        </div>
                      ))}
                  </div>
                  <p className="text-sm font-light mx-auto text-center">
                    Have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-lg"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
