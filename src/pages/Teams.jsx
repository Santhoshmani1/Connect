import { useContext, useEffect, useState } from "react";
import Header from "../components/shared/Header";
import { Link } from "react-router-dom";
import userContext from "../context/context";
import { getCookieValue } from "../helpers/cookiehelpers.js";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const user = useContext(userContext);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (teams.length === 0) {
      fetch("https://connect-api.up.railway.app/teams")
        .then((res) => res.json())
        .then((res) => {
          setTeams(res.data);
        })
        .catch((err) => console.log(err));
    }
  }),
    [teams];

  function addCandidate(teamId) {
    console.log(user.userName);
    fetch("https://connect-api.up.railway.app/teams", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getCookieValue("token"),
      },
      body: JSON.stringify({
        teamId: teamId,
        userId: userId,
        email: user?.email,
        userName: user.name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="hackathons-teams-wrapper flex lg:pt-20">
        <div className="container mx-auto px-4 py-5 lg:grid lg:grid-cols-2 lg:gap-2">
          {teams.map((team, index) => {
            const {
              name,
              teamSize,
              teamVacancies,
              skillsRequired,
              positions,
              hackathonName,
              postedDate,
              expires,
              teamDescription,
              projectDescription,
            } = team;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-lg shadow-md shadow-blue-200 p-6 mb-4 flex justify-center items-center flex-col mx-auto"
              >
                <h2
                  className="text-2xl font-bold mb-2 text-center text-blue-600"
                  style={{ fontFamily: "Open sans,Ariel" }}
                >
                  {name}
                </h2>
                <h3
                  className="text-xl mb-2 text-center "
                  style={{ fontFamily: "Open sans,Ariel" }}
                >
                  {hackathonName}
                </h3>

                <div className="flex  justify-evenly items-center mb-2">
                  <div className="team-size-container flex justify-evenly items-center">
                    <span className="material-icons">people</span>
                    <div className="">
                      <span
                        className="mx-2 text-lg"
                        style={{ fontFamily: "Open sans,Ariel" }}
                      >
                        Team size
                      </span>
                      {teamSize}
                    </div>
                  </div>
                  <div className="team-vacancies-container flex justify-between items-center">
                    <div className="material-icons">person</div>
                    <div className="">
                      <span
                        className="text-lg"
                        style={{ fontFamily: "Open sans,Ariel" }}
                      >
                        vacancies
                      </span>
                    </div>
                    <div className="text-center mx-1">{teamVacancies}</div>
                  </div>
                </div>
                <h2
                  className="text-lg"
                  style={{ fontFamily: "Open sans,Ariel" }}
                >
                  Skills / Interests{" "}
                </h2>
                <div className="p-2 rounded flex justify-center items-center flex-wrap">
                  {skillsRequired.map((skill, index) => (
                    <div
                      key={index}
                      className="p-2 m-1 border-black border text-gray-600  rounded-xl"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <h3
                  className="text-lg"
                  style={{ fontFamily: "Open sans,Ariel" }}
                >
                  Positions
                </h3>
                <div className="mb-2 p-1 rounded flex justify-center items-center flex-wrap">
                  {positions.map((position, index) => (
                    <div
                      key={index}
                      className="p-2 m-2 border-black border text-gray-600    rounded-xl"
                    >
                      {position}
                    </div>
                  ))}
                </div>
                <div className="mb-2">{postedDate}</div>
                <div>{expires}</div>
                <button
                  onClick={() => addCandidate(team._id)}
                  className="p-2 m-2 border border-black rounded-xl hover:bg-blue-800 hover:text-white hover:border-blue-100 flex justify-evenly items-center"
                  style={{ fontFamily: "Open sans,Ariel" }}
                >
                  <div className="px-2">Send request</div>
                  <div>
                    <div className="material-icons">send</div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
        <div className="new-team-btn fixed right-0 bottom-12 mb-10">
          <Link to={"/teams/new"}>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center">
              <div className="text-sm">Create New Team</div>
              <div className="material-icons text-center ml-2 my-1">
                add_circle
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teams;
