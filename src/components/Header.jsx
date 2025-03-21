import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-black px-4 py-5">
      <div className="">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="">
        <ul className="text-white flex justify-center items-center gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={""}>About</Link>
          </li>
          <li>
            <Link to={"/posts"}>Posts</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button className="cursor-pointer hover:text-blue-600 hover:bg-white transition-colors delay-75 text-lg text-white px-4 py-2 bg-blue-600 rounded-4xl">
          Sign in
        </button>
        <button className="cursor-pointer hover:text-blue-600 hover:bg-white transition-colors delay-75 text-lg text-white px-4 py-2 bg-blue-600 rounded-4xl">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
