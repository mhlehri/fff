import PromptBox from "./PromptBox";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-[#5553AA] py-20 space-y-5">
      <div className="text-center space-y-5 text-white">
        <h1 className="text-5xl">AI Image Generator</h1>
        <p className="text-lg font-medium">
          Generate stunning images from text prompts effortlessly.
        </p>
      </div>
      <PromptBox />
    </section>
  );
}
