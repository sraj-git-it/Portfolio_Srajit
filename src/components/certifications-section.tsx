import { Award, Building2, Briefcase, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Industrial IoT Certification",
      issuer: "L&T EduTech",
      description: "Comprehensive certification covering IoT architecture, edge computing, industrial sensors, and real-time data processing for manufacturing environments.",
      date: "July 2025",
      skills: ["IoT Architecture", "Edge Computing", "Industrial Sensors", "Data Analytics", "MQTT Protocol"],
      credentialUrl: "https://drive.google.com/file/d/15zbUh9ZqBh6cLOO2sY_9ctky6TlTWLik/view?usp=drive_link",
      verified: true,
      icon: Building2
    },
    {
      title: "Product Management Professional",
      issuer: "Project Management Institute (PMI)",
      description: "Advanced certification in product management methodologies, strategic planning, user research, and agile development practices.",
      date: "March 2024",
      skills: ["Product Strategy", "User Research", "Agile Methodologies", "Roadmapping", "Stakeholder Management"],
      credentialUrl: "https://drive.google.com/file/d/1baRTTQrPp1EMlpiFkshQoFBw3nBrKrAv/view?usp=drive_link",
      verified: true,
      icon: Briefcase
    },
    {
      title: "Business Analyst & Project Manager Collaboration",
      issuer: "International Institute of Business Analysis (IIBA)",
      description: "Specialized certification focusing on effective collaboration between business analysts and project managers in complex organizational environments.",
      date: "January 2024",
      skills: ["Business Analysis", "Project Management", "Stakeholder Engagement", "Requirements Management"],
      credentialUrl: "https://drive.google.com/file/d/1ktdm0PH6Fm_AqBqHsxg0YDZNMCeRmiKZ/view?usp=drive_link",
      verified: true,
      icon: Users
    }
  ]

  return (
    <section id="certifications" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="text-gradient">Training</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          {/* Certifications List */}
          <div className="space-y-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and Basic Info */}
                    <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-[120px]">
                      <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="lg:mt-4">
                        {cert.verified && (
                          <div className="flex items-center gap-1 mb-2 lg:justify-center">
                            <Award className="h-4 w-4 text-green-500" />
                            <span className="text-xs text-green-500 font-medium">Verified</span>
                          </div>
                        )}
                        <div className="text-sm text-muted-foreground">{cert.date}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Title and Issuer */}
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-primary font-semibold">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Skills Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        {cert.credentialUrl ? (
                          <Button asChild size="sm" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View Credential
                            </a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>
                            Credential Unavailable
                          </Button>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full primary-gradient flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                These certifications represent my dedication to staying current with industry best practices
                and emerging technologies. I believe in combining theoretical knowledge with practical
                application to drive meaningful innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}