function ProjectType({ projectName, link, handleFilteredClicked }) {
  return (
    <>
      <li className="">
        <a href={link}
          onClick={handleFilteredClicked}
          className="cursor-pointer transition-all delay-50 duration-300 ease-in-out block p-2 rounded hover: hover:py-3 bg-sky-600/10 "
        >
          {projectName}
        </a>
      </li>
    </>
  );
}

export default ProjectType;
