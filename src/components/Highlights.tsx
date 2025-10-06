import { Target, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Quick Learner",
    description: "Fast at picking up new technologies and adapting to changing requirements",
    color: "bg-paper-pink",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Great at collaborating with others and contributing to team success",
    color: "bg-paper-yellow",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Passionate about finding creative solutions to complex challenges",
    color: "bg-paper-lightblue",
  },
];

const Highlights = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold bg-paper-coral px-6 py-2 inline-block rotate-slight">
            Why Work With Me?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`${highlight.color} paper-border-thick rounded-3xl p-8 hover-lift ${
                index === 1 ? "rotate-slight-reverse" : index === 2 ? "rotate-slight" : ""
              }`}
            >
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <highlight.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{highlight.title}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
