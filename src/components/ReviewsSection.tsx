import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Anita Sharma",
      course: "ADCA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format",
      review: "DSITTC transformed my career completely! The ADCA course was comprehensive and the instructors were incredibly supportive. I got placed in a reputed IT company within 2 months of completion.",
      placement: "TCS",
      salary: "₹3.5 LPA"
    },
    {
      id: 2,
      name: "Rahul Verma",
      course: "Coding Bootcamp",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format",
      review: "The coding bootcamp at DSITTC is outstanding! Learned modern web development from scratch. The practical approach and real projects helped me build a strong portfolio.",
      placement: "Wipro",
      salary: "₹4.2 LPA"
    },
    {
      id: 3,
      name: "Priya Gupta",
      course: "Tally with GST",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format",
      review: "Excellent training in Tally! The practical sessions on GST implementation were very helpful. Now I'm confidently handling accounts for multiple companies.",
      placement: "CA Firm",
      salary: "₹2.8 LPA"
    },
    {
      id: 4,
      name: "Vikash Kumar",
      course: "DCA",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format",
      review: "Great learning experience at DSITTC. The DCA course covered all essential computer applications. The staff is very helpful and the environment is conducive to learning.",
      placement: "Local IT Company",
      salary: "₹2.2 LPA"
    },
    {
      id: 5,
      name: "Sneha Patel",
      course: "O-LEVEL",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&auto=format",
      review: "The O-Level course preparation was excellent. Clear concepts, regular practice tests, and doubt-clearing sessions helped me clear the exam with good marks.",
      placement: "Government Job",
      salary: "₹3.0 LPA"
    },
    {
      id: 6,
      name: "Amit Singh",
      course: "CCC",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&auto=format",
      review: "Perfect institute for CCC preparation. Got my certificate and it helped me qualify for government job exam. Thank you DSITTC team!",
      placement: "Government Sector",
      salary: "₹2.5 LPA"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visibleReviews = [
    reviews[currentReview],
    reviews[(currentReview + 1) % reviews.length],
    reviews[(currentReview + 2) % reviews.length]
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students who transformed their careers with DSITTC training
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {visibleReviews.map((review, index) => (
              <Card key={review.id} className={`shadow-card hover:shadow-lg transition-all duration-500 ${index === 0 ? 'md:scale-105 md:shadow-xl' : ''}`}>
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{review.review}"
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-primary">{review.course}</p>
                    </div>
                  </div>

                  {/* Placement Info */}
                  <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-success font-medium">Placed at: {review.placement}</span>
                      <span className="text-success font-semibold">{review.salary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentReview ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => setCurrentReview(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2000+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">95%</div>
            <div className="text-muted-foreground">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.8★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Companies Hiring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;