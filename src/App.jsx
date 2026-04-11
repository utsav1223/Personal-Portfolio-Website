import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CursorGlow from "./components/CursorGlow.jsx";

const App = () => (
  <div className="relative overflow-hidden bg-ink text-white">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CursorGlow />
      <Navbar />
      <Hero />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(245,158,11,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.015),transparent_25%)]" />
        <div className="pointer-events-none absolute inset-0 noise-overlay" />
        <div className="relative">
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </div>
      </main>
      <Footer />
    </motion.div>
  </div>
);

export default App;
