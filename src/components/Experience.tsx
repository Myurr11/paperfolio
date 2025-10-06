import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
  period: "11/2024 - 01/2025",
  title: "Full Stack Developer Intern & Team Lead at Bharati Vidyapeeth (In-house Internship)",
  location: "Kharghar, Navi Mumbai",
  description: "Led a team to develop the College Complaint Portal, a cross-platform web app that streamlined grievance submission and resolution. The portal featured student and admin dashboards for real-time tracking and efficient complaint management, improving transparency, accountability, and administrative efficiency.",
  link: "https://github.com/your-repo-link",
  color: "bg-paper-pink",
  accentColor: "border-paper-pink",
},
];

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    if (isVisible) {
      // Stagger the card animations
      experiences.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`mb-16 relative ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-paper-yellow border-2 border-foreground px-6 py-2 rotate-slight inline-block hover:rotate-0 transition-transform duration-500">
              My Experience
            </h2>
            <ArrowDown 
              className="absolute -bottom-8 left-60 w-12 h-10 rotate-[100deg] animate-bounce-slow" 
              strokeWidth={3} 
            />
          </div>
        </div>

        <div className="space-y-8 relative">
          {/* Animated connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-paper-lightblue via-paper-yellow to-paper-pink hidden lg:block animate-pulse-slow" />
          
          {/* Decorative stars with floating animation */}
          <Sparkles className="absolute -left-12 top-12 w-10 h-10 text-paper-pink fill-paper-pink animate-float hidden lg:block" />
          <Sparkles className="absolute -right-12 top-64 w-8 h-8 text-paper-lightblue fill-paper-lightblue animate-float hidden lg:block" style={{ animationDelay: '1s' }} />
          <Sparkles className="absolute -left-8 bottom-32 w-6 h-6 text-paper-yellow fill-paper-yellow animate-float hidden lg:block" style={{ animationDelay: '2s' }} />

          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`${exp.color} border-4 border-foreground rounded-3xl p-8 relative overflow-hidden transition-all duration-700 ease-out ${
                visibleCards[index] 
                  ? 'opacity-100 translate-x-0 rotate-0' 
                  : 'opacity-0 translate-x-10 -rotate-2'
              } ${
                hoveredCard === index
                  ? 'scale-105 shadow-[12px_12px_0px_hsl(var(--foreground))] z-10'
                  : 'hover:scale-102 hover:shadow-[8px_8px_0px_hsl(var(--foreground))]'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                marginLeft: index % 2 === 0 ? '0' : '2rem',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Timeline dot */}
              <div className={`absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 border-4 border-foreground rounded-full bg-white z-20 hidden lg:flex items-center justify-center ${
                hoveredCard === index ? 'scale-125 bg-paper-yellow' : ''
              } transition-all duration-300`}>
                <div className={`w-2 h-2 rounded-full bg-foreground ${
                  hoveredCard === index ? 'scale-150' : ''
                } transition-transform duration-300`} />
              </div>

              {/* Hover accent border */}
              <div className={`absolute inset-0 rounded-3xl border-4 ${exp.accentColor} opacity-0 transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-105' : 'scale-100'
              }`} />

              {/* Floating decorative circle */}
              <div className={`absolute top-6 right-6 w-10 h-10 border-4 border-foreground rounded-full transition-all duration-1000 ${
                hoveredCard === index 
                  ? 'animate-spin-slow scale-125 bg-white/50' 
                  : 'animate-pulse-slow'
              }`} />

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className={`absolute top-4 left-4 w-20 h-20 border-2 border-foreground rounded-full animate-ping-slow ${
                  hoveredCard === index ? 'opacity-30' : 'opacity-10'
                }`} />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Period badge with entrance animation */}
                <div className={`inline-block bg-white border-2 border-foreground rounded-full px-4 py-1 font-bold text-lg transition-all duration-500 ${
                  visibleCards[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}>
                  {exp.period}
                </div>

                {/* Title with underline animation */}
                <h3 className="text-2xl font-bold pb-2 relative">
                  {exp.title}
                  <div className={`absolute bottom-0 left-0 h-1 bg-foreground transition-all duration-1000 ${
                    hoveredCard === index ? 'w-full' : 'w-0'
                  }`} />
                </h3>

                {/* Description with staggered text reveal */}
                <p className="text-foreground/80 leading-relaxed transition-all duration-500">
                  {exp.description}
                </p>

                {/* Hover indicator */}
                <div className={`flex items-center gap-2 text-sm font-medium text-foreground/60 transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}>
                  <span>✨ Hover to focus</span>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ${
                hoveredCard === index 
                  ? 'translate-x-full opacity-100' 
                  : 'translate-x-full opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes typing {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 100%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-out infinite;
        }
        .typing-animation {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: typing 3s steps(40, end) infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;