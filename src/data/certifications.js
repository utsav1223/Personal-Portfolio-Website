import { SiCplusplus, SiMongodb } from "react-icons/si";
import { FaCloud, FaMicrochip, FaServer } from "react-icons/fa";

const nptelCloudComputingCertificate = "https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs55/NOC26CS55S258500078405001403.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcs-cert-signer%40nptel-exam.iam.gserviceaccount.com%2F20260531%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260531T093315Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=c4fc29647bd55222aedf9474f587d72e699a4b820786b6d6953cb55e222b6276c234c36cfef616dad5f27325499b90188f73017723b6a64224ef1a35411d32e53b97849b04d1291fdb5ddd2e00d4986f7ea5ee32fffd7a185c320a39dc383e79132ce759716b624ff1a34703d7ca93a5233d83c1ec237da202806d1bdf6b6c07aaa09b95e22612b5234a37ee47f1d1b91db88858d4e3da5cdd250ce1de702fb1a49182e2463dc029e75c0c117c490fbfc8477fd129c75589623117a92ac410796fce698cc947bbb95781e9d54e258011f651f8b46e30dfeb3e2c6b913d055269f293602981022aace6ef5d92856342cba1a4b5127e0bdfccb451a7c11dd9144d";

export const certifications = [
  {
    title: "Cloud Computing",
    platform: "NPTEL | IIT Kharagpur",
    year: "2026",
    image: "/certifications/nptel.png",
    summary: "NPTEL Elite certification covering cloud computing concepts, completed in the Jan-Apr 2026 12-week course with a consolidated score of 65%.",
    icon: FaCloud,
    color: "#0F766E",
    href: nptelCloudComputingCertificate
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    platform: "IBM | Coursera",
    year: "2025",
    image: "/certifications/meta-front-end-developer.png",
    summary: "Backend coursework centered on building Node.js and Express applications with production-style API structure and server fundamentals.",
    icon: FaServer,
    color: "#1261FE",
    href: "https://www.coursera.org/account/accomplishments/verify/EQH0U064F10C"
  },
  {
    title: "Introduction to MongoDB",
    platform: "MongoDB | Coursera",
    year: "2025",
    image: "/certifications/react-complete-guide.png",
    summary: "Introductory database certificate covering MongoDB concepts, document modeling, and practical NoSQL foundations.",
    icon: SiMongodb,
    color: "#13AA52",
    href: "https://www.coursera.org/account/accomplishments/verify/YVBOQI17OOL4"
  },
  {
    title: "Data Structures and Algorithms Using C++",
    platform: "CipherSchools",
    year: "2025",
    image: "/certifications/google-data-analytics.png",
    summary: "Core problem-solving training in data structures, algorithmic thinking, and implementation using C++.",
    icon: SiCplusplus,
    color: "#F59E0B",
    href: "https://www.cipherschools.com/certificate/preview?id=687b314d06ffe76122762032"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    platform: "IBM | Coursera",
    year: "2024",
    image: "/certifications/azure-fundamentals.png",
    summary: "Foundational systems coursework covering computer hardware, operating system basics, and platform-level concepts.",
    icon: FaMicrochip,
    color: "#0056D2",
    href: "https://www.coursera.org/account/accomplishments/verify/ELR6JEHD05OK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
  }
];
