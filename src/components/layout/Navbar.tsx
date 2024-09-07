import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex gap-5 items-center max-w-screen-xl mx-auto py-4 px-2">
      <Image width={128} height={128} src="/logo.png" alt="ai-seo logo" />
      <ul className="space-x-4 flex font-medium">
        <li>Readability Improver</li>
        <li>Undetectable Content</li>
        <li>Topical Authority</li>
        <li>Outrank Article</li>
      </ul>
    </nav>
  );
}
