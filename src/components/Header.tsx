import { Button } from "~/components/ui/button";
import { Bell, Sun } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <Link href="/" className="text-2xl font-bold text-white">
          MovieApp
        </Link>

        <SearchBar />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Sun className="h-5 w-5" />
          </Button>
          <Button className="ml-4">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
} 