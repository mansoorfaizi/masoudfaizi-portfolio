import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section === "home" ? "hero" : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <span className="font-bold text-xl gradient-text">Masoud Faizi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-200 ${
                    activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
            <Button
              className="tech-button rounded-lg px-6 py-2 font-medium ml-4"
              onClick={() => scrollToSection("#contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 nav-glass border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 rounded-md ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  className="tech-button rounded-lg px-6 py-2 font-medium w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;