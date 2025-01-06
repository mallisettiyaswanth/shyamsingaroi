import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export function FashionSection() {
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        MEN'S FASHION WORLD
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Top view in this week
      </p>

      <Tabs defaultValue="topwear" className="w-full">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto">
          <TabsTrigger value="topwear">TOPWEAR</TabsTrigger>
          <TabsTrigger value="bottomwear">BOTTOMWEAR</TabsTrigger>
        </TabsList>
        <TabsContent value="topwear">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt={`Product ${i + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-black px-6 py-2 rounded-md">
                        Quick View
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="bottomwear">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src="/placeholder.svg?height=400&width=300"
                      alt={`Product ${i + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-black px-6 py-2 rounded-md">
                        Quick View
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
