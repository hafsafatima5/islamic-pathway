import CourseCard from "@/components/CourseCard";
import { BookOpen, BookMarked, Brain, Lightbulb, Scale, Heart } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Tajweed",
      description: "Master the art of proper Quran pronunciation. Learn the rules of recitation including Makhaarij (articulation points), Sifaat (characteristics of letters), and proper application of Tajweed rules.",
      duration: "3-6 months",
      icon: <BookOpen className="w-7 h-7 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Nazra",
      description: "Learn to read the Quran fluently with correct pronunciation. Perfect for beginners who want to read the Quran with confidence and understanding.",
      duration: "6-12 months",
      icon: <BookMarked className="w-7 h-7 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Hifz",
      description: "Memorize the Holy Quran with proven techniques. Our structured program includes regular revision, understanding of meanings, and spiritual guidance throughout your memorization journey.",
      duration: "2-4 years",
      icon: <Brain className="w-7 h-7 text-secondary" />,
      color: "bg-secondary/10",
    },
    {
      title: "Basics of Islam",
      description: "Understand the fundamental beliefs and practices of Islam. Learn about the five pillars, articles of faith, and essential Islamic knowledge every Muslim should know.",
      duration: "3-4 months",
      icon: <Lightbulb className="w-7 h-7 text-accent" />,
      color: "bg-accent/10",
    },
    {
      title: "Basics of Fiqh",
      description: "Study Islamic jurisprudence and learn about worship, transactions, and daily life rulings. Understand the principles of Islamic law and their practical application.",
      duration: "6-8 months",
      icon: <Scale className="w-7 h-7 text-primary-light" />,
      color: "bg-primary/10",
    },
    {
      title: "Islamic Etiquette (Adab)",
      description: "Learn the beautiful manners and etiquette taught by Prophet Muhammad (ﷺ). Develop character, social etiquette, and spiritual refinement through Islamic teachings.",
      duration: "3-4 months",
      icon: <Heart className="w-7 h-7 text-secondary" />,
      color: "bg-secondary/10",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 bg-gradient-islamic text-primary-foreground">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover' }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive Islamic education programs designed for students of all levels. 
            Each course is taught by qualified instructors with personalized attention.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Course Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  One-on-One Sessions
                </h3>
                <p className="text-muted-foreground">
                  Each student receives personalized attention with dedicated one-on-one sessions, 
                  ensuring optimal learning and progress.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Flexible Scheduling
                </h3>
                <p className="text-muted-foreground">
                  Choose class times that fit your schedule. We accommodate students from 
                  different time zones around the world.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Qualified Instructors
                </h3>
                <p className="text-muted-foreground">
                  Learn from certified teachers with Ijazah (certification) and years of 
                  experience in Islamic education.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Progress Tracking
                </h3>
                <p className="text-muted-foreground">
                  Regular assessments, feedback, and progress reports to help you stay on 
                  track with your learning goals.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center bg-primary/5 p-8 rounded-lg border border-primary/20">
              <p className="text-lg text-foreground mb-2">
                "Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise."
              </p>
              <p className="text-sm text-muted-foreground">- Prophet Muhammad (ﷺ)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
