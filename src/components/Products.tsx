import { ProductCard } from "./ProductCard";

export const Products = () => {
  const products = [
    {
      name: "Sobres Bolsa 4A",
      description: "Sobres kraft de alta calidad para empaque seguro y presentación profesional.",
      category: "Packaging",
      image: "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&q=80"
    },
    {
      name: "Rollos de Papel",
      description: "Papel kraft en rollo, perfecto para envolver productos y crear presentaciones únicas.",
      category: "Papel",
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80"
    },
    {
      name: "Papel Film",
      description: "Film transparente de alta resistencia para proteger y conservar productos frescos.",
      category: "Protección",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=80"
    },
    {
      name: "Cubiertos Descartables",
      description: "Cubiertos ecológicos y resistentes para servicio de comidas.",
      category: "Descartables",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80"
    },
    {
      name: "Servilletas",
      description: "Servilletas de papel de primera calidad en diversos tamaños y colores.",
      category: "Mesa",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80"
    },
    {
      name: "Papel Higiénico",
      description: "Papel higiénico de alta calidad para baños de negocios gastronómicos.",
      category: "Higiene",
      image: "https://images.unsplash.com/photo-1584556326561-c8746083993b?w=800&q=80"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas de papelería para tu negocio gastronómico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
