import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

export const ProductCard = ({ name, description, image, category }: ProductCardProps) => {
  const handleWhatsAppInquiry = () => {
    const message = `Hola! Me interesa el producto: ${name}`;
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">{category}</div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          variant="default" 
          className="w-full" 
          onClick={handleWhatsAppInquiry}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Consultar Precio
        </Button>
      </CardFooter>
    </Card>
  );
};
