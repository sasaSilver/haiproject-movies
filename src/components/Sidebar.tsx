import Link from "next/link";
import { Tv, Zap, PlaySquare, History, Film, Radio } from "lucide-react";
import { cn } from "~/lib/utils";

const navigation = [
  {
    title: "Popular",
    icon: Zap,
    href: "/",
  },
  {
    title: "TV Shows",
    icon: Tv,
    href: "/tv",
  },
  {
    title: "Movies",
    icon: Film,
    href: "/movies",
  },
  {
    title: "Live",
    icon: Radio,
    href: "/live",
  },
];

const library = [
  {
    title: "Watch Later",
    icon: PlaySquare,
    href: "/watchlist",
  },
  {
    title: "History",
    icon: History,
    href: "/history",
  },
];

export function Sidebar() {
  return (
    <aside className="fixed top-16 left-0 w-60 h-[calc(100vh-4rem)] bg-zinc-950 border-r border-zinc-800 py-4">
      <nav className="space-y-6 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                "text-zinc-400 hover:text-white hover:bg-zinc-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </div>

        <div className="space-y-1">
          <h3 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Library
          </h3>
          {library.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                "text-zinc-400 hover:text-white hover:bg-zinc-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
} 