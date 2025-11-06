import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  color: string;
}

const CourseCard = ({ title, description, duration, icon, color }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader>
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>One-on-one sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Expert instructors</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link to="/register" className="flex-1">
          <Button className="w-full bg-gradient-islamic hover:opacity-90 transition-opacity">
            Enroll Now
          </Button>
        </Link>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
