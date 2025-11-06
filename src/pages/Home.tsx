import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { BookOpen, BookMarked, Brain, Lightbulb, Scale, Heart } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const Home = () => {
  const featuredCourses = [
    {
      title: "Tajweed",
      description: "Master the art of proper Quran pronunciation with detailed rules and practice.",
      duration: "3-6 months",
      icon: <BookOpen className="w-7 h-7 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Nazra",
      description: "Learn to read the Quran fluently with correct pronunciation and rhythm.",
      duration: "6-12 months",
      icon: <BookMarked className="w-7 h-7 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Hifz",
      description: "Memorize the Holy Quran with proven techniques and regular revision.",
      duration: "2-4 years",
      icon: <Brain className="w-7 h-7 text-secondary" />,
      color: "bg-secondary/10",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "The best among you are those who learn the Quran and teach it." - Prophet Muhammad (ﷺ)
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            We are dedicated to providing authentic Islamic education through qualified teachers, 
            helping students worldwide connect with the Quran and deepen their understanding of Islam.
          </p>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Start your Islamic learning journey with our most popular courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-islamic text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Quran Institute?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Experience excellence in Islamic education with our comprehensive approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Qualified Teachers",
                description: "Learn from certified instructors with years of experience in Islamic education",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Personalized Learning",
                description: "One-on-one sessions tailored to your pace and learning style",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Flexible Schedule",
                description: "Study at times that work best for you, from anywhere in the world",
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Authentic Teachings",
                description: "Learn according to traditional Islamic methodology with modern convenience",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Comprehensive Curriculum",
                description: "From basics to advanced, covering all aspects of Quranic education",
              },
              {
                icon: <BookMarked className="w-8 h-8" />,
                title: "Progress Tracking",
                description: "Regular assessments and feedback to monitor your learning journey",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students worldwide learning the Quran with proper guidance and care.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-gradient-islamic hover:opacity-90 transition-opacity text-lg px-8">
              Enroll Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
