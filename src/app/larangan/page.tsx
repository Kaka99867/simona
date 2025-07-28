"use client";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import './styles.css';
import { useLanguage } from "../bahasa";

const konten = {
  id: {
    judul: "Daftar Pantangan/Kesalahan Umum dalam Tradisi Sinoman",
    larangan: [
      "Tidak diperkenankan melakukan hal yang dianggap tabu atau tidak pantas di hadapan tamu",
      "Tidak boleh menyajikan hidangan menggunakan tangan kiri",
      "Dilarang mempermalukan atau membuat tuan rumah merasa malu",
      "Tidak diperkenankan makan atau merokok saat menjalankan tugas penyajian",
      "Tidak diperbolehkan mengenakan pakaian yang tidak sopan seperti pakaian tembus pandang",
      "Wajib menaati seluruh aturan upacara yang telah dirancang oleh pembawa acara",
      "Saat menyajikan minuman tangan tidak boleh menutupi bagian atas gelas yang penuh tetapi harus berada di samping gelas untuk menunjukkan kesopanan",
      "Tidak diperbolehkan bersikap kasar kepada sesama sinoman maupun kepada tamu",
      "Dilarang meninggalkan tugas tanpa izin dari ketua sinoman",
      "Tidak boleh mengenakan aksesoris berlebihan yang dapat mengganggu penampilan rapi dan sopan",
      "Tidak diperkenankan berinteraksi berlebihan dengan tamu yang dapat menimbulkan kesan tidak sopan",
      "Tidak boleh menggunakan bahasa yang tidak pantas atau tidak sesuai dengan norma kesopanan",
      "Dilarang bercanda secara berlebihan saat melayani tamu",
      "Tidak boleh memindahkan hidangan tanpa sepengetahuan ketua sinoman atau petugas yang berwenang",
      "Dilarang menyentuh hidangan langsung dengan tangan kecuali sudah memakai sarung tangan atau alat bantu yang bersih",
      "Tidak diperbolehkan duduk di tempat yang disediakan untuk tamu",
      "Dilarang mengobrol terlalu keras karena dapat mengganggu suasana acara",
      "Tidak boleh mengambil makanan sebelum semua tugas selesai dan tanpa izin",
      "Tidak diperkenankan membuang sampah sembarangan di area acara",
      "Dilarang mengenakan alas kaki yang kotor saat berada di area penyajian",
    ],
  },
  en: {
    judul: "List of Prohibitions/Common Mistakes in Sinoman Tradition",
    larangan: [
      "Not allowed to do things considered taboo or inappropriate in front of guests",
      "Do not serve food using the left hand",
      "Prohibited from embarrassing or making the host feel ashamed",
      "Not allowed to eat or smoke while serving",
      "Not permitted to wear indecent clothing such as see-through attire",
      "Must obey all ceremony rules set by the host",
      "When serving drinks, hands should not cover the top of a full glass but be on the side to show politeness",
      "Not allowed to be rude to fellow sinoman or guests",
      "Forbidden to leave duties without permission from the sinoman leader",
      "Do not wear excessive accessories that disrupt neat and polite appearance",
      "Not allowed to interact excessively with guests, which may seem impolite",
      "Do not use inappropriate language or language that does not conform to norms",
      "Prohibited from joking excessively while serving guests",
      "Do not move dishes without the knowledge of the sinoman leader or authorized staff",
      "Forbidden to touch food directly with hands unless wearing gloves or clean utensils",
      "Not allowed to sit in seats provided for guests",
      "Prohibited from chatting too loudly as it may disturb the event atmosphere",
      "Do not take food before all duties are finished and without permission",
      "Not allowed to litter in the event area",
      "Forbidden to wear dirty footwear in the serving area",
    ],
  },
};

export default function Larangan() {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true);
  }, []);

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
              marginBottom: 40,
              letterSpacing: "2px",
            }}
          >
            {konten[lang].judul}
          </h2>
          <ol style={{ margin: 0, padding: 0 }}>
            {konten[lang].larangan.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 60,
                  listStyle: "none",
                  padding: 10,
                }}
                className={isVisible ? "image-enter" : ""}
              >
                <img
                  src={`/assets/${idx + 1}.png`}
                  alt={`Larangan ${idx + 1}`}
                  className="hover-image" // Add hover-image class here
                  style={{
                    width: "300px", // Mengatur ukuran gambar
                    height: "auto",
                    objectFit: "contain",
                    marginRight: 35,
                  }}
                />
                <span
                  style={{
                    fontSize: "1.25rem", // Menyesuaikan ukuran font
                  }}
                >
                  {`${idx + 1}. ${item}`}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}
