import { Github, Linkedin, Instagram, Twitter, Youtube, Code, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/sraj-git-it", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/srajit-srivastava/", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com/u/srisrajit/", label: "LeetCode" },
    { icon: Instagram, href: "https://www.instagram.com/srajitated/reels/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/SrajitSrivast19", label: "X (Twitter)" },
    { icon: Youtube, href: "https://www.youtube.com/@srajitup", label: "YouTube" }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-gradient">Srajit Srivastava</span>
              </h3>
              <p className="text-muted-foreground mt-2">
                Aspiring AI/ML Engineer • Product Builder • Content Creator
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate about building intelligent systems that solve real-world problems. 
              Always excited to collaborate on innovative projects and share knowledge 
              through content creation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <a
                  href="mailto:srisrajit@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  srisrajit@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <a
                  href="tel:+919838861405"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +91 9838861405
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="text-foreground">Vellore, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Srajit Srivastava. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}