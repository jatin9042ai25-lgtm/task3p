const projects = [
  {
    name: "Data Science",
    description: "Exploring data science, analytics and useful data-driven ideas.",
    image: "/images/data_science.jpg"
  },
  {
    name: "Networking",
    description: "Learning about computer networks and connected systems.",
    image: "/images/network.jpg"
  },
  {
    name: "Travel and Nature",
    description: "A collection of mountain landscapes and travel inspiration.",
    image: "/images/mountain_1.jpg"
  }
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto my-12 px-6 text-center" id="work">
      <h2 className="text-3xl font-bold text-teal-700 mb-7">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article className="text-left border border-gray-200 rounded-lg p-4 shadow-sm" key={project.name}>
            <img className="w-full h-40 object-cover rounded-md" src={project.image} alt={project.name} />
            <h3 className="text-lg font-bold mt-4 mb-2">{project.name}</h3>
            <p className="text-gray-600 text-sm leading-6">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
