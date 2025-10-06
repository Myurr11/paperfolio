import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, Download, Eye } from "lucide-react";
import heroImage from "@/assets/main_image.png";
import { SparkleIcon } from "@/components/SparkleIcon";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="min-h-screen bg-muted/20 pt-40 pb-16 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Balanced Size */}
          <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-lg bg-paper-lightgreen border-2 border-foreground rounded-full px-4 py-1">
                  Currently Available
                </span>
              </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-paper-yellow px-3 inline-block rotate-slight hover:rotate-0 transition-transform duration-500">
                  Mayur
                </span>
              </h1>
              
              <div className="pl-2 border-l-3 border-paper-pink">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A recent Computer Applications graduate passionate about creating beautiful 
                  web applications and solving real-world problems through code :)
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button 
  size="lg"
  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium px-8 py-5 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
  onClick={() => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume in public folder
    link.download = 'Mayur_Joshi_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
  Download Resume
</Button>
              <Button 
  size="lg"
  variant="outline"
  className="paper-border rounded-full font-medium px-8 py-5 hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-lg group"
  onClick={() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  <Eye className="w-4 h-4 mr-2 group-hover:animate-pulse" />
  View Projects
</Button>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground pt-4">
              <div className="flex items-center gap-2 bg-white paper-border rounded-full px-3 py-1">
                <MapPin className="w-4 h-4 text-paper-pink" />
                <span className="text-sm font-medium">Mumbai, India</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Right Image Section - Bigger */}
          <div className="relative scale-100">
            {/* Animated Background Elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-paper-yellow/30 rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-paper-pink/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
            
            {/* Floating Sparkles */}
            <div className="absolute -top-2 -right-2 text-accent animate-float">
              <SparkleIcon className="w-14 h-14" />
            </div>
            <div className="absolute -bottom-4 -left-4 text-paper-blue animate-float" style={{ animationDelay: '1.5s' }}>
              <SparkleIcon className="w-10 h-10" />
            </div>
            <div className="absolute top-1/3 -right-6 text-paper-pink animate-bounce-slow" style={{ animationDelay: '0.8s' }}>
              <SparkleIcon className="w-8 h-8" />
            </div>
            
            {/* Main Image Container */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Layered Backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-br from-paper-pink to-paper-blue rounded-4xl transform rotate-3 transition-transform duration-700 group-hover:rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-paper-yellow to-paper-lightblue rounded-4xl transform -rotate-2 transition-transform duration-700 group-hover:-rotate-4" />
              
              {/* Main Image Frame */}
              <div 
                className="relative bg-background border-4 border-foreground rounded-4xl overflow-hidden transition-all duration-700 ease-out p-3"
                style={{
                  transform: isHovered ? 'rotate(1deg) scale(1.02)' : 'rotate(0deg) scale(1)',
                  boxShadow: isHovered 
                    ? '16px 16px 0px hsl(var(--foreground))' 
                    : '6px 6px 0px hsl(var(--foreground))',
                }}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={heroImage}
                    alt="Portfolio Hero"
                    className={`w-full h-auto object-cover transition-all duration-1000 ease-out ${
                      imageLoaded 
                        ? 'grayscale-0 scale-100' 
                        : 'grayscale scale-95'
                    } ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 transition-all duration-500 ${
                    isHovered ? 'opacity-100' : ''
                  }`} />
                  
                  {/* Interactive Elements */}
                  <div className={`absolute bottom-4 left-4 bg-white/90 paper-border rounded-full px-3 py-1 transform transition-all duration-500 ${
                    isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <span className="font-semibold text-xs">✨ Creative Workspace</span>
                  </div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-foreground transition-all duration-500 group-hover:scale-125" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-foreground transition-all duration-500 group-hover:scale-125" />
              </div>
              
              {/* Floating Tech Badges */}
              <div className="absolute -top-2 left-6 bg-white paper-border rounded-full px-3 py-1 transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110 z-10">
                <span className="font-bold text-xs">React</span>
              </div>
              <div className="absolute -bottom-2 right-8 bg-white paper-border rounded-full px-3 py-1 transform rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110 z-10">
                <span className="font-bold text-xs">TypeScript</span>
              </div>
              <div className="absolute top-1/2 -right-2 bg-white paper-border rounded-full px-3 py-1 transform -rotate-12 transition-all duration-500 hover:rotate-0 hover:scale-110 z-10">
                <span className="font-bold text-xs">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;