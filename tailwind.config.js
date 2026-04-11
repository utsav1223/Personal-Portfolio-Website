/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07090F",
        coal: "#0B0F1A",
        steel: "#12192C",
        glow: "#0EE7FF",
        accent: "#7C3AED"
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(14, 231, 255, 0.35)",
        soft: "0 24px 80px rgba(2, 6, 23, 0.5)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        scroll: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "60%": { transform: "translateY(10px)", opacity: 0.5 },
          "100%": { transform: "translateY(16px)", opacity: 0 }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        scroll: "scroll 1.8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top, rgba(34,211,238,0.08), transparent 52%), radial-gradient(circle at 78% 18%, rgba(245,158,11,0.08), transparent 34%), linear-gradient(180deg, rgba(5,8,20,0.12) 0%, rgba(7,9,15,0.5) 72%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(148,163,184,0.04) 52%, rgba(8,15,31,0.24))"
      }
    }
  },
  plugins: []
};
