import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import { useState, useEffect } from "react";
import { FaLink, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Hackathons = () => {
  const [hackathons, setHackathons] = useState([]);
  const eventsPageBaseUrl = encodeURI(window.location.href).split("#")[0];
  const whatsAppShareUrl = "https://wa.me?text=";
  const linkedinShareUrl =
    "https://www.linkedin.com/sharing/share-offsite/?url=";
  const twitterShareUrl = "https://www.twitter.com/internet/tweet?url=";

  function getHackathons() {
    fetch("https://connect-api.up.railway.app/hackathons")
      .then((res) => res.json())
      .then((res) => {
        setHackathons(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getHackathons();
  }, []);

  return (
    <div>
      <Header />
      <div className="hackathons-container lg:pt-20 pb-20 w-screen mx-auto">
        <h2
          className="text-3xl font-bold text-center p-2"
          style={{ fontFamily: "Open sans,Ariel,serif" }}
        >
          Hackathons
        </h2>
        <p className="text-xl text-center p-4">
          Hackathons are a great way to learn new skills, meet new people, and
          build something cool.
        </p>

        <div className="hackathons-list flex-col justify-center items-center w-screen mx-auto">
          {hackathons.map((hackathon, index) => {
            return (
              <div
                className="hackathon-card flex-col justify-center items-center lg:w-1/2 m-2 border-1 border-black rounded-lg p-2.5 mx-auto"
                key={index}
                id={hackathon._id}
                style={{ fontFamily: "Poppins,serif" }}
              >
                <Link to={hackathon.officialUrl}>
                  {" "}
                  <h2
                    className="p-4 text-2xl font-semibold leading-tight text-center hover:underline"
                    style={{ fontFamily: "Open sans,Ariel,serif" }}
                  >
                    {hackathon.name}
                  </h2>
                </Link>
                <Link to={hackathon.officialUrl}>
                  <img
                    src={hackathon.cover_photo}
                    alt={hackathon.name + "image"}
                    width={"400px"}
                    height={600}
                    className="m-auto
                  "
                  />
                </Link>
                <div
                  className="m-2 p-2 font-light text-center lg:max-w-md sm:max-w-sm mx-auto"
                  style={{ lineHeight: "1.6", fontFamily: "Poppins,serif" }}
                ></div>
                <div className="event-dates flex justify-center items-center">
                  <div className="start-date">
                    <div className="p-2 border-2 rounded-lg bg-blue-600 mx-1 text-white inline-block">
                      Starts : {String(hackathon.startDate).slice(0, 10)}
                    </div>
                  </div>

                  <div className="end-date">
                    <div className="p-2 border-2 rounded-lg bg-blue-600 mx-1 text-white inline-block">
                      {" "}
                      Ends: {String(hackathon.endDate).slice(0, 10)}
                    </div>
                  </div>
                </div>
                <div className="p-2 mx-auto text-center">
                  <span className="material-icons text-center p-2">place</span>
                  {hackathon.location}
                </div>
                <div className="hackathon-links flex justify-center items-center">
                  <div className="official-url mx-auto">
                    <button className="text-center">
                      <a
                        href={hackathon.officialUrl}
                        className="hover:underline"
                      >
                        <FaLink style={{ display: "inline-block" }} /> Website
                      </a>
                    </button>
                  </div>
                  <div className="share-on-socials flex-col items-center justify-centerp-1">
                    <div className="text-center mx-auto flex items-center justify-center p-2 text-sm">
                      <span className="material-icons">share</span>
                      Share
                    </div>
                    <div className="hackathon-socials flex justify-start items-center">
                      <Link
                        to={
                          encodeURI(whatsAppShareUrl + eventsPageBaseUrl) +
                          encodeURIComponent(
                            "/#" +
                              hackathon._id +
                              " Check out " +
                              hackathon.name +
                              "Opportunity on Connect"
                          )
                        }
                      >
                        <FaWhatsapp
                          className="mx-4"
                          style={{ fontSize: "1.4rem", color: "green" }}
                        />
                      </Link>
                      <Link
                        to={
                          linkedinShareUrl +
                          encodeURI(eventsPageBaseUrl) +
                          encodeURIComponent("/#" + hackathon._id)
                        }
                      >
                        <FaLinkedin
                          className="mx-4"
                          style={{ fontSize: "1.4rem", color: "#069" }}
                        />
                      </Link>
                      <Link
                        to={
                          twitterShareUrl +
                          encodeURI(eventsPageBaseUrl) +
                          encodeURIComponent("/#" + hackathon._id)
                        }
                      >
                        <FaTwitter
                          className="mx-4"
                          style={{ fontSize: "1.4rem", color: "#069aed" }}
                        />
                      </Link>
                    </div>
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
