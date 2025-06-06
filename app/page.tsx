import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { LatestProjects } from "@/components/latest-projects"
import { AboutMe } from "@/components/about-me"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Resume } from "@/components/resume"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <Hero />
        <LatestProjects />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  )
}
