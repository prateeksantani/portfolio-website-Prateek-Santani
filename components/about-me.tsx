export function AboutMe() {
  return (
    <section className="py-8 md:py-16" id="about">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">About Me</h2>

      {/* Photo - shown on mobile after heading, hidden on desktop */}
      <div className="flex justify-start mb-6 md:hidden">
        <div className="w-32 h-32 bg-gray-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover-card overflow-hidden">
          <img
            src="/me.jpg"
            alt="Prateek Santani"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Photo - shown on desktop only */}
        <div className="flex-shrink-0 hidden md:block">
          <div className="w-48 h-48 bg-gray-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover-card overflow-hidden">
            <img
              src="/me.jpg"
              alt="Prateek Santani"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-3 md:space-y-4">
          <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base">
            {"Hi, I'm Prateek Santani, a Fullstack Dev + AI Engineer with "}
            <span className="font-semibold text-gray-900 dark:text-white">1 years</span>
            {" of experience across "}
            <span className="font-semibold text-gray-900 dark:text-white">3 internships</span>
            {" specializing in "}
            <span className="highlight-text">Full Stack Development</span>
            {", "}
            <span className="highlight-text">Cloud/DevOps infrastructure</span>
            {", and "}
            <span className="highlight-text">AI/ML solutions</span>
            {
              "My expertise revolves around building responsive and interactive UI, building scalable cloud-native applications within distributed systems, optimizing performance, and developing and deploying AI models."
            }
          </p>

          <p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base">
            {
              "In the realm of AI, I specialize in working with orchestration, CI/CD pipelines, and implementing robust monitoring and alerting systems."
            }
          </p>

          <div className="pt-2 md:pt-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4 underline">
              Education
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  B.Tech in Computer and Communication Engineering, Manipal University Jaipur
                </span>
                <br />
                <span className="text-gray-600 dark:text-gray-300">(Completed August 2023)</span>
              </li>
            </ul>

            <p className="mt-3 md:mt-4 text-gray-800 dark:text-gray-100 text-sm sm:text-base">
              <span className="font-semibold text-gray-900 dark:text-white underline">Key Courses:</span> Analysis of
              Algorithms, Operating Systems, Machine Learning, Cloud Computing, Big Data
            </p>

            <p className="mt-3 md:mt-4 text-gray-800 dark:text-gray-100 text-sm sm:text-base">
              <span className="font-semibold text-gray-900 dark:text-white underline">IIT Guwahati:</span>{" "}
              secured second place in Hackathon conducted by IIT Guwahati awarded with Silver medal and cash prize
            </p>
          </div>

          <p className="pt-2 md:pt-4 text-gray-800 dark:text-gray-100 text-sm sm:text-base">
            {"Firm Beliver in Developing "}
            <span className="highlight-text">AI</span>
            {" to take AI jobs with better models :)"}
          </p>

          <p className="pt-2 md:pt-4">
            <a href="https://drive.google.com/file/d/1eAEtfwU3LC4g8C5pzAv9A8kE9Yw0kLak/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              View My Resume (PDF)
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
