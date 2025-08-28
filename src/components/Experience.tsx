import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Social Media Content Moderator",
      company: "Majorel Berlin GmbH",
      location: "Berlin, Germany",
      period: "Current",
      description: "Advanced content moderation and quality assurance for major social media platforms, ensuring community standards and implementing user safety protocols using cutting-edge AI-assisted tools.",
      type: "Content Moderation",
      technologies: ["AI Tools", "Quality Assurance", "Data Analysis"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Computer Science Lecturer",
      company: "Herat University",
      location: "Herat, Afghanistan",
      period: "Academic Role",
      description: "Delivered comprehensive computer science curriculum, mentoring students in programming fundamentals, software development methodologies, and advanced CS concepts. Led practical workshops and research projects.",
      type: "Education",
      technologies: ["Teaching", "Curriculum Design", "Research"],
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "VAS/NSS Engineer",
      company: "Telecommunications Industry",
      location: "Afghanistan",
      period: "Engineering Role",
      description: "Specialized in Value Added Services and Network Switching Subsystem engineering, optimizing telecom infrastructure, implementing network solutions, and ensuring system reliability.",
      type: "Telecommunications",
      technologies: ["Network Engineering", "VAS", "System Design"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Software Developer",
      company: "Herat Host IT Services Company",
      location: "Herat, Afghanistan",
      period: "Development Role",
      description: "Created and tested web applications, developed and designed databases and Management Information Systems (MIS). Specialized in troubleshooting application problems and maintaining/updating applications.",
      type: "Software Development",
      technologies: ["Web Development", "Database Design", "MIS", "Application Testing", "Maintenance"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse career journey spanning software development, telecommunications, 
            education, and content moderation across international markets.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="tech-card border-0 rounded-2xl">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <Badge className={`rounded-full px-3 py-1 text-xs font-medium border ${exp.color}`}>
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-center text-primary font-medium">
                              <Building className="h-4 w-4 mr-2" />
                              {exp.company}
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {exp.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="text-xs px-2 py-1 bg-surface-accent border border-border hover:border-primary transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;