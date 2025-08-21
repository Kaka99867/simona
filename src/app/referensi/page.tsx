"use client";
import "./styles.css";
import Navbar from "../navbar";

export default function Referensi() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #b08b65 0%, #e6d3b3 100%)",
        position: "relative",
      }}
    >
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 80,
        }}
      >
        <div
          style={{
            background: "#f7ecd9cc",
            color: "#6b4226",
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "1.1rem",
            width: "80vw",
            maxWidth: 900,
            borderRadius: 8,
            boxShadow: "0 4px 24px #b08b6522",
            padding: "32px 48px",
            lineHeight: 1.7,
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#6b4226",
              fontFamily: "Times New Roman, Times, serif",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: 24,
              letterSpacing: "1px",
              width: "100%",
            }}
          >
            REFERENSI (REFERENCES)
          </h2>
          <ol style={{ paddingLeft: 24, margin: 0, width: "100%" }}>
            <li style={{ marginBottom: 18 }}>
              Alfian. (2021). <i>Mengenal tradisi Sinoman yang sudah mulai pudar oleh zaman.</i>
              <br />
              Kompasiana.&nbsp;
              <a
                href="https://www.kompasiana.com/alfian89/603f4847d541df60991661e5/mengenal-tradisi-Sinoman-yang-sudah-mulai-pudar-oleh-zaman"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2a6bbf", wordBreak: "break-all", textDecoration: "underline" }}
              >
                https://www.kompasiana.com/alfian89/603f4847d541df60991661e5/mengenal-tradisi-Sinoman-yang-sudah-mulai-pudar-oleh-zaman
              </a>
            </li>
            <li style={{ marginBottom: 18 }}>
              Giyanto. (2025, 10 Juli). <i>Wawancara pribadi oleh Pujiyati.</i> Magelang. Dalang Wayang dan Pelestari Tradisi & Budaya.
            </li>
            <li style={{ marginBottom: 18 }}>
              Nasution, M. H., Febriana, M., & Purba, U. H. (2024). ANALYSIS OF DIGITAL CULTURAL
              <br />
              BEHAVIOR IN GEN Z STUDENTS OF UINSU COMMUNICATION SCIENCE. <i>OPINI: Journal of Communication and Social Science, 1(2)</i>, 40-46.
            </li>
            <li>
              Othman, M. K., Norman Anuar, N., Barawi, M. H., Yahya, A. S. A. H., & Abdul Manaf, A. A. (2024). A Comprehensive User Experience Analysis of Cultural Heritage Progressive Web App Using a Hybrid UEQ-IPA Approach. <i>ACM Journal on Computing and Cultural Heritage, 17(2)</i>, 1-19.
            </li>
            <br></br>
            <li>
              Salma Mahmudah. (2025). Culture shock warga Blitar kondangan ke Boyolali, Jawa Tengah. Beda buanget budaya kondangan&nbsp;
              <a
                href="https://www.instagram.com/reel/DLBo08Gxks_/?igsh=Nnc2N3Y1Y2VnNmM="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2a6bbf", wordBreak: "break-all", textDecoration: "underline", overflowWrap: "anywhere" }}
              >
                https://www.instagram.com/reel/DLBo08Gxks_/?igsh=Nnc2N3Y1Y2VnNmM=
              </a>
              .
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
