"use client";
import Navbar from "../navbar";
import { useLanguage } from "../bahasa";

const konten = {
  id: {
    judul: "KESIMPULAN",
    isi: (
      <>
        Sinoman adalah warisan budaya Jawa yang penuh makna dan bernilai luhur.
        Tradisi ini bukan hanya sekadar membantu dalam sebuah hajatan, melainkan
        wujud nyata dari kebersamaan, solidaritas sosial, dan kepedulian
        antarsesama. Dalam sinoman, setiap individu dilibatkan secara aktif
        sebagai bagian dari masyarakat yang saling menopang dan menghormati.
        Esensi juang dari sinoman tercermin melalui semangat gotong royong yang
        terus menyala di tengah perubahan zaman. Seperti dalam falsafah Jawa
        “Desa mawa cara, negara mawa tata”, setiap daerah memiliki aturan dan
        cara hidup yang perlu dijaga demi menciptakan keharmonisan bersama. Dengan
        menjaga sinoman, kita tidak hanya melestarikan tradisi, tetapi juga
        memperkuat jati diri bangsa. Lebih dari sekadar budaya lokal, sinoman
        berkontribusi terhadap pencapaian Tujuan Pembangunan Berkelanjutan (SDGs)
        melalui pelestarian budaya, penguatan nilai sosial, dan pendidikan
        karakter generasi muda. Nilai-nilai yang terkandung dalam sinoman menjadi
        pilar yang memperkuat ikatan antarwarga dan membentuk masyarakat yang
        berbudaya, berempati, dan bertanggung jawab. Sebagai bagian dari inovasi
        dalam pewarisan budaya, SIMONA hadir untuk menghidupkan kembali semangat
        sinoman melalui pendekatan edukatif dan implementatif yang sederhana,
        menarik, dan mudah diakses oleh generasi muda.
        <br />
        <br />
        <b>SIMONA</b>
        <br />
        "Treasure the Culture, Shape the Future."
      </>
    ),
  },
  en: {
    judul: "CONCLUSION",
    isi: (
      <>
        Sinoman is a Javanese cultural heritage that is full of meaning and noble
        values. This tradition is not just about helping out in a celebration,
        but a tangible manifestation of togetherness, social solidarity, and care
        for one another. In sinoman, every individual is actively involved as
        part of a community that supports and respects each other. The fighting
        essence of sinoman is reflected through the spirit of gotong royong that
        continues to burn in the midst of changing times. As in the Javanese
        philosophy of "Desa mawa cara, negara mawa tata", each region has its
        own rules and ways of life that need to be maintained in order to create
        harmony together. By keeping sinoman, we are not only preserving
        tradition, but also strengthening the nation's identity. More than just a
        local culture, sinoman contributes to the achievement of the Sustainable
        Development Goals (SDGs) through cultural preservation, strengthening
        social values, and character education of the younger generation. The
        values contained in sinoman become pillars that strengthen the bonds
        between citizens and form a cultured, empathetic, and responsible
        society. As part of the innovation in cultural heritage, SIMONA is here
        to revive the spirit of sinoman through an educational and implementative
        approach that is simple, interesting, and easily accessible to the
        younger generation.
        <br />
        <br />
        <b>SIMONA</b>
        <br />
        "Treasure the Culture, Shape the Future."
      </>
    ),
  },
};

export default function Kesimpulan() {
  const { lang } = useLanguage();

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
            fontFamily: "Lora, serif",
            fontSize: "1.25rem",
            width: "80vw",
            maxWidth: 900,
            borderRadius: 16,
            boxShadow: "0 4px 24px #b08b6522",
            padding: "32px 48px",
            lineHeight: 1.7,
            textAlign: "justify",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#6b4226",
              fontFamily: "Lora, serif",
              fontWeight: "bold",
              fontSize: "2rem",
              marginBottom: 24,
              letterSpacing: "2px",
            }}
          >
            {konten[lang].judul}
          </h2>
          <div>{konten[lang].isi}</div>
        </div>
      </main>
    </div>
  );
}