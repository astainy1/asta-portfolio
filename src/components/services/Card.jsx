import { FaSun } from "react-icons/fa";

const Card = ({ customeStyle, children }) => {
  return (
    <>
      <section
        className={`${customeStyle} flex flex-col justify-center align-middle items-center font-light text-md gap-6 [&_h1]:font-bold [&_h1]:text-xl md:justify-start md:items-start md:text-left`}
      >
        <div className="flex flex-col items-center justify-center gap-6 align-middle md:items-start md:justify-start">
          <span className="rounded-full bg-sky-500 p-4 text-center">
            <FaSun />
          </span>
          <h1>Heading Number one</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            voluptate corporis, dolor minus possimus iusto iste corrupti,
            laborum nulla ducimus illum provident ipsa! Fugit architecto vero,
            illo doloremque modi aliquid!
          </p>
        </div>
        {children}
      </section>
    </>
  );
};

export default Card;
