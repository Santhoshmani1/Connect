/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Header from "./shared/Header";
import { Link } from "react-router-dom";

const UserProfile = ({ userDetails }) => {
  const {
    name,
    linkedin,
    github,
    twitter,
    about,
    skills,
    projects,
    profilePic,
  } = userDetails;
  return (
    <>
      <Header />
      <div className="member-profile-container lg:pt-20">
        <div
          className="px-4 py-2 mx-auto text-center rounded-3xl w-1/2 lg:w-1/3 "
          style={{
            fontSize: "3rem",
            color: "blue",
            border: "2px solid black",
          }}
        >
          {String(name)[0]}
        </div>

        <h2
          className="text-xl leading-loose text-center px-2 font-semibold"
          style={{ fontFamily: "Poppins,Ariel,serif" }}
        >
          {name}
        </h2>

        <div
          className="text-center max-w-md mx-auto leading-tight"
          style={{ fontFamily: "Poppins,Ariel,serif" }}
        >
          {about}
        </div>

        <div className="skills-title">
          <h2 className="font-semibold text-xl px-3 ">Skills & Interests</h2>
        </div>
        <div className="user-skills-container grid grid-cols-2 md:grid-cols-3 text-center mx-auto w-4/5 p-5">
          {skills &&
            skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white rounded-full px-2 py-1 m-2"
              >
                {skill}
              </div>
            ))}
        </div>

        <div className="user-skills-container grid grid-cols-2 md:grid-cols-3 text-center mx-auto p-5"></div>

        <div className="socials-container flex justify-evenly items-center">
          <div className="flex justify-start items-center text-sm">
            <Link to={github}>
              <FaGithub className="p-2" style={{ fontSize: "3rem" }} />
            </Link>
            <div className="github-url ">
              <Link to={github} className="hover:underline text-blue-500">
                <span className="font-semibold text-sm">Github</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-start items-center text-sm">
            {linkedin && (
              <Link to={linkedin}>
                <FaLinkedinIn
                  className="p-2"
                  style={{ fontSize: "3rem", color: "#069" }}
                />
              </Link>
            )}
            <div className="github-url ">
              {github && (
                <Link to={linkedin} className="hover:underline text-blue-500">
                  <span className="font-semibold text-sm">Linkedin</span>
                </Link>
              )}
            </div>
          </div>

          <div className="flex justify-start items-center text-sm">
            {twitter && (
              <Link to={twitter}>
                <FaTwitter
                  className="p-2"
                  style={{ fontSize: "3rem", color: "#069aed" }}
                />
              </Link>
            )}
            <div className="github-url ">
              <Link to={twitter} className="hover:underline text-blue-500">
                <span className="font-semibold text-sm">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
