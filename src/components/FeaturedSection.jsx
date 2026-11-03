import ContentCard from "./ContentCard.jsx";

export default function FeaturedSection({ title, items, buttonText }) {
  const sectionId = title === "Featured Articles" ? "articles" : "tutorials";

  return (
    <section className="max-w-6xl mx-auto my-12 px-6 text-center" id={sectionId}>
      <h2 className="text-3xl font-bold text-teal-700 mb-7">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => <ContentCard key={item.id} item={item} />)}
      </div>
      <button className="mt-6 px-6 py-3 rounded-full bg-gray-200 hover:bg-teal-100" type="button">
        {buttonText}
      </button>
    </section>
  );
}
