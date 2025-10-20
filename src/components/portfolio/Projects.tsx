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
      demoUrl: 'https://mental-health-chatbot-demo.com',
      githubUrl: 'https://github.com/hamidmanzoor/mental-health-chatbot',
      status: 'Completed',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
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
      demoUrl: 'https://stadium-scorekeeper-demo.com',
      githubUrl: 'https://github.com/hamidmanzoor/stadium-scorekeeper',
      status: 'Completed',
      gradient: 'from-green-500 via-blue-500 to-purple-500'
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
      demoUrl: 'https://ai-resume-builder-demo.com',
      githubUrl: 'https://github.com/hamidmanzoor/ai-resume-builder',
      status: 'In Development',
      gradient: 'from-orange-500 via-yellow-500 to-green-500'
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
              <Card className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                {/* Project Header with Gradient */}
                <div className={`h-3 bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
                
                <CardHeader className="pb-4 lg:pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <project.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={`ml-2 ${project.status === 'Completed' ? 'bg-success text-success-foreground' : 'bg-warning text-warning-foreground'}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg lg:text-xl mb-3 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4 lg:space-y-6 px-4 lg:px-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gradient text-sm lg:text-base">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5 lg:gap-2">
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
                          <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-gradient text-sm lg:text-base">Key Features</h4>
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
                          className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground"
                        >
                          <span className="text-primary">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 lg:gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 btn-hero text-xs lg:text-sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="mr-1.5 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 btn-outline-primary text-xs lg:text-sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      aria-label={`View source code of ${project.title} on GitHub`}
                    >
                      <Github className="mr-1.5 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4" />
                      Code
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
          className="text-center mt-8 lg:mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-outline-primary"
            onClick={() => window.open('https://github.com/hamidmanzoor', '_blank')}
            aria-label="View all projects on GitHub"
          >
            <Github className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;