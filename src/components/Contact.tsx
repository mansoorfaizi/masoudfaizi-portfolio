import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Primary Email",
      value: "ms.cs180@gmail.com",
      href: "mailto:ms.cs180@gmail.com",
      description: "For professional inquiries"
    },
    {
      icon: Mail,
      label: "Alternative Email", 
      value: "masoud.faizi1995@gmail.com",
      href: "mailto:masoud.faizi1995@gmail.com",
      description: "Alternative contact"
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "masoud-faizi",
      href: "http://linkedin.com/in/masoud-faizi-b16611135",
      description: "Professional networking"
    },
    {
      icon: Github,
      label: "GitHub Profile",
      value: "masoudfaizi",
      href: "https://github.com/masoudfaizi",
      description: "Code repositories & projects"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how my expertise in software development, 
            teaching, and telecommunications can contribute to your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="section-card border-0 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {contact.label}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {contact.description}
                        </p>
                        <a 
                          href={contact.href}
                          className="text-primary hover:text-accent transition-colors font-medium"
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
            <Card className="section-card border-0 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-primary/10 rounded-2xl inline-block mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Based in Berlin</h3>
                <p className="text-muted-foreground mb-4">
                  Berlin, Germany
                </p>
                <p className="text-sm text-muted-foreground">
                  Available for remote work and local collaboration
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card border-0 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-primary/10 rounded-2xl inline-block mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-4">Let's Connect</h3>
                <div className="space-y-3">
                  <Button 
                    className="hero-button rounded-xl w-full font-medium"
                    asChild
                  >
                    <a href="mailto:ms.cs180@gmail.com" className="flex items-center justify-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="rounded-xl w-full border-2 hover:border-primary"
                    asChild
                  >
                    <a 
                      href="http://linkedin.com/in/masoud-faizi-b16611135" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <Card className="section-card border-0 rounded-2xl inline-block">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Open to Opportunities</h3>
              <p className="text-muted-foreground">
                Software Development • Teaching & Training • Consulting • Telecommunications Projects
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;