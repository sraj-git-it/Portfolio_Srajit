import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Building a strong foundation in engineering and technology
            </p>
          </div>

          {/* Education Card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>
            
            <div className="glass rounded-2xl p-8 hover-lift animate-slide-up">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Bachelor of Technology
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-1">
                      Electronics and Instrumentation Engineering
                    </p>
                    <p className="text-lg font-medium text-foreground">
                      Vellore Institute of Technology, Vellore
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>September 2022 – July 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Vellore, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>Current CGPA: 7.75</span>
                    </div>
                  </div>

                  {/* Key Courses */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Machine Learning",
                        "Computer Networks",
                        "Database Management Systems",
                        "Object-Oriented Programming",
                        "Digital Signal Processing",
                        "Control Systems",
                        "Embedded Systems"
                      ].map((course, index) => (
                        <span
                          key={index}
                          className="skill-tag"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Academic Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Academic Highlights</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Maintained consistent academic performance with 7.75 CGPA</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Active participation in technical clubs and coding competitions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Focus on AI/ML and product development coursework</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}