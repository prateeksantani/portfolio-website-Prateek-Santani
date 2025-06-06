import { Button } from "@/components/ui/button"

export function Resume() {
  return (
    <section className="py-8 md:py-16" id="resume">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">Resume</h2>

      <div className="space-y-4">
        <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
          Download my Resume Here:{""}
          <span className="bg-green-200 text-black px-1 py-0.5 rounded font-medium">Software + AI Engineer</span>
        </p>

        <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-slate-600 dark:text-gray-300 dark:hover:bg-slate-500">
          <a href="https://drive.google.com/file/d/1eAEtfwU3LC4g8C5pzAv9A8kE9Yw0kLak/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View PDF</a>
        </Button>
      </div>
    </section>
  )
}
