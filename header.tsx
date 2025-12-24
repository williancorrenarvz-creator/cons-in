import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-semibold">Inmunotec</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#beneficios" className="text-sm hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#productos" className="text-sm hover:text-primary transition-colors">
              Productos
            </a>
            <a href="#testimonios" className="text-sm hover:text-primary transition-colors">
              Testimonios
            </a>
          </nav>

          <Button className="gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Contactar</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
