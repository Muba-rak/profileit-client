import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import All from "./Pages/Allprofiles/All";
// import Private from "./components/Private";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={<Private />}> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/view" element={<All />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
