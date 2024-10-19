import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_nxnq06e",
        "template_84hx9fo",
        formData,
        "4RQulCjXeHXEO8tH5"
      )
      .then(() => {
        alert("Message sent!");
        setFormData({ email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            loading ? "opacity-50" : ""
          }`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
