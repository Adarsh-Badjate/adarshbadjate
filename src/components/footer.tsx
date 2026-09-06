import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="flex justify-between flex-wrap gap-3 pt-6 md:pt-8 text-xs md:text-[13px] text-stone-400">
      <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/adarsh-badjate"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-500 hover:text-orange-700 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-stone-500 hover:text-orange-700 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
