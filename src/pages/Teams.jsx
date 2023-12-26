import { useContext, useEffect, useState } from "react";
import Header from "../components/shared/Header";
import { Link } from "react-router-dom";
import userContext  from "../context/context";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const user = useContext(userContext);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch("https://connect-api.up.railway.app/teams")
      .then((res) => res.json())
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(user);

  function addCandidate(teamId) {
    console.log(user.userName);
    fetch("https://connect-api.up.railway.app/teams/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teamId: teamId,
        userId : userId,
        email : user?.email,
        userName : user.name,
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
        <div className="container mx-auto px-4 py-5">
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
                className="bg-white rounded-lg shadow-md shadow-blue-200 p-6 mb-4  inline-block"
              >
                <h2 className="text-2xl font-bold mb-2 text-center">{name}</h2>
                <h3 className="text-xl mb-2 text-center">{hackathonName}</h3>
    
                <div className="flex  justify-evenly items-center mb-2">
                  <div className="team-size-container flex justify-evenly items-center">
                    <span className="material-icons">people</span>
                    <div className="">
                      <span className="mx-2  font-semibold text-lg">
                        Team size
                      </span>
                      {teamSize}
                    </div>
                  </div>
                  <div className="team-vacancies-container flex justify-between items-center">
                    <div className="material-icons">person</div>
                    <div className="">
                      <span className="text-lg font-semibold">vacancies</span>
                    </div>
                    <div className="text-center mx-1">{teamVacancies}</div>
                  </div>
                </div>
                <h2 className="text-lg font-semibold">
                  Skills / Interests Looking for{" "}
                </h2>
                <div className="p-2 rounded flex justify-center items-center flex-wrap">
                  {skillsRequired.map((skill, index) => (
                    <div
                      key={index}
                      className="p-1 m-1 bg-white border shadow-md shadow-sky-400 rounded-xl text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">Positions</h3>
                <div className="mb-2 p-1 rounded flex justify-center items-center flex-wrap">
                  {positions.map((position, index) =>
                  (
                    <div
                      key={index}
                      className="p-2 m-2 bg-white border shadow-md shadow-red-500 rounded-xl text-sm"
                    >
                      {position}
                    </div>
                  ))}
                </div>
                <div className="mb-2">{postedDate}</div>
                <div>{expires}</div>
                <button onClick={() => addCandidate(team._id)} className="p-2 m-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-800">Send request</button>
              </div>
            );
          })}
        </div>
        <div className="new-team-btn fixed right-0 bottom-12 mb-10">
          <Link to={"/teams/new"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center">
              <div className="text-sm">Create New Team</div>
              <div className="material-icons text-center ml-2 my-1">add_circle</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teams;
