import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const sectionVariants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const { h2: MotionH2, p: MotionP, form: MotionForm, div: MotionDiv } = motion;

export default function Contact() {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [serviceId, setServiceId] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [showSetup, setShowSetup] = useState(false);

  useEffect(() => {
    const envService = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const envTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const envPublic = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    setServiceId(localStorage.getItem("emailjs_service_id") || envService);
    setTemplateId(localStorage.getItem("emailjs_template_id") || envTemplate);
    setPublicKey(localStorage.getItem("emailjs_public_key") || envPublic);

    // Only show setup panel in dev or when explicitly enabled by a local flag
    const flag = localStorage.getItem("emailjs_show_setup") === "1";
    setShowSetup(import.meta.env.DEV || flag);
  }, []);

  const saveConfig = () => {
    localStorage.setItem("emailjs_service_id", serviceId);
    localStorage.setItem("emailjs_template_id", templateId);
    localStorage.setItem("emailjs_public_key", publicKey);
    setStatus("✅ EmailJS config saved in your browser.");
    setTimeout(() => setStatus(""), 3000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      setStatus("❌ Please configure EmailJS first.");
      return;
    }
    try {
      setLoading(true);
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: name, from_email: email, message },
        { publicKey }
      );
      setStatus("✅ Message sent! I'll get back to you soon.");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Check EmailJS settings and console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <MotionH2 variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="text-3xl font-bold flex items-center gap-3">
          <span className="font-mono text-accent">03.</span> Contact
        </MotionH2>

        <MotionP variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-3 text-gray-400">
          Feel free to reach out for opportunities, collaborations, or just to say hi.
        </MotionP>

        <MotionForm onSubmit={onSubmit} variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} aria-label="Name" required className="p-3 rounded border bg-gray-900 border-gray-700" />
            <input type="email" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-label="Email" required className="p-3 rounded border bg-gray-900 border-gray-700" />
          </div>

          <textarea placeholder="Your message" value={message} onChange={(e)=>setMessage(e.target.value)} aria-label="Message" className="p-3 rounded border bg-gray-900 border-gray-700 min-h-[140px]" required />

          <div className="flex items-center gap-3">
            <button type="submit" disabled={loading} className="px-6 py-3 bg-accent text-black font-bold rounded hover:bg-accent/90 disabled:opacity-60">{loading ? "Sending..." : "Send message"}</button>
            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || "shannu2409@gmail.com"}`} className="text-sm text-gray-400 hover:text-accent">or email directly</a>
          </div>
        </MotionForm>

        {status && <p className="mt-4 text-sm">{status}</p>}

        {showSetup && (
          <MotionDiv variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 rounded-lg border bg-gray-800 p-4">
            <details>
              <summary className="cursor-pointer select-none text-sm text-gray-400">Setup EmailJS (serviceId, templateId, publicKey)</summary>
              <div className="mt-4 grid gap-3">
                <div className="grid sm:grid-cols-3 gap-3">
                  <input placeholder="Service ID" value={serviceId} onChange={(e)=>setServiceId(e.target.value)} className="p-2 rounded border bg-gray-900 border-gray-700" />
                  <input placeholder="Template ID" value={templateId} onChange={(e)=>setTemplateId(e.target.value)} className="p-2 rounded border bg-gray-900 border-gray-700" />
                  <input placeholder="Public Key" value={publicKey} onChange={(e)=>setPublicKey(e.target.value)} className="p-2 rounded border bg-gray-900 border-gray-700" />
                </div>
                <div className="text-xs text-gray-400">
                  Template params must include: <code>from_name</code>, <code>from_email</code>, <code>message</code>.
                </div>
                <div>
                  <button type="button" onClick={saveConfig} className="px-3 py-1 bg-accent text-black rounded">Save settings</button>
                </div>
              </div>
            </details>
          </MotionDiv>
        )}
      </div>
    </section>
  );
}
