import { FaSun } from "react-icons/fa";
import Card from ".././services/Card";
import image from "../../assets/3.jpg";

const Services = () => {
  return (
    <>
      <section id="Services"></section>
      <section className="mx-auto mt-20 flex flex-col items-center justify-center gap-y-5 text-center align-middle text-white sm:p-6">
        <section
          className="[&_h1]:mb-2 [&_h1]:tracking-[5px] [&_span]:font-medium [&_span]:text-sky-300"
          id="AboutMe"
        >
          <h1
            className="text-2xl font-bold sm:text-3xl md:text-4xl"
            id="Services"
          >
            What I Do
          </h1>
          <span>My Services</span>
        </section>
        <section className="[&_section]:inset-ring-sky-500 [&_section]:inset-ring-[0.5px] mx-auto mt-6 flex flex-col gap-y-6 p-6 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 [&_section]:rounded-lg [&_section]:p-3 [&_section]:shadow [&_section]:shadow-sky-800 [&_section]:ring-[0.5px] [&_section]:ring-sky-900 [&_section]:transition-all [&_section]:duration-[0.4s] [&_section]:ease-in [&_section]:selection:bg-sky-600 sm:[&_section]:p-6 ">
          <Card customeStyle={"max-w-sm"} />
          <Card customeStyle={"max-w-sm"} />
          <Card customeStyle={"max-w-sm"} />
          <Card
            customeStyle={
              "max-w-sm xl:col-start-1 xl:col-end-3 xl:max-w-[50rem]"
            }
          />
          <Card
            customeStyle={
              "max-w-sm sm:max-xl:col-start-1 sm:max-xl:col-end-3 sm:max-xl:max-w-3xl md:max-xl:flex-row relative -z-1"
            }
          >
            <img
              className="md:max-xl:h-70 md:max-xl:w-70 hidden rounded-2xl object-cover sm:max-xl:flex"
              src={image}
            />
            <div className="hover:bg-linear-to-b absolute left-0 top-0 h-full w-full p-6 hover:from-transparent hover:to-sky-700"></div>
          </Card>
        </section>
      </section>
    </>
  );
};

export default Services;
