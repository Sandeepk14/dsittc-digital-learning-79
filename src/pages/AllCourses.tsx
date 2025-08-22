import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, ShoppingCart, Search, Filter, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AllCourses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

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
      category: "basic",
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
      category: "advanced",
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
      category: "professional",
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
      category: "accounting",
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
      category: "certification",
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
      category: "programming",
      features: ["HTML/CSS/JS", "React.js", "Node.js", "Portfolio Projects"]
    }
  ];

  // Filter and sort courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return parseInt(a.duration) - parseInt(b.duration);
      default: // popularity
        return parseInt(b.students) - parseInt(a.students);
    }
  });

  const handleViewDetails = (courseId: number) => {
    navigate(`/course/${courseId}`);
  };

  const handleAddToCart = (course: any) => {
    // This will be implemented with cart functionality
    alert(`${course.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Button 
              onClick={() => navigate('/')} 
              variant="outline" 
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                All <span className="text-primary">Courses</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive range of computer courses designed for all skill levels
              </p>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="accounting">Accounting</SelectItem>
                  <SelectItem value="certification">Certification</SelectItem>
                  <SelectItem value="programming">Programming</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedCourses.length} of {courses.length} courses
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map((course, index) => (
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
                  <Button 
                    variant="course" 
                    className="w-full"
                    onClick={() => handleAddToCart(course)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleViewDetails(course.id)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {sortedCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">No courses found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm("");
                setFilterCategory("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllCourses;