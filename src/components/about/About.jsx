import React from "react";

const about = () => {
  return (
    <>
      <section id="AboutMe"></section>
      <section className="mx-auto text-white mt-20 flex flex-col justify-center align-middle items-center text-center gap-5 p-12 md:[&_p]:max-w-[50%] [&_h1]:font-bold [&_h1]:text-2xl  [&_p]:font-light [&_p]:leading-6 [&_p]:tracking-[0.7px] sm:[&_h1]:text-3xl md:[&_h1]:text-4xl">
        <section className="[&_span]:text-sky-300 [&_h1]:tracking-[5px] [&_h1]:mb-2 [&_span]:font-medium ">
          <h1>About Me</h1>
          <span>Get to Know Me</span>
        </section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          dolores aliquam illum iusto quos, veritatis ipsa soluta hic enim,
          repudiandae accusantium iste eveniet molestias minima excepturi
          quaerat ipsam saepe blanditiis!
        </p>
        <p>
          Accusamus dolores aliquam illum iusto quos, veritatis ipsa soluta hic
          enim, repudiandae accusantium iste eveniet molestias minima excepturi
          quaerat ipsam saepe blanditiis!
        </p>
        <p>
          Ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dolores
          aliquam illum iusto quos, veritatis ipsa soluta hic enim, repudiandae
          accusantium iste eveniet molestias minima excepturi quaerat ipsam
          saepe blanditiis!
        </p>
        <section className="mt-5 [&_a]:py-3 [&_a]:px-5 [&_a]:rounded-full [&_a]:ring [&_a]:ring-sky-500 [&_a]:bg-sky-600 [&_a]:hover:bg-sky-700 [&_a]:hover:ring-0 [&_a]:hover:text-sky-50 *:transition-all *:ease-in *:duration-[0.3s] [&_a]:font-light">
          <a href="https://drive.google.com/file/d/1PIsIvSyOAsS7ZX1wVASIbNAiri1W2Q0j/view?usp=drive_link" download={'./index.html'}>Download Resume</a>
        </section>
      </section>
    </>
  );
};

export default about;
