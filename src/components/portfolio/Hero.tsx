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
    <section id="hero" className="min-h-[85vh] relative bg-gradient-to-br from-background via-primary/3 to-accent/3 flex items-center justify-center overflow-hidden py-12 sm:py-16">
      <div className="container mx-auto responsive-padding relative z-10 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Profile Image - Compact Circle */}
          <motion.div 
            className="flex justify-center lg:justify-start order-first"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-xl ring-2 ring-primary/20">
              <motion.img 
                src={hamidProfile} 
                alt="Hamid Manzoor - Frontend Developer"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Content - Compact */}
          <motion.div 
            className="space-y-3 sm:space-y-4 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                Hi, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hamid Manzoor
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-7 sm:h-8"
            >
              <h2 className="text-base sm:text-lg lg:text-xl text-foreground/80 font-semibold">
                {typewriterText}
                <span className="animate-blink border-r-2 border-primary ml-1"></span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              Building <span className="text-primary font-semibold">scalable</span> and{' '}
              <span className="text-accent font-semibold">user-friendly</span> web experiences
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                className="btn-hero text-xs sm:text-sm font-semibold px-5 py-4"
                onClick={() => scrollToSection('projects')}
              >
                View Work
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-primary text-xs sm:text-sm font-semibold px-5 py-4"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-3 w-3" />
                Contact
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-3 justify-center lg:justify-start pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a 
                href="https://github.com/hamid567921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1.5"
                whileHover={{ y: -2 }}
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/hamid-manzoor-76735b203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1.5"
                whileHover={{ y: -2 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a 
                href="mailto:hamid.manzoor@example.com"
                className="text-muted-foreground hover:text-primary transition-colors p-1.5"
                whileHover={{ y: -2 }}
              >
                <Mail className="h-4 w-4" />
              </motion.a>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-primary p-1.5 h-auto"
                onClick={handleResumeDownload}
              >
                <Download className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
};

export default Hero;