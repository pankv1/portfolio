import React from "react";
import cv from '../../Illia Pankiv.pdf'
import { FiDownload } from "react-icons/fi";
import { FiMail } from "react-icons/fi";


const Home = () => {
  return (
    <section id="home" className="mb-28 scroll-m-28">
      <div className="container">
        <h1 className="text-4xl pb-4 text-center mb-6">
          Hello, I'm <span className="font-bold">Illia</span>. I'm a <span className="font-bold">wordpress developer</span>. I thrive on turning ideas into functional and visually appealing websites. Let's bring your digital vision to life!
        </h1>
        <div className=" flex flex-col sm:flex-row gap-2 justify-center">
          <a className="flex justify-center items-center gap-3 bg-black px-12 py-2 text-white rounded-3xl hover:bg-gray-800 active:bg-gray-950 font-semibold" href="">Contact me<FiMail/></a>
          <a className="flex justify-center items-center gap-3 bg-white px-12 py-2 text-black rounded-3xl hover:bg-gray-100 active:bg-gray-50 font-semibold" href={cv} download={true}>Download CV<FiDownload/></a>
          <a href=""><img src="" alt="" /></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
