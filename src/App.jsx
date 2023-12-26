import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hackathons from "./pages/Hackathons";
import Profile from "./pages/Profile";
import Teams from "./pages/Teams";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import NewTeam from "./components/NewTeam";
import MyOpportunities from "./components/myOpportunities";
import User from "./pages/member";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/new" element={<NewTeam />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/member/:id" element={<User />} />
        <Route path="/profile/myTeams" element={<MyOpportunities />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
