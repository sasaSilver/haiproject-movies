"use client";

import { Button } from "~/components/ui/button";
import { Clock, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const featuredMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    image: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
    year: 2010,
    duration: "2h 28min",
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces his greatest challenge as the Joker wreaks havoc on Gotham City.",
    image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    year: 2008,
    duration: "2h 32min",
    genre: "Action",
  },
  {
    id: 3,
    title: "Interstellar",
    description: "Explorers travel through a wormhole to save humanity.",
    image: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    year: 2014,
    duration: "2h 49min",
    genre: "Sci-Fi",
  },
];

const recommendedMovies = [
  {
    id: 4,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 9.3,
    year: 1994,
    duration: "2h 22min",
    genre: "Drama",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine.",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 8.9,
    year: 1994,
    duration: "2h 34min",
    genre: "Crime",
  },
  {
    id: 6,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge.",
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    rating: 8.5,
    year: 2024,
    duration: "2h 46min",
    genre: "Sci-Fi",
  },
];

export default function WatchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  return (
    <div className="pt-16">
      {/* Featured Movies Carousel */}
      <div className="relative h-[60vh] bg-zinc-900">
        <div className="absolute inset-0 overflow-hidden">
          {featuredMovies.map((movie, index) => (
            <div
              key={movie.id}
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
                <span className="inline-block px-2 py-1 rounded-md bg-white/10 text-white text-sm mb-4">
                  {movie.genre}
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">{movie.title}</h2>
                <p className="text-lg text-white/80 mb-6">{movie.description}</p>
                <div className="flex items-center gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <Clock className="mr-2 h-5 w-5" />
                    Watch Later
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Movie Categories */}
      <div className="px-8 py-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Recommended Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {recommendedMovies.map((movie) => (
            <div
              key={movie.id}
              className="group relative rounded-lg overflow-hidden bg-zinc-900"
            >
              <div className="aspect-[2/3] relative overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <Button 
                  size="icon" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="h-6 w-6 ml-1" fill="white" />
                </Button>
              </div>

              <div className="p-3">
                <h3 className="text-sm font-medium text-white truncate">{movie.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    {movie.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 