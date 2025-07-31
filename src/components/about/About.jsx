import { useRef, forwardRef } from "react";

const about = forwardRef((props, ref) => {
  const reference = useRef();
  console.log(reference);
  return (
    <>
      <section ref={ref} id="AboutMe"></section>
      <section
        data-aos="fade-up"
        data-aos-delay="400"
        className="mx-auto text-white mt-20 flex flex-col justify-center align-middle items-center text-center gap-5 p-12 md:[&_p]:max-w-[50%] [&_h1]:font-bold [&_h1]:text-2xl  [&_p]:font-extralight [&_p]:leading-6 [&_p]:tracking-[0.7px] sm:[&_h1]:text-3xl md:[&_h1]:text-4xl "
      >
        <section className="[&_span]:text-sky-300 [&_h1]:tracking-[5px] [&_h1]:mb-2 [&_span]:font-medium ">
          <h1 data-aos="fade-up" data-aos-delay="400">
            About Me
          </h1>
          <span data-aos="fade-up" data-aos-delay="400">
            Get to Know Me
          </span>
        </section>
        <p data-aos="fade-up" data-aos-delay="400">
          I'm a self-taught tech enthusiast from Liberia with a strong passion
          for computers, coding, and cybersecurity. I started learning about
          technology on my own after high school and have gained real skills in
          web development, graphic design, and software troubleshooting.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          I’ve worked on different kinds of projects; from building websites to
          helping people fix computer and phone issues. I love solving problems
          and learning new things every day. My goal is to become one of the top
          cybersecurity experts in Liberia and help others grow in tech as well.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          Outside of tech, I enjoy reading, watching computer-related movies,
          and playing video games. I'm always open to new opportunities,
          collaborations, or just a friendly tech talk.
        </p>
        <section className="mt-5 [&_a]:py-3 [&_a]:px-5 [&_a]:rounded-full [&_a]:r ing [&_a]:ring-sky-500 [&_a]:bg-sky-600 [&_a]:hover:bg-sky-700 [&_a]:hover:ring-0 [&_a]:hover:text-sky-50 *:transition-all *:ease-in *:duration-[0.3s] [&_a]:font-light">
          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="https://drive.google.com/file/d/1PIsIvSyOAsS7ZX1wVASIbNAiri1W2Q0j/view?usp=drive_link"
            target="_blank"
            download={"./index.html"}
          >
            Download Resume
          </a>
        </section>
      </section>
    </>
  );
});

export default about;
