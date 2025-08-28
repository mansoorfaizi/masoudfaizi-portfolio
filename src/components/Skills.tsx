import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Server, 
  Wrench, 
  BarChart3,
  Globe,
  Zap,
  Star
} from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" },
        { name: "React", level: 85, color: "bg-cyan-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" }
      ],
      description: "Creating responsive, interactive user interfaces with modern web technologies."
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: [
        { name: "PHP/Laravel", level: 90, color: "bg-indigo-500" },
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Python", level: 80, color: "bg-blue-500" },
        { name: "Golang", level: 75, color: "bg-cyan-600" },
        { name: "Express.js", level: 80, color: "bg-gray-600" }
      ],
      description: "Building scalable server-side applications and robust API architectures."
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 90, color: "bg-orange-500" },
        { name: "PostgreSQL", level: 85, color: "bg-blue-600" },
        { name: "MongoDB", level: 80, color: "bg-green-600" },
        { name: "Redis", level: 70, color: "bg-red-500" }
      ],
      description: "Designing efficient database schemas and optimizing query performance."
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: [
        { name: "Git", level: 95, color: "bg-orange-600" },
        { name: "Docker", level: 80, color: "bg-blue-500" },
        { name: "Linux", level: 85, color: "bg-gray-700" },
        { name: "AWS", level: 75, color: "bg-yellow-600" }
      ],
      description: "Streamlining development workflows and deployment processes."
    },
    {
      title: "Big Data & Analytics",
      icon: BarChart3,
      skills: [
        { name: "Hadoop", level: 75, color: "bg-yellow-500" },
        { name: "Apache Hive", level: 70, color: "bg-orange-500" },
        { name: "PySpark", level: 75, color: "bg-orange-600" },
        { name: "Data Analysis", level: 80, color: "bg-purple-500" }
      ],
      description: "Processing large datasets and extracting meaningful insights."
    },
    {
      title: "Specialized Skills",
      icon: Star,
      skills: [
        { name: "Teaching", level: 95, color: "bg-green-500" },
        { name: "Telecommunications", level: 85, color: "bg-blue-500" },
        { name: "Content Moderation", level: 90, color: "bg-purple-500" },
        { name: "Project Management", level: 80, color: "bg-indigo-500" }
      ],
      description: "Unique expertise combining technical and soft skills for comprehensive solutions."
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle relative">
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive mastery across the full technology stack, from frontend interfaces 
            to backend systems, data analytics, and specialized domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`skill-card border-0 rounded-2xl transition-all duration-300 ${
                selectedCategory === category.title ? 'scale-105 tech-glow' : ''
              }`}
              onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface-accent rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: selectedCategory === category.title || selectedCategory === null 
                            ? `${skill.level}%` 
                            : '0%' 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Interactive hint */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            💡 Click on any skill category to see detailed proficiency levels
          </p>
        </div>
        
        {/* Additional expertise */}
        <div className="mt-16 text-center">
          <Card className="tech-card border-0 rounded-2xl inline-block max-w-4xl">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl mb-4 text-foreground">Cross-Functional Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "International Collaboration",
                  "Technical Writing",
                  "Problem Solving",
                  "Agile Methodologies"
                ].map((skill, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;