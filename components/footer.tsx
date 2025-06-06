export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-6 md:py-8 mt-8 md:mt-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            © 2025 Prateek Santani. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <a
              href="mailto:prateeksantani98@gmail.com"
              className="text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline"
            >
              prateeksantani98@gmail.com
            </a>
            <a
              href="tel:+918896577062"
              className="text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline"
            >
              +91 8896577062
            </a>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            Made with <span className="text-red-500">❤</span> by Prateek Santani
          </p>
        </div>
      </div>
    </footer>
  )
}
