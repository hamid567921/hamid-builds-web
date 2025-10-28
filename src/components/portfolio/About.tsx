import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const interests = [
    'Frontend Development',
    'React Ecosystem',
    'UI/UX Design',
    'Performance Optimization',
    'Modern Web Technologies',
    'Open Source'
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-modern font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto font-modern font-light">
            B.Tech Graduate | Frontend Developer | Problem Solver
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur">
              <div className="p-8 lg:p-10">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-24 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      <p className="text-xl lg:text-2xl leading-relaxed text-foreground font-modern">
                        I recently completed my <span className="text-primary font-semibold">B.Tech in Computer Science Engineering</span> (2025) from{' '}
                        <span className="text-gradient font-bold">
                          Government College of Engineering and Technology
                        </span>
                        , where I developed a passion for creating exceptional digital experiences.
                      </p>
                    </div>
                    
                    <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground font-modern font-light pl-8">
                      My journey in frontend development has been fueled by curiosity and the drive 
                      to build impactful solutions. I specialize in <span className="text-primary font-medium">modern web technologies</span> and 
                      constantly explore innovative ways to enhance user experiences through clean, 
                      efficient code and thoughtful design.
                    </p>

                    <div className="pl-8 pt-2">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                        <p className="text-base lg:text-lg text-accent font-modern font-semibold">Key Achievements</p>
                      </div>
                      <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground font-modern font-light">
                        Collaborated with teammates Faizan, Saqib, and Mosin on innovative projects, 
                        explored cutting-edge web development trends, and actively contributed to open-source communities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Career Goals */}
            <Card className="shadow-lg border-l-4 border-l-primary bg-primary/5">
              <div className="p-6 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl lg:text-3xl font-modern font-bold mb-5 text-gradient flex items-center gap-3">
                    <span className="text-3xl">🎯</span> Career Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg lg:text-xl font-modern font-light">
                    I aspire to become a <span className="text-primary font-semibold">full-stack developer</span> who bridges the gap between 
                    design and technology, creating scalable web applications that solve 
                    real-world problems and deliver exceptional user experiences.
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Interests & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur">
              <div className="p-6 lg:p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl lg:text-3xl font-modern font-bold mb-6 text-gradient flex items-center gap-3">
                    <span className="text-3xl">💡</span> Core Interests
                  </h3>
                  <div className="flex flex-wrap gap-3 lg:gap-4">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="px-5 lg:px-6 py-2.5 lg:py-3 text-base lg:text-lg font-modern font-medium bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary hover:to-accent hover:text-white border border-primary/30 transition-all duration-300 cursor-default shadow-md"
                        >
                          {interest}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;