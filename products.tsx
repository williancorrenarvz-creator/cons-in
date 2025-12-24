import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"

const products = [
  {
    name: "Immunocal",
    description: "Proteína de suero especializada que aumenta el glutatión, el antioxidante maestro del cuerpo.",
    image: "/immunocal-health-supplement-bottle.jpg",
    price: "Consultar",
  },
  {
    name: "Immunocal Platinum",
    description: "Fórmula avanzada con CMP™ para fortalecer el sistema inmunológico y la salud muscular.",
    image: "/platinum-health-supplement-bottle.jpg",
    price: "Consultar",
  },
  {
    name: "Immunocal Sport",
    description: "Diseñado para atletas, proporciona recuperación muscular y rendimiento óptimo.",
    image: "/sport-health-supplement-bottle.jpg",
    price: "Consultar",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Productos Inmunotec</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Suplementos científicamente probados que transforman tu salud desde el interior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border">
              <div className="aspect-square bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-primary">{product.price}</div>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <ShoppingBag className="w-4 h-4" />
                    Información
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">Ver Todos Los Productos</Button>
        </div>
      </div>
    </section>
  )
}
