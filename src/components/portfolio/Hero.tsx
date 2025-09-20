import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import hamidProfile from '@/assets/hamid-new-profile.jpg';

const Hero = () => {
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Content */}
          <motion.div 
            className="flex-1 mobile-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient-rainbow">Hamid</span>{' '}
                <span className="text-foreground">Manzoor</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gradient font-semibold mb-6">
                Frontend Developer | CSE Student
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl responsive-text">
                Passionate about building scalable, user-friendly, and impactful digital solutions.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="btn-hero text-base md:text-lg px-6 md:px-8 py-3 w-full sm:w-auto"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-primary text-base md:text-lg px-6 md:px-8 py-3 w-full sm:w-auto"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 md:gap-6 justify-center lg:justify-start flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a 
                href="https://github.com/hamid567921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:scale-110 hover:shadow-lg rounded-full"
                aria-label="Visit Hamid's GitHub profile"
              >
                <Github className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hamid-manzoor-76735b203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:scale-110 hover:shadow-lg rounded-full"
                aria-label="Visit Hamid's LinkedIn profile"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a 
                href="mailto:hamid.manzoor@example.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 hover:scale-110 hover:shadow-lg rounded-full"
                aria-label="Send email to Hamid"
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                onClick={handleResumeDownload}
                aria-label="Download Hamid's resume"
              >
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Resume</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="rainbow-border">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src={hamidProfile} 
                    alt="Hamid Manzoor - Frontend Developer and Computer Science Student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-accent/20 via-primary/20 to-success/20 animate-pulse-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce hover:scale-110"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;