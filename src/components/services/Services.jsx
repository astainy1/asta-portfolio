import { FaSun } from "react-icons/fa";
import {
  Paintbrush,
  MonitorSmartphone,
  Cpu,
  Wrench,
  Smartphone
} from 'lucide-react';

import Card from ".././services/Card";
import image from "../../assets/3.jpg";

const Services = () => {
  return (
    <>
      <section id="Services"></section>
      <section data-aos="fade-up" data-aos-delay="400"  className="mx-auto mt-25 flex flex-col items-center justify-center gap-y-5 text-center align-middle text-white sm:p-6">
        <section
          className="[&_h1]:mb-2 [&_h1]:tracking-[5px] [&_span]:font-medium [&_span]:text-sky-300"
          id="AboutMe"
        >
          <h1
            className="text-2xl font-bold sm:text-3xl md:text-4xl"
            id="Services"
          >
            What I Do
          </h1 >
          <span >My Services</span>
        </section>
        <section data-aos="fade-up" data-aos-delay="200" className="[&_section]:inset-ring-sky-500 [&_section]:inset-ring-[0.5px] mx-auto mt-6 flex flex-col gap-y-6 p-6 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 [&_section]:rounded-lg [&_section]:p-3 [&_section]:shadow [&_section]:shadow-sky-800 [&_section]:ring-[0.5px] [&_section]:ring-sky-900 [&_section]:transition-all [&_section]:duration-[0.4s] [&_section]:ease-in [&_section]:selection:bg-sky-600 sm:[&_section]:p-6 ">
          <Card
            customeStyle={"max-w-sm"}
            heading={"Graphic Design"}
            content={`I create eye-catching designs that make your brand stand out. This includes logos, flyers, business cards, banners, and social media graphics. Whether it’s for print or online, I make sure your design speaks clearly and professionally.`}
            icon={ <Paintbrush />}
          />

          <Card
            customeStyle={"max-w-sm"}
            heading={"Web Development"}
            content={`I build clean, fast, and mobile-friendly websites. From one-page personal portfolios to full business websites with backend features, I turn ideas into real websites using modern tools and technologies.`}
            icon={<MonitorSmartphone  />}
          />
          <Card
            customeStyle={"max-w-sm"}
            heading={"Machine Learning"}
            content={`I work on simple machine learning projects like data prediction, text analysis, and image recognition. Whether you're curious about AI or need a smart feature in your app, I can help you get started with ML solutions.`}
            icon={<Cpu />}
          />

          <Card
            customeStyle={
              "max-w-sm xl:col-start-1 xl:col-end-3 xl:max-w-[50rem]"
            }
            heading={"Software Troubleshooting"}
            content={`Having problems with your computer or software? I help fix common issues like errors, crashes, or slow performance. Whether it’s a system bug or a software that’s not working right, I’ll help get it running smoothly again.`}
            icon={<Wrench  />}
          />

          <Card
            customeStyle={
              "max-w-sm sm:max-xl:col-start-1 sm:max-xl:col-end-3 sm:max-xl:max-w-3xl md:max-xl:flex-row relative -z-1"
            }
            heading={"Phone related-issues"}
            content={`I assist with smartphone problems such as app crashes, storage issues, factory resets, and general setup. I can also help you understand your phone better and use it more efficiently.`}
            icon={<Smartphone />}
          >
            <img data-aos="fade-up" data-aos-delay="200"
              className="md:max-xl:h-70 md:max-xl:w-70 hidden rounded-2xl object-cover sm:max-xl:flex"
              src={image}
            />
            <div data-aos="fade-up" data-aos-delay="200" className="hover:bg-linear-to-b absolute left-0 top-0 h-full w-full p-6 hover:from-transparent hover:to-sky-700"></div>
          </Card>

        </section>
      </section>
    </>
  );
};

export default Services;
