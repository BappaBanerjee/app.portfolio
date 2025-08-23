import { experiences } from "../../data/experinces";

export default function ExperienceSection() {
  return (
    <section className="py-16">
      <h2 className="section-title">
        Professional <span className="section-title-highlight">Experience</span>
      </h2>
      <div className="space-y-10 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group border border-gray-200 dark:border-neutral-700 rounded-2xl p-6 bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-red-600 md:text-white group-hover:text-red-600 transition-colors">
                  {exp.company}{" "}
                  <span className="text-gray-500 text-lg">
                    - {exp.location}
                  </span>
                </h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {exp.role}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                {exp.duration}
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {exp.points.map((point, idx) => (
                <li key={idx} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
