import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import hamidProfile from '@/assets/hamid-new-profile.jpg';

const Hero = () => {
  const { text: typewriterText } = useTypewriter({
    words: [
      'Frontend Developer',
      'React Specialist',
      'CSE Student',
      'UI/UX Enthusiast',
      'Problem Solver'
    ],
    speed: 100,
    deleteSpeed: 80,
    delayBetweenWords: 2000,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResumeDownload = () => {
    // Create a dummy resume download - in real app, this would link to actual resume
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Hamid_Manzoor_Resume.pdf';
    // You would replace this with actual resume URL
    console.log('Resume download initiated');
    alert('Resume download would start here. Please add your actual resume file.');
  };

  return (
    <section id="hero" className="min-h-screen relative bg-gradient-to-br from-background via-primary/5 to-accent/5 flex items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* Subtle animated shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto responsive-padding relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Profile Image - Compact Circle */}
          <motion.div 
            className="flex justify-center lg:justify-start order-first"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20">
                <motion.img 
                  src={hamidProfile} 
                  alt="Hamid Manzoor - Frontend Developer"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div 
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Content - Compact */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm sm:text-base text-muted-foreground font-medium mb-2">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hamid Manzoor
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-8 sm:h-10"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl text-foreground/80 font-semibold">
                {typewriterText}
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Building <span className="text-primary font-semibold">scalable</span> and{' '}
              <span className="text-accent font-semibold">user-friendly</span> web experiences
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="btn-hero text-sm sm:text-base font-semibold px-6 py-5"
                onClick={() => scrollToSection('projects')}
              >
                View Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-primary text-sm sm:text-base font-semibold px-6 py-5"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a 
                href="https://github.com/hamid567921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                whileHover={{ y: -3 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/hamid-manzoor-76735b203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="mailto:hamid.manzoor@example.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                whileHover={{ y: -3 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-primary p-2 h-auto"
                onClick={handleResumeDownload}
              >
                <Download className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
};

export default Hero;