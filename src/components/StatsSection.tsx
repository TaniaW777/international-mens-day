const stats = [
  {
    number: "75%",
    label: "des suicides concernent des hommes",
    highlight: true,
  },
  {
    number: "60+",
    label: "pays célèbrent cette journée",
    highlight: false,
  },
  {
    number: "5x",
    label: "moins de chances de consulter un médecin",
    highlight: true,
  },
  {
    number: "1999",
    label: "année de création de la journée",
    highlight: false,
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Quelques Chiffres
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Des statistiques qui soulignent l'importance de cette journée
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl ${
                stat.highlight 
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30' 
                  : 'bg-card border border-border'
              } hover:shadow-card transition-all duration-300 transform hover:scale-105`}
            >
              <div className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 ${stat.highlight ? 'text-primary' : 'text-accent'}`}>
                {stat.number}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;