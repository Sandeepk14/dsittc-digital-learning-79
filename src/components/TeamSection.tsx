import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Phone } from "lucide-react";
import ceoImage from "@/assets/ceo-image.png";
import ceoImage2 from "@/assets/ceo image.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Er. Pradeep Kumar",
      title: "CEO & Founder",
      image: ceoImage2 ,
      bio: "Visionary leader with 15+ years of experience in digital education and technology training.",
      expertise: ["Digital Education", "Leadership", "Business Strategy", "Technology Innovation"],
      contact: {
        email: "ceo@dsittc.com",
        phone: "+91 9140238240",
        linkedin: "linkedin.com/in/dsittc-ceo"
      }
    },
    {
      id: 2,
      name: "Er. Sandeep Kumar",
      title: "Director of Academics",
      image: ceoImage,
      bio: "B.Tech in Information Technology with specialization in educational technology and curriculum development.",
      expertise: ["Curriculum Design", "Computer Science", "Educational Technology", "Research"],
      contact: {
        email: "skraj5873@gmail.com",
        phone: "+91 98765 43211",
        linkedin: "linkedin.com/in/priya-sharma"
      }
    },
    {
      id: 3,
      name: "Sanket Kumar",
      title: "Senior Programming Instructor",
      image: "ceoImage",
      bio: "Full-stack developer turned educator with expertise in modern web technologies and programming languages.",
      expertise: ["Web Development", "JavaScript", "Python", "Full-Stack Development"],
      contact: {
        email: "rajesh@dsittc.com",
        phone: "+91 98765 43212",
        linkedin: "linkedin.com/in/rajesh-kumar"
      }
    },
    {
      id: 4,
      name: "Reema",
      title: "Digital Marketing Trainer",
      image: "ceoImage",
      bio: "Digital marketing expert with proven track record in helping businesses grow through online strategies.",
      expertise: ["Digital Marketing", "SEO/SEM", "Social Media", "Content Strategy"],
      contact: {
        email: "sneha@dsittc.com",
        phone: "+91 98765 43213",
        linkedin: "linkedin.com/in/sneha-patel"
      }
    },
    {
      id: 5,
      name: "Anjali",
      title: "Tally & Accounting Expert",
      image: "ceoImage",
      bio: "Chartered Accountant with extensive experience in Tally, GST, and financial software training.",
      expertise: ["Tally", "Accounting", "GST", "Financial Software"],
      contact: {
        email: "amit@dsittc.com",
        phone: "+91 98765 43214",
        linkedin: "linkedin.com/in/amit-verma"
      }
    },
    {
      id: 6,
      name: "Ritu Singh",
      title: "Student Support Manager",
      image: "ceoImage",
      bio: "Dedicated to student success with expertise in career counseling and placement assistance.",
      expertise: ["Career Counseling", "Student Support", "Placement", "Soft Skills"],
      contact: {
        email: "ritu@dsittc.com",
        phone: "+91 98765 43215",
        linkedin: "linkedin.com/in/ritu-singh"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of industry professionals and educators committed to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={member.id} className="group overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 flex flex-col items-center">
                {/* Image Section */}
                <div className="relative w-40 h-40 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 p-1">
                    <div className="bg-background rounded-full w-full h-full p-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{member.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Team of Experts
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you passionate about education and technology? We're always looking for talented individuals to join our mission of empowering students with digital skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:careers@dsittc.com" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              <Mail className="h-4 w-4 mr-2" />
              careers@dsittc.com
            </a>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium">
              <Phone className="h-4 w-4 mr-2" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
