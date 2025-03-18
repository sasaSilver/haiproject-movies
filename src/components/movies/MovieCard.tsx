import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "~/components/ui/card";
import { Clock, Star, ThumbsUp } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  genre: string;
  year: number;
  duration: string;
}

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-[200px]">
        <img
          src={movie.image}
          alt={movie.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <CardHeader className="p-0">
            <CardTitle className="text-white text-xl">{movie.title}</CardTitle>
            <CardDescription className="flex items-center gap-4 text-sm text-white/80">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.duration}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {movie.rating}
              </span>
            </CardDescription>
          </CardHeader>
        </div>
      </div>
      <div className="p-4">
        <CardContent className="p-0 pb-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{movie.description}</p>
        </CardContent>
        <CardFooter className="p-0 flex justify-between">
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Watch Later
          </Button>
          <Button variant="outline" size="sm">
            <ThumbsUp className="mr-2 h-4 w-4" />
            Like
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
} 