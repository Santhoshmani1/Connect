import Header from "../components/shared/Header";
import team from "../assets/team.png";
import hackathon from "../assets/hackathon.png";
import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Home = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <div className="home-container lg:pt-20 px-4 sm:px-6 lg:px-8 mx-auto py-8 max-w-7xl">
        <div className="home-hero text-center">
          <div className="welcome-note">
            <h2
              className="text-4xl font-bold text-blue-800 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "Poppins,Ariel,serif" }}
            >
              Welcome to Connect
            </h2>
            <p
              className="text-center p-2 text-2xl"
              style={{ fontFamily: "Poppins" }}
            >
              Find Your next Hackathon Opportunity
            </p>
          </div>
        </div>
        <div className="hackathons mt-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-600 text-center p-4">
            Participate in Hackathons
          </h2>
          <div className="hackathons-container flex justify-evenly items-center lg:justify-between mx-auto">
            <div className="mt-3 leading-loose text-xl max-w-md text-center lg:text-3xl lg:w-full">
              Discover the best hackathons from around the world. Work on
              Projects that makes a difference and Showcase your skills.
              <button className="p-2.5 m-2 bg-yellow-500 text-white rounded-xl hover:bg-black font-semibold leading-loose">
                <Link to="/hackathons"> Explore Hackathons </Link>
              </button>
            </div>
            <div className="hackathons-img">
              <img
                src={hackathon}
                alt="team of developers building in a hackathon"
              />
            </div>
          </div>
        </div>
        <div className="teams mt-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-blue-600 text-center p-4">
            Build Your Teams
          </h2>
          <div className="teams-container flex justify-center items-center">
            <div className="teams-image w-screen">
              <img src={team} alt="team-icon" />
            </div>
            <div className="mt-3 text-xl lg:text-3xl  leading-relaxed px-10 text-center">
              Find like-minded people, form your team, and work on exciting
              projects together. Collaborate and learn from each other.
              <div>
                <button className="text-lg p-3 m-2 rounded-xl bg-yellow-500 text-white hover:bg-black font-semibold">
                  <Link to={"/teams"}>Explore Teams</Link>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
        {!(localStorage.getItem("userId")) && (
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
      <Footer />
    </div>
  );
};

export default Home;
