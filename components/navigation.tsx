"use client"

import { useState, useEffect } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isDark, setIsDark] = useState(true) // Default to dark mode
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      // Default to dark mode
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : ""
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ""
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
  ]

  return (
    <nav className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900 dark:text-white">PS</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}

            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              {isDark ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </Button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="mr-2 p-2">
              {isDark ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-2">
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-slate-800 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700">
            <div className="text-lg font-bold text-gray-900 dark:text-white">PS</div>
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-2">
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
