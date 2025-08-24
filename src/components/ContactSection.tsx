import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your digital learning journey? Contact us today for course details and enrollment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Visit Our Institute</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        BUS STAND, NH31 RAUZA, Ghazipur,<br />
                        Uttar Pradesh - 233002,<br />
                        
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                          +91 9140238240
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+919876543211" className="hover:text-primary transition-colors">
                          +91 9305525008
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@dsittc.com" className="hover:text-primary transition-colors">
                         info@dsitechnical.edug.in
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:admissions@dsittc.com" className="hover:text-primary transition-colors">
                          admissions@dsittc.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="bg-info/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-info" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <Card className="shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <iframe
                  src="https://maps.google.com/maps?q=DSI%20Technical%20Training%20Centre%20Private%20Limited&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Course Interest</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                    <option value="">Select a course</option>
                    <option value="ccc">CCC (Course on Computer Concepts)</option>
                    <option value="adca">ADCA (Advanced Diploma in Computer Applications)</option>
                    <option value="dca">DCA (Diploma in Computer Applications)</option>
                    <option value="tally">TALLY with GST</option>
                    <option value="olevel">O-LEVEL (Foundation Level)</option>
                    <option value="coding">Coding Bootcamp</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your learning goals and any questions you have..."
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  We typically respond within 2-4 hours during business days
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our admission counselors are available to help you choose the right course and answer any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
