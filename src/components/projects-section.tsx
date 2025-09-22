import { Github, ExternalLink, Brain, Shield, DollarSign, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      description: "Developed a machine learning pipeline on the IBM Telco Customer Churn dataset, applying advanced feature engineering and tree-based models (LightGBM/XGBoost) to classify churn with strong business-facing metrics.",
      icon: Brain,
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM", "SHAP", "LIME", "Feature Engineering"],
      highlights: [
        "Achieved ROC-AUC: 0.89 and Precision@100: 72% on holdout test sets",
        "Simulated cost–benefit analysis and projected a ~15% reduction in churn through targeted retention campaigns, showing measurable ROI uplift",
        "Improved explainability using SHAP and LIME, surfacing top churn drivers (e.g., contract type, tenure, service usage) for product & customer-success teams"
      ],
      githubUrl: "https://github.com/sraj-git-it",
      liveUrl: "#",
      featured: true
    },
    {
      title: "AI-Based Face Recognition Security System",
      description: "Advanced facial recognition system implementing state-of-the-art deep learning algorithms for secure access control. Features real-time detection, anti-spoofing measures, and scalable architecture.",
      icon: Shield,
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "Computer Vision", "Deep Learning"],
      highlights: [
        "99.2% accuracy on test dataset",
        "Real-time processing at 30 FPS",
        "Anti-spoofing protection",
        "Scalable microservices architecture"
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Explainable AI for Medical Diagnosis",
      description: "Machine learning platform that provides transparent AI-driven medical diagnostics with detailed explanations for healthcare professionals, ensuring trust and interpretability.",
      icon: Brain,
      technologies: ["Python", "Scikit-learn", "LIME", "SHAP", "Streamlit", "Medical AI"],
      highlights: [
        "95% diagnostic accuracy",
        "Full explanation transparency",
        "Healthcare professional validated",
        "Multi-disease detection support"
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "SahAI – AI-Powered Financial Inclusion",
      description: "Innovative fintech solution leveraging AI to provide financial services to underbanked populations. Features credit scoring, fraud detection, and personalized financial recommendations.",
      icon: DollarSign,
      technologies: ["Python", "Machine Learning", "Flask", "React", "Financial APIs", "Data Analytics"],
      highlights: [
        "Serves 10K+ underbanked users",
        "85% approval rate improvement",
        "Advanced fraud detection",
        "Multilingual support"
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "IoT Project – Industrial IoT Prototype",
      description: "Comprehensive industrial monitoring system using IoT sensors, edge computing, and cloud analytics for real-time industrial process optimization and predictive maintenance.",
      icon: Cpu,
      technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT", "AWS IoT", "Time Series DB"],
      highlights: [
        "Real-time monitoring dashboard",
        "Predictive maintenance alerts",
        "Edge computing optimization",
        "Cloud-scale data processing"
      ],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions that combine cutting-edge AI/ML with real-world impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={index}
                  className={`project-card group ${
                    project.featured ? 'lg:col-span-1' : 'lg:col-span-1'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mt-1">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="outline"
                          className="p-2 h-auto"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="p-2 h-auto"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open("https://github.com/sraj-git-it", '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}