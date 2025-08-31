import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Mendis",
      position: "CEO, Lanka Industries Ltd",
      company: "Manufacturing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "CSTI Bureau transformed our operations completely. Their strategic consulting helped us increase efficiency by 40% and reduce costs by 25%. The team's expertise in local market dynamics combined with international best practices made all the difference."
    },
    {
      name: "Priya Wickramasinghe",
      position: "HR Director, Ceylon Bank",
      company: "Banking & Finance",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The leadership development program exceeded our expectations. Our management team's performance improved significantly, and the practical approach to training made the learning experience engaging and effective. Highly recommended!"
    },
    {
      name: "Mahesh Fernando",
      position: "Managing Director, Tech Solutions Lanka",
      company: "Information Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with CSTI Bureau was a game-changer for our digital transformation journey. Their consultants understood our challenges and provided tailored solutions that delivered measurable results within months."
    },
    {
      name: "Samantha Perera",
      position: "Operations Manager, Ceylon Export Company",
      company: "Export & Trade",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quality management system implementation by CSTI Bureau helped us achieve ISO certification and significantly improved our export capabilities. Their professional approach and attention to detail were impressive."
    },
    {
      name: "Nuwan Silva",
      position: "Founder, Green Energy Solutions",
      company: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a startup, we needed strategic guidance to scale effectively. CSTI Bureau's business consulting services provided us with a clear roadmap for growth. We've tripled our revenue since implementing their recommendations."
    },
    {
      name: "Sadun Silva",
      position: "Founder, Green Tech Solutions",
      company: "Software Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a startup, we needed strategic guidance to scale effectively. CSTI Bureau's business consulting services provided us with a clear roadmap for growth. We've tripled our revenue since implementing their recommendations."
    }
  ];

  // Auto-rotate testimonials (2 at a time)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = prev + 2;
        return next >= testimonials.length ? 0 : next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-4xl md:text-4xl font-bold text-foreground mb-6">
            {/* What Our <span className="gradient-text">Clients Say</span> */}
            What Our <span className="">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about their 
            transformative experience working with CSTI Bureau.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="relative mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Testimonial */}
              {testimonials[currentTestimonial] && (
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-12 w-12 text-primary" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center space-x-3">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20"
                      />
                      <div>
                        <div className="font-bold text-foreground">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-secondary font-medium text-sm">
                          {testimonials[currentTestimonial].position}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Second Testimonial */}
              {testimonials[currentTestimonial + 1] && (
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-12 w-12 text-primary" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentTestimonial + 1].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial + 1].text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center space-x-3">
                      <img 
                        src={testimonials[currentTestimonial + 1].image} 
                        alt={testimonials[currentTestimonial + 1].name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20"
                      />
                      <div>
                        <div className="font-bold text-foreground">
                          {testimonials[currentTestimonial + 1].name}
                        </div>
                        <div className="text-secondary font-medium text-sm">
                          {testimonials[currentTestimonial + 1].position}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {testimonials[currentTestimonial + 1].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index * 2)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentTestimonial / 2) === index
                    ? 'bg-secondary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center fade-in-up animate">
            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center fade-in-up animate" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center fade-in-up animate" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center fade-in-up animate" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">2000+</div>
            <div className="text-muted-foreground">Job Orders Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;