
function ProjectCard({image, title, description, link} ) {
  return (
    <section className="rounded-lg shadow- shadow-sky-400 max-w-sm transition-all ease-in-out delay-150 duration-[0.3s] hover:shadow-lg *:text-white overflow-hidden ring-[0.5px] inset-0.5 ring-sky-600 cursor-pointer">
      <img src={image} alt={title} className="h-48 w-full object-cover rounded" />
      <section className="p-5">
        <h4 className="text-xl font-medium text-sky-400">{title}</h4>
        <p className="mt-4 text-gray-300 font-light">
            {description}
        </p>
        <a href={link} className="inline-block mt-5 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition" target="_blank" rel="noopener noreferrer">View</a>
      </section>
    </section>
  );
}

export default ProjectCard;
