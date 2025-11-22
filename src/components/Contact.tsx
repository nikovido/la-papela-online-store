import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te enviaremos nuestras mejores ofertas por email.",
      });
      setEmail("");
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491112345678?text=Hola! Me interesa obtener más información", "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contactanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escribinos y te ofrecemos las mejores ofertas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Información de Contacto</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a href="mailto:info@lapapelaonline.com" className="text-muted-foreground hover:text-primary">
                    info@lapapelaonline.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Teléfono</div>
                  <a href="tel:+5491112345678" className="text-muted-foreground hover:text-primary">
                    +54 9 11 1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Zona de Entrega</div>
                  <div className="text-muted-foreground">Capital Federal, CABA</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-foreground">Redes Sociales</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" onClick={handleWhatsAppClick}>
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <Button variant="cta" size="lg" className="w-full" onClick={handleWhatsAppClick}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribinos por WhatsApp
            </Button>
          </div>

          {/* Newsletter */}
          <div>
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Suscribite a Nuestro Newsletter
                </h3>
                <p className="text-muted-foreground mb-6">
                  Recibí ofertas exclusivas, novedades y promociones especiales directamente en tu email.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                  <Button type="submit" variant="hero" className="w-full">
                    Suscribirme
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4">
                  Al suscribirte, aceptás recibir emails con nuestras promociones. 
                  Podés desuscribirte en cualquier momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
