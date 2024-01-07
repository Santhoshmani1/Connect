import Header from "../components/shared/Header";
import team from "../assets/team.png";
import hackathon from "../assets/hackathon.png";
import { Link } from "react-router-dom";
import {FaGithub} from "react-icons/fa"
import { getCookieValue } from "../helpers/cookiehelpers";

const Home = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <div className="home-container lg:pt-20 px-4 sm:px-6 lg:px-8 mx-auto py-8 max-w-7xl">
        <div className="home-hero text-center">
          <div className="welcome-note">
            <h2
              className="text-4xl font-bold text-blue-800 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "Open sans,Ariel,serif" }}
            >
              Welcome to Connect
            </h2>
            <p
              className="text-center p-2 text-2xl"
              style={{ fontFamily: "Open sans" }}
            >
              Find Your next Hackathon Opportunity
            </p>
          </div>
        </div>
        <div className="hackathons mt-10">
          <h2 className="text-4xl font-bold tracking-normal text-center text-gray-900 p-2" style={{fontFamily:"Open sans,Ariel"}}>
            Participate in Hackathons
          </h2>
          <div className="hackathons-container flex flex-col lg:flex-row justify-evenly items-center lg:justify-between mx-auto">
            <div className="hackathons-img">
              <img
                src={hackathon}
                alt="team of developers building in a hackathon"
                className="mx-auto"
                style={{ height: "400px" }}
              />
            </div>
            <div className="mt-3 leading-normal text-gray-800 text-xl lg:w-1/2 text-center lg:text-3xl" style={{fontFamily:"Open sans,Ariel"}}>
              Discover the best hackathons from around the world. Work on
              projects that makes a difference &amp; showcase your skills.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="p-2.5 m-2 bg-sky-500 text-white rounded-xl hover:bg-blue-600 font-bold text-lg leading-loose w-3/4 lg:w-2/5">
              <Link to="/hackathons"> Explore Hackathons </Link>
            </button>
          </div>
        </div>
        <div className="teams mt-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900  text-center p-2 " style={{fontFamily:"Open sans,Ariel,serif"}}>
            Build Your Teams
          </h2>
          <div className="teams-container flex flex-col-reverse lg:flex-row-reverse justify-center items-center">
            <div className="teams-image w-screen">
              <img
                src={team}
                alt="team-icon"
                style={{ height: "400px" }}
                className="mx-auto"
              />
            </div>
            <div className="mt-3 text-xl lg:text-3xl leading-normal text-gray-800 px-5 py-2 text-center" style={{fontFamily:"Open sans,Ariel"}}>
              Find like-minded people, form your team, and work on exciting
              projects together. Collaborate and learn from each other.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-lg p-3 m-2 rounded-xl bg-sky-500 text-white hover:bg-blue-600 w-3/4 lg:w-2/5 font-semibold">
              <Link to={"/teams"}>Explore Teams</Link>
            </button>
          </div>{" "}
        </div>
        {!getCookieValue("token") && (
          <>
            <div className="cta mt-10">
              <h2 className="text-4xl font-extrabold tracking-tight text-blue-600 text-center">
                Ready to Get Started?
              </h2>
              <p className="mt-3 text-black text-lg text-center font-semibold">
                Sign up now and start your journey with us. We can&apos;t wait
                to see what you will build.
              </p>
              <div className="mx-auto w-1">
                <button className="p-3 m-2 rounded-xl bg-yellow-500 hover:bg-black text-white font-semibold text-lg">
                  <Link to={"/signup"}>Signup</Link>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="pb-20 text-2xl text-center font-bold hover:underline hover:text-blue-600">
      <a href="https://www.github.com/Santhoshmani1/Connect" target="_blank" rel="noreferrer">Contribute on <FaGithub className="inline-block" /></a>{" "}
      </div>
    </div>
  );
};

export default Home;
