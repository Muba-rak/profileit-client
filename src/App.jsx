import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import All from "./Pages/Allprofiles/All";
import Students from "./Pages/Assignment/Students";
import Others from "./Pages/Others/Others";
import Check from "./components/Check";
// import Private from "./components/Private";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view" element={<All />} />
          <Route path="/assign" element={<Check />} />
          <Route path="/student" element={<Students />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
