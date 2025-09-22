import { Building, Briefcase, Users, Calendar, MapPin, ExternalLink } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Industrial IoT Intern",
      company: "L&T EduTech",
      location: "Remote",
      duration: "May 2025 – July 2025",
      type: "Internship",
      description: "Working on industrial IoT solutions and smart manufacturing systems. Developing expertise in edge computing, sensor networks, and real-time data processing.",
      achievements: [
        "Developed IoT prototypes for industrial monitoring systems",
        "Implemented edge computing solutions for real-time data processing",
        "Collaborated with senior engineers on large-scale IoT deployments",
        "Gained hands-on experience with industrial sensors and communication protocols"
      ],
      skills: ["IoT", "Edge Computing", "Python", "Embedded Systems", "Data Analytics"]
    },
    {
      title: "Founder & Product Lead",
      company: "UNTEEN",
      location: "India",
      duration: "April 2023 – December 2023",
      type: "Startup",
      description: "Founded and led a product-focused startup, managing end-to-end product development, team coordination, and strategic planning. Generated ₹2,00,000+ revenue within 6 months of launch.",
      achievements: [
        "Generated ₹2,00,000+ revenue within 6 months of launch",
        "Successfully launched and managed product roadmap from conception to market",
        "Led cross-functional teams of 8+ members across development and marketing",
        "Implemented agile methodologies and user-centered design principles",
        "Achieved significant user engagement and positive market feedback"
      ],
      skills: ["Product Management", "Leadership", "Strategic Planning", "Team Management", "User Research"]
    },
    {
      title: "Content Creator & Social Media Manager",
      company: "SRAJITUP",
      location: "India",
      duration: "2021 – Present",
      type: "Personal Brand",
      description: "Building and managing personal brand across multiple platforms, creating engaging content focused on technology, education, and entertainment. Content has reached 2.5 million+ views across platforms.",
      achievements: [
        "Achieved 2.5 million+ total content views across all platforms",
        "Created viral rap video 'CHAAR SAAL' with 26K+ views",
        "Recognition by industry professionals including Yashraj Mukhate",
        "Built engaged community across social media platforms"
      ],
      skills: ["Content Strategy", "Video Production", "Social Media", "Brand Building", "Creative Writing"]
    }
  ]

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Building expertise through diverse roles in technology, product, and content creation
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <div className="md:ml-20 glass rounded-2xl p-8 hover-lift">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, projects, or just connecting with fellow tech enthusiasts.
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}