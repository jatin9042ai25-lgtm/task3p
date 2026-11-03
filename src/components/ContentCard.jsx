import { Star } from "lucide-react";

export default function ContentCard({ item }) {
  return (
    <article className="text-left border border-gray-200 rounded-lg p-4 shadow-sm">
      <img className="w-full h-40 object-cover rounded-md" src={item.image} alt={item.title} loading="lazy" />
      <h3 className="text-lg font-bold mt-4 mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-6">{item.description}</p>
      <p className="text-gray-600 text-sm border-b border-gray-300 pb-3 mt-2">e.g., {item.topic}</p>
      <div className="flex justify-between items-center mt-3 text-sm">
        <span className="flex items-center gap-1 text-yellow-600"><Star size={16} fill="currentColor" /> {item.rating}</span>
        <strong>{item.author}</strong>
      </div>
    </article>
  );
}
