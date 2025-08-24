import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Users, Award, BookOpen } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Transform your career with cutting-edge digital skills",
      author: "Success Story",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
      stats: "500+ Students Placed"
    },
    {
      quote: "Learn from industry experts and build your future",
      author: "Expert Training",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&auto=format",
      stats: "15+ Years Experience"
    },
    {
      quote: "Join the digital revolution with practical knowledge",
      author: "Innovation Hub",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&auto=format",
      stats: "100% Job Assistance"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master <span className="text-accent">Digital Skills</span> for Tomorrow's World
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Empower your career with comprehensive computer courses designed by industry experts
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-lg font-semibold">2000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-accent" />
                <span className="text-lg font-semibold">95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-accent" />
                <span className="text-lg font-semibold">15+ Courses</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses">
                <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                  Explore Courses
                </Button>
              </a>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-green-500 text-white hover:bg-green-600 border-green-500">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Content - Testimonial Slider */}
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="relative h-80 overflow-hidden rounded-xl">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-lg font-medium mb-2">{testimonial.quote}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm opacity-90">{testimonial.author}</p>
                        <p className="text-sm font-semibold text-accent">{testimonial.stats}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                {/* Indicators */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-accent w-8' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default HeroSection;
