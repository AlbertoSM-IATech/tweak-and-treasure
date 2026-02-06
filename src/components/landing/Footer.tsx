import publifyLogo from "@/assets/publify-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Funcionalidades", href: "#features" },
      { label: "Módulos", href: "#modules" },
      { label: "Precios", href: "#pricing" },
      { label: "Founders", href: "#founders" },
    ],
    support: [
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "mailto:hola@publify.app" },
    ],
    legal: [
      { label: "Términos", href: "#" },
      { label: "Privacidad", href: "#" },
    ],
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={publifyLogo} alt="Publify" className="h-8 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              El Sistema Operativo Editorial para publishers de Amazon KDP.
            </p>
            <a 
              href="mailto:hola@publify.app" 
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              hola@publify.app
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Publify. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con 🧡 para publishers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
