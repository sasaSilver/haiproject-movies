import { Button } from "~/components/ui/button";
import { Play, Clock } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Movie Recommendations
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Discover your next favorite movie with our AI-powered recommendation system.
          </p>
          <div className="flex gap-4">
            <Link href="/watch">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                <Play className="mr-2 h-5 w-5" />
                Start Watching
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Clock className="mr-2 h-5 w-5" />
              Watch Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 