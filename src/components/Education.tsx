import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics and Communications Engineering",
    institution: "JSS Academy of Technical Education, Noida",
    period: "October 2023 - July 2027",
    highlights: [
      "Developing strong foundation in ECE",
      "Exploring web development passion",
      "Active in technical communities",
      "Built analytical thinking skills",
    ],
  },
  {
    degree: "Intermediate Education",
    field: "Physics, Chemistry, Mathematics",
    institution: "Vanasthali Public School",
    period: "April 2009 - March 2023",
    highlights: [
      "Strong foundation in sciences",
      "Mathematical problem-solving",
      "Academic excellence",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-accent" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-lg text-accent font-medium">{edu.field}</p>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
