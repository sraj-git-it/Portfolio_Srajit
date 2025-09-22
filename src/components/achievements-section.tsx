import { Trophy, Star, Play, Award, Users, TrendingUp } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Winner – VIT's Got Latent",
      description: "Emerged victorious in VIT's premier talent competition, showcasing exceptional creative and technical abilities among hundreds of participants.",
      category: "Competition",
      date: "2023",
      impact: "University Recognition"
    },
    {
      icon: Star,
      title: "Recognized by Yashraj Mukhate",
      description: "Gained recognition from renowned music producer and content creator Yashraj Mukhate for creative content and musical talent.",
      category: "Industry Recognition",
      date: "2023",
      impact: "Professional Validation"
    },
    {
      icon: Play,
      title: "Rap Video 'CHAAR SAAL' – 26K+ Views",
      description: "Created and produced viral rap video that garnered over 26,000 views, demonstrating storytelling and content creation expertise.",
      category: "Content Creation",
      date: "2023",
      impact: "26K+ Views"
    },
    {
      icon: Award,
      title: "Creative Writing Competition Winner",
      description: "Won multiple creative writing competitions, showcasing strong communication skills and creative storytelling abilities.",
      category: "Literary Achievement",
      date: "2022-2023",
      impact: "Multiple Wins"
    }
  ]

  const stats = [
    { icon: Play, value: "26K+", label: "Video Views", description: "Viral content reach" },
    { icon: Trophy, value: "5+", label: "Awards Won", description: "Recognition achievements" },
    { icon: Users, value: "1K+", label: "Followers", description: "Social media reach" },
    { icon: TrendingUp, value: "100%", label: "Growth Rate", description: "Year-over-year engagement" }
  ]

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Achievements & <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Celebrating milestones and recognition earned through dedication, creativity, and technical excellence
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center glass rounded-xl p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg primary-gradient flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl primary-gradient flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="skill-tag text-xs">
                          {achievement.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {achievement.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Impact */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium text-primary">
                      Impact: {achievement.impact}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Recognition Quote */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full primary-gradient flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-foreground italic mb-4">
                "Success is not just about the recognition you receive, but the impact you create 
                and the problems you solve along the way."
              </blockquote>
              <p className="text-muted-foreground">
                — Philosophy that drives my approach to technology and content creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}