import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
