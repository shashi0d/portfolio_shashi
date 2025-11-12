import { Link, useLocation } from "react-router";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/work", label: "WORK", match: (path: string) => path.startsWith("/work") },
    { to: "/tools", label: "TOOLS", match: (path: string) => path === "/tools" },
    { to: "/lab", label: "LAB", match: (path: string) => path === "/lab" },
    { to: "/about", label: "ABOUT", match: (path: string) => path === "/about" },
    { to: "/contact", label: "CONTACT", match: (path: string) => path === "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="hidden sm:inline">SHASHIDHARA NARAYANAPPA</span>
              <span className="sm:hidden">SHASHI N</span>
            </Link>
            <div className="w-2 h-2 bg-black dark:bg-white rounded-full hidden sm:block"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ to, label, match }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors ${
                  match(location.pathname)
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                }`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 pt-2 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ to, label, match }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-base font-medium transition-colors py-2 ${
                    match(location.pathname)
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
