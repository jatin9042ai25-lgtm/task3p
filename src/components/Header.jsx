import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 md:px-16 py-5 bg-white shadow-sm">
      <a className="flex items-center gap-2 text-xl font-bold text-teal-700 no-underline" href="#home">
        <Code2 size={25} /> DEV@Deakin
      </a>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-gray-700">
        <a className="hover:text-teal-700" href="#about">About</a>
        <a className="hover:text-teal-700" href="#work">Work</a>
        <a className="hover:text-teal-700" href="#photos">Photos</a>
        <a className="hover:text-teal-700" href="#articles">Articles</a>
        <a className="hover:text-teal-700" href="#tutorials">Tutorials</a>
        <a className="hover:text-teal-700" href="#subscribe">Subscribe</a>
      </nav>
    </header>
  );
}
