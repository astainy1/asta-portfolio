import React from "react";
import {
  FaMailBulk,
  FaInstagram,
  FaGithub,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";

function footer() {
  return (
    <section className="row  mx-auto text-white px-15">
      <section className="flex justify-between align-middle items-center my-10 flex-wrap">
        <section className="text-4xl mb-10 sm:mb-0 md:mb-0">
          <strong>Let's</strong>
          <h4>Work Together - </h4>
        </section>
        <section className="flex justify-center align-middle items-center gap-4 text-xl border-1 rounded p-3 cursor-pointer ">
          <FaMailBulk />
          <a href="mailto:astainyharris1@gmail.com">astainyharris1@gmail.com</a>
        </section>
      </section>
      <section className="row flex justify-between align-middle items-center py-5 border-t-1 border-sky-900 my-3">
        <section className="font-light">
          &copy; 2025 all rights reserved.
        </section>
        <section className="flex justify-center align-middle items-center gap-5 text-[1.5rem] [&_a]:hover:text-sky-300">
          
          <a href="">
            <FaPinterest />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </section>
      </section>
    </section>
  );
}

export default footer;
