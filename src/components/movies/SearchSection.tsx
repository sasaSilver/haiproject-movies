import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Search, Sparkles } from "lucide-react";

export function SearchSection() {
  return (
    <Tabs defaultValue="regular" className="w-full max-w-2xl mx-auto mb-12">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="regular" className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          Regular Search
        </TabsTrigger>
        <TabsTrigger value="ai" className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          AI Search
        </TabsTrigger>
      </TabsList>
      <TabsContent value="regular" className="mt-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search for movies..."
            className="flex-1"
          />
          <Button>Search</Button>
        </div>
      </TabsContent>
      <TabsContent value="ai" className="mt-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Describe what kind of movie you're looking for..."
            className="flex-1"
          />
          <Button>AI Search</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
} 