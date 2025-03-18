import { Button } from "~/components/ui/button";

interface GenresSectionProps {
  genres: string[];
}

export function GenresSection({ genres }: GenresSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Browse by Genre</h2>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Button key={genre} variant="outline" size="sm">
            {genre}
          </Button>
        ))}
      </div>
    </div>
  );
} 