import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Navigation = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-background border-2 border-foreground rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
          <div className="text-lg font-bold bg-paper-pink px-4 py-1 rounded-full border-2 border-foreground">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a 
              href="#education" 
              onClick={(e) => handleSmoothScroll(e, 'education')}
              className="font-display hover:text-accent transition-colors hover:scale-110 inline-block"
            >
              Education
            </a>
            <a 
              href="#tech-stack" 
              onClick={(e) => handleSmoothScroll(e, 'tech-stack')}
              className="font-display hover:text-accent transition-colors hover:scale-110 inline-block"
            >
              Tech Stack
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="font-display hover:text-accent transition-colors hover:scale-110 inline-block"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleSmoothScroll(e, 'experience')}
              className="font-display hover:text-accent transition-colors hover:scale-110 inline-block"
            >
              Experience
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="font-display hover:text-accent transition-colors hover:scale-110 inline-block"
            >
              About Me
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://github.com/Myurr11" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-full transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mayur-joshi-92076b258/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-muted rounded-full transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a href="#Contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="p-2 hover:bg-muted rounded-full transition-colors">
            <Button size="sm">
              Hire Me!
            </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;