import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Trophy, Code, Users, Star, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'Academic Project',
      title: 'Final Year Project Team Lead',
      organization: 'Government College of Engineering and Technology',
      duration: '2024 - Present',
      description: 'Leading a team of 4 students (including Faizan, Saqib, and Mosin) in developing an innovative technical solution for our capstone project.',
      achievements: [
        'Coordinated project timeline and deliverables',
        'Implemented agile development practices',
        'Facilitated team collaboration and code reviews',
        'Presented project progress to faculty panel'
      ],
      skills: ['Team Leadership', 'Project Management', 'React.js', 'Collaboration'],
      icon: Users,
      color: 'text-primary'
    },
    {
      type: 'Personal Development',
      title: 'Frontend Development Focus',
      organization: 'Self-Directed Learning',
      duration: '2022 - Present',
      description: 'Intensive self-study and practical application of modern frontend technologies, building multiple projects and staying current with industry trends.',
      achievements: [
        'Built 3+ production-ready applications',
        'Mastered React.js ecosystem and TypeScript',
        'Implemented responsive design principles',
        'Learned modern development tools and workflows'
      ],
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Supabase'],
      icon: Code,
      color: 'text-accent'
    },
    {
      type: 'Academic Achievement',
      title: 'Consistent Academic Performance',
      organization: 'Computer Science Program',
      duration: '2021 - 2025',
      description: 'Maintained strong academic standing while actively engaging in hands-on projects and technical skill development.',
      achievements: [
        'Maintained 8.2+ CGPA throughout the program',
        'Completed coursework in key CS fundamentals',
        'Participated in technical workshops and seminars',
        'Mentored junior students in programming concepts'
      ],
      skills: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering'],
      icon: Star,
      color: 'text-success'
    }
  ];

  const certifications = [
    'React Developer Certification (In Progress)',
    'JavaScript ES6+ Fundamentals',
    'Responsive Web Design Principles',
    'Git Version Control Systems'
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey of growth, learning, and achievements in the field of technology and development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-px h-16 bg-border hidden md:block"></div>
              )}

              <Card className="card-gradient border-0 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white relative z-10`}>
                      <experience.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <Badge variant="secondary" className="w-fit mb-2 sm:mb-0">
                          {experience.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{experience.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{experience.title}</CardTitle>
                      <p className="text-primary font-semibold">{experience.organization}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.2) + (achIndex * 0.1) 
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.2) + (skillIndex * 0.05) 
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Certifications */}
          <Card className="card-gradient border-0 p-8">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Certifications & Learning</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="card-gradient border-0 p-8">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Career Aspirations</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                  <h4 className="font-semibold text-foreground mb-2">Short Term (2025)</h4>
                  <p className="text-muted-foreground text-sm">
                    Secure a frontend developer position at a dynamic tech company 
                    where I can apply my React.js skills and continue learning modern web technologies.
                  </p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-l-accent">
                  <h4 className="font-semibold text-foreground mb-2">Long Term (2025-2030)</h4>
                  <p className="text-muted-foreground text-sm">
                    Evolve into a full-stack developer and technical lead, contributing to 
                    innovative projects that make a positive impact on users and society.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;