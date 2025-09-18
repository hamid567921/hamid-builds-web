import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Trophy, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mental Health Chatbot',
      description: 'AI-based platform for mood tracking, chat support, and user authentication. Features real-time conversations, personalized recommendations, and secure data management for mental wellness support.',
      icon: Brain,
      techStack: ['React.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
      features: [
        'AI-powered conversation engine',
        'Mood tracking and analytics',
        'User authentication & profiles',
        'Real-time chat interface',
        'Personalized wellness recommendations'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Stadium Score Keeper',
      description: 'Real-time cricket scoring application with live updates, player statistics, and match management. Built for seamless score tracking during cricket matches with intuitive controls.',
      icon: Trophy,
      techStack: ['Vite', 'React.js', 'JavaScript', 'CSS3', 'Local Storage'],
      features: [
        'Real-time score updates',
        'Player statistics tracking',
        'Match history management',
        'Responsive design',
        'Offline functionality'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Completed',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'AI Resume Builder',
      description: 'Web-based AI-powered resume creation tool that helps users create professional resumes with smart suggestions, multiple templates, and export options.',
      icon: FileText,
      techStack: ['React.js', 'Node.js', 'AI/ML', 'PDF Generation', 'Tailwind CSS'],
      features: [
        'AI-powered content suggestions',
        'Multiple resume templates',
        'Real-time preview',
        'PDF export functionality',
        'ATS-friendly formats'
      ],
      demoUrl: '#',
      githubUrl: '#',
      status: 'In Development',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="card-gradient border-0 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                      <project.icon className="h-6 w-6" />
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="ml-2"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.2) + (techIndex * 0.05) 
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.2) + (featureIndex * 0.1) 
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 btn-hero"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 btn-outline-primary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-outline-primary"
            asChild
          >
            <a href="https://github.com/hamidmanzoor" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;