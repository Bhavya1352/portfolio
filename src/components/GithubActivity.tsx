import { useEffect, useRef, useState } from "react";
import { Github, Star, GitFork, GitCommit, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GithubActivity = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [githubData, setGithubData] = useState({
    username: "Bhavya1352",
    repos: 25,
    stars: 120,
    forks: 45,
    contributions: 847,
    currentStreak: 12
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".github-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".github-heading",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Stats cards animation
      gsap.fromTo(
        ".github-stat",
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".github-stats",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Contribution graph animation
      gsap.fromTo(
        ".github-graph",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".github-graph",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Github, label: "Repositories", value: githubData.repos, color: "text-blue-500" },
    { icon: Star, label: "Stars Earned", value: githubData.stars, color: "text-yellow-500" },
    { icon: GitFork, label: "Forks", value: githubData.forks, color: "text-purple-500" },
    { icon: GitCommit, label: "Contributions", value: githubData.contributions, color: "text-green-500" },
  ];

  // Generate fake contribution graph data
  const generateContributionData = () => {
    const weeks = 52;
    const days = 7;
    const data = [];
    
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        const level = Math.random();
        let contributionLevel = 0;
        if (level > 0.85) contributionLevel = 4;
        else if (level > 0.65) contributionLevel = 3;
        else if (level > 0.4) contributionLevel = 2;
        else if (level > 0.2) contributionLevel = 1;
        
        data.push({ week, day, level: contributionLevel });
      }
    }
    return data;
  };

  const contributionData = generateContributionData();

  const getContributionColor = (level: number) => {
    const colors = [
      "bg-border/30",
      "bg-primary/20",
      "bg-primary/40",
      "bg-primary/60",
      "bg-primary/80"
    ];
    return colors[level];
  };

  return (
    <section id="github" ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 bg-card/25 dot-bg relative border-b border-border/40">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="github-heading mb-8 sm:mb-10 md:mb-14">
          <div className="inline-block border-2 border-primary/30 bg-card/80 px-4 py-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-foreground">
              GitHub <span className="font-sans font-bold text-primary">Activity</span>
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="github-stats grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="github-stat group p-4 sm:p-5 rounded-2xl bg-card border border-border/80 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contribution Graph */}
        <div className="github-grid grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contribution Graph */}
          <div className="lg:col-span-2 github-graph">
            <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-foreground">Contribution Activity</h3>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>Last 12 months</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {contributionData.map((cell, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm ${getContributionColor(cell.level)} transition-all hover:scale-125 cursor-pointer`}
                      title={`${cell.level} contributions`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-3 text-[9px] text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Streak Info */}
          <div className="github-stat">
            <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-lg h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                  <GitCommit className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{githubData.currentStreak}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Day Streak</p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                I've been contributing to open source consistently. Every commit teaches me something new.
              </p>

              <a
                href={`https://github.com/${githubData.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:bg-primary/80 transition-colors shadow-md"
              >
                <Github className="w-4 h-4" />
                View Profile
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubActivity;
