
const Card = ({ customeStyle, heading, content, icon, children }) => {
  return (
    <>
      <section
        className={`${customeStyle} flex flex-col justify-center align-middle items-center font-light text-md gap-6 [&_h1]:font-bold [&_h1]:text-xl md:justify-start md:items-start md:text-left`}
      >
        <div className="flex flex-col items-center justify-center gap-6 align-middle md:items-start md:justify-start">
          <span className="rounded-full bg-sky-500 p-4 text-center">
            {icon}
          </span>
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
        {children}
      </section>
    </>
  );
};

export default Card;
