"use client";

import Link from "next/link";
import { useLanguage } from "./bahasa";

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">
        Simona
      </Link>
      <ul className="navbar-menu">
        <li><Link href="/"><span>{lang === "id" ? "HOME" : "HOME"}</span></Link></li>
        <li><Link href="/pendahuluan"><span>{lang === "id" ? "PENDAHULUAN" : "INTRODUCTION"}</span></Link></li>
        <li><Link href="/tatacara"><span>{lang === "id" ? "TATA CARA" : "PROCEDURES"}</span></Link></li>
        <li><Link href="/larangan"><span>{lang === "id" ? "LARANGAN" : "PROHIBITION"}</span></Link></li>
        <li><Link href="/kesimpulan"><span>{lang === "id" ? "KESIMPULAN" : "CONCLUSION"}</span></Link></li>
        <li><Link href="/referensi"><span>{lang === "id" ? "REVERENSI" : "REFERENCES"}</span></Link></li>
      </ul>
      <button
        onClick={() => setLang(lang === "id" ? "en" : "id")}
        style={{
          marginLeft: 24,
          padding: "6px 18px",
          fontSize: "1rem",
          borderRadius: 8,
          border: "none",
          background: "#b08b65",
          color: "#fff",
          cursor: "pointer",
          fontFamily: "inherit",
          fontWeight: 500,
        }}
      >
        {lang === "id" ? "English" : "Bahasa"}
      </button>
      <style jsx>{`
        .navbar {
          width: 100%;
          background: #6b4226;
          color: #fff8f0;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 8px #a4755133;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }
        .navbar-brand {
          font-size: 1.8rem;
          font-family: 'Cinzel', serif;
          letter-spacing: 2px;
          margin-right: 32px;
          flex: 0 0 auto;
          color: #fff8f0;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s;
        }
        .navbar-brand:hover {
          color: #d7b899;
        }
        .navbar-menu {
          list-style: none;
          display: flex;
          gap: 24px;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        .navbar-menu li {
          font-size: 1rem;
        }
        .navbar-menu a {
          color: #fff8f0;
          text-decoration: none;
          transition: color 0.2s;
        }
        .navbar-menu a:hover {
          color: #d7b899;
        }
      `}</style>
    </nav>
  );
}