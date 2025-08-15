import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};
const { h2: MotionH2, p: MotionP, form: MotionForm } = motion;

export default function Contact() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get from env variables (Netlify) first
    const envService = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const envTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const envPublic = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    // Fallback to localStorage if available (dev setup)
    const serviceId = localStorage.getItem("emailjs_service_id") || envService;
    const templateId = localStorage.getItem("emailjs_template_id") || envTemplate;
    const publicKey = localStorage.getItem("emailjs_public_key") || envPublic;

    // Store in component state for use in form submission
    if (serviceId && templateId && publicKey) {
      // Store in component state for use in form submission
      window.emailjsConfig = { serviceId, templateId, publicKey };
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = window.emailjsConfig;
    if (!config?.serviceId || !config?.templateId || !config?.publicKey) {
      setStatus("❌ EmailJS not configured. Please contact the administrator.");
      return;
    }

    try {
      setLoading(true);

      // ✅ Correct way to call emailjs.send
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          from_name: name,
          from_email: email,
          message
        },
        config.publicKey
      );

      setStatus("✅ Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <MotionH2
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold flex items-center gap-3"
        >
          <span className="font-mono text-accent">03.</span> Contact
        </MotionH2>

        <MotionP
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-gray-400"
        >
          Feel free to reach out for opportunities, collaborations, or just to say hi.
        </MotionP>

        <MotionForm
          onSubmit={onSubmit}
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Name"
              required
              className="p-3 rounded border bg-gray-900 border-gray-700"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              required
              className="p-3 rounded border bg-gray-900 border-gray-700"
            />
          </div>

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
            className="p-3 rounded border bg-gray-900 border-gray-700 min-h-[140px]"
            required
          />

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-accent text-black font-bold rounded hover:bg-accent/90 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
            <a
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || "shannu2409@gmail.com"}`}
              className="text-sm text-gray-400 hover:text-accent"
            >
              or email directly
            </a>
          </div>
        </MotionForm>

        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
    </section>
  );
}
