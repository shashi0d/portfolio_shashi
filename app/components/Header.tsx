import { Link, useLocation } from "react-router";

export function Header() {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors">
              SHASHIDHARA NARAYANAPPA
            </Link>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link 
              to="/work" 
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith("/work") 
                  ? "text-gray-900" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              WORK
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
