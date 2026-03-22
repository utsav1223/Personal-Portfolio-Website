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
        display: ["Bebas Neue", "sans-serif"],
        body: ["Sora", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(14, 231, 255, 0.35)",
        soft: "0 20px 60px rgba(5, 8, 20, 0.6)"
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
        "hero-gradient": "radial-gradient(circle at top, rgba(14,231,255,0.03), transparent 55%), radial-gradient(circle at 20% 20%, rgba(124,58,237,0.05), transparent 40%), linear-gradient(180deg, rgba(5,8,20,0.2) 0%, rgba(7,9,15,0.45) 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
      }
    }
  },
  plugins: []
};
