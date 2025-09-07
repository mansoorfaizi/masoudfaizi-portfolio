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
        { name: "HTML5", proficiency: "Expert", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
        { name: "CSS3", proficiency: "Advanced", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "JavaScript", proficiency: "Advanced", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "React", proficiency: "Advanced", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
        { name: "TypeScript", proficiency: "Intermediate", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" }
      ],
      description: "Creating responsive, interactive user interfaces with modern web technologies."
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: [
        { name: "PHP/Laravel", proficiency: "Expert", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
        { name: "Node.js", proficiency: "Advanced", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { name: "Python", proficiency: "Advanced", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Golang", proficiency: "Intermediate", color: "bg-cyan-600/20 text-cyan-400 border-cyan-600/30" },
        { name: "Express.js", proficiency: "Advanced", color: "bg-gray-600/20 text-gray-400 border-gray-600/30" }
      ],
      description: "Building scalable server-side applications and robust API architectures."
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", proficiency: "Expert", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
        { name: "PostgreSQL", proficiency: "Advanced", color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
        { name: "MongoDB", proficiency: "Advanced", color: "bg-green-600/20 text-green-400 border-green-600/30" },
        { name: "Redis", proficiency: "Intermediate", color: "bg-red-500/20 text-red-400 border-red-500/30" }
      ],
      description: "Designing efficient database schemas and optimizing query performance."
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: [
        { name: "Git", proficiency: "Expert", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
        { name: "Docker", proficiency: "Advanced", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Linux", proficiency: "Advanced", color: "bg-gray-700/20 text-gray-400 border-gray-700/30" },
        { name: "AWS", proficiency: "Intermediate", color: "bg-yellow-600/20 text-yellow-400 border-yellow-600/30" }
      ],
      description: "Streamlining development workflows and deployment processes."
    },
    {
      title: "Big Data & Analytics",
      icon: BarChart3,
      skills: [
        { name: "Hadoop", proficiency: "Intermediate", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
        { name: "Apache Hive", proficiency: "Intermediate", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
        { name: "PySpark", proficiency: "Intermediate", color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
        { name: "Data Analysis", proficiency: "Advanced", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" }
      ],
      description: "Processing large datasets and extracting meaningful insights."
    },
    {
      title: "Specialized Skills",
      icon: Star,
      skills: [
        { name: "Teaching", proficiency: "Expert", color: "bg-green-500/20 text-green-400 border-green-500/30" },
        { name: "Telecommunications", proficiency: "Advanced", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
        { name: "Content Moderation", proficiency: "Expert", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
        { name: "Project Management", proficiency: "Advanced", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" }
      ],
      description: "Unique expertise combining technical and soft skills for comprehensive solutions."
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle relative">
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className={`px-3 py-1 text-xs font-medium border ${skill.color} transition-all duration-200 hover:scale-105`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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