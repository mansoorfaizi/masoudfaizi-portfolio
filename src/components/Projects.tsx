import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FolderOpen } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Projects & Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work and contributions to the open-source community on GitHub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="section-card border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <FolderOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">GitHub Portfolio</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Browse through my collection of projects showcasing full-stack development, 
                data analysis, and various programming languages. Each repository demonstrates 
                different aspects of my technical expertise and problem-solving approach.
              </p>
              <Button 
                className="hero-button rounded-xl px-6 py-3 font-medium"
                asChild
              >
                <a 
                  href="https://github.com/masoudfaizi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="section-card border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Open Source Contributions</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Active contributor to the open-source ecosystem with projects spanning 
                web development, data processing, and educational resources. Committed to 
                sharing knowledge and collaborating with the global developer community.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  JavaScript & TypeScript Projects
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  Python & Data Analysis
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                  Web Applications & APIs
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="section-card border-0 rounded-2xl inline-block">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Github className="mr-2 h-5 w-5" />
                Connect on GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Interested in collaboration or have questions about my projects?
              </p>
              <Button 
                variant="outline" 
                className="rounded-xl border-2 hover:border-primary"
                asChild
              >
                <a 
                  href="https://github.com/masoudfaizi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Follow on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;