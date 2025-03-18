import { HeroSection } from "~/components/movies/HeroSection";
import { GenresSection } from "~/components/movies/GenresSection";
import { MovieGrid } from "~/components/movies/MovieGrid";

// Mock data for featured movies
const featuredMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
    genre: "Sci-Fi",
    year: 2010,
    duration: "2h 28min",
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    genre: "Action",
    year: 2008,
    duration: "2h 32min",
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    genre: "Sci-Fi",
    year: 2014,
    duration: "2h 49min",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 8.7,
    genre: "Drama",
    year: 1994,
    duration: "2h 22min",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 8.5,
    genre: "Crime",
    year: 1994,
    duration: "2h 34min",
  },
];

const trendingMovies = [
  {
    id: 6,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    rating: 8.5,
    genre: "Sci-Fi",
    year: 2024,
    duration: "2h 46min",
  },
  {
    id: 7,
    title: "Poor Things",
    description: "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents.",
    image: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    rating: 8.2,
    genre: "Comedy",
    year: 2023,
    duration: "2h 21min",
  },
  {
    id: 8,
    title: "Oppenheimer",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    rating: 8.4,
    genre: "Biography",
    year: 2023,
    duration: "3h 0min",
  },
  {
    id: 9,
    title: "Barbie",
    description: "Barbie suffers a crisis that leads her to question her world and her existence.",
    image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    rating: 7.0,
    genre: "Comedy",
    year: 2023,
    duration: "1h 54min",
  },
];

const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", 
  "Mystery", "Romance", "Sci-Fi", "Thriller", "Animation", "Documentary"
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <GenresSection genres={genres} />
        <MovieGrid title="Featured Movies" movies={featuredMovies} />
        <MovieGrid title="Trending Now" movies={trendingMovies} />
      </div>
    </main>
  );
}
