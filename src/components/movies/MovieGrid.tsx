import { MovieCard } from "./MovieCard";

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

interface MovieGridProps {
  title: string;
  movies: Movie[];
}

export function MovieGrid({ title, movies }: MovieGridProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="relative">
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 min-w-max">
            {movies.map((movie) => (
              <div key={movie.id} className="w-[300px] flex-shrink-0">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 