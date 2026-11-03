export default function Hero() {
  return (
    <section className="relative" id="home">
      <img
        className="block w-full h-64 md:h-96 object-cover"
        src="/images/deakin.jpg"
        alt="Deakin University"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-4 text-xl">
        Hello, I am Jatin.
      </div>
    </section>
  );
}
