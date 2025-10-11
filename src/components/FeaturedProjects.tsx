import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink, Github, Sparkles, Eye } from "lucide-react";
import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/Project-1.png";
import project2 from "@/assets/Project-2.png";
import project3 from "@/assets/Project-3.png";

const projects = [
  {
    title: "College Complaint & Suggestion Portal",
    description: "A React + Firebase web app that lets students submit complaints or suggestions, with a sleek Tailwind UI and an admin dashboard for real-time management ⚡",
    image: project1,
    color: "bg-paper-coral",
    accentColor: "border-paper-coral",
    rotation: "rotate-[-1deg]",
    tech: ["React", "Tailwind CSS", "React Router", "React Swipable", "Firebase (Auth, Firestore)", "Chart.js"],
    liveLink: "https://bvdudms-complaintandsuggestionsportal.firebaseapp.com/",
    githubLink: "https://github.com/Myurr11/College-complaint-portal-w-firebase",
    features: ["Shopping Cart", "Payment Processing", "User Auth", "Admin Panel"]
  },
  {
    title: "F1 Telemetry",
    description: "An application to analyze Formula 1 telemetry data for better understanding of racing dynamics",
    image: project2,
    color: "bg-paper-yellow",
    accentColor: "border-paper-yellow",
    rotation: "rotate-[0.5deg]",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "FastF1"],
    liveLink: "https://f1-telemetry.onrender.com",
    githubLink: "https://github.com/Myurr11/F1-telemetry",
    features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Notifications"]
  },
  {
    title: "F1 Grand Prix Decoded",
    description: " a comprehensive React + TypeScript web application aimed at educating beginner Formula 1 fans through an interactive, data-rich platform.",
    image: project3,
    color: "bg-paper-pink",
    accentColor: "border-paper-pink",
    rotation: "rotate-[-0.8deg]",
    tech: ["React", "Firebase", "Vite", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    liveLink: "https://f1-guide-c0eed.web.app",
    githubLink: "https://github.com/Myurr11/grand-prix-decoded",
    features: ["Live Maps", "Forecast Charts", "Location Search", "Alerts"]
  },
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleLiveDemo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGithub = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div ref={ref} className={`mb-20 text-center ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="inline-block relative group">
            <h2 className="text-5xl md:text-5xl font-bold bg-paper-yellow border-2 border-foreground px-8 py-3 inline-block rotate-slight hover:rotate-0 transition-transform duration-500">
              My Projects
            </h2>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-paper-pink border-2 border-foreground rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-paper-blue border-2 border-foreground rounded-full animate-ping" />
            <Sparkles className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 text-paper-coral animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Bringing ideas to life with code and creativity
          </p>
        </div>

        {/* Interactive Projects Grid */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -left-20 top-1/4 w-40 h-40 bg-paper-yellow/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-paper-pink/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative group ${isVisible ? "fade-in-up stagger-1" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Main Project Card */}
                <div
                  className={`${project.color} border-4 border-foreground rounded-3xl p-6 transition-all duration-500 ease-out ${
                    hoveredProject === index
                      ? 'scale-105 shadow-[12px_12px_0px_hsl(var(--foreground))] -translate-y-2'
                      : 'hover:scale-102 hover:shadow-[8px_8px_0px_hsl(var(--foreground))]'
                  } ${project.rotation} hover:rotate-0`}
                >
                  {/* Project Image with Overlay */}
                  <div className="relative bg-card rounded-2xl overflow-hidden mb-6 aspect-video group/image">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500" />
                    
                    {/* Quick View Button */}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute inset-0 m-auto w-12 h-12 bg-white/90 border-2 border-foreground rounded-full opacity-0 group-hover/image:opacity-100 transition-all duration-500 hover:bg-white hover:scale-110 z-10"
                      onClick={() => handleLiveDemo(project.liveLink)}
                    >
                      <Eye className="w-5 h-5" />
                    </Button>

                    {/* Live Preview Badge */}
                    <div className="absolute top-4 left-4 bg-green-500 border-2 border-foreground rounded-full px-3 py-1 text-xs font-bold z-10">
                      LIVE
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold flex-1">{project.title}</h3>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="p-2 h-auto bg-white border border-foreground rounded-full hover:bg-paper-yellow hover:scale-110 transition-all duration-300"
                          onClick={() => handleGithub(project.githubLink)}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          className="p-2 h-auto bg-white border border-foreground rounded-full hover:bg-paper-blue hover:scale-110 transition-all duration-300"
                          onClick={() => handleLiveDemo(project.liveLink)}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-white border border-foreground rounded-full px-3 py-1 font-medium transition-all duration-300 hover:scale-105 hover:bg-paper-yellow"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        className="flex-1 bg-black border-2 border-foreground hover:bg-white hover:text-black transition-all duration-300 group/btn"
                        onClick={() => handleLiveDemo(project.liveLink)}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-2 border-foreground bg-white hover:bg-black hover:text-white transition-all duration-300 group/btn"
                        onClick={() => handleGithub(project.githubLink)}
                      >
                        <span>View Code</span>
                        <Github className="w-4 h-4 ml-2 transform group-hover/btn:scale-110 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-4 ${project.accentColor} opacity-0 transition-all duration-500 ${
                    hoveredProject === index ? 'opacity-100 scale-105' : 'scale-100'
                  } -z-10`} />

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-foreground rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-foreground rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }} />
                </div>

                {/* Connection Lines (Desktop only) */}
                {index < projects.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-foreground/30 transform -translate-y-1/2 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects with Animation */}
        <div className="text-center mt-16">
          <a href="https://github.com/Myurr11">
          <Button 
            size="lg"
            variant="outline"
            className="paper-border rounded-full font-medium px-8 hover:bg-muted group relative overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-paper-yellow to-paper-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="w-5 h-5 ml-2 relative z-10 transform group-hover:rotate-180 transition-transform duration-700" />
          </Button>
          </a>
          </div>
        </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
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

export default FeaturedProjects;