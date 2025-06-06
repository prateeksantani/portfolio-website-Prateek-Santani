import { Button } from "@/components/ui/button"
import { Hero3D } from "@/components/hero-3d"

export function Hero() {
  return (
    <section className="py-8 md:py-16" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* 3D Scene - Shown first on mobile, second on desktop */}
        <div className="lg:order-last order-first">
          <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
            <Hero3D />
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
              Prateek Santani, Engr.
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 mb-4 md:mb-8">
              Fullstack Developer + AI Engineer
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4 text-gray-700 dark:text-gray-100 leading-relaxed">

            <div className="space-y-2">
              <p>
                I believe in solving problems <span className="highlight-text">at scale</span>.
              </p>
              <p>FullStack? AI? Core/Infra?</p>
              <p>{"I'm in! I learn. I implement."}</p>
              <p>
                <a href="#about" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Know more About Me and My Skills.
                </a>
              </p>
            </div>

            <p className="pt-2 md:pt-4">
              <span className="font-semibold text-gray-900 dark:text-white">Currently</span>, looking for SDE/AI May'25
              full-time opportunities.
            </p>

            <p>
              <span className="font-semibold text-gray-900 dark:text-white">Prev</span>, building interactive and Responsive UI for a SaaS product @PepperCloud, Singapore.
            </p>

            <div className="pt-2 md:pt-4">
              <p className="text-sm sm:text-base">
                <a href="mailto:prateeksantani98@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  prateeksantani98@gmail.com
                </a>
                {" | "}
                <a href="tel:+918896577062" className="text-blue-600 dark:text-blue-400 hover:underline">
                  +91 8896577062
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 md:pt-6">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover-card"
              asChild
            >
              <a href="https://github.com/prateeksantani" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover-card"
            >
            <a href="https://www.linkedin.com/in/prateek-santani/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover-card"
            >
              X/Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover-card"
            >
              <a href="https://drive.google.com/file/d/1eAEtfwU3LC4g8C5pzAv9A8kE9Yw0kLak/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
