import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Timer, CheckSquare, Activity, FileText, Youtube, LayoutDashboard, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description: "Get a bird's eye view of your productivity metrics and daily progress"
    },
    {
      icon: Timer,
      title: "Focus Tools",
      description: "Pomodoro timers, stopwatch, and countdown tools to maximize your concentration"
    },
    {
      icon: CheckSquare,
      title: "Tasks",
      description: "Organize and track your tasks efficiently with our smart task manager"
    },
    {
      icon: Activity,
      title: "Wellness",
      description: "Track your calories and maintain a healthy lifestyle while staying productive"
    },
    {
      icon: FileText,
      title: "AI Documents",
      description: "Analyze and summarize documents with the power of AI"
    },
    {
      icon: Youtube,
      title: "Video Search",
      description: "Find and summarize educational videos with AI-powered search"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Login Button - Top Right */}
        <Button
          onClick={() => navigate("/auth")}
          variant="outline"
          className="absolute top-8 right-8 font-medium"
        >
          Login
        </Button>

        {/* Hero Content */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
            Focus Flow
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your all-in-one productivity suite to stay focused, organized, and achieve more every day
          </p>
          
          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <p className="text-sm text-muted-foreground">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Everything You Need to Stay Productive
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-8 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users who have supercharged their workflow with Focus Flow
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/auth")}
            className="text-lg px-8 py-6 gap-2"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <p className="text-center text-muted-foreground">
          © 2025 Focus Flow. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
