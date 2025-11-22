import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLeaf from "@/assets/logo-leaf.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logoLeaf} alt="La Papela Online" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">La Papela Online</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection("productos")} className="text-foreground hover:text-primary transition-colors">
              Productos
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="text-foreground hover:text-primary transition-colors">
              Sobre Nosotros
            </button>
            <button onClick={() => scrollToSection("testimonios")} className="text-foreground hover:text-primary transition-colors">
              Testimonios
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-foreground hover:text-primary transition-colors">
              Contacto
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="hero" onClick={() => scrollToSection("contacto")}>
              Consultar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("hero")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Inicio
              </button>
              <button onClick={() => scrollToSection("productos")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Productos
              </button>
              <button onClick={() => scrollToSection("nosotros")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Sobre Nosotros
              </button>
              <button onClick={() => scrollToSection("testimonios")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Testimonios
              </button>
              <button onClick={() => scrollToSection("contacto")} className="text-left text-foreground hover:text-primary transition-colors py-2">
                Contacto
              </button>
              <Button variant="hero" onClick={() => scrollToSection("contacto")} className="w-full">
                Consultar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
