import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t-2 border-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 bg-paper-pink px-4 py-1 rounded-full border-2 border-foreground inline-block">
              Portfolio
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Myurr11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:shadow-[4px_4px_0px_hsl(var(--foreground))]"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mayur-joshi-92076b258/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:shadow-[4px_4px_0px_hsl(var(--foreground))]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/MayurJo02287540" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-background border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:shadow-[4px_4px_0px_hsl(var(--foreground))]"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:joshimayur1110@gmail.com"
              className="w-12 h-12 bg-background border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:shadow-[4px_4px_0px_hsl(var(--foreground))]"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;