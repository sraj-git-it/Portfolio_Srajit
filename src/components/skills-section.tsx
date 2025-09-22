import { Code, Database, Brain, Wrench, BarChart, Megaphone } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      icon: Database,
      title: "CS Fundamentals",
      skills: ["Data Structures", "Algorithms", "OOP", "Database Design", "System Design"]
    },
    {
      icon: Brain,
      title: "AI/ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Linux", "VS Code", "Jupyter"]
    },
    {
      icon: BarChart,
      title: "Product Management & Analytics",
      skills: ["Product Strategy", "User Research", "Analytics", "A/B Testing", "Roadmapping"]
    },
    {
      icon: Megaphone,
      title: "Content & Marketing",
      skills: ["Content Strategy", "Social Media", "Video Editing", "SEO", "Brand Building"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning technical development, AI/ML, and product strategy
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Technical Proficiency */}
          <div className="mt-16 glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              Technical Proficiency Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { skill: "AI/ML Development", level: 85 },
                { skill: "Full-Stack Development", level: 80 },
                { skill: "Product Strategy", level: 90 },
                { skill: "Content Creation", level: 95 }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="hsl(var(--muted))"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{item.level}%</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}