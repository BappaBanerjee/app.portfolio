function ProjectCard({
  title,
  subtitle,
  company,
  points,
  image,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="group border border-gray-200 dark:border-neutral-700 rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-red-700 group-hover:text-red-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 italic">{subtitle}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {company}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="mt-5">
          <a
            href={buttonLink}
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-lg shadow-md hover:bg-red-800 transition-colors duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }) {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
