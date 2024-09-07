import { Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";

const navlinks = [
  {
    title: "Info",
    links: [
      "Contact Us",
      "Pricing",
      "Roadmap",
      "Become an Affiliate",
      "Blog",
      "Article Rewriters Blogs",
    ],
  },
  {
    title: "Products",
    links: [
      "Paraphraser",
      "Article Generator",
      "Email Generator",
      "Sentence Rewriter",
      "Paragraph Rewriter",
      "Rewording Tool",
      "Diff Checker",
    ],
  },
  {
    title: "Admin",
    links: [
      "Privacy Policy",
      "Fair Usage Policy",
      "Sitemap",
      "Terms & Conditions",
    ],
  },
  {
    title: "Pages",
    links: [
      "Facebook",
      "Twitter",
      "Stock Images",
      "Paraphrase Languages",
      "Comparisons",
      "Readability Improver",
      "Shortlyai Alternative Text to Image AI Generator",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-deep mt-5 mb-0 bg-slate-900">
      <div className="max-w-screen-xl mx-auto px-2 py-5">
        <ul className="nav border-bottom justify-content-center pb-2"></ul>
        <div className="flex justify-between flex-col-reverse xl:flex-row pt-3 text-muted gap-6">
          <p className="text-white flex-col flex gap-3 mx-auto max-w-44">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              style={{ maxWidth: "150px", marginRight: "1rem" }}
              alt=""
            />
            © {new Date().getFullYear()} AISEO Officials. All rights reserved.
          </p>
          <div className="flex justify-between gap-5 sm:gap-10 flex-wrap">
            {navlinks.map((item, index) => (
              <ul key={`${index}_footer_nav_links_ul`} className="space-y-1">
                <h6 className="font-semibold">{item.title}</h6>
                {item.links.map((link, index) => (
                  <li
                    key={`${index}_footer_nav_links_li`}
                    className="text-slate-300"
                  >
                    <a href="">{link}</a>{" "}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
