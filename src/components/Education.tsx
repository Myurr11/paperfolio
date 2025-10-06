import { GraduationCap, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="education" className="py-20 px-4 bg-muted/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`mb-16 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          {/* Beautiful Education Header - Left Aligned */}
          <div className="inline-block relative group">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold bg-paper-yellow border-3 border-foreground px-6 py-3 inline-block rotate-slight hover:rotate-0 transition-all duration-500 ease-out shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-y-1">
                Education
                {/* Decorative corner elements */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-foreground" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-foreground" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-foreground" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-foreground" />
              </h2>
              
              {/* Floating icons around the text */}
              <BookOpen className="absolute -top-3 -left-4 w-5 h-5 text-paper-pink animate-float hidden md:block" />
              <GraduationCap className="absolute -bottom-3 -right-4 w-5 h-5 text-paper-blue animate-float hidden md:block" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-paper-pink via-paper-yellow to-paper-blue rounded-full group-hover:w-32 transition-all duration-500" />
          </div>

          {/* Original SVG curve */}
          <svg 
            className="w-32 h-16 text-foreground mt-4"
            viewBox="0 0 120 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M10 30 Q40 10 70 30 T120 35" strokeLinecap="round" />
          </svg>
        </div>

        <div 
          className={`bg-background border-4 border-foreground rounded-3xl p-8 md:p-10 shadow-[6px_6px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_hsl(var(--foreground))] transition-all duration-500 ease-out hover:-translate-y-2 transform rotate-[-0.5deg] hover:rotate-0 ${isVisible ? "fade-in-up stagger-1" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating sparkle */}
          <Sparkles className={`absolute -top-3 -right-3 w-6 h-6 text-paper-yellow transition-all duration-500 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`} />
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className={`bg-paper-blue text-foreground w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-foreground transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-all duration-500 hover:text-paper-blue">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-lg md:text-xl font-medium text-foreground/80 transition-all duration-500 hover:text-foreground">
                  Bharati Vidyapeeth Deemed To Be University
                </p>
              </div>

              <div className="bg-paper-pink border-2 border-foreground rounded-xl px-4 py-2 inline-block transition-all duration-500 hover:scale-105 hover:shadow-sm">
                <p className="text-lg font-semibold">Graduated: 2025</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 transition-all duration-500 hover:translate-x-2">
                  <strong className="text-foreground min-w-[60px]">GPA:</strong>
                  <span className="text-foreground/90">8.3/10</span>
                </div>
                
                <div>
                  <strong className="text-foreground block mb-2 transition-all duration-500 hover:text-paper-pink">
                    Relevant Coursework:
                  </strong>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering", "Machine Learning"].map((course, index) => (
                      <span 
                        key={index}
                        className="bg-white border border-foreground rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-paper-yellow hover:-translate-y-0.5"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <strong className="text-foreground block mb-2 transition-all duration-500 hover:text-paper-blue">
                    Activities:
                  </strong>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white border border-foreground rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-paper-pink hover:-translate-y-0.5">
                      1st place in the Internal College Hackathon 2025
                    </span>
                    <span className="bg-white border border-foreground rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-paper-lightblue hover:-translate-y-0.5">
                      2nd place in the SIP (Summer Internship Project) Competition 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(3deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;