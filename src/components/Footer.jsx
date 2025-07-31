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
      <section
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex justify-center  sm:justify-between align-middle items-center my-10 flex-wrap mb-30 sm:mb-10"
      >
        <section className="text-4xl mb-10 sm:mb-0 md:mb-0">
          <strong>Let's</strong>
          <h4>Work Together - </h4>
        </section>
        <section className="flex justify-center align-middle items-center gap-4 text-xl ring-[0.7px] rounded p-3 cursor-pointer ">
          <FaMailBulk />
          <a href="mailto:astainyharris1@gmail.com" target="_blank">
            astainyharris1@gmail.com
          </a>
        </section>
      </section>
      <section className="row flex justify-center sm:justify-between align-middle items-center flex-wrap py-5 border-t-1 border-sky-900 my-3">
        <section className="font-extralight mt-4 sm:mt-0 md:mt-0 order-1 sm:order-0">
          &copy; 2025 Astainy. All rights reserved.
        </section>
        <section className="flex justify-center align-middle items-center gap-5 text-[1.5rem] [&_a]:hover:text-sky-300">
          <a href="https://pin.it/9AO7IVrxm" target="_blank">
            <FaPinterest />
          </a>
          <a href="https://github.com/astainy1" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://web.facebook.com/christian.harris.58555/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/astainyharris1/" target="_blank">
            <FaInstagram />
          </a>
        </section>
      </section>
    </section>
  );
}

export default footer;
