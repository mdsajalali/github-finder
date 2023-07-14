import React from "react";

const Logo = () => {
  return (
    <div className="flex border-b border-gray-500 pb-2 justify-center items-center">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        className="w-20 rounded-full"
      />
      <h1 className="text-4xl	 font-semibold px-2">GitHub Users</h1>
    </div>
  );
};

export default Logo;