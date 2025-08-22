import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  BookOpen,
  GraduationCap,
  Users,
  Award
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1608cc01-f567-48f1-ae22-ff192480634c.png" 
                alt="DSITTC Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">DSITTC</h3>
                <p className="text-sm text-white/70">Digital Skills Training Center</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering careers through comprehensive digital education and industry-relevant training programs since 2008.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/80 hover:text-white transition-colors">
                  Student Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#library" className="text-white/80 hover:text-white transition-colors flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Sunshine Digital Library</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                  CCC (Computer Concepts)
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                  ADCA (Advanced Diploma)
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                  DCA (Diploma in Applications)
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                  TALLY with GST
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                  O-LEVEL (NIELIT)
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-white transition-colors">
                  Coding Bootcamp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p>123 Education Street,</p>
                  <p>Digital Learning Hub,</p>
                  <p>Tech City - 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/70 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919876543210" className="text-white/80 hover:text-white transition-colors block">
                    +91 98765 43210
                  </a>
                  <a href="tel:+919876543211" className="text-white/80 hover:text-white transition-colors block">
                    +91 98765 43211
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/70 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:info@dsittc.com" className="text-white/80 hover:text-white transition-colors block">
                    info@dsittc.com
                  </a>
                  <a href="mailto:admissions@dsittc.com" className="text-white/80 hover:text-white transition-colors block">
                    admissions@dsittc.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <Separator className="bg-white/20 my-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">2000+</div>
            <div className="text-white/70 text-sm">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <GraduationCap className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">95%</div>
            <div className="text-white/70 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">15+</div>
            <div className="text-white/70 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <BookOpen className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">20+</div>
            <div className="text-white/70 text-sm">Course Programs</div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest course updates, career tips, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="accent" size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2024 DSITTC - Digital Skills Information Technology Training Center. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;