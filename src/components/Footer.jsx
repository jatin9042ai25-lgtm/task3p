import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 text-teal-950 bg-teal-600">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Explore</h3>
          <a className="block my-2" href="#home">Home</a>
          <a className="block my-2" href="#work">Projects</a>
          <a className="block my-2" href="#articles">Articles</a>
          <a className="block my-2" href="#tutorials">Tutorials</a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Support</h3>
          <a className="block my-2" href="#subscribe">FAQs</a>
          <a className="block my-2" href="#subscribe">Help</a>
          <a className="block my-2" href="mailto:hello@example.com">Contact Us</a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Stay connected</h3>
          <div className="flex gap-3">
            <a className="p-2 rounded bg-teal-800 text-white" href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
            <a className="p-2 rounded bg-teal-800 text-white" href="https://twitter.com" aria-label="Twitter"><Twitter /></a>
            <a className="p-2 rounded bg-teal-800 text-white" href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center mt-8 mb-4">DEV@Deakin</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#home">Privacy Policy</a>
        <a href="#home">Terms</a>
        <a href="#home">Code of Conduct</a>
      </div>
      <p className="text-center text-sm mt-5">© 2026 DEV@Deakin. Student project.</p>
    </footer>
  );
}
