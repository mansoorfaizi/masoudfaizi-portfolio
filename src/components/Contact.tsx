import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send,
  MessageSquare,
  Calendar,
  Globe
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Primary Email",
      value: "ms.cs180@gmail.com",
      href: "mailto:ms.cs180@gmail.com",
      description: "For professional inquiries and collaborations",
      color: "text-blue-400"
    },
    {
      icon: Mail,
      label: "Alternative Email", 
      value: "masoud.faizi1995@gmail.com",
      href: "mailto:masoud.faizi1995@gmail.com",
      description: "Secondary contact method",
      color: "text-cyan-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "Connect on LinkedIn",
      href: "http://linkedin.com/in/masoud-faizi-b16611135",
      description: "Professional networking and career updates",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "View Code & Projects",
      href: "https://github.com/masoudfaizi",
      description: "Code repositories and open-source contributions",
      color: "text-purple-400"
    }
  ];

  const availabilities = [
    {
      type: "Full-time Opportunities",
      description: "Open to software development and engineering roles",
      status: "Available",
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      type: "Consulting & Freelance",
      description: "Project-based work and technical consulting",
      status: "Available",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      type: "Teaching & Training",
      description: "Corporate training and educational workshops",
      status: "Available",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle relative">
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative tech projects? Let's discuss how my expertise 
            in software development, teaching, and international collaboration can drive your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((contact, index) => (
                <Card key={index} className="tech-card border-0 rounded-2xl group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <contact.icon className={`h-6 w-6 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {contact.label}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3">
                          {contact.description}
                        </p>
                        <a 
                          href={contact.href}
                          className="text-primary hover:text-accent transition-colors font-medium text-sm break-all"
                          target={contact.href.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Location & Quick Actions */}
          <div className="space-y-6">
            <Card className="tech-card border-0 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-primary/10 rounded-2xl inline-block mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">Berlin, Germany</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>Central European Time (CET/CEST)</span>
                  </div>
                  <p className="mt-4">
                    Available for remote work globally and local collaboration in the Berlin tech ecosystem
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="tech-card border-0 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-accent/10 rounded-2xl inline-block mb-6">
                  <Send className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-foreground">Quick Contact</h3>
                <div className="space-y-3">
                  <Button 
                    className="tech-button rounded-xl w-full font-medium"
                    asChild
                  >
                    <a href="mailto:ms.cs180@gmail.com" className="flex items-center justify-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="rounded-xl w-full border-2 border-border hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a 
                      href="http://linkedin.com/in/masoud-faizi-b16611135" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Availability Status */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Current Availability
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availabilities.map((availability, index) => (
              <Card key={index} className="tech-card border-0 rounded-2xl text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${availability.color}`}>
                      {availability.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{availability.type}</h4>
                  <p className="text-sm text-muted-foreground">{availability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <Card className="tech-card border-0 rounded-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl mb-4 text-foreground">Ready to Start a Conversation?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking for a dedicated software developer, need technical consultation, 
                or want to explore collaborative opportunities, I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="tech-button rounded-xl px-8 py-4 font-medium"
                  asChild
                >
                  <a href="mailto:ms.cs180@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Start a Project
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-xl px-8 py-4 font-medium border-2 border-border hover:border-primary hover:bg-primary/10"
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More About Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;