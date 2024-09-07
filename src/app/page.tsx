import Hero from "@/components/section/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import ExplorePrompt from "@/components/section/explore_prompt/ExplorePrompt";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="bg-primary-foreground">
        <Hero />

        <ExplorePrompt />
      </main>
    </div>
  );
}
