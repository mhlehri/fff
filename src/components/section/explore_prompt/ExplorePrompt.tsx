"use client";
import MasonryContent from "@/components/common/MasonryContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1724775624688-d407aa8d9c23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1725012856191-e47343b4ee7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1720048170996-40507a45c720?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1724599824488-ed1e81e11c1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1724589613596-e269be5c0849?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1725504836973-a434fa6c4753?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1724775624688-d407aa8d9c23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1720048170996-40507a45c720?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1725375501406-8207474ec78b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1725526750253-0abf4c3f4665?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1725017710391-a7766d56dfb8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1725489892866-19f336aafdc1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1725133306731-fd82b613300f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1725462566752-db6fa39d2586?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1725109432339-d4c815f517bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ExplorePrompt() {
  return (
    <section className="max-w-screen-xl mx-auto py-20 px-2">
      <h3 className="font-semibold text-2xl">Explore Prompts</h3>
      <div>
        <Tabs defaultValue="account" className="">
          <TabsList className="my-5 flex justify-normal gap-3 flex-wrap h-fit">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Marketing">Marketing</TabsTrigger>
            <TabsTrigger value="People">People</TabsTrigger>
            <TabsTrigger value="Photography">Photography</TabsTrigger>
            <TabsTrigger value="Art">Art</TabsTrigger>
            <TabsTrigger value="Products">Products</TabsTrigger>
            <TabsTrigger value="Landscapes">Landscapes</TabsTrigger>
            <TabsTrigger value="Logos & Icons">Logos & Icons</TabsTrigger>
            <TabsTrigger value="Interior Design">Interior Design</TabsTrigger>
          </TabsList>
          <TabsContent value="All">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="Marketing">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="People">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="Photography">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="Art">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="Products">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="Landscapes">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="Logos & Icons">
            <MasonryContent images={images} />
          </TabsContent>
          <TabsContent value="Interior Design">
            <MasonryContent images={images} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
