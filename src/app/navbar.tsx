"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./bahasa";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">Simona</Link>
      </div>
      <div className={`navbar-links ${open ? "open" : ""}`}>
        <Link href="/"><span>{lang === "id" ? "HOME" : "HOME"}</span></Link>
        <Link href="/pendahuluan"><span>{lang === "id" ? "PENDAHULUAN" : "INTRODUCTION"}</span></Link>
        <Link href="/tatacara"><span>{lang === "id" ? "TATA CARA" : "PROCEDURES"}</span></Link>
        <Link href="/larangan"><span>{lang === "id" ? "LARANGAN" : "PROHIBITION"}</span></Link>
        <Link href="/kesimpulan"><span>{lang === "id" ? "KESIMPULAN" : "CONCLUSION"}</span></Link>
        <Link href="/referensi"><span>{lang === "id" ? "REVERENSI" : "REFERENCES"}</span></Link>
      </div>
      <div className="navbar-actions">
        <button
          onClick={() => setLang(lang === "id" ? "en" : "id")}
          style={{
            marginLeft: 0,
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
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="navbar-hamburger">&#9776;</span>
        </button>
      </div>
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
        .navbar-logo {
          flex: 0 0 auto;
        }
        .navbar-links {
          list-style: none;
          display: flex;
          gap: 24px;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        .navbar-links.open {
          display: block;
        }
        .navbar-links a {
          color: #fff8f0;
          text-decoration: none;
          transition: color 0.2s;
        }
        .navbar-links a:hover {
          color: #d7b899;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          margin-left: auto;
        }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff8f0;
          font-size: 1.5rem;
          cursor: pointer;
          margin-left: 12px;
        }
        @media (max-width: 768px) {
          .navbar-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            background: #6b4226;
            width: 100%;
            padding: 16px 0;
          }
          .navbar-links.open {
            display: flex;
          }
          .navbar-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}