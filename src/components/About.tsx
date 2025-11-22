import { Package, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const features = [
    {
      icon: Package,
      title: "Calidad Garantizada",
      description: "Productos de primera calidad para tu negocio"
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Pedidos online en cualquier momento"
    },
    {
      icon: MapPin,
      title: "Entrega en CABA",
      description: "Delivery rápido en Capital Federal"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Asesoramiento profesional para tu negocio"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              En <span className="font-semibold text-primary">La Papela Online</span>, entendemos las necesidades 
              de los negocios gastronómicos. Somos proveedores especializados en papelería y packaging para 
              cafeterías, panaderías y emprendimientos de comida.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ofrecemos una selección cuidada de productos de alta calidad que ayudan a presentar tus 
              productos de manera profesional y atractiva. Trabajamos con las mejores marcas y garantizamos 
              entregas rápidas en toda Capital Federal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra misión es facilitar tu día a día con productos confiables y un servicio excepcional, 
              disponible las 24 horas del día, los 7 días de la semana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
