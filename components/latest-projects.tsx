"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  date: string
  description: string
  link?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Built an Assignment for hiring round at Ringover.",
    date: "24 July 2025",
    description: "• Developed a modern SaaS dashboard (DashDark X) with clean layouts and excellent data visualization\n• Implemented intuitive user interfaces for better user experience\n• Created responsive designs that work seamlessly across different devices",
    link: "https://frontend-task-two-omega.vercel.app/"
  },
  {
    id: "2",
    title: "Build an Assignment for hiring round at ProMarketer",
    date: "06 July 2025",
    description: "• Received an invitation to visit the Madison Square Garden offices\n• Discussed potential AI integration opportunities for event management\n• Explored crowd analytics solutions for venue optimization",
    link: "https://frontend-task-two-omega.vercel.app/"
  },
  {
    id: "3",
    title: "Optimizing AI Agents",
    date: "22 Mar 2025",
    description: "• Published a comprehensive guide on optimizing AI agent performance in distributed systems\n• Featured on the front page of Hacker News\n• Generated significant discussion in the AI community",
  },
  {
    id: "4",
    title: "Advanced Agent / RAG exploration",
    date: "24 Jan 2025",
    description: "• Conducted in-depth research on combining Retrieval-Augmented Generation with autonomous agents\n• Improved context handling and decision making capabilities\n• Implemented a proof-of-concept that reduced hallucinations by 47%",
  },
  {
    id: "5",
    title: "Built this Website",
    date: "14 Dec 2024",
    description: "• Created a personal portfolio website using modern web technologies\n• Implemented responsive design and smooth animations\n• Showcased projects and professional experience",
  },
]

export function LatestProjects() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set(["1"]))

  const toggleProject = (projectId: string) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId)
    } else {
      newExpanded.add(projectId)
    }
    setExpandedProjects(newExpanded)
  }

  return (
    <section className="py-8 md:py-12">
      <h3 className="text-lg font-semibold mb-4 md:mb-6 text-gray-900 dark:text-white">LATEST* (Dec'24 onwards)</h3>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="scrollable-section">
          <div className="space-y-px">
            {projects.map((project) => {
              const isExpanded = expandedProjects.has(project.id)

              return (
                <div
                  key={project.id}
                  className="bg-white dark:bg-slate-700 border-b border-gray-100 dark:border-slate-600 last:border-b-0"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-3 sm:p-4 h-auto text-left hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-900 dark:text-white rounded-none"
                    onClick={() => toggleProject(project.id)}
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-sm sm:text-base">{project.title}</span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{project.date}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    )}
                  </Button>

                  {isExpanded && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm text-gray-700 dark:text-gray-300">
                      {project.description}
                      {project.link && (
                        <div className="mt-2">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            View Project →
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
