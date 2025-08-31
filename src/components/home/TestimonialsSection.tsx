import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

const testimonials = [
  {
    name: "David Cohen",
    position: "Director of Recruitment",
    company: "AgriTech Employers Association, Israel",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "We have worked with CSTI Bureau for several years to recruit skilled farm workers. Their trainees arrive well-prepared, disciplined, and knowledgeable in modern agriculture practices, making them valuable assets to our industry."
  },
  {
    name: "Ahmed Al-Mansoor",
    position: "HR Director",
    company: "Gulf Hospitality Group, UAE",
    image: "https://usercontent.one/wp/www.adhrb.org/wp-content/uploads/2023/12/201904mena_uae_-1169x800.jpg?media=1702831202",
    rating: 5,
    text: "CSTI Bureau consistently provides us with professionally trained hospitality staff. Their graduates understand customer service, adapt quickly to our work culture, and maintain the highest standards of professionalism."
  },
  {
    name: "Jonathan Weber",
    position: "Operations Manager",
    company: "EuroBuild Constructions, Germany",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The construction workers sourced through CSTI Bureau are skilled, safety-conscious, and hardworking. They meet European standards and have proven to be reliable in our large-scale infrastructure projects."
  },
  {
    name: "Fatima Al-Khaled",
    position: "Recruitment Head",
    company: "Middle East Agro Group, Saudi Arabia",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "We are extremely satisfied with the agricultural trainees from CSTI Bureau. They are not only technically skilled but also punctual and committed, which makes them stand out in the Gulf market."
  },
  {
    name: "Luca Rossi",
    position: "Training & Development Manager",
    company: "Mediterranean Resorts, Italy",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "CSTI Bureau has been a reliable partner in supplying trained hospitality staff. Their candidates arrive with strong communication skills, a service mindset, and the ability to handle international guests with professionalism."
  },
  {
    name: "Peter Johansson",
    position: "HR Partner",
    company: "Nordic Agro Solutions, Denmark",
    image: "https://liu.se/-/media/employeeimages/71/employee_image_petjo71.jpeg?as=1&w=300&h=300&cr=1&crw=300&crh=300&bc=%23ffffff&hash=C4E87126BD992A479EC2562E365ACA54",
    rating: 5,
    text: "Our collaboration with CSTI Bureau has been excellent. The Sri Lankan workers they provide are hardworking, quick learners, and integrate seamlessly into our agricultural teams across Denmark."
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