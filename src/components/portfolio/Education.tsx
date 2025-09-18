import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, Users, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Technology (B.Tech)',
    major: 'Computer Science Engineering',
    institution: 'Government College of Engineering and Technology',
    duration: '2021 - 2025',
    status: 'Final Year, 8th Semester',
    location: 'India',
    gpa: '8.2/10',
    relevantCourses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Computer Networks',
      'Software Engineering',
      'Web Technologies',
      'Operating Systems',
      'Machine Learning'
    ]
  };

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent academic performance throughout the program',
      icon: Award
    },
    {
      title: 'Team Leadership',
      description: 'Leading final year project team with Faizan, Saqib, and Mosin',
      icon: Users
    },
    {
      title: 'Technical Projects',
      description: 'Successfully completed multiple real-world technical projects',
      icon: BookOpen
    }
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background in Computer Science Engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-gradient border-0 overflow-hidden">
              {/* Header with Gradient */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-success text-success-foreground">
                      {education.status}
                    </Badge>
                    <CardTitle className="text-2xl mb-2">{education.degree}</CardTitle>
                    <p className="text-xl text-primary font-semibold">{education.major}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Institution Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">{education.institution}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{education.duration}</p>
                        <p className="text-sm text-muted-foreground">Duration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{education.location}</p>
                        <p className="text-sm text-muted-foreground">Location</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Award className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">CGPA: {education.gpa}</p>
                      <p className="text-sm text-muted-foreground">Current Academic Performance</p>
                    </div>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="font-semibold mb-4 text-primary">Relevant Coursework</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="outline" 
                          className="w-full justify-start text-xs py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Academic Highlights</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="card-gradient border-0 p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <achievement.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final Year Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-0 p-6 border-l-4 border-l-accent">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Final Year Project</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Currently working on an innovative project as part of my final year curriculum, 
                    collaborating with team members Faizan, Saqib, and Mosin to develop a 
                    comprehensive solution that applies our theoretical knowledge to real-world problems.
                  </p>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Team Size: 4 Members</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;