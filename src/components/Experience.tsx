import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Social Media Content Moderator",
      company: "Majorel Berlin GmbH",
      location: "Berlin, Germany",
      period: "Recent",
      description: "Content moderation and quality assurance for social media platforms, ensuring community standards and user safety.",
      type: "Content Moderation"
    },
    {
      title: "Lecturer",
      company: "Herat University",
      location: "Herat, Afghanistan",
      period: "Academic Role",
      description: "Teaching computer science courses and mentoring students in programming, software development, and computer science fundamentals.",
      type: "Education"
    },
    {
      title: "VAS/NSS Engineer",
      company: "Telecommunications Industry",
      location: "Afghanistan",
      period: "Engineering Role",
      description: "Value Added Services and Network Switching Subsystem engineering, working on telecom infrastructure and services.",
      type: "Telecommunications"
    },
    {
      title: "Software Developer",
      company: "Various Projects",
      location: "International",
      period: "Development Role",
      description: "Full-stack software development using modern technologies, building web applications and software solutions.",
      type: "Software Development"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Software Development": return "default";
      case "Telecommunications": return "secondary";
      case "Education": return "outline";
      case "Content Moderation": return "secondary";
      default: return "outline";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse career spanning software development, telecommunications, education, and content moderation across international markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="section-card border-0 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant={getBadgeVariant(exp.type)} className="rounded-full">
                    {exp.type}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period} • {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;