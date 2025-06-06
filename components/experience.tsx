"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"

export function Experience() {
  const [showMore, setShowMore] = useState(false)
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(new Set())

  const toggleExperience = (expId: string) => {
    const newExpanded = new Set(expandedExperiences)
    if (newExpanded.has(expId)) {
      newExpanded.delete(expId)
    } else {
      newExpanded.add(expId)
    }
    setExpandedExperiences(newExpanded)
  }

  const experiences = [
    {
      id: "1",
      company: "Pepper Cloud",
      role: "FullStack Development Intern",
      period: "Jan 2024 - September 2024",
      location: "Singapore(Remote)",
      techStack: [
        "Python",
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "Apache Airflow",
        "Prometheus",
        "Grafana",
        "AWS",
        "Kubernetes",
      ],
      description:
        "• Developed responsive and high-performance webpages using Gatsby (SSG), a modern React-based framework\n• Leveraged Material UI to create responsive components using media queries for both mobile and desktop views\n• Revamped video player implementation using vimeo.js for better performance and interactivity\n• Improved page performance and SEO, achieving:\n  - Mobile performance: 40% to 75%\n  - Desktop performance: 75% to 90%\n• Implemented lazy loading techniques, resulting in 30% improvement in website performance",
    },
    {
      id: "2",
      company: "Defence Research & Development Organisation",
      role: "Software Development Intern",
      period: "May 2023 - July 2023",
      location: "New Delhi, India",
      techStack: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
      description:
        "Worked on a classified project involving secure data transmission and analysis. Implemented encryption protocols and built a web interface for data visualization and analysis.",
    },
    {
      id: "3",
      company: "IBM, Edunet",
      role: "Frontend Intern",
      period: "Jan 2023 - April 2023",
      location: "Gurugram",
      techStack: [],
      description:
        "• Collaborated with team members using Git for version control and task management\n• Developed data visualization solutions using HTML, JavaScript, and CSS for daily test result reports\n• Built end-to-end static websites using Vanilla JavaScript\n• Conducted comprehensive SEO audits and implemented best practices for improved search engine rankings\n• Integrated Material UI components to create consistent and visually appealing user interfaces",
    },
  ]

  return (
    <section className="py-8 md:py-16" id="experience">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">Experience</h2>

      <div className="space-y-6 md:space-y-8">
        {experiences.slice(0, showMore ? experiences.length : 2).map((exp) => {
          const isExpanded = expandedExperiences.has(exp.id)

          return (
            <div
              key={exp.id}
              className="experience-card bg-white dark:bg-slate-700 p-4 md:p-6 rounded-lg border border-gray-100 dark:border-slate-600 transition-all duration-200"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                {exp.company}
              </h3>
              <h4 className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-1 md:mb-2">{exp.role}</h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-1 md:mb-2">{exp.period}</p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">{exp.location}</p>

              {exp.techStack.length > 0 && (
                <>
                  <p className="text-sm md:text-base text-gray-900 dark:text-white font-semibold mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="skill-tag bg-gray-100 dark:bg-slate-600 text-gray-800 dark:text-gray-200 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <Button
                variant="ghost"
                className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-transparent text-sm md:text-base"
                onClick={() => toggleExperience(exp.id)}
              >
                <span className="flex items-center">
                  {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
                  Click to {isExpanded ? "collapse" : "expand"} and know more
                </span>
              </Button>

              {isExpanded && (
                <div className="mt-4 text-sm md:text-base text-gray-700 dark:text-gray-200">{exp.description}</div>
              )}
            </div>
          )
        })}

        <div className="text-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
            Showing {showMore ? "all" : "2"} of {experiences.length} internships
          </p>
          <Button
            onClick={() => setShowMore(!showMore)}
            className="hover-card bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-slate-600 dark:text-gray-200 dark:hover:bg-slate-500"
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </section>
  )
}
