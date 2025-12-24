import { Shield, Heart, Zap, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: Shield,
    title: "Sistema Inmune Fortalecido",
    description: "Productos respaldados por la ciencia que fortalecen tus defensas naturales de manera efectiva.",
  },
  {
    icon: Heart,
    title: "Bienestar Integral",
    description: "Mejora tu calidad de vida con soluciones naturales que cuidan tu salud de manera holística.",
  },
  {
    icon: Zap,
    title: "Más Energía y Vitalidad",
    description: "Siente la diferencia con más energía para disfrutar cada día al máximo.",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    description: "Te acompaño en cada paso con un plan personalizado según tus necesidades específicas.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">¿Por qué elegir Inmunotec?</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Soluciones probadas que transforman vidas, respaldadas por años de experiencia y resultados comprobados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
