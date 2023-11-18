import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return <section id="contact" className="mb-28">
    <div className="container">
      <p className="text-center font-semibold text-base">Get in Touch</p>
        <h2 className="mb-6 text-center font-bold">Contact Me</h2>
        <div className="flex border border-black justify-center gap-4 max-w-[32rem] m-auto rounded-full py-6">
          <a className="social flex" href="mailto:cb.pankiv@gmail.com"><FaMailBulk/><span>cb.pankiv@gmail.com</span></a>
          <a className="social flex" href="https://www.linkedin.com/in/ilya-pankiv-163269279/"><FaLinkedin/><span>LinkedIn</span></a>
          <a className="social flex" href="https://t.me/Ily9q"><FaTelegram/><span>Telegram</span></a>
        </div>
    </div>
  </section>;
};

export default Contact;
