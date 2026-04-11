import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiSwagger,
  SiPhp
} from "react-icons/si";
import {
  FaCodeBranch,
  FaCubes,
  FaDatabase,
  FaNetworkWired,
  FaServer
} from "react-icons/fa";

export const skills = [
  {
    category: "Frontend",
    summary: "Responsive interface development focused on modern React applications and clean visual delivery.",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" }
    ]
  },
  {
    category: "Backend",
    summary: "Server-side logic, REST APIs, and full-stack workflows for reliable product functionality.",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#F3F4F6" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: SiPhp, color: "#777BB3" }
    ]
  },
  {
    category: "Database",
    summary: "Practical data storage experience across relational and document-based systems.",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ]
  },
  {
    category: "Tools",
    summary: "Version control, containerization, and API workflow tooling that support product delivery.",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "APIs", icon: SiSwagger, color: "#85EA2D" }
    ]
  },
  {
    category: "Core CS",
    summary: "Computer science fundamentals that support stronger engineering decisions and cleaner implementation.",
    items: [
      { name: "Operating System", icon: FaServer, color: "#38BDF8" },
      { name: "DBMS", icon: FaDatabase, color: "#60A5FA" },
      { name: "Computer Networks", icon: FaNetworkWired, color: "#2DD4BF" },
      { name: "Object Oriented Programming", icon: FaCubes, color: "#F59E0B" },
      { name: "Data Structures & Algorithms", icon: FaCodeBranch, color: "#FB7185" }
    ]
  }
];
