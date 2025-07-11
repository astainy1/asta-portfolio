import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectType from "./Project-type";
import ProjectCard from "./Project-card";
import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpg";
import pic4 from "../../assets/4.jfif";
import pic5 from "../../assets/5.jpg";

const Project = () => {
  // Initialize state
  const [allCategory, setAllCategory] = useState("all");
  const scrollRef = useRef(null);

  // console.log(allCategory);

  // Functions to implement scrolling of left and right
  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      // console.log("Left Scroll button is clicked");
      // console.log(scrollRef.current.scrollLeft);
      return (scrollRef.current.scrollLeft -= 200);
    }
  };

  // Scroll right when button is clicked
  const scrollRightBtn = () => {
    if (scrollRef.current) {
      // console.log("Right scroll button is clicked");
      // console.log(scrollRef.current.scrollLeft);
      return (scrollRef.current.scrollLeft += 200);
    }
  };

  // List of projects
  const projectsCompleted = [
    {
      title: "Portfolio Website",
      category: "web_dev",
      image: pic1,
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "https://github.com/astainy1",
    },
    {
      title: "Islamic Org CMS",
      category: "web_dev",
      image: pic2,
      description: "Admin dashboard and website for Islamic organization.",
      link: "https://github.com/astainy1",
    },
    {
      title: "Logo for Tech Company",
      category: "graphic_design",
      image: pic3,
      description: "Creative logo designed using Adobe Illustrator.",
      link: "https://github.com/astainy1",
    },
    {
      title: "Facial Recognition App",
      category: "machine_learning",
      image: pic4,
      description: "React app integrating a simple ML facial detection model.",
      link: "https://github.com/astainy1",
    },
    {
      title: "PC Freezing Issue Solved",
      category: "software_troubleshooting",
      image: pic5,
      description: "Resolved memory overload issue on client PC.",
      link: "https://github.com/astainy1",
    },
  ];

  // Filter the category base on initial display or button clicked
  const projectCategory =
    allCategory === "all"
      ? projectsCompleted
      : projectsCompleted.filter((filteredCategories) => {
          return filteredCategories.category === allCategory;
        });

  // Update state with category type is clicked
  function handleClicked(category) {
    return setAllCategory(category);
  }

  return (
    <>
      <div id="Projects" className="mt-15 "></div>
      <section className="row *:text-white mx-auto flex flex-col items-center justify-center gap-4 align-middle mb-28 ">
        <section className="text-center [&_h1]:mb-2 [&_h1]:tracking-[5px] [&_span]:font-medium [&_span]:text-sky-300">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Projects
          </h1>
          <span>See all my projects</span>
        </section>
        <ul
          ref={scrollRef}
          className="flex flex-row gap-x-3 sm:gap-x-5 text-center text-nowrap w-[100%] mt-10 text-lg font-light sm:max-w-[75rem]  px-5 py-4 overflow-x-scroll scroll-smooth scroll-w-0  *:w-[100%] *:px-2.5 [&_a]:ring-[0.3px] [&_a]:ring-sky-600  [&_a]:hover:bg-sky-600/40 [&_a]:hover:ring-transparent align-middle "
        >
          <ProjectType
            handleFilteredClicked={() => {
              handleClicked("all");
            }}
            projectName="All"
          />
          <ProjectType
            handleFilteredClicked={() => {
              handleClicked("graphic_design");
            }}
            projectName="Graphic Design"
          />
          <ProjectType
            handleFilteredClicked={() => {
              handleClicked("web_dev");
            }}
            projectName="Web Development"
          />
          <ProjectType
            handleFilteredClicked={() => {
              handleClicked("machine_learning");
            }}
            projectName="Machine Learning"
          />
          <ProjectType
            handleFilteredClicked={() => {
              handleClicked("software_troubleshooting");
            }}
            projectName="Software Troubleshooting"
          />
        </ul>
        <section className="flex justify-center items-center align-middle gap-7 *:block *:cursor-pointer *:hover:bg-sky-600/40 *:p-2 rounded md:hidden">
          <button onClick={scrollLeftBtn}>
            <FaArrowLeft />
          </button>
          <button onClick={scrollRightBtn}>
            <FaArrowRight />
          </button>
        </section>
        <section className="flex flex-wrap justify-center align-middle gap-y-6 sm:gap-x-5 sm:max-w-[75rem] sm:p-5 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 mt-10 p-5">
          {projectCategory.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Project;
