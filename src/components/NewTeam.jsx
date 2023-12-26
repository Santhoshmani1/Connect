import { useContext, useState } from "react";
import Header from "./shared/Header";
import "../../src/index.css"
import UserContext from "../context/userProvider";
const NewTeam = () => {
  const user = useContext(UserContext);
  const userId = localStorage.getItem("userId");
  const [team, setTeam] = useState({
    name: "",
    teamSize: 0,
    teamVacancies: 0,
    skillsRequired: [],
    positions: [],
    hackathonName: "",
    authorId: "",
    authorName:"",
    postedDate: new Date(),
    expires: new Date(),
    teamDescription: "",
    projectDescription: "",
    coverImg: "",
    userName : user?.name,
    userId : userId,
  });


  const handleChange = (e) => {
    e.preventDefault();
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  function addNewSkill() {
    const { skillsRequired } = team;
    const newRequiredSkill = document.querySelector("#newSkill");
    if (
      (skillsRequired.length === 0 && newRequiredSkill.value !== "") ||
      (!skillsRequired.includes(newRequiredSkill.value) &&
        newRequiredSkill.value !== "")
    ) {
      setTeam((prevState) => ({
        ...prevState,
        skillsRequired: [
          ...prevState.skillsRequired,
          String(newRequiredSkill.value),
        ],
      }));
    }
  }

  function deleteRequiredSkill(index) {
    setTeam((prevState) => ({
      ...prevState,
      skillsRequired: prevState.skillsRequired.filter((_, i) => i !== index),
    }));
  }

  function addNewPosition() {
    const { positions } = team;
    const newPosition = document.querySelector("#newPosition");
    if (
      (newPosition.value !== "" && positions.length === 0) ||
      (newPosition.value !== "" && !positions.includes(newPosition.value))
    ) {
      setTeam((prevState) => ({
        ...prevState,
        positions: [...prevState.positions, newPosition.value],
      }));
    }
  }

  function deletePosition(index) {
    setTeam((prevState) => ({
      ...prevState,
      positions: prevState.positions.filter((_, i) => i !== index),
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://connect-api.up.railway.app/newTeam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ team: team, userId: userId }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="new-team-container lg:pt-20 pb-20 z-10">
        <form onSubmit={handleSubmit}>
          <section className="team-details">
            <h3 className="py-4 mx-4 my-2 text-center font-sans text-2xl">
              A Great team brings a great story, Tell about your team
            </h3>
            <div className="grid md:grid-cols-1 grid-cols-1 gap-3 justify-items-center">
              <div className="lg:flex p-2 lg:items-center">
                <label htmlFor="hackathonName">
                  Hackathon Name:
                  <input
                    type="text"
                    name="hackathonName"
                    value={team.hackathonName}
                    onChange={handleChange}
                    className="input-style"
                  />
                </label>
                <div className="mx-8 p-2">
                  <label>
                    Team Name
                    <input
                      type="text"
                      name="name"
                      value={team.name}
                      onChange={handleChange}
                      required
                      className="input-style"
                    />
                  </label>
                </div>
              </div>
              <div className="team-strength-container lg:flex">
                <div className="mx-2 p-2">
                  <label>
                    Team Size:
                    <input
                      name="teamSize"
                      value={team.teamSize}
                      onChange={handleChange}
                      className="input-style"
                      min={2}
                      max={6}
                    />
                  </label>
                </div>
                <div className="mx-2 p-2">
                  <label>
                    Vacancies:
                    <input
                      name="teamVacancies"
                      value={team.teamVacancies}
                      onChange={handleChange}
                      className="input-style"
                      min={1}
                      max={team.teamSize - 1}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <label className="block mx-auto text-center">
                  <span className="font-semibold mx-4">Skills</span>
                  <input
                    type="text"
                    id="newSkill"
                    name="skillsRequired"
                    className="input-style"
                  />
                </label>
              </div>
              <div>
                <button type="button" onClick={addNewSkill}>
                  <span className="material-icons">add</span>
                </button>
              </div>
            </div>
            <ul className="skills-wrapper flex justify-center items-center flex-wrap">
              {team.skillsRequired.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className=" bg-slate-50 border rounded-xl text-center m-2 flex justify-center items-center"
                  >
                    <span className="p-2">{skill}</span>
                    <button
                      onClick={() => {
                        deleteRequiredSkill(index);
                      }}
                    >
                      <span className="material-icons text-center">close</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div>
              <label className="block text-center">
                <span className="font-semibold">Positions</span>
                <input
                  type="text"
                  name="positions"
                  className="input-style"
                  id="newPosition"
                />
                <button
                  type="button"
                  onClick={() => {
                    addNewPosition();
                  }}
                >
                  <span className="material-icons">add</span>
                </button>
              </label>
            </div>
            <ul className="positions-container flex justify-center items-center flex-wrap">
              {team.positions.map((position, index) => {
                return (
                  <li key={index} className="flex bg-slate-50">
                    <span className="p-2 m-2">{position}</span>
                    <button
                      onClick={() => {
                        deletePosition(index);
                      }}
                    >
                      <span className="material-icons text-center">close</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="event-details">
            <h3 className="py-4 text-center text-2xl  font-sans">
              Tell about the hackathon you are participating in
            </h3>
            <div className="hackathon-details-wrappper lg:flex lg:justify-evenly lg:items-center w-screen"></div>
            <div className="flex justify-center items-center p-2">
              <label className="text-center font-semibold mx-2 w-screen">
                Tell about your team 
                <textarea
                  name="teamDescription"
                  value={team.teamDescription}
                  onChange={handleChange}
                  className="block my-1 p-2 leading-loose rounded-lg border-black border-2 text-lg resize-none w-4/5 mx-auto"
                />
              </label>
            </div>
            <div className="flex justify-center items-center p-2 mx-auto">
              <label className="text-center font-semibold w-screen">
                What Project You are Working on ?
                <textarea
                  name="projectDescription"
                  value={team.projectDescription}
                  onChange={handleChange}
                  className="block my-1 p-2 leading-loose rounded-lg border-black border-2 resize-none w-4/5 mx-auto"
                />
              </label>
            </div>
          </section>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="block p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTeam;
