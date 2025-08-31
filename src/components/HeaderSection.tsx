import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);
  
  const coursesRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "For Employers", href: "/employers" },
    { name: "For Agencies", href: "/agencies" },
    { name: "Courses", hasDropdown: true },
    { name: "Destinations", hasDropdown: true },
    // { name: "Accreditation", href: "/accreditation" },
    // { name: "Candidate Success", href: "/success" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const courseCategories = [
    "Construction",
    "Hospitality", 
    "Agriculture",
    "Technical"
  ];

  const destinations = [
    { name: "Israel", description: "High-demand opportunities in construction & agriculture" },
    { name: "GCC Countries", description: "Premium positions in hospitality & technical fields" },
    { name: "Europe", description: "Skilled migration programs with pathway to residency" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
      if (destinationsRef.current && !destinationsRef.current.contains(event.target as Node)) {
        setDestinationsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCoursesDropdownOpen(false);
        setDestinationsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Topbar - Static, not sticky */}
      <motion.div 
        className="bg-gray-100 backdrop-blur-sm border-b border-gray-100 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a 
                href="/accreditation" 
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
                aria-label="Government certification details"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M12 2L3 7v10c0 5.5 3.8 7.7 9 9 5.2-1.3 9-3.5 9-9V7l-9-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span className="hidden sm:inline">Government certified</span>
              </a>
              <span className="text-foreground/60 hidden md:inline">
                Government-certified training academy — placing qualified professionals worldwide
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+94112345678" className="text-foreground/80 hover:text-foreground transition-colors">
                +94 (11) 234-5678
              </a>
              <a href="mailto:info@csti.lk" className="text-foreground/80 hover:text-foreground transition-colors hidden sm:inline">
                info@csti.lk
              </a>
              <select className="bg-transparent border border-primary/20 rounded px-2 py-1 text-xs text-foreground/80">
                <option value="en">EN</option>
                <option value="ar">العربية</option>
                <option value="he">עברית</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header - Sticky */}
      <motion.header 
        role="banner" 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg' 
            : 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 pt-4 pb-4${
            isScrolled ? 'min-h-20 pt-6 md:pt-4 pb-4' : 'h-20 pt-4 pb-4'
          }`}>
            
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              aria-label="CSTI Bureau - Home"
            >
              <div className={`bg-primary rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}>
                <span className={`text-primary-foreground font-bold transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}>C</span>
              </div>
              <div>
                <h1 className={`font-bold text-foreground transition-all duration-300 ${
                  isScrolled ? 'text-xl' : 'text-xl'
                }`}>CSTI Bureau</h1>
                <p className={`text-muted-foreground transition-all duration-300 ${
                  isScrolled ? 'text-sm' : 'text-sm'
                }`}>Training & Placement Academy</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav 
              role="navigation"
              className="hidden lg:flex items-center space-x-6"
            >
              {navItems.map((item, index) => (
                <div key={item.name} className="relative" ref={item.name === "Courses" ? coursesRef : item.name === "Destinations" ? destinationsRef : undefined}>
                  {item.hasDropdown ? (
                    <button
                      onClick={() => {
                        if (item.name === "Courses") {
                          setCoursesDropdownOpen(!coursesDropdownOpen);
                          setDestinationsDropdownOpen(false);
                        } else if (item.name === "Destinations") {
                          setDestinationsDropdownOpen(!destinationsDropdownOpen);
                          setCoursesDropdownOpen(false);
                        }
                      }}
                      aria-expanded={item.name === "Courses" ? coursesDropdownOpen : destinationsDropdownOpen}
                      aria-label={`${item.name} menu toggle`}
                      className="flex items-center space-x-1 text-foreground hover:text-primary font-medium transition-colors duration-300 relative group"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${
                        (item.name === "Courses" && coursesDropdownOpen) || (item.name === "Destinations" && destinationsDropdownOpen) 
                          ? 'rotate-180' : ''
                      }`} />
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary font-medium transition-colors duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  )}

                  {/* Courses Dropdown */}
                  <AnimatePresence>
                    {item.name === "Courses" && coursesDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 space-y-3">
                          {courseCategories.map((category) => (
                            <a
                              key={category}
                              href={`/courses/${category.toLowerCase()}`}
                              className="block text-foreground hover:text-primary transition-colors duration-200 py-2 border-b border-border last:border-0"
                            >
                              {category}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Destinations Dropdown */}
                  <AnimatePresence>
                    {item.name === "Destinations" && destinationsDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 space-y-4">
                          {destinations.map((dest) => (
                            <a
                              key={dest.name}
                              href={`/destinations/${dest.name.toLowerCase()}`}
                              className="block p-3 hover:bg-muted rounded-lg transition-colors duration-200"
                            >
                              <h4 className="font-medium text-foreground">{dest.name}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{dest.description}</p>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side CTAs */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3">
                <Button size="sm" asChild>
                  <a href="/request-quota">Request Job Quota</a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            
            <motion.div
              className="relative bg-background border-r border-border w-full max-w-sm h-full overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-6 space-y-6">
                {/* Mobile CTAs at top */}
                <div className="space-y-3 pb-6 border-b border-border">
                  <Button size="sm" className="w-full" asChild>
                    <a href="/request-quota">Request Job Quota</a>
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveMobileAccordion(
                              activeMobileAccordion === item.name ? null : item.name
                            )}
                            className="flex items-center justify-between w-full text-left text-foreground hover:text-primary font-medium py-2 transition-colors"
                            aria-expanded={activeMobileAccordion === item.name}
                          >
                            <span>{item.name}</span>
                            <ChevronDown size={16} className={`transition-transform duration-200 ${
                              activeMobileAccordion === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeMobileAccordion === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pt-2 space-y-2">
                                  {item.name === "Courses" && courseCategories.map((category) => (
                                    <a
                                      key={category}
                                      href={`/courses/${category.toLowerCase()}`}
                                      className="block text-muted-foreground hover:text-foreground py-1 transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {category}
                                    </a>
                                  ))}
                                  {item.name === "Destinations" && destinations.map((dest) => (
                                    <a
                                      key={dest.name}
                                      href={`/destinations/${dest.name.toLowerCase()}`}
                                      className="block text-muted-foreground hover:text-foreground py-1 transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {dest.name}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="block text-foreground hover:text-primary font-medium py-2 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSection;