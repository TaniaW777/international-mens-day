import { Calendar, Share2, HeartHandshake } from "lucide-react";

const actions = [
  {
    icon: Calendar,
    title: "Organisez un événement",
    description: "Dans votre entreprise, école ou communauté",
  },
  {
    icon: Share2,
    title: "Partagez sur les réseaux",
    description: "Utilisez #JournéeInternationaleDeLHomme",
  },
  {
    icon: HeartHandshake,
    title: "Soutenez les associations",
    description: "Qui œuvrent pour le bien-être masculin",
  },
];

const CallToAction = () => {
  return (
    <section id="participer" className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Comment Participer ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Ensemble, faisons de cette journée un moment de sensibilisation et de changement positif
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 max-w-5xl mx-auto">
          {actions.map((action, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center group hover:shadow-card transform hover:-translate-y-2"
            >
              <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <action.icon className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">{action.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">{action.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-primary/30 shadow-glow">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
            Engagez-vous dès aujourd'hui
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Chaque geste compte. Que ce soit en prenant soin de votre santé, en soutenant un ami, 
            ou en sensibilisant votre entourage, vous pouvez faire la différence.
          </p>
          <button 
            onClick={() => {
              window.open('https://www.internationalmensday.com/', '_blank');
            }}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Rejoignez le mouvement
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;