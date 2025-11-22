import logoLeaf from "@/assets/logo-leaf.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoLeaf} alt="La Papela Online" className="h-8 w-8 brightness-0 invert" />
              <span className="text-xl font-bold">La Papela Online</span>
            </div>
            <p className="text-background/80 mb-4">
              Tu papelera 24/7. Proveemos papelería y packaging de calidad para negocios gastronómicos en Capital Federal.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#hero" className="hover:text-background transition-colors">Inicio</a></li>
              <li><a href="#productos" className="hover:text-background transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="hover:text-background transition-colors">Sobre Nosotros</a></li>
              <li><a href="#testimonios" className="hover:text-background transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-background transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li>Capital Federal, CABA</li>
              <li>+54 9 11 1234-5678</li>
              <li>info@lapapelaonline.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {currentYear} La Papela Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
