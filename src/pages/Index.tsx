import HeroSection from "@/components/HeroSection";
import ThemesSection from "@/components/ThemesSection";
import StatsSection from "@/components/StatsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ThemesSection />
      <StatsSection />
      <CallToAction />
      
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Journée Internationale de l'Homme - 19 Novembre 2025
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Ensemble pour un monde plus équilibré et solidaire
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;