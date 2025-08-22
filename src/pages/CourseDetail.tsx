import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen, Award, CheckCircle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      name: "CCC (Course on Computer Concepts)",
      description: "Government certified basic computer literacy course essential for all government jobs.",
      longDescription: "The Course on Computer Concepts (CCC) is a basic level computer literacy programme introduced by the National Institute of Electronics & Information Technology (NIELIT) to make the common man computer literate. This course is essential for government job applications and provides foundational knowledge of computer systems, operating systems, word processing, spreadsheets, presentations, and internet usage.",
      duration: "3 Months",
      students: "500+",
      rating: 4.8,
      price: 2999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=400&fit=crop&auto=format",
      badge: "Government Certified",
      features: ["Basic Computer Knowledge", "MS Office", "Internet Basics", "Certificate"],
      curriculum: [
        "Introduction to Computer",
        "Computer Systems & Hardware",
        "Operating System Basics (Windows)",
        "MS Word - Document Creation & Formatting",
        "MS Excel - Spreadsheets & Calculations", 
        "MS PowerPoint - Presentations",
        "Internet & Email",
        "Digital India & Online Services",
        "Cyber Security Basics"
      ],
      certification: "NIELIT Certified",
      jobOpportunities: ["Government Jobs", "Data Entry Operator", "Computer Operator", "Office Assistant"]
    },
    {
      id: 2,
      name: "ADCA (Advanced Diploma in Computer Applications)",
      description: "Comprehensive computer application course covering advanced software and programming.",
      longDescription: "Advanced Diploma in Computer Applications (ADCA) is a comprehensive one-year course designed to provide in-depth knowledge of computer applications, programming, and modern technologies. This course prepares students for IT industry requirements and provides advanced skills in office automation, web designing, and software development.",
      duration: "12 Months",
      students: "800+",
      rating: 4.9,
      price: 15999,
      originalPrice: 24999,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&auto=format",
      badge: "Most Popular",
      features: ["Advanced MS Office", "Programming Basics", "Web Design", "Job Assistance"],
      curriculum: [
        "Computer Fundamentals & Architecture",
        "Advanced MS Office Suite",
        "Programming in C Language",
        "Visual Basic Programming",
        "Database Management (MS Access)",
        "HTML & CSS Web Design",
        "JavaScript Basics",
        "Internet & E-commerce",
        "Computer Graphics & Multimedia",
        "Project Work & Presentation"
      ],
      certification: "Industry Recognized Diploma",
      jobOpportunities: ["Software Developer", "Web Designer", "Database Administrator", "IT Support Specialist"]
    },
    {
      id: 3,
      name: "DCA (Diploma in Computer Applications)",
      description: "Professional diploma course for comprehensive computer application knowledge.",
      longDescription: "Diploma in Computer Applications (DCA) is a 6-month professional course that covers essential computer applications and software used in modern offices. This course is perfect for students and professionals looking to enhance their computer skills for better career opportunities.",
      duration: "6 Months",
      students: "600+",
      rating: 4.7,
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&auto=format",
      badge: "Professional",
      features: ["Computer Fundamentals", "Office Applications", "Database", "Project Work"],
      curriculum: [
        "Computer Basics & Hardware",
        "Operating Systems",
        "MS Word Advanced",
        "MS Excel with Functions",
        "MS PowerPoint Professional",
        "Database Concepts",
        "Internet Applications",
        "Email & Communication",
        "Digital Marketing Basics"
      ],
      certification: "Professional Diploma",
      jobOpportunities: ["Office Executive", "Data Analyst", "Administrative Assistant", "Computer Trainer"]
    },
    {
      id: 4,
      name: "TALLY with GST",
      description: "Master accounting software with GST implementation for finance professionals.",
      longDescription: "This specialized course focuses on Tally Prime software with comprehensive GST implementation. Perfect for accounting professionals, business owners, and students pursuing careers in finance and accounting. Learn to manage complete business accounting with modern GST compliance.",
      duration: "2 Months",
      students: "300+",
      rating: 4.6,
      price: 5999,
      originalPrice: 8999,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&auto=format",
      badge: "Industry Ready",
      features: ["Tally Prime", "GST Implementation", "Payroll", "Banking"],
      curriculum: [
        "Tally Prime Introduction",
        "Company Creation & Configuration",
        "Voucher Entry & Accounting",
        "GST Configuration & Implementation",
        "Inventory Management",
        "Payroll Processing",
        "Banking & Reconciliation",
        "Financial Reports & Analysis",
        "Data Security & Backup"
      ],
      certification: "Tally Certified",
      jobOpportunities: ["Accountant", "GST Consultant", "Finance Executive", "Tally Operator"]
    },
    {
      id: 5,
      name: "O-LEVEL (Foundation Level)",
      description: "NIELIT certification equivalent to foundation level in Computer Science Engineering.",
      longDescription: "O-Level is a foundation level course in Computer Science and Applications offered by NIELIT. This course is equivalent to a foundation level course in Computer Science & Engineering/BCA/B.Sc.(Computer Science). It provides comprehensive knowledge of programming, system analysis, and software development.",
      duration: "12 Months",
      students: "400+",
      rating: 4.8,
      price: 18999,
      originalPrice: 28999,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop&auto=format",
      badge: "NIELIT Certified",
      features: ["Programming Languages", "System Analysis", "Database", "Government Recognition"],
      curriculum: [
        "IT Tools & Business Systems",
        "Programming in C Language",
        "Web Designing & Publishing",
        "Internet Technology & Web Design",
        "Project Work",
        "Practical Examinations",
        "System Analysis & Design",
        "Database Management Systems"
      ],
      certification: "NIELIT O-Level Certificate",
      jobOpportunities: ["Programmer", "Web Developer", "System Analyst", "Software Engineer"]
    },
    {
      id: 6,
      name: "Coding Bootcamp",
      description: "Intensive programming course covering modern web development technologies.",
      longDescription: "An intensive 6-month coding bootcamp designed to transform beginners into job-ready web developers. Learn modern technologies like HTML5, CSS3, JavaScript, React.js, and Node.js through hands-on projects and real-world applications.",
      duration: "6 Months",
      students: "200+",
      rating: 4.9,
      price: 25999,
      originalPrice: 39999,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&auto=format",
      badge: "High Demand",
      features: ["HTML/CSS/JS", "React.js", "Node.js", "Portfolio Projects"],
      curriculum: [
        "HTML5 & Semantic Web",
        "CSS3 & Modern Layouts",
        "JavaScript ES6+",
        "React.js Framework",
        "Node.js & Express.js",
        "Database Integration",
        "Git & Version Control",
        "Deployment & Hosting",
        "Portfolio Development",
        "Job Interview Preparation"
      ],
      certification: "Full Stack Developer Certificate",
      jobOpportunities: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "React Developer"]
    }
  ];

  const course = courses.find(c => c.id === parseInt(courseId || '1'));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Button onClick={() => navigate('/')} variant="default">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleEnrollNow = () => {
    // This will be implemented with payment gateway
    alert('Payment gateway integration coming soon!');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Course Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
                {course.badge}
              </Badge>
              {course.originalPrice > course.price && (
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-semibold">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Course Info */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{course.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.description}</p>

              {/* Course Stats */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">{course.students}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-medium">{course.rating}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                {course.originalPrice > course.price && (
                  <span className="text-xl text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleEnrollNow} variant="default" size="lg" className="flex-1">
                Enroll Now
              </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Course Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{course.longDescription}</p>
                </CardContent>
              </Card>

              {/* Curriculum */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.curriculum.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Features */}
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certification */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.certification}</p>
                </CardContent>
              </Card>

              {/* Job Opportunities */}
              <Card>
                <CardHeader>
                  <CardTitle>Job Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.jobOpportunities.map((job, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {job}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;