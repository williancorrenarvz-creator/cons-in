import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background/20 rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-semibold">Inmunotec</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Juan José Gaviria - Tu consultor independiente certificado en Pereira, Colombia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#inicio" className="hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-background transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-background transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-background transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Immunocal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Immunocal Platinum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Immunocal Sport
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Otros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            &copy; {new Date().getFullYear()} Juan José Gaviria - Consultor Independiente Inmunotec. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
