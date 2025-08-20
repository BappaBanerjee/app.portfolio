const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
  index,
}) => {
  return (
    <div
      className={`block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700
        `}
    >
      {/* uncomment for alternate images and content */}
      {/* <div
        className={`flex flex-wrap items-center 
            ${index % 2 !== 0 ? "flex-row-reverse" : ""}
            `}
      > */}
      <div className={`flex flex-wrap items-center`}>
        <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
          <img
            src={image}
            alt={title}
            // className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
            className="w-96 h-96 object-cover rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
            // className="w-full h-full max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
          />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 text-3xl font-bold">
              <span className="text-red-700 dark:text-red-500">{subtitle}</span>{" "}
              {title}
            </h2>
            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
              {description}
            </p>
            <a
              href={buttonLink}
              className="inline-block bg-red-700 hover:bg-red-800 rounded-full px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
