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
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate frontend developer with a strong foundation in computer science
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
            <Card className="shadow-lg">
              <div className="card-gradient p-6 lg:p-8">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <p className="text-base lg:text-lg leading-relaxed text-foreground">
                      I'm a final-year Computer Science Engineering student at{' '}
                      <span className="text-gradient font-semibold">
                        Government College of Engineering and Technology
                      </span>
                      , with a passion for creating exceptional digital experiences.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                      My journey in frontend development has been driven by curiosity and the desire 
                      to build solutions that make a real impact. I specialize in modern web technologies 
                      and am constantly exploring new ways to improve user experiences through clean, 
                      efficient code and thoughtful design.
                    </p>

                    <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
                      When I'm not coding, you'll find me collaborating with my teammates 
                      Faizan, Saqib, and Mosin on our final year project, exploring the latest 
                      web development trends, or contributing to open-source projects.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Career Goals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-gradient">Career Goals</h3>
              <p className="text-muted-foreground leading-relaxed responsive-text">
                I aspire to become a full-stack developer who bridges the gap between 
                design and technology, creating scalable web applications that solve 
                real-world problems and provide exceptional user experiences.
              </p>
            </motion.div>
          </motion.div>

          {/* Interests & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="shadow-lg">
              <div className="card-gradient p-6 lg:p-8">
                <CardContent className="p-0">
                  <h3 className="text-lg lg:text-xl font-semibold mb-6 text-gradient">Core Interests</h3>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
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
                          className="px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
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