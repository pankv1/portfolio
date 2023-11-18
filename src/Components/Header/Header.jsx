import React from "react";

const Header = () => {
  return <header>
    <div className="max-w-7xl m-auto sm:px-4 fixed top-0 sm:top-5 left-0 right-0">
    <nav className="flex bg-white gap-y-1 0 px-4 rounded-none sm:rounded-2xl max-w-2xl gap-x-6 justify-center items-center m-auto flex-wrap">
      <a className="link " href="#home">Home</a>
      <a className="link" href="#about">About</a>
      <a className="link" href="#skills">Skills</a>
      <a className="link" href="#projects">Projects</a>
      <a className="link" href="#contact">Contact</a>
    </nav>
    </div>
  </header>;
};

export default Header;
