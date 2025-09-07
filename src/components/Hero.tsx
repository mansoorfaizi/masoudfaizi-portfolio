import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, ArrowDown } from "lucide-react";
import profile from "@/assets/masoud-profile.png";
import techBackground from "@/assets/tech-background.jpg";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${techBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-16 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent text-lg font-medium tracking-wide uppercase">
                  Computer Science Professional
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Masoud</span><br />
                  <span className="text-foreground">Faizi</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
                  Software Developer • Lecturer • Tech Innovator
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Blending <span className="text-accent font-medium">technology</span>, 
                  <span className="text-primary font-medium"> teaching</span>, and 
                  <span className="text-accent font-medium"> innovation</span> to build 
                  impactful digital solutions across international markets.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                className="tech-button rounded-lg px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-lg px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base font-medium border-2 border-border hover:border-primary hover:bg-primary/10 tech-card"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View Projects
              </Button>
            </div>
            
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-start gap-6 sm:gap-8 pt-8 sm:pt-6 pb-8 sm:pb-0">
              <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>Berlin, Germany</span>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="http://linkedin.com/in/masoud-faizi-b16611135" 
                  className="p-3 sm:p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary transition-all duration-200 hover:bg-primary/10 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://github.com/masoudfaizi" 
                  className="p-3 sm:p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary transition-all duration-200 hover:bg-primary/10 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2 mt-8 sm:mt-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden tech-card animate-glow">
                <img 
                  src={profile} 
                  alt="Masoud Faizi - Computer Science Professional"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10"></div>
              </div>
              
              {/* Tech elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-background rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 sm:bottom-8 left-1/2 transform -translate-x-1/2 mt-20 sm:mt-12">
          <div className="flex flex-col items-center space-y-3 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;