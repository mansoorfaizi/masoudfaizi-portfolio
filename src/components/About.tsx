import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging technology to solve complex problems and educate the next generation of developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="section-card border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Professional Background</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A dedicated Computer Science professional with a diverse background spanning software development, 
                telecommunications engineering, university teaching, and content moderation. I bring a unique 
                perspective that combines technical expertise with strong communication and analytical skills, 
                developed through international experience in Afghanistan and Germany.
              </p>
            </CardContent>
          </Card>
          
          <Card className="section-card border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Master of Science in Computer Science</h4>
                  <p className="text-muted-foreground">Technische Universität Berlin (TU Berlin)</p>
                  <p className="text-sm text-muted-foreground">Berlin, Germany</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Bachelor of Science in Computer Science</h4>
                  <p className="text-muted-foreground">Herat University</p>
                  <p className="text-sm text-muted-foreground">Herat, Afghanistan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;