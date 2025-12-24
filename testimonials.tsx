import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Cliente desde 2022",
    content:
      "Después de usar Immunocal por 3 meses, mi energía aumentó significativamente y mis defensas mejoraron notablemente. ¡Totalmente recomendado!",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Cliente desde 2021",
    content:
      "La asesoría personalizada fue clave para encontrar el producto adecuado. El seguimiento constante hace toda la diferencia.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Cliente desde 2023",
    content:
      "Como deportista, Immunocal Sport me ha ayudado a recuperarme más rápido y rendir mejor en cada entrenamiento.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Historias reales de personas que transformaron su salud con Inmunotec.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
