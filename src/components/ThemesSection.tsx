import { Heart, Users, Trophy, Shield } from "lucide-react";

const themes = [
  {
    icon: Heart,
    title: "Santé Mentale",
    description: "Briser le silence sur les problèmes de santé mentale masculine et encourager l'expression émotionnelle",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Relations Positives",
    description: "Promouvoir des relations saines, le respect mutuel et l'égalité entre les genres",
    color: "text-accent",
  },
  {
    icon: Trophy,
    title: "Modèles Positifs",
    description: "Célébrer les hommes qui font une différence positive dans leur communauté",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Bien-être Global",
    description: "Encourager la prévention et le suivi régulier de la santé physique",
    color: "text-accent",
  },
];

const ThemesSection = () => {
  return (
    <section id="themes" className="py-12 sm:py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Thèmes Clés
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Des enjeux importants qui nécessitent notre attention et notre action collective
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-${theme.color.split('-')[1]}/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <theme.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${theme.color}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{theme.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;