import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const features = [
  "Consultoría personalizada según tus necesidades",
  "Productos 100% naturales y certificados",
  "Seguimiento continuo de tus resultados",
  "Educación sobre salud y bienestar",
]

export function About() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Sobre Mi Consultoría
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Tu aliado en el camino hacia una salud óptima
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Soy Juan José Gaviria, consultor independiente certificado de Inmunotec en Pereira, Colombia. Mi misión es
              ayudarte a alcanzar tu máximo potencial de salud y bienestar. Con años de experiencia y un enfoque
              personalizado, te guiaré hacia soluciones naturales que realmente funcionan.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2">
              Conocer Más Sobre Mí
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/professional-health-consultant-in-modern-office.jpg"
                alt="Juan José Gaviria - Consultor de Inmunotec"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <div className="text-3xl font-bold text-primary mb-1">Certificado</div>
              <p className="text-sm text-muted-foreground">Consultor Independiente Oficial de Inmunotec</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
