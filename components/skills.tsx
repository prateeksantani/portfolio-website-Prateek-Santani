export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Javascript/Typescript","HTML/CSS", "Tailwind CSS", "Python", "C/C++", "Java", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "PyQT", "Material UI", "GSAP", "Flutter"],
    },
    {
      title: "Backend",
      skills: ["Django/Flask/FastAPI", "Node.js", "Spring Boot", "ServerLess", "REST API", "GraphQL"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Elasticsearch", "DynamoDB", "Cassandra","MYSQL"],
    },
    {
      title: "DevOps/Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Airflow", "Prometheus", "Kafka"],
    },
    {
      title: "AI/ML",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "MLFlow", "LLMs", "RAG", "VectorDB"],
    },
  ]

  return (
    <section className="py-8 md:py-16" id="skills">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white dark:bg-slate-700 p-4 md:p-6 rounded-lg hover-card border border-gray-100 dark:border-slate-600"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag bg-gray-100 dark:bg-slate-600 text-gray-800 dark:text-gray-200 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
