import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold text-xl text-indigo-700">
            <span>Chittarla Sai Ram</span>
          </a>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Contact</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="#111827" strokeWidth="2.2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-3">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-3 py-2 bg-indigo-600 text-white rounded-md">Contact</a>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section id="hero" className="pt-20 pb-12 text-center">
          <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-600 shadow-md" />
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold">
            IT Operations Engineer | VMware | Cloud & Infrastructure
          </motion.h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Results-driven IT Operations Engineer with 4+ years of experience in VMware virtualization, IT infrastructure management, and system administration. Expert in managing vRealize Suite (vROps, vRA, NSX-T, Horizon View) and VMware vSphere environments.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Hire Me</a>
            <a href="/Sai_Ram_IT_Operations_Engineer_Resume.pdf" download className="px-4 py-2 border rounded-md hover:bg-gray-100">Download Resume</a>
            <button onClick={() => setShowResume(true)} className="px-4 py-2 border rounded-md hover:bg-gray-100">View Resume</button>
          </div>
        </section>

        <section id="about" className="py-12">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <div className="mt-6 md:flex md:items-center md:gap-6">
            <img src="/profile.jpg" alt="Chittarla Sai Ram professional photo" className="w-48 h-48 rounded-md object-cover shadow-md mb-4 md:mb-0" />
            <p className="mt-3 text-gray-600 leading-relaxed">
              Experienced in managing enterprise-grade VMware environments, cloud infrastructure, and IT automation. Adept at executing migrations, performance tuning, and implementing disaster recovery strategies while ensuring ITIL-compliant operations. Recognized for analytical problem-solving and reliability under pressure.
            </p>
          </div>
        </section>

        <section id="skills" className="py-12">
          <h2 className="text-2xl font-semibold">Core Skills</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Virtualization & VMware", desc: "ESXi, vCenter, DRS, HA, vSphere Replication, HCX" },
              { title: "vRealize Suite", desc: "vROps, vRA, NSX-T, Horizon View" },
              { title: "Migrations & Automation", desc: "vMotion, svMotion, cross-vCenter, PowerCLI scripting" },
              { title: "Windows Server & AD", desc: "2012/2016/2019, Active Directory, Patch Management" },
              { title: "Monitoring & Troubleshooting", desc: "Performance Analysis, Log Insight, Alerts" },
              { title: "Network & Storage", desc: "Replication, Capacity Planning, Security Compliance" },
            ].map((skill, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-5 border rounded-lg bg-white">
                <h4 className="font-semibold">{skill.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "VMware Automation Suite", desc: "Automated VM provisioning using vRA and PowerCLI reducing setup time by 60%." },
              { name: "AWS Infrastructure Migration", desc: "Migrated on-prem workloads to AWS with zero downtime and improved scalability." },
              { name: "Azure AD Integration", desc: "Integrated hybrid identity management across cloud and on-prem environments." },
              { name: "Monitoring Dashboard", desc: "Developed vROps dashboards for proactive infrastructure performance tracking." },
              { name: "Disaster Recovery Strategy", desc: "Designed DR plans ensuring 99.9% availability for critical systems." },
            ].map((p, i) => (
              <div key={i} className="p-5 border rounded-lg bg-white shadow-sm">
                <h4 className="font-semibold">{p.name}</h4>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form onSubmit={handleSubmit} className="p-6 border rounded-lg bg-white">
              <label className="block text-sm">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-2 w-full px-3 py-2 border rounded-md" placeholder="Your name" required />

              <label className="block text-sm mt-4">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="mt-2 w-full px-3 py-2 border rounded-md" placeholder="you@domain.com" required />

              <label className="block text-sm mt-4">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="mt-2 w-full px-3 py-2 border rounded-md" rows={5} placeholder="How can I help you?" required />

              <div className="mt-4 flex items-center gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send</button>
                {sent && <span className="text-sm text-green-600">Message sent (UI only)</span>}
              </div>
            </form>

            <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 text-white">
              <h3 className="font-semibold">Email</h3>
              <p className="mt-2 text-sm">vmwaresairam@gmail.com</p>

              <h3 className="font-semibold mt-6">Location</h3>
              <p className="mt-2 text-sm">Hyderabad, India</p>

              <h3 className="font-semibold mt-6">Connect</h3>
              <div className="mt-2 flex gap-3">
                <a href="#" className="underline">LinkedIn</a>
                <a href="#" className="underline">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm p-4"
          >
            <div className="bg-white rounded-xl shadow-2xl w-[70%] h-[80%] overflow-hidden relative">
              <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-50">
                <h3 className="font-semibold text-lg text-gray-800">Sai Ram – Resume</h3>
                <div className="flex gap-3">
                  <a href="/Sai_Ram_IT_Operations_Engineer_Resume.pdf" download className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Download</a>
                  <button onClick={() => setShowResume(false)} className="text-gray-600 hover:text-red-500 text-xl font-bold">×</button>
                </div>
              </div>
              <iframe
                src="/Sai_Ram_IT_Operations_Engineer_Resume.pdf"
                title="Sai Ram Resume"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-12 py-8 border-t text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Chittarla Sai Ram — IT Operations Engineer. All rights reserved.
      </footer>
    </div>
  );
}