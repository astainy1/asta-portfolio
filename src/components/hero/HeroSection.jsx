import image from "../../assets/Christian.jpg";
const HeroSection = () => {
  return (
    <>
      <section className="mx-auto flex flex-col justify-center align-middle items-center gap-5 font-montserrat  text-white p-12 text-center">
        <span className="bg-slate-800 p-2 ring-1 ring-slate-900 mx-auto block rounded-full h-48 w-48">
          <img
            className="mx-auto h-44 w-44 object-cover rounded-full ring-1 ring-slate-900"
            src={image}
            alt=""
          />
        </span>

        <section className="font-montserrat [&_h1]:font-bold [&_h1]:uppercase [&_h1]:text-2xl  sm:[&_h1]:text-3xl md:[&_h1]:text-4xl [&_span]:text-sky-300 [&_span]:tracking-[6px] [&_span]:font-medium ">
          <h1 className="font-poppins mb-1">Christian A. Harris</h1>
          <span>Web Developer </span>
        </section>
        <p className="md:max-w-[50%] font-light leading-6 tracking-[0.7px] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          perferendis deleniti velit. Amet nam iusto omnis ducimus perferendis.
          Cum repellat quo aut, ratione mollitia magni harum itaque laborum ut
          omnis?
        </p>
        <section className="mt-5 [&_a]:py-3 [&_a]:px-5 [&_a]:rounded-full [&_a]:ring [&_a]:ring-sky-500 [&_a]:hover:bg-sky-600 [&_a]:hover:ring-0 [&_a]:hover:text-sky-50 *:transition-all *:ease-in *:duration-[0.3s] [&_a]:font-light">
          <a href="#">Contact Me</a>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
