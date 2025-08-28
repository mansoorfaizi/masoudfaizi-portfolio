import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FolderOpen, Star, GitFork, Code2 } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with modern technologies, featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      category: "Web Application",
      status: "Production Ready",
      stars: 45,
      forks: 12
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for analyzing large datasets with real-time visualizations and advanced filtering capabilities.",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
      category: "Data Science",
      status: "In Development",
      stars: 28,
      forks: 8
    },
    {
      title: "Telecom Network Monitor",
      description: "Network monitoring system for telecommunications infrastructure with real-time alerts and performance metrics.",
      technologies: ["Go", "React", "InfluxDB", "Docker"],
      category: "Infrastructure",
      status: "Enterprise",
      stars: 67,
      forks: 23
    },
    {
      title: "Educational Platform",
      description: "Online learning management system with interactive courses, progress tracking, and collaborative features.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      category: "Education",
      status: "Active",
      stars: 156,
      forks: 42
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production Ready": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "In Development": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Enterprise": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Active": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work and contributions to the open-source community. 
            Each project demonstrates different aspects of my technical expertise and problem-solving approach.
          </p>
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="tech-card border-0 rounded-2xl group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FolderOpen className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className={`rounded-full px-3 py-1 text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-accent font-medium mb-2">{project.category}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs px-2 py-1 bg-surface-accent border border-border hover:border-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-lg border-border hover:border-primary hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="tech-button rounded-lg"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* GitHub CTA Section */}
        <div className="text-center">
          <Card className="tech-card border-0 rounded-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl">
                  <Github className="h-12 w-12 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Explore More on GitHub
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                    Discover my complete portfolio of projects, contributions to open-source initiatives, 
                    and collaborative work with the global developer community. From web applications 
                    to data science projects, explore the full spectrum of my technical capabilities.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="tech-button rounded-xl px-8 py-4 text-base font-medium"
                    asChild
                  >
                    <a 
                      href="https://github.com/masoudfaizi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Visit GitHub Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="rounded-xl px-8 py-4 text-base font-medium border-2 border-border hover:border-primary hover:bg-primary/10"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Collaborate With Me
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  {[
                    { label: "Public Repos", value: "25+" },
                    { label: "Total Stars", value: "200+" },
                    { label: "Languages", value: "8+" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;