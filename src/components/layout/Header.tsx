import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AuthDialog } from '@/components/auth/AuthDialog';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LogOut, Menu, User, Home, Info, Code, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const navigation = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: 'Signed out',
        description: 'You have been signed out successfully.',
      });
    } catch (error: any) {
      toast({
        title: 'Sign out failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="font-bold text-lg text-gradient">Hamid Manzoor</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className="text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300"
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 hover:bg-primary/10">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white text-sm">
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline text-sm font-medium">
                    {user.email?.split('@')[0]}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="flex items-center space-x-2 text-destructive">
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <AuthDialog>
              <Button className="btn-hero">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </AuthDialog>
          )}

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <span className="font-bold text-xl text-gradient">Hamid Manzoor</span>
                </div>
                
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="justify-start h-12 text-left hover:bg-primary/10"
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};