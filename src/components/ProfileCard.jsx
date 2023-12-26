/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Header from "./shared/Header";
import { Link } from "react-router-dom";

const ProfileCard = ({ userDetails, userId }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedUserDetails, setUpdatedUserDetails] = useState(userDetails);
  const [updatedSkills, setUpdatedSkills] = useState(userDetails.skills || []);

  function updateUserDetailsinDB() {
    fetch(`https://connect-api.up.railway.app/userUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedUserDetails, userId: userId }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    setUpdatedSkills(userDetails.skills || []);
  }, [userDetails.skills]);

  function addNewSkill() {
    let skill = document.querySelector("#newSkill").value;
    if (
      (updatedSkills.length == 0 && skill != "") ||
      (skill !== "" && !updatedSkills.includes(skill))
    ) {
      handleAddSkill(skill);
    }
    document.querySelector("#newSkill").value = "";
  }

  const handleAddSkill = (skill) => {
    setUpdatedSkills([...updatedSkills, skill]);
  };

  const handleDeleteSkill = (skill) => {
    setUpdatedSkills(updatedSkills.filter((s) => s !== skill));
  };

  useEffect(() => {
    setUpdatedUserDetails(userDetails);
  }, [userDetails]);

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    document.location.href = "/signup";
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    updatedUserDetails.skills = updatedSkills;
    updateUserDetailsinDB(updatedUserDetails);
  };

  const handleChange = (e) => {
    setUpdatedUserDetails({
      ...updatedUserDetails,
      [e.target.name]: e.target.value,
    });
  };
  const {
    name,
    linkedin,
    github,
    twitter,
    about,
    skills,
    projects,
    profilePic,
  } = updatedUserDetails;
  return (
    <div>
      <Header />
      <Link to="/Profile/myTeams"><button>my teams</button></Link>
      <div className="flex justify-center" id="profile-bg">
        <div className="user-profile-container absolute lg:mt-20 overflow-x-hidden w-4/5 mx-auto px-10 py-4">
          <h2 className="text-4xl text-center font-semibold my-2">
            My Profile
          </h2>
          <div className="profile-image">
            {profilePic ? (
              <img
                src={profilePic}
                alt="profile-picture"
                width={"200px"}
                height={"200px"}
                className="bg-gray-50 border rounded-lg mx-5"
              />
            ) : (
              <div
                className="px-8 py-2 m-auto text-center rounded-3xl w-1/2 lg:w-1/3"
                style={{
                  fontSize: "8rem",
                  color: "blue",
                  border: "2px solid black",
                }}
              >
                {String(name)[0]}
              </div>
            )}
          </div>

          {editMode ? (
            <button
              onClick={handleSave}
              className="p-2 border bg-black text-white rounded m-2 hover:bg-blue-600 absolute right-5 opacity-70 hover:opacity-100"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="p-2 border bg-black text-white rounded mx-1 absolute right-10 opacity-70 hover:opacity-100 text-sm text-center"
            >
              Edit{" "}
              <span className="material-icons px-2 text-center text-sm">
                edit
              </span>
            </button>
          )}

          <div className="primary-information">
            <div className="user-name text-2xl leading-tight p-2">
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="p-2 rounded-xl"
                />
              ) : (
                <h2
                  className="text-xl leading-loose text-center px-2 font-semibold"
                  style={{ fontFamily: "Poppins,Ariel,serif" }}
                >
                  {name}
                </h2>
              )}
            </div>
          </div>

          <div className="user-about mx-auto flex justify-start flex-col items-center m-4">
            <div className="text-xl font-semibold p-2">About</div>
            {editMode ? (
              <textarea
                name="about"
                value={about}
                onChange={handleChange}
                className="p-2 m-2 border-black border-2 w-1/2 rounded-xl resize-none"
              />
            ) : (
              <div
                className="text-center max-w-md mx-auto leading-tight"
                style={{ fontFamily: "Poppins,Ariel,serif" }}
              >
                {about}
              </div>
            )}
          </div>

          <div className="skills flex-col">
            <div className="text-xl text-center p-2">Skills</div>
            {editMode ? (
              <>
                <div className="flex justify-center items-center p-5 m-2">
                  <div>
                    <input
                      type="text"
                      name="newSkill"
                      id="newSkill"
                      placeholder="Enter Your Skill here"
                      className="border-2 border-blue-800 w-1/8 p-2 rounded-xl"
                    />
                  </div>

                  <div className="add-skill">
                    <button
                      className="hover:text-green-600"
                      type="submit"
                      onClick={addNewSkill}
                    >
                      <span
                        className="material-icons"
                        style={{ fontSize: "2rem" }}
                      >
                        add_circle
                      </span>
                    </button>
                  </div>
                </div>

                <div className="skills-container  flex justify-center flex-wrap items-center">
                  {updatedSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex-col flex justify-center items-center"
                    >
                      <div className="p-4 m-2 border bg-blue-600 text-white rounded-xl flex justify-evenly items-center">
                        <div> {skill} </div>
                        <div>
                          {" "}
                          <button
                            onClick={() => handleDeleteSkill(skill)}
                            className="text-center "
                          >
                            <div className="material-icons hover:text-red-200 my-2 mx-1">
                              cancel
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="user-skills-container grid grid-cols-2 md:grid-cols-3 text-center mx-auto">
                {updatedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-2 m-2 bg-blue-600 text-white rounded-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="contact-information">
            <div className="socials-container md:flex md:flex-col justify-center items-center sm:flex-col">
              <h2 className="text-xl text-center p-2 ">Social Handles</h2>
              <div className="socials md:flex md:flex-col">
                {editMode ? (
                  <>
                    <div className="social-handles flex-col flex">
                      <h2 className="text-center text-xl font-semibold leading-tight p-2 ">
                        Social Handles
                      </h2>
                    </div>
                    <label htmlFor="github">
                      <div className="flex justify-center items-center">
                        <div className="icon">
                          <span
                            className="text-center "
                            style={{ fontSize: "2rem" }}
                          >
                            <FaGithub />
                          </span>
                        </div>
                        <div className="mx-auto">
                          <input
                            type="text"
                            name="github"
                            id="github"
                            value={github}
                            onChange={handleChange}
                            className="p-2 m-2 border-2 border-black rounded-md"
                          />
                        </div>
                      </div>
                    </label>
                  </>
                ) : (
                  github && (
                    <div className="flex justify-start items-center text-sm">
                      <Link to={github}>
                        <FaGithub
                          className="p-2"
                          style={{ fontSize: "3rem" }}
                        />
                      </Link>
                      <div className="github-url ">
                        <Link
                          to={github}
                          className="hover:underline text-blue-500"
                        >
                          <span className="font-semibold text-sm">Github</span>
                        </Link>
                      </div>
                    </div>
                  )
                )}

                {editMode ? (
                  <label htmlFor="linkedin">
                    <div className="flex justify-start items-center">
                      <div className="icon">
                        <span style={{ fontSize: "2rem" }}>
                          <FaLinkedin style={{ color: "#069" }} />
                        </span>
                      </div>
                      <div className="mx-auto">
                        <input
                          type="text"
                          name="linkedin"
                          id="linkedin"
                          value={linkedin}
                          onChange={handleChange}
                          className="p-2 m-2 border-black rounded-md border-2"
                        />
                      </div>
                    </div>
                  </label>
                ) : (
                  linkedin && (
                    <div className="flex items-center justify-start text-sm">
                      <Link to={linkedin}>
                        <FaLinkedin
                          className="p-2"
                          style={{ fontSize: "3rem", color: "#069" }}
                        />
                      </Link>
                      <div className="linkedin-url">
                        <Link
                          to={linkedin}
                          className="hover:underline text-blue-500"
                        >
                          <span className="font-semibold text-sm">
                            Linkedin
                          </span>
                        </Link>
                      </div>
                    </div>
                  )
                )}

                {editMode ? (
                  <label htmlFor="twitter">
                    <div className="flex justify-center items-center">
                      <div className="icon">
                        <span style={{ fontSize: "2rem", color: "#069aed" }}>
                          <FaTwitter />
                        </span>
                      </div>
                      <div className="mx-auto">
                        <input
                          type="text"
                          name="twitter"
                          id="twitter"
                          value={twitter}
                          onChange={handleChange}
                          className="p-2 mx-2 my-2 border-black rounded-md border-2 hover:border-blue-600"
                        />
                      </div>
                    </div>
                  </label>
                ) : (
                  twitter && (
                    <div className="flex justify-start items-center">
                      <FaTwitter
                        style={{ fontSize: "2.5rem", color: "#069aed" }}
                      />
                      <Link
                        to={twitter}
                        className="hover:underline text-blue-500 mx-2"
                      >
                        <span className="font-semibold text-sm">twitter</span>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="log-out w-1/2 mx-auto my-20 flex justify-center items-center">
            {!editMode && (
              <button
                onClick={handleLogOut}
                className="p-2 border bg-gray-500 text-white rounded-xl m-2 w-1/2 hover:bg-gray-700 hover:border-white mx-auto"
              >
                Log out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
