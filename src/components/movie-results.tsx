import { Movie } from "~/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface MovieResultsProps {
  movies: Movie[];
}

export function MovieResults({ movies }: MovieResultsProps) {
  if (movies.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No movies found. Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <Card key={movie.id} className="overflow-hidden">
          <div className="aspect-[2/3] relative">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{movie.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {movie.year} • {movie.director}
              </p>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span>{movie.rating.toFixed(1)}</span>
              </div>
              <p className="text-sm line-clamp-3">{movie.description}</p>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">Cast:</p>
                <p>{movie.cast.join(", ")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 