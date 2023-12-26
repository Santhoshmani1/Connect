import { useEffect, useState } from "react";
import Header from "./shared/Header";
import { Link } from "react-router-dom";

const MyOpportunities = () => {
  const [teams, setTeams] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`https://connect-api.up.railway.app/user/myTeams/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeams(data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <div>
      <Header />
      <div className="my-teams-container lg:pt-20 pb-40">
        {teams.length === 0 && (
          <>
            <h2 className="text-center p-2 text-lg font-bold">No teams available</h2>{" "}
          </>
        )}
        {teams.map((team, index) => (
          <div key={index} className="w-4/5 mx-auto">
            <h2 className="text-center text-xl font-semibold p-2">
              {team.name}
            </h2>
            <p>{team.teamDescription}</p>
            <ul
              key={index}
              className="flex font-bold justify-center items-center flex-wrap flex-row"
            >
              {" "}
              Skills
              {team.skillsRequired.map((skill, index) => (
                <li
                  className="p-2 font-normal m-2 border rounded-lg"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <ul
              key={index}
              className="flex font-bold justify-center items-center flex-wrap flex-row"
            >
              {" "}
              Positions
              {team.positions.map((position, index) => (
                <li
                  className="p-2 font-normal m-2 border rounded-lg"
                  key={index}
                >
                  {position}
                </li>
              ))}
            </ul>
            <h3>Interested Candidates</h3>
            {team.interestedCandidates.map((candidate, index) => (
              <div key={index}>
                <div>{candidate.userName}</div>
                <Link to={"/member/" + candidate.userid}>
                  <p>{candidate.userName}</p>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOpportunities;
