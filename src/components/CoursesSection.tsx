import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ShoppingCart } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      name: "CCC (Course on Computer Concepts)",
      description: "Government certified basic computer literacy course essential for all government jobs.",
      duration: "3 Months",
      students: "500+",
      rating: 4.8,
      price: 2999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=250&fit=crop&auto=format",
      badge: "Government Certified",
      features: ["Basic Computer Knowledge", "MS Office", "Internet Basics", "Certificate"]
    },
    {
      id: 2,
      name: "ADCA (Advanced Diploma in Computer Applications)",
      description: "Comprehensive computer application course covering advanced software and programming.",
      duration: "12 Months",
      students: "800+",
      rating: 4.9,
      price: 15999,
      originalPrice: 24999,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&auto=format",
      badge: "Most Popular",
      features: ["Advanced MS Office", "Programming Basics", "Web Design", "Job Assistance"]
    },
    {
      id: 3,
      name: "DCA (Diploma in Computer Applications)",
      description: "Professional diploma course for comprehensive computer application knowledge.",
      duration: "6 Months",
      students: "600+",
      rating: 4.7,
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
      badge: "Professional",
      features: ["Computer Fundamentals", "Office Applications", "Database", "Project Work"]
    },
    {
      id: 4,
      name: "TALLY with GST",
      description: "Master accounting software with GST implementation for finance professionals.",
      duration: "2 Months",
      students: "300+",
      rating: 4.6,
      price: 5999,
      originalPrice: 8999,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
      badge: "Industry Ready",
      features: ["Tally Prime", "GST Implementation", "Payroll", "Banking"]
    },
    {
      id: 5,
      name: "O-LEVEL (Foundation Level)",
      description: "NIELIT certification equivalent to foundation level in Computer Science Engineering.",
      duration: "12 Months",
      students: "400+",
      rating: 4.8,
      price: 18999,
      originalPrice: 28999,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&auto=format",
      badge: "NIELIT Certified",
      features: ["Programming Languages", "System Analysis", "Database", "Government Recognition"]
    },
    {
      id: 6,
      name: "Coding Bootcamp",
      description: "Intensive programming course covering modern web development technologies.",
      duration: "6 Months",
      students: "200+",
      rating: 4.9,
      price: 25999,
      originalPrice: 39999,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&auto=format",
      badge: "High Demand",
      features: ["HTML/CSS/JS", "React.js", "Node.js", "Portfolio Projects"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of computer courses designed to boost your career in the digital age
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card key={course.id} className="course-card group overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
                    {course.badge}
                  </Badge>
                  {course.originalPrice > course.price && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-semibold">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {course.name}
                </CardTitle>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  {course.originalPrice > course.price && (
                    <span className="text-lg text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-y-3">
                <Button variant="course" className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-12 py-4 text-lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;