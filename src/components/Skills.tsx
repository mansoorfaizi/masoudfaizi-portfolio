import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Server, 
  Wrench, 
  BarChart3,
  Globe 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      color: "text-blue-600"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["PHP/Laravel", "Node.js/Express", "Python", "Golang"],
      color: "text-green-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "text-purple-600"
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git", "Docker", "Linux", "AWS"],
      color: "text-orange-600"
    },
    {
      title: "Big Data & Analytics",
      icon: BarChart3,
      skills: ["Hadoop", "Hive", "PySpark", "Data Analysis"],
      color: "text-red-600"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "PHP", "Go", "Java"],
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from frontend interfaces to backend systems and big data analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="section-card border-0 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="rounded-full px-3 py-1 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="section-card border-0 rounded-2xl inline-block">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Additional Expertise</h3>
              <p className="text-muted-foreground">
                Telecommunications Engineering • Academic Teaching • Content Moderation • 
                Cross-Cultural Communication • Project Management
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;