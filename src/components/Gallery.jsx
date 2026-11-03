// Only images that are present in public/images are listed here.
const photos = [
  { file: "mountain_1.jpg", title: "Mountain 1" },
  { file: "mountain_2.jpeg", title: "Mountain 2" },
  { file: "mountain_4.jpg", title: "Mountain 4" },
  { file: "jatin.jpg", title: "Jatin" },
  { file: "deakin.jpg", title: "Deakin" },
  { file: "data_science.jpg", title: "Data Science" },
  { file: "network.jpg", title: "Network" }
];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto my-12 px-6 text-center" id="photos">
      <h2 className="text-3xl font-bold text-teal-700 mb-7">Photos Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <figure className="overflow-hidden rounded-lg" key={photo.file}>
            <img
              className="block w-full h-56 object-cover"
              src={`/images/${photo.file}`}
              alt={photo.title}
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-600 py-2">{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
