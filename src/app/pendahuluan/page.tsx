"use client";
import Navbar from "../navbar";
import { useLanguage } from "../bahasa";

const konten = {
  id: {
    judul: "PENDAHULUAN",
    isi: (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <video controls style={{ width: "100%", maxWidth: "300px" }}>
            <source src="/assets/vidio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        SIMONA hadir sebagai upaya untuk merawat peradaban tradisi dan budaya tanah Jawa. Warisan ini bukan sekadar peninggalan tetapi sebagai identitas yang mengandung nilai moral, etika, dan arah hidup masyarakat. Dalam pusaran zaman yang terus bergerak, generasi muda tidak cukup menjadi pengamat. Mereka perlu menjadi penjaga nilai, pelaku perubahan, dan penyambung makna yang nyaris terputus. SIMONA tidak hanya hadir sebagai aplikasi. Namun ia hadir membawa esensi juang generasi muda yang memilih berpijak kuat di tengah derasnya arus global. Seperti pepatah Jawa, Jaman iku owah gingsir. Zaman memang berubah, tetapi nilai tidak boleh ikut hilang. Di sinilah SIMONA mengambil peran, menghadirkan ruang yang menghubungkan akar budaya dengan arah masa depan. Bukan untuk kembali ke masa silam, tetapi untuk berjalan ke depan dengan bekal yang tertanam dalam. Seperti kata Elie Wiesel, Without memory, there is no culture. Without culture, there would be no civilization. Without society, there is no future. Budaya adalah jantung peradaban dan tradisi adalah denyut nadinya. Bersama SIMONA, kita tidak sekadar mengingat tetapi menghidupkan kembali nilai yang membentuk siapa kita dan apa yang akan kita wariskan.

        Treasure the Culture, Shape the Future -Swaranita Team
        <br />
        <br />
        <b>SIMONA</b>
        <br />
        "Treasure the Culture, Shape the Future."
        <br />
        <br />
      </>
    ),
  },
  en: {
    judul: "CONCLUSION",
    isi: (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <video controls style={{ width: "100%", maxWidth: "300px" }}>
            <source src="/assets/vidio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        SIMONA exists as an effort to preserve the traditional civilization and culture of Java. This heritage is not just a legacy but an identity that contains moral values, ethics, and the direction of people's lives. In the vortex of an ever-moving era, it is not enough for the younger generation to be observers. They need to be the guardians of values, the perpetrators of change, and the connectors of meanings that are almost disconnected. SIMONA is not just an application. It carries the fighting essence of the young generation who choose to stand strong in the midst of the swift global currents. As the Javanese saying goes, Jaman iku owah gingsir. Times do change, but values should not be lost. This is where SIMONA comes in, presenting a space that connects cultural roots with future directions. Not to return to the past, but to walk forward with deeply embedded provisions. As Elie Wiesel said, Without memory, there is no culture. Without culture, there would be no civilization. Without society, there is no future. Culture is the heart of civilization and tradition is its pulse. With SIMONA, we do not just remember but revive the values that shape who we are and what we will pass on.
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
