import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle relative">
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <User className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging cutting-edge technology to solve complex problems 
            and educate the next generation of developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Background */}
          <Card className="tech-card border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Professional Journey</h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A dedicated Computer Science professional with a diverse international background 
                  spanning software development, telecommunications engineering, university teaching, 
                  and content moderation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My unique perspective combines technical expertise with strong communication and 
                  analytical skills, developed through comprehensive experience across Afghanistan 
                  and Germany's tech ecosystems.
                </p>
                <div className="flex items-center text-sm text-accent font-medium pt-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  Berlin, Germany • International Experience
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Education */}
          <Card className="tech-card border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/10 rounded-xl mr-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Academic Excellence</h3>
              </div>
              <div className="space-y-6">
                <div className="tech-card p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Master of Science</h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      Advanced Degree
                    </div>
                  </div>
                  <p className="text-primary font-medium">Computer Science</p>
                  <p className="text-sm text-muted-foreground">Technische Universität Berlin (TU Berlin)</p>
                  <p className="text-xs text-accent mt-1">Berlin, Germany</p>
                </div>
                
                <div className="tech-card p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">Bachelor of Science</h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      Foundation
                    </div>
                  </div>
                  <p className="text-primary font-medium">Computer Science</p>
                  <p className="text-sm text-muted-foreground">Herat University</p>
                  <p className="text-xs text-accent mt-1">Herat, Afghanistan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "5+", label: "Years Experience", icon: "💻" },
            { number: "50+", label: "Projects Completed", icon: "🚀" },
            { number: "2", label: "Countries", icon: "🌍" },
            { number: "100+", label: "Students Taught", icon: "🎓" },
          ].map((stat, index) => (
            <div key={index} className="tech-card rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;