import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-subtle border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 Masoud Faizi. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:ms.cs180@gmail.com"
              className="p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary transition-all duration-200 hover:bg-primary/10 group"
            >
              <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="http://linkedin.com/in/masoud-faizi-b16611135" 
              className="p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary transition-all duration-200 hover:bg-primary/10 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/masoudfaizi" 
              className="p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary transition-all duration-200 hover:bg-primary/10 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;