export default function About() {
  return (
    <section className="max-w-3xl mx-auto my-12 px-6 text-center" id="about">
      <img
        className="w-32 h-32 rounded-full object-cover mx-auto mb-5"
        src="/images/jatin.jpg"
        alt="Jatin profile"
      />
      <h1 className="text-3xl font-bold text-teal-700 mb-4">About Me</h1>
      <p className="text-gray-700 leading-7">
        I am an AI and ML student currently studying at Chitkara University.
        I am interested in entrepreneurship, travelling and exploring nature.
      </p>
    </section>
  );
}
