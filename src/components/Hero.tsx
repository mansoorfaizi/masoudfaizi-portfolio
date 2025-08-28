import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import portraitImage from "@/assets/masoud-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-subtle to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="hero-card rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="gradient-text">Masoud Faizi</span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  Computer Science Professional | Software Developer | Lecturer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Blending technology, teaching, and innovation to build impactful digital solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="hero-button rounded-xl px-8 py-6 text-base font-medium"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="rounded-xl px-8 py-6 text-base font-medium border-2 hover:border-primary"
                  asChild
                >
                  <a href="#projects" className="flex items-center">
                    <Github className="mr-2 h-5 w-5" />
                    View Projects
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Berlin, Germany</span>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="http://linkedin.com/in/masoud-faizi-b16611135" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/masoudfaizi" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden hero-card">
                  <img 
                    src={portraitImage} 
                    alt="Masoud Faizi - Computer Science Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;