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
      title: "DocFlow: GraphRAG - LLM Document Compliance",
      category: "AI",
      techStack: ["Next.js", "FastAPI", "GraphRAG", "PostgreSQL", "Anthropic API", "FAISS", "Neo4J"],
      featured: true,
      description:
        "Built a document compliance system that uses graph-based RAG to analyze legal documents and ensure compliance with regulations. The system reduced manual review time by 78% and improved accuracy by 34% compared to traditional methods.",
    },
    {
      id: "2",
      title: "VectorFlow: Hierarchical Vector Database (from Scratch)",
      category: "Backend",
      techStack: ["Python", "FastAPI", "Pydantic", "Cohere", "AsyncIO", "Docker", "Kubernetes", "Helm", "Minikube"],
      description:
        "Developed a high-performance vector database from scratch that uses hierarchical clustering for efficient similarity search. Achieved 3x faster query times compared to existing solutions while maintaining high recall rates.",
    },
    {
      id: "3",
      title: "KubeControl: Cloud-Native Monitoring and Alerting Solution",
      category: "DevOps/Infra",
      techStack: [
        "Flask",
        "MongoDB",
        "Docker",
        "Kubernetes (Minikube, AWS EKS)",
        "Prometheus",
        "Slack API",
        "AWS (EKS, S3, CloudWatch)",
      ],
      description:
        "Created a comprehensive monitoring and alerting solution for Kubernetes clusters that provides real-time insights and automated incident response. Implemented custom metrics collection and intelligent alert grouping to reduce alert fatigue.",
    },
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

              <Button
                variant="outline"
                size="sm"
                className="hover-card bg-white dark:bg-slate-600 border-gray-200 dark:border-slate-500 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-500 mb-3 md:mb-4 text-xs md:text-sm"
              >
                View on GitHub
              </Button>

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
