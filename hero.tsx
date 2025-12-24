import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Juan José Gaviria - Consultor Independiente Certificado</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance animate-fade-in-up [animation-delay:100ms]">
            Fortalece tu sistema inmunológico naturalmente
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Descubre soluciones científicamente respaldadas para mejorar tu salud y bienestar. Te acompaño en tu
            transformación hacia una vida más saludable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Button asChild size="lg" className="gap-2 text-base px-8 h-12">
              <a href="https://wa.me/573197520296" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-transparent">
              Conocer Productos
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:400ms]">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
