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
    <section id="hero" className="min-h-screen relative hero-gradient flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-20 right-5 sm:top-40 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-10 sm:-bottom-8 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-success/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-48 sm:h-48 bg-warning/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto responsive-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-20">
          
          {/* Content */}
          <motion.div 
            className="flex-1 mobile-center max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 sm:mb-6"
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium font-display tracking-wide">
                Hello, I'm
              </p>
            </motion.div>

            {/* Main Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-tight">
                <span className="text-gradient-rainbow bg-gradient-to-r from-primary via-accent to-success bg-size-200 animate-gradient-shift">
                  Hamid
                </span>{' '}
                <span className="text-foreground">Manzoor</span>
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="h-12 sm:h-16 lg:h-20 flex items-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gradient font-semibold font-display">
                  {typewriterText}
                  <span className="animate-blink border-r-2 border-primary ml-1"></span>
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-8 sm:mb-10 lg:mb-12"
            >
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                Passionate about building{' '}
                <span className="text-primary font-semibold">scalable</span>,{' '}
                <span className="text-accent font-semibold">user-friendly</span>, and{' '}
                <span className="text-success font-semibold">impactful</span> digital solutions.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="btn-hero text-base sm:text-lg font-semibold px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto h-auto touch-friendly"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-primary text-base sm:text-lg font-semibold px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto h-auto touch-friendly"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-3 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 sm:gap-6 justify-center lg:justify-start flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.a 
                href="https://github.com/hamid567921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 hover:scale-110 hover:shadow-lg rounded-full touch-friendly group"
                aria-label="Visit Hamid's GitHub profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-6 w-6 group-hover:animate-bounce-gentle" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/hamid-manzoor-76735b203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 hover:scale-110 hover:shadow-lg rounded-full touch-friendly group"
                aria-label="Visit Hamid's LinkedIn profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-6 w-6 group-hover:animate-bounce-gentle" />
              </motion.a>
              <motion.a 
                href="mailto:hamid.manzoor@example.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 hover:scale-110 hover:shadow-lg rounded-full touch-friendly group"
                aria-label="Send email to Hamid"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-6 w-6 group-hover:animate-bounce-gentle" />
              </motion.a>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 touch-friendly font-semibold"
                  onClick={handleResumeDownload}
                  aria-label="Download Hamid's resume"
                >
                  <Download className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Resume</span>
                  <span className="sm:hidden">CV</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end order-first lg:order-last max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <div className="rainbow-border animate-gradient-shift">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden shadow-2xl">
                  <motion.img 
                    src={hamidProfile} 
                    alt="Hamid Manzoor - Frontend Developer and Computer Science Student"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <motion.div 
                className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full bg-gradient-to-tr from-accent/20 via-primary/20 to-success/20"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors duration-300 touch-friendly"
          aria-label="Scroll to About section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;