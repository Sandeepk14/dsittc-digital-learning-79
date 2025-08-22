import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Wifi, Shield, Droplet, Wind, Clock, MapPin, Phone, Globe } from "lucide-react";

const LibrarySection = () => {
  const libraryFeatures = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Access thousands of books and digital resources"
    },
    {
      icon: Users,
      title: "Study Halls", 
      description: "Spacious and comfortable study areas"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet connectivity"
    },
    {
      icon: Shield,
      title: "CCTV Security",
      description: "24/7 security monitoring"
    },
    {
      icon: Droplet,
      title: "R.O Water",
      description: "Clean drinking water facility"
    },
    {
      icon: Wind,
      title: "A.C Hall",
      description: "Air-conditioned comfortable environment"
    }
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/8d3d3736-4fba-4b3a-a69d-809b95f4241b.png",
      alt: "Library Study Hall",
      title: "Study Hall"
    },
    {
      src: "/lovable-uploads/70a1d256-9db8-4aab-90b8-686954b9b432.png", 
      alt: "Computer Lab",
      title: "Computer Lab"
    },
    {
      src: "/lovable-uploads/0e04bf57-98c7-483d-9427-5b065d8b14fb.png",
      alt: "Classroom",
      title: "Classroom"
    },
    {
      src: "/lovable-uploads/4a96201d-7344-4273-8228-f1b744fd3066.png",
      alt: "Lab Session",
      title: "Lab Session"
    },
    {
      src: "/lovable-uploads/e0858f14-11d9-468a-b84b-d229ef1e9e91.png",
      alt: "DSITTC Building",
      title: "DSITTC Building"
    },
    {
      src: "/lovable-uploads/ffa2a193-83c5-426c-b16e-816379af2f37.png",
      alt: "Library Advertisement", 
      title: "Our Services"
    }
  ];

  return (
    <section id="library" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent text-accent-foreground font-semibold">
            Digital Library
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sunshine <span className="text-primary">Digital Library</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            State-of-the-art library facilities with modern amenities for enhanced learning experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {libraryFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6 animate-slide-up shadow-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Library <span className="text-primary">Gallery</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden group animate-slide-up shadow-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-lg font-semibold">{image.title}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Library Timings */}
        <Card className="mb-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Library Timings</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div>
                <h4 className="font-semibold text-primary mb-2">Weekdays</h4>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 8:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Weekends</h4>
                <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-8 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Visit Our Library</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-white/90 text-center">
                  Near Looders Convent School<br />
                  Near Muthoot Finance<br />
                  Tulsi Sagar, Ghazipur
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-white/90">+91 9140238240</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-8 w-8 mb-4" />
                <h4 className="font-semibold mb-2">Website</h4>
                <p className="text-white/90">www.dsittc.edug.in</p>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Get Directions
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LibrarySection;