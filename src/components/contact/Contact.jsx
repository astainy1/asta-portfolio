import React from "react";

function Contact() {
  return (
    <>
    <div id="Contact" className="mt-15 "></div>
    <section className="row flex justify-center align-middle flex-col text-white mb-32 px-20 sm:px-0 md:px-0">
      <section className="text-center [&_h1]:mb-2 [&_h1]:tracking-[5px] [&_span]:font-medium [&_span]:text-sky-300">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Get In Touch
        </h1>
        <span>Let's work together</span>
      </section>

      {/* Contact form */}
      <form className="flex flex-col max-w-lg w-[100%] mx-auto my-20 gap-10 text-xl [&_input]:rounded [&_input]:border-1 [&_input]:border-white [&_input]:outline-0 [&_select]:outline-0 [&_textarea]:outline-0 [&_textarea]:border-white [&_textarea]:border-1 [&_border]:border-1 [&_select]:border-1 [&_select]:border-white [&_input]:p-3 [&_select]:p-3 [&_textarea]:p-3">
        <section className="flex flex-col gap-3">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Full Name" />
        </section>

        <section className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
          />
        </section>

        <section className="flex flex-col gap-3">
          <label htmlFor="service">Service</label>
          <select
            className="[&_option]:text-sky-800 rounded"
            name="service"
            id="service"
          >
            <option>Select a service</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Software Troubleshooting">
              Software Troubleshooting
            </option>
          </select>
        </section>

        <section className="flex flex-col gap-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="rounded"
            name="message"
            id="message"
            rows={7}
            cols={15}
          ></textarea>
        </section>

        <section className="flex flex-col ">
          <button
            className="cursor-pointer bg-gray-200 text-sky-900 font-semibold p-3 rounded hover:bg-gray-50"
            type="submit"
          >
            Get In Touch
          </button>
        </section>
      </form>
    </section>
  </>
  );
}

export default Contact;
