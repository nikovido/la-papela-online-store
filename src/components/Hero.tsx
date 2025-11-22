import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-papeleria.jpg";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491112345678?text=Hola! Me interesa conocer sus productos de papelería", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Productos de papelería" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Tu papelera <span className="text-primary">24/7</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Proveemos a negocios gastronómicos y cafeterías con papelería de calidad para packaging. 
            Soluciones profesionales para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribinos por WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Productos
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">+500</div>
              <div className="text-sm text-muted-foreground">Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Disponible</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">CABA</div>
              <div className="text-sm text-muted-foreground">Entrega</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
