import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react"

export function HeroSection() {
  const handleContact = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block">Hello, I'm</span>
              <span className="text-gradient block">Srajit Srivastava</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Aspiring AI/ML Engineer • Product Builder • Content Creator
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            B.Tech student at VIT passionate about building intelligent systems,
            innovative products, and creating content that inspires others to explore technology.
          </p>

          {/* CTA Buttons: use Button asChild so the anchor keeps Button styles */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="group primary-gradient hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300">
              <a
                href="https://drive.google.com/file/d/1Ts7NYsz7vN3fmnKSdEIHziqEpptTdc1I/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5 inline-block align-middle" />
                Download Resume
              </a>
            </Button>

            <Button
              onClick={handleContact}
              variant="outline"
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/sraj-git-it" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group">
              <Github className="h-6 w-6 group-hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/srajit-srivastava/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group">
              <Linkedin className="h-6 w-6 group-hover:text-primary" />
            </a>
            <a href="#contact" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group">
              <ExternalLink className="h-6 w-6 group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
