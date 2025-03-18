"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Search, Sparkles } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { useState } from "react";

export function SearchBar() {
  const [isAISearch, setIsAISearch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex-1 max-w-xl mx-8">
      <Popover open={isFocused && isAISearch}>
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
          <Input
            type="search"
            placeholder={isAISearch ? "Describe what kind of movie you're looking for..." : "Search movies..."}
            className="w-full pl-10 bg-zinc-900 border-zinc-800 group-hover:border-zinc-700 transition-colors"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 ${isAISearch ? 'text-purple-400 hover:text-purple-300' : 'text-zinc-400 hover:text-white'}`}
            onClick={() => setIsAISearch(!isAISearch)}
          >
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>
        <PopoverContent className="w-[400px] p-4" align="start">
          <p className="text-sm text-muted-foreground">
            Try describing the type of movie you want to watch, like:
            <br />
            • "a heartwarming comedy about family"
            <br />
            • "an action movie with plot twists"
            <br />
            • "something like Inception but with more romance"
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
} 