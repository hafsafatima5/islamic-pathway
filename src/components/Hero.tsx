import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-quran.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Quran learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Learn the Quran with{" "}
            <span className="text-primary">Excellence</span> and{" "}
            <span className="text-secondary">Love</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up">
            Join our online institute to learn Quran recitation, memorization, and Islamic 
            knowledge from qualified teachers. Study from the comfort of your home with 
            personalized attention.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-islamic hover:opacity-90 transition-opacity text-lg">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg">
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">6 Courses</h3>
                <p className="text-sm text-muted-foreground">From basics to advanced</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Expert Teachers</h3>
                <p className="text-sm text-muted-foreground">Qualified & experienced</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Certification</h3>
                <p className="text-sm text-muted-foreground">Upon completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
