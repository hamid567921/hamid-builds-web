import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for reaching out! I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hamid.manzoor@example.com',
      href: 'mailto:hamid.manzoor@example.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXX',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      color: 'text-success'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/hamidmanzoor',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/hamidmanzoor',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hamid.manzoor@example.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg lg:text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 lg:gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300">
                      <div className="p-2.5 lg:p-3 rounded-lg bg-primary/10">
                        <info.icon className={`h-4 w-4 lg:h-5 lg:w-5 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm lg:text-base">{info.label}</h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg lg:text-xl font-semibold mb-4 text-gradient">Connect With Me</h3>
              <div className="flex gap-3 lg:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label={`Connect with Hamid on ${social.label}`}
                  >
                    <social.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-4 lg:p-6 rounded-lg bg-success/10 border-l-4 border-l-success"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-success"></div>
                <h4 className="font-semibold text-foreground text-sm lg:text-base">Available for Opportunities</h4>
              </div>
              <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                I'm actively looking for frontend developer positions and internship 
                opportunities. Open to discussing exciting projects and collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg">
              <div className="p-6 lg:p-8">
                <CardHeader className="p-0 mb-6 lg:mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-5 w-5 lg:h-6 lg:w-6 text-gradient" />
                    <CardTitle className="text-xl lg:text-2xl text-gradient">Send Me a Message</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    Have a question or want to work together? I'd love to hear from you.
                  </p>
                </CardHeader>

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-sm lg:text-base">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-2 focus:border-primary transition-colors duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-sm lg:text-base">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="bg-background/50 border-2 focus:border-primary transition-colors duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <Label htmlFor="subject" className="text-sm lg:text-base">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      disabled={isSubmitting}
                      className="bg-background/50 border-2 focus:border-primary transition-colors duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="text-sm lg:text-base">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="bg-background/50 resize-none border-2 focus:border-primary transition-colors duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="btn-hero w-full md:w-auto px-6 lg:px-8 py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;