import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import image from "../../assets/Christian.jpg";
const HeroSection = () => {
  return (
    <>
      <section className="mx-auto flex flex-col justify-center align-middle items-center gap-5 font-montserrat  text-white p-12 text-center">
        <span data-aos="fade-down" className="bg-slate-800 p-2 ring-1 ring-slate-900 mx-auto block rounded-full h-48 w-48">
          <img data-aos="fade-up"
            className="mx-auto h-44 w-44 object-cover rounded-full ring-1 ring-slate-900 z-0"
            src={image}
            alt=""
          />
        </span>

        <section className="font-montserrat [&_h1]:font-bold [&_h1]:uppercase [&_h1]:text-2xl  sm:[&_h1]:text-3xl md:[&_h1]:text-4xl [&_span]:text-sky-300 [&_span]:tracking-[4px] [&_span]:font-medium ">
          <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }} data-aos="fade-up" className="font-poppins mb-1"> Christian A. Harris </motion.h1>
          <span data-aos="fade-up" data-aos-delay="200">
            <ReactTyped
              strings={["Web Developer", "Graphic Designer", 'Tech Support', 'Problem Solver']}
              typeSpeed={60}
              backSpeed={30}
              backDelay={120}
              startDelay={500}
              loop
              showCursor
              cursorChar="|"
            />
          </span>
        </section>
        <p data-aos="fade-up" data-aos-delay="400" className="md:max-w-[50%] font-light leading-6 tracking-[0.7px] ">
          I design and build fast, responsive, and user-friendly websites. With
          real experience in web development, graphic design, and tech support,
          I help people and businesses bring their ideas to life online. My work
          is focused on clean design, good performance, and simple solutions
          that get results.
        </p>
        <section  className="mt-5 [&_a]:py-3 [&_a]:px-5 [&_a]:rounded-full [&_a]:ring [&_a]:ring-sky-500 [&_a]:hover:bg-sky-600 [&_a]:hover:ring-0 [&_a]:hover:text-sky-50 *:transition-all *:ease-in *:duration-[0.3s] [&_a]:font-light">
          <a ata-aos="fade-up" data-aos-delay="600" href="#Contact">Contact Me</a>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
