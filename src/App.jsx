import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hackathons from "./pages/Hackathons";
import Teams from "./pages/Teams";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import NewTeam from "./components/NewTeam";
import MyOpportunities from "./components/myOpportunities";
import User from "./pages/member";
import Account from "./pages/Account";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/new" element={<NewTeam />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/myTeams" element={<MyOpportunities />} />
        <Route path="/member/:id" element={<User />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
