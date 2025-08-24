import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ShoppingCart, BookOpen, ChevronDown } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Our Team", href: "#team" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1608cc01-f567-48f1-ae22-ff192480634c.png" 
              alt="DSITTC Logo" 
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">DSITTC</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Digital Skills Training</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => navigate('/library')}
              className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors duration-200 font-medium"
            >
              <BookOpen className="h-4 w-4" />
              <span>Sunshine Digital Library</span>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                <span>Gallery</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate('/photo-gallery')}>
                  Photo Gallery
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Video Gallery
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </Button>
            </Link>
            <Button variant="hero" size="sm">
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavClick(item.href);
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/library');
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 px-3 py-2 text-secondary hover:text-secondary/80 transition-colors duration-200 font-medium w-full text-left"
            >
              <BookOpen className="h-4 w-4" />
              <span>Sunshine Digital Library</span>
            </button>
            <div className="px-3 py-2">
              <p className="text-foreground font-medium">Gallery</p>
              <div className="pl-2 mt-1 space-y-1">
                <button
                  onClick={() => {
                    navigate('/photo-gallery');
                    setIsOpen(false);
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 w-full text-left"
                >
                  Photo Gallery
                </button>
                <button
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 w-full text-left"
                >
                  Video Gallery
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                </Button>
              </Link>
              <Button variant="hero" size="sm">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
