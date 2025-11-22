import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      business: "Café del Centro",
      text: "Excelente servicio y productos de calidad. Siempre llegan a tiempo y nos resuelven cualquier necesidad.",
      rating: 5
    },
    {
      name: "Carlos Pérez",
      business: "Panadería Artesanal",
      text: "Los mejores precios y la atención más profesional. Llevan años siendo nuestro proveedor de confianza.",
      rating: 5
    },
    {
      name: "Laura Martínez",
      business: "Empanadas Express",
      text: "El packaging que compramos acá le da un toque profesional a nuestro negocio. ¡Muy recomendable!",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La confianza de cientos de negocios gastronómicos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
