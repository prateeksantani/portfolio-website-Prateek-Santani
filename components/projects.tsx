"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Frontend")
  const [showMore, setShowMore] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())

  const toggleProject = (projectId: string) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId)
    } else {
      newExpanded.add(projectId)
    }
    setExpandedProjects(newExpanded)
  }

  const filters = ["Frontend", "Backend", "AI", "Core/Systems", "Cloud", "DevOps/Infra", "Web3"]

  const projects = [
   {
  id: "1",
  title: "GlowGenix - Skincare Landing Page",
  category: "Frontend",
  techStack: ["React", "TypeScript", "Tailwind CSS"],
  featured: true,
  description:
    "Developed a responsive landing page for Promarketer's client GlowGenix using React and Tailwind CSS. The design was tested across Chrome, Firefox, and Safari, and verified for mobile, tablet, and desktop responsiveness. All components passed functionality checks. Planned to integrate a Sora AI explainer video, but was limited by subscription access.",
  github: "https://github.com/prateeksantani/GlowGenix-landing.git",
  live: "https://glow-genix-landing.vercel.app/"
},
{
  id: "2",
  title: "Emoji Generator - AI Avatar from Text",
  category: "AI",
  techStack: ["Next.js", "Tailwind CSS", "Clerk Auth", "Replicate SDXL API", "Aceternity UI"],
  featured: true,
  description:
    "Built an AI-powered emoji/avatar generator that converts user input into high-quality emojis using the SDXL model from Replicate. Features include authentication via Clerk, a sleek Aceternity UI design, and real-time generation with secure API integration.",
  github: "https://github.com/prateeksantani/Emoji-Genrator.git",
  live: "https://emoji-gen-six.vercel.app/"
}
// {
//   id: "3",
//   title: "VectorFlow: Hierarchical Vector Database (from Scratch)",
//   category: "Backend",
//   techStack: ["Python", "FastAPI", "Pydantic", "Cohere", "AsyncIO", "Docker", "Kubernetes", "Helm", "Minikube"],
//   description:
//     "Developed a high-performance vector database from scratch that uses hierarchical clustering for efficient similarity search. Achieved 3x faster query times compared to existing solutions while maintaining high recall rates.",
// }
  ]

  return (
    <section className="py-8 md:py-16" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">Projects</h2>

      <div className="flex flex-wrap gap-2 mb-6 md:mb-8 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "default" : "secondary"}
            size="sm"
            className={`hover-card text-xs md:text-sm whitespace-nowrap ${
              activeFilter === filter
                ? "bg-blue-600 text-white dark:bg-blue-600 dark:text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-slate-600 dark:text-gray-200 dark:hover:bg-slate-500"
            }`}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="space-y-4 md:space-y-6">
        {projects.map((project) => {
          const isExpanded = expandedProjects.has(project.id)

          return (
            <div
              key={project.id}
              className={`experience-card p-4 md:p-6 rounded-lg transition-all duration-200 ${
                project.featured
                  ? "border-2 border-blue-500 bg-white dark:bg-slate-700"
                  : "border border-gray-100 dark:border-slate-600 bg-white dark:bg-slate-700"
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover-card bg-white dark:bg-slate-600 border-gray-200 dark:border-slate-500 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-500 text-xs md:text-sm"
                    >
                      View on GitHub
                    </Button>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover-card bg-white dark:bg-slate-600 border-gray-200 dark:border-slate-500 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-500 text-xs md:text-sm"
                    >
                      View Live Project
                    </Button>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="skill-tag bg-gray-100 dark:bg-slate-600 text-gray-800 dark:text-gray-200 px-2 md:px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-transparent text-sm md:text-base"
                onClick={() => toggleProject(project.id)}
              >
                <span className="flex items-center">
                  {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
                  Click to {isExpanded ? "collapse" : "expand"} and know more
                </span>
              </Button>

              {isExpanded && (
                <div className="mt-4 text-sm md:text-base text-gray-700 dark:text-gray-200">{project.description}</div>
              )}
            </div>
          )
        })}

        <div className="text-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">Showing 3 of 14 projects</p>
          <Button
            onClick={() => setShowMore(!showMore)}
            className="hover-card bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-slate-600 dark:text-gray-200 dark:hover:bg-slate-500"
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  )
}
