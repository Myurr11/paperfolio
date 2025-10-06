import { Code2, Database, Palette, Zap } from "lucide-react";
import { useState } from "react";

const techCategories = [
  {
    category: "Frontend",
    icon: Code2,
    techs: ["JavaScript (ES6+),", "React.js", "TypeScript", "Tailwind CSS"],
    color: "bg-[#ADD8FF]", // light blue like reference
  },
  {
    category: "Backend & Database",
    icon: Palette,
    techs: ["Firebase", "MySQL", "Node.js", "Authentication (JWT, OAuth)"],
    color: "bg-[#FFD3EB]", // light pink
  },
  {
    category: "Programming Languages",
    icon: Database,
    techs: ["Python", "Java", "C", "C#"],
    color: "bg-[#FFE45E]", // light yellow
  },
  {
    category: "Tools & Platforms",
    icon: Zap,
    techs: ["Git", "Github", "VS Code", "Figma", "Framer"],
    color: "bg-[#FFC9A1]", // coral
  },
];

const TechStack = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="tech-stack" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-6xl font-bold bg-paper-yellow px-6 py-2 inline-block rotate-slight">
            Tech Stack
          </h2>
        </div>

        <p className="text-xl text-gray-600 mb-20 max-w-2xl">
          Tools and technologies I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} relative border-4 border-black rounded-3xl p-8 pt-14 transition-all duration-300 hover:-translate-y-1 hover:shadow-[3px_3px_0_#000]`}
              style={{
                transform: 
                  hoveredCard === index ? 'scale(1.05) translateY(-8px)' :
                  hoveredCard === index - 1 ? 'translateX(8px) rotate(2deg)' :
                  hoveredCard === index + 1 ? 'translateX(-4px) translateY(-4px) rotate(-1deg)' :
                  `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating title tab */}
              <div className="absolute -top-5 left-8 flex items-center gap-3 bg-white border-4 border-black rounded-2xl px-5 py-2">
                <category.icon className="w-6 h-6" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-3 mt-2">
                {category.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-black rounded-full px-5 py-2.5 text-base font-medium transition-transform duration-300 hover:-translate-y-1 hover:shadow-[3px_3px_0_#000]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;