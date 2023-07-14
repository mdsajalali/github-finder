import React from "react";
import Logo from "./components/Logo";
import { Route, Routes } from "react-router-dom";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:name" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
