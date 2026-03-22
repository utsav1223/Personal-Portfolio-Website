import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CursorGlow from "./components/CursorGlow.jsx";

const App = () => (
  <div className="bg-ink text-white">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CursorGlow />
      <Navbar />
      <Hero />
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.06),transparent_30%)]" />
        <div className="relative">
          <About />
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
