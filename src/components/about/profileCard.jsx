import React from "react";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 96 960 960"
    className="w-5 text-warning text-red-500"
  >
    <path
      fill="currentColor"
      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
    />
  </svg>
);

const ProfileCard = ({
  name,
  linkedInUrl,
  role,
  image,
  rating = 5,
  description,
}) => {
  return (
    <div className="mb-6 lg:mb-0">
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img src={image} className="w-full rounded-t-lg" alt={name} />
          <a href="#!">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
          </a>
          <svg
            className="absolute left-0 bottom-[-1px] text-white dark:text-neutral-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="p-6  text-center">
          <h5 className="text-lg font-bold flex items-center justify-center space-x-2">
            <span>{name}</span>
            {linkedInUrl && (
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            )}
          </h5>
          <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
            {role}
          </h6>
          <ul className="mb-6 flex justify-center">
            {Array.from({ length: rating }).map((_, idx) => (
              <li key={idx}>
                <StarIcon />
              </li>
            ))}
          </ul>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
