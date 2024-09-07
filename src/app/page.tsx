import ExplorePrompt from "@/components/section/explore_prompt/ExplorePrompt";
import Hero from "@/components/section/hero/Hero";

export default function Home() {
  return (
    <div className="">
      <main className="bg-primary-foreground">
        <Hero />

        <ExplorePrompt />
      </main>
    </div>
  );
}
