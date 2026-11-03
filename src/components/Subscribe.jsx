import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
    } else if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email.");
    } else {
      setMessage("Email submitted successfully!");
      setEmail("");
    }
  };

  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-3xl font-bold">
        SIGN UP FOR OUR DAILY INSIDER
      </h2>

      <p className="mt-4 text-gray-600">
        Enter your email to receive a welcome email.
      </p>

      <form onSubmit={handleSubscribe} className="mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-4 rounded w-96"
        />

        <button
          type="submit"
          className="bg-teal-700 text-white px-8 py-4 rounded ml-3"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-4 font-semibold">
        {message}
      </p>
    </div>
  );
}

export default Newsletter;