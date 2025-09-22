import { Code, Brain, Users, Trophy } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in AI/ML, Java, Python, and modern development tools"
    },
    {
      icon: Brain,
      title: "AI/ML Passion",
      description: "Dedicated to building intelligent systems that solve real-world problems"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Founded and led UNTEEN, managing product strategy and team growth"
    },
    {
      icon: Trophy,
      title: "Recognition",
      description: "Award-winning content creator with 26K+ views and industry recognition"
    }
  ]

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate technologist on a mission to bridge the gap between innovation and impact
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I'm a B.Tech student at Vellore Institute of Technology, majoring in Electronics 
                  and Instrumentation Engineering with a passion for artificial intelligence and 
                  machine learning. My journey began with curiosity about how technology can 
                  transform lives, leading me to explore the frontiers of AI/ML.
                </p>
                <p className="text-foreground leading-relaxed">
                  As a product builder, I've founded and led UNTEEN, where I developed strategic 
                  product roadmaps and managed cross-functional teams. My experience spans from 
                  technical implementation to business strategy, allowing me to bridge the gap 
                  between complex technology and user needs.
                </p>
                <p className="text-foreground leading-relaxed">
                  Beyond coding, I'm a content creator who believes in sharing knowledge and 
                  inspiring others. My work has been recognized by industry professionals, 
                  and I continue to create content that makes technology accessible to everyone.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl glass hover-lift group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "7.75", label: "Current CGPA" },
              { number: "26K+", label: "Content Views" },
              { number: "3+", label: "Years Experience" },
              { number: "10+", label: "Projects Built" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}