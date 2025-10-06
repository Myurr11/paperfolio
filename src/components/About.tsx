import { Coffee, Music, BookOpen, Heart, Infinity, Sparkles, Zap } from "lucide-react";
import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import profileImage from "@/assets/about_section.jpg";

const funFacts = [
  {
    icon: Coffee,
    text: "Can't start without coffee",
    emoji: "☕",
    color: "bg-paper-yellow"
  },
  {
    icon: Music,
    text: "Always coding with music on",
    emoji: "🎵",
    color: "bg-paper-pink"
  },
  {
    icon: BookOpen,
    text: "Love reading tech blogs",
    emoji: "📚",
    color: "bg-paper-lightblue"
  },
];

const stats = [
  {
    value: "Fresh Grad",
    label: "Ready to Learn",
    icon: Zap,
    color: "from-paper-yellow to-paper-pink"
  },
  {
    value: "10+",
    label: "Projects Completed",
    icon: Sparkles,
    color: "from-paper-blue to-paper-lightblue"
  },
  {
    value: "5+",
    label: "Technologies Mastered",
    icon: BookOpen,
    color: "from-paper-pink to-paper-yellow"
  },
  {
    value: <Infinity className="w-10 h-10 mx-auto" />,
    label: "Coffee Cups",
    icon: Coffee,
    color: "from-paper-coral to-paper-pink"
  },
];

const About = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [activeFact, setActiveFact] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);
  const imageRef = useRef<HTMLImageElement>(null);

  // Rotate through fun facts
  useState(() => {
    const interval = setInterval(() => {
      setActiveFact((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section id="about" className="py-20 px-6 bg-muted/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <div ref={ref} className={`mb-16 text-center ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-bold bg-paper-yellow border-2 border-foreground px-8 py-3 inline-block rotate-slight hover:rotate-0 transition-transform duration-500">
              About Me
            </h2>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-paper-pink border-2 border-foreground rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-paper-blue border-2 border-foreground rounded-full animate-ping" />
          </div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Getting to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Profile Image with Creative Frame */}
          <div 
            className={`relative group ${isVisible ? "fade-in-up stagger-1" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative">
              {/* Animated background shapes */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-paper-pink border-4 border-foreground rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute -top-2 -left-2 w-full h-full bg-paper-yellow border-4 border-foreground rounded-3xl rotate-1 group-hover:rotate-3 transition-transform duration-500" />
              
              {/* Main image container */}
              <div className="relative bg-white border-4 border-foreground rounded-3xl p-4 transform group-hover:scale-105 transition-all duration-500">
                <img
                  ref={imageRef}
                  src={profileImage}
                  alt="Profile"
                  className={`w-full h-auto rounded-2xl object-cover transition-all duration-1000 ${
                    imageLoaded ? 'grayscale-0 scale-100' : 'grayscale scale-95'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Floating elements around image */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-paper-blue border-2 border-foreground rounded-full animate-float" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-paper-pink border-2 border-foreground rounded-full animate-float" style={{ animationDelay: '1s' }} />
                
                {/* Interactive hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-paper-yellow/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Skill badges floating around image */}
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-foreground rounded-full px-4 py-2 transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <span className="font-bold text-sm">💻 Code</span>
              </div>
              <div className="absolute -top-4 left-8 bg-white border-2 border-foreground rounded-full px-4 py-2 transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
                <span className="font-bold text-sm">🎨 Design</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            {/* Main About Card */}
            <div 
              className={`bg-card border-4 border-foreground rounded-3xl p-8 transition-all duration-500 ease-out hover:shadow-[8px_8px_0px_hsl(var(--foreground))] ${
                isVisible ? "fade-in-up stagger-2" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-lg bg-paper-blue border-2 border-foreground rounded-full px-4 py-1">
                  Currently Available
                </span>
              </div>
              
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Hey there! I'm a passionate creative professional who loves turning ideas into 
                beautiful, functional designs. As a recent Computer Science graduate, I've had the 
                pleasure of working with amazing technologies and bringing visions to life.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90">
                When I'm not coding, you'll find me exploring new technologies, 
                experimenting with different frameworks, or simply enjoying a good cup of coffee 
                while sketching out new ideas.
              </p>

              {/* Animated cursor following text */}
              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <div className="w-2 h-4 bg-foreground animate-blink" />
                <span>Always learning, always building</span>
              </div>
            </div>

            {/* Rotating Fun Facts */}
            <div 
              className={`bg-paper-coral border-4 border-foreground rounded-3xl p-6 transition-all duration-500 hover:shadow-[6px_6px_0px_hsl(var(--foreground))] ${
                isVisible ? "fade-in-up stagger-3" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 animate-pulse" />
                  <h3 className="text-xl font-bold">Fun Facts</h3>
                </div>
                <div className="flex gap-1">
                  {funFacts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFact(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeFact === index ? 'bg-foreground scale-125' : 'bg-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative h-20 overflow-hidden">
                {funFacts.map((fact, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center gap-4 p-4 bg-white/80 border border-foreground rounded-2xl transition-all duration-500 ${
                      activeFact === index
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className={`w-12 h-12 ${fact.color} border-2 border-foreground rounded-full flex items-center justify-center`}>
                      <span className="text-lg">{fact.emoji}</span>
                    </div>
                    <p className="font-medium flex-1">{fact.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className={`relative overflow-hidden border-4 border-foreground rounded-3xl p-6 text-center transition-all duration-500 ease-out ${
                isVisible ? "fade-in-up stagger-4" : "opacity-0"
              } ${
                hoveredStat === index 
                  ? 'scale-110 -translate-y-2 shadow-[8px_8px_0px_hsl(var(--foreground))]' 
                  : 'hover:scale-105 hover:-translate-y-1'
              }`}
              style={{ 
                animationDelay: `${0.4 + index * 0.1}s`,
                background: hoveredStat === index 
                  ? `linear-gradient(135deg, ${stat.color.replace('from-', '').replace('to-', '').replace(' ', ', ')})`
                  : 'bg-white'
              }}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 ${
                hoveredStat === index ? 'opacity-100' : 'opacity-10'
              }`} />
              
              <div className="relative z-10">
                <div className={`mb-3 transition-all duration-500 ${
                  hoveredStat === index ? 'scale-125 rotate-12' : 'scale-100'
                }`}>
                  <stat.icon className="w-8 h-8 mx-auto" />
                </div>
                
                <div className={`transition-all duration-500 ${
                  hoveredStat === index ? 'scale-110' : 'scale-100'
                }`}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                </div>
                
                <p className={`text-base font-semibold transition-all duration-300 ${
                  hoveredStat === index ? 'font-bold text-foreground scale-105' : 'text-foreground/80'
                }`}>
                  {stat.label}
                </p>
              </div>

              {/* Particle effect on hover */}
              <div className={`absolute inset-0 overflow-hidden rounded-3xl ${
                hoveredStat === index ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-500`}>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full animate-float"
                    style={{
                      left: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default About;