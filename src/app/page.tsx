"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useLanguage } from "./bahasa";

const texts = {
  id: "Treasure the Culture, Shape the Future.",
  en: "Treasure the Culture, Shape the Future.",
};
const colors = ["#6b4226", "#a47551", "#7a5737", "#b08b65", "#e6d3b3"];

export default function Home() {
  const { lang } = useLanguage();
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);

  // Animasi typing untuk teks sesuai bahasa
  useEffect(() => {
    let i = 0;
    let interval: NodeJS.Timeout;
    const text = texts[lang];

    if (typing) {
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1200);
        }
      }, 60);
    } else {
      interval = setInterval(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        i--;
        if (i <= 0) {
          clearInterval(interval);
          setColorIndex((prev) => (prev + 1) % colors.length);
          setTimeout(() => setTyping(true), 400);
        }
      }, 30);
      i = text.length;
    }

    return () => clearInterval(interval);
  }, [typing, colorIndex, lang]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(120deg, #b08b65 0%, #e6d3b3 100%)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 80, // agar tidak tertutup navbar
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: "3rem",
            color: "#6b4226",
            letterSpacing: "6px",
            marginBottom: 16,
            textShadow: "2px 2px 8px #d7b89988",
            textAlign: "center",
            display: "block",
          }}
        >
          SIMONA
        </span>
        <h1
          style={{
            color: colors[colorIndex],
            fontFamily: "Lora, serif",
            fontSize: "3rem", // lebih besar
            textAlign: "center",
            minHeight: 60,
            letterSpacing: "2px",
            borderRight: `3px solid ${colors[colorIndex]}`,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textShadow: "1px 1px 8px #e6d3b355",
          }}
        >
          {displayed}
        </h1>
      </main>
      <span
        style={{
          position: "fixed",
          right: 24,
          bottom: 18,
          fontSize: "1.1rem",
          color: "#8d6e4a",
          opacity: 0.85,
          fontFamily: "Lora, serif",
          zIndex: 2000,
          background: "#f7ecd9cc",
          padding: "4px 16px",
          borderRadius: 10,
          boxShadow: "0 2px 8px #b08b6522",
        }}
      >
        by swaranita
      </span>
    </div>
  );
}