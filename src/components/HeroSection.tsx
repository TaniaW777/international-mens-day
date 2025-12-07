import heroImage from "@/assets/mens-day-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Journée Internationale de l'Homme" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm">
            <p className="text-primary font-semibold text-xs sm:text-sm tracking-wider">19 NOVEMBRE 2025</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-float leading-tight">
            Journée Internationale<br />de l'Homme
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
            Célébrons les contributions positives des hommes à la société et promouvons leur bien-être physique, mental et social
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              En savoir plus
            </button>
            <button 
              onClick={() => document.getElementById('participer')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground border border-primary/30 rounded-lg font-semibold text-base sm:text-lg hover:bg-secondary/80 transition-all duration-300"
            >
              Participer
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;