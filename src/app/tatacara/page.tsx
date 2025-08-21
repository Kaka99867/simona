"use client";
import Navbar from "../navbar";
import { useLanguage } from "../bahasa";
import './styles.css';

const konten = {
  id: {
    judul: "TATA CARA",
    isi: (
      <>
        <h2>A. Syarat dan Etika Menjadi Sinoman</h2>
        <br />
        <ol>
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat1.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "300px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Tidak memiliki cacat fisik.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat2.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "300px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Sehat jasmani dan rohani.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat3.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "300px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Berpenampilan rapi dan sopan.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat4.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "430px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Dalam penyajian kepada tamu, harus mengedepankan kesopanan dan tata krama.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat5.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "410px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Wajib menaati tata aturan upacara yang telah ditetapkan oleh pembawa acara.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat6.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "340px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Bersikap ramah dan berwajah sumringah (sumeh) kepada tamu.</p>
            </div>
          </li>
        </ol>
        <br />
        <h2>B. Tata Cara dan Etika Penyajian Hidangan oleh Sinoman (Model Meja dan Lesehan)</h2>
        <br />
        <h3>1. Persiapan</h3>
        <p>
          Tugas sinoman diawali dengan arahan dari ketua sinom, lalu bersama-sama menuju ke tempat pelaksanaan upacara. Setibanya di lokasi, para sinoman berjabat tangan dengan pihak yang mempunyai hajat sebagai bentuk penghormatan, menyampaikan doa, serta memohon izin untuk melaksanakan tugas. Setelah itu, para sinoman menuju tempat yang telah ditentukan sesuai pembagian tugas oleh ketua sinom. Umumnya, sinom putri bertugas di area penerima tamu, yaitu tempat para tamu menunggu hidangan yang akan dibawa oleh sinom putra. Setelah hidangan sampai, sinom putri menyajikannya dengan penuh kesopanan. Beberapa sinom putri juga bertugas menjaga area prasmanan untuk memastikan ketertiban dan kelancaran dalam pengambilan makanan. Dalam pengarahan ini disampaikan pembagian tugas, tata cara penyajian, serta aturan yang harus dipatuhi selama acara berlangsung. Setelah pengarahan, para sinom mempersiapkan hidangan berupa teh hangat dan makanan ringan atau snack yang disusun rapi dalam baki. Pengisian teh harus dilakukan dengan penuh ketelitian:
        </p>
        <ul>
          <li>&emsp;Tidak diperkenankan mengisi teh sambil melakukan aktivitas lain seperti bermain ponsel, merokok, atau bercanda.</li>
          <li>&emsp;Teh yang disajikan sebaiknya hangat bukan panas untuk menghindari ketidaknyamanan tamu dan menjaga etika visual saat penyajian.</li>
          <li>&emsp;Gelas harus dicek terlebih dahulu agar tidak ada kotoran seperti semut atau ampas teh yang tersisa.</li>
        </ul>
        <p>
          Setelah minuman siap, sinoman putra membawa baki berisi teh, sementara sinoman putri menempatkan diri lebih awal di sisi samping tamu untuk menyambut dan menyajikan. Penyajian dilakukan secara berpasangan (putra dan putri). Cara membawa baki disesuaikan:
        </p>
        <ul>
          <li>&emsp;Jika ringan, dibawa dengan dua tangan di depan perut.</li>
          <li>&emsp;Jika berat, ditaruh di pundak.</li>
        </ul>
        <br />
        <h3>2. Pelaksanaan</h3>
        <br />
        <h4>&emsp;A. Untuk Tamu dengan Meja</h4>
        <br />
        <ol>
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu1.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "300px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Penyajian dilakukan satu per satu, tidak sekaligus.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu3.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "390px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Ketika menyajikan makanan, tangan kanan memegang bagian tengah gelas, bukan bagian atasnya. Tangan kiri menopang siku kanan untuk menjaga kestabilan.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu2.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "390px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Saat gelas diletakkan di meja, jari kelingking tangan kanan menopang dasar gelas agar tidak berbunyi keras.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu4.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Dilarang menjatuhkan sendok, dan jika hal itu terjadi, sendok harus diganti dengan yang bersih.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu5.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Ibu jari tidak boleh masuk ke dalam piring saat menyajikan makanan berat.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu6.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Sendok disajikan secara terbuka dan diletakkan langsung di dalam piring sebelah kanan, bukan disiapkan di depan tamu.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu7.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Sinoman dilarang berbicara atau bercanda saat proses penyajian berlangsung.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu8.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Setelah selesai menyajikan, sinoman berjalan kembali secara berurutan, dimulai dari pemuda pembawa baki, lalu diikuti oleh sinom putri.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu9.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Ketika melewati tamu yang lebih tua, sinoman perlu sedikit membungkuk sebagai bentuk penghormatan.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/lesehan10.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Apabila ada tamu yang meminta air putih alih-alih teh, pramusaji wanita tetap berada di tempat, dan berkomunikasi dengan sinoman putra atau pembawa baki untuk mengganti minuman sesuai permintaan.</p>
            </div>
          </li>
        </ol>
        <br />
        <h4>B. Untuk Tamu Lesehan (Duduk Sila Berlingkar)</h4>
        <ol>
          <li>
            <br />
            <div className="img-row">
              <img
                src="/assets/21.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Penyajian dilakukan dalam posisi jongkok perlahan, dimulai dengan melangkahkan kaki kanan terlebih dahulu, lalu menempatkan kaki kanan di depan saat jongkok.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/22.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Saat berjalan jongkok, posisi kaki dibuat agak melebar dan bergerak perlahan agar tetap sopan dan tidak terburu-buru.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/23.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Saat berhenti untuk membagikan, posisi badan berubah dari jongkok ke duduk bersila (kaki kiri dilipat), kemudian makanan diletakkan di depan tubuh.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/24.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Minuman disajikan kepada tamu dengan urutan: dari yang tertua hingga yang termuda, dan pembagiannya dilakukan dari dua sisi lingkaran (5 dari kanan dan 5 dari kiri) secara seimbang.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/25.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Gelas diletakkan dari sisi samping, tidak langsung dari tengah lingkaran.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/26.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Ketika kembali ke tempat semula, baki diambil dari depan tubuh, lalu diselipkan di sisi ketiak kanan tanpa menurunkannya secara penuh. Sinoman kemudian berjalan mundur secara jongkok agar tidak membelakangi tamu.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/27.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Tatanan gelas dalam baki dibuat membentuk segitiga, sisi kanan untuk tamu di sebelah kanan, dan sebaliknya.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/28.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Saat menyuguhkan, kaki harus timpuh, tidak boleh berdiri atau jongkok secara frontal.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/29.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Hidangan tidak boleh disajikan secara ranting (berpindah dari tamu satu ke tamu lainnya). Namun, jika tradisi ranting digunakan, hal ini disesuaikan dengan adat setempat.</p>
            </div>
          </li>
        </ol>
        <br />
        <h3>3. Penutup</h3>
        <p>
          Setelah seluruh tamu menerima hidangan dan rangkaian acara selesai, sinoman kembali ke tempat semula dengan tetap menjaga sikap sopan. Ketua Sinom dapat melakukan evaluasi untuk menilai pelaksanaan tugas, kekompakan, serta ketepatan sikap selama acara berlangsung.
        </p>
      </>
    ),
  },
  en: {
    judul: "PROCEDURES",
    isi: (
      <>
        <h2>A. Eligibility and Ethics to be a Sinoman</h2>
        <ol>
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat1.jpg"
                alt="Cacat fisik"
                className="hover-image"
                style={{
                  width: "300px",
                  height: "460px",
                  marginRight: "50px",
                  objectFit: "cover",
                  borderRadius: "4px"
                }}
              />
              <p>Have no physical disability.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat2.jpg"
                alt="Cacat fisik"
                className="hover-image"
                style={{
                  width: "300px",
                  height: "460px",
                  marginRight: "50px",
                  objectFit: "cover",
                  borderRadius: "4px"
                }}
              />
              <p>Physically and mentally healthy.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat3.jpg"
                alt="Cacat fisik"
                className="hover-image"
                style={{
                  width: "300px",
                  height: "460px",
                  marginRight: "50px",
                  objectFit: "cover",
                  borderRadius: "4px"
                }}
              />
              <p>Be well-groomed and polite.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat4.jpg"
                alt="Cacat fisik"
                className="hover-image"
                style={{
                  width: "360px",
                  height: "460px",
                  marginRight: "50px",
                  objectFit: "cover",
                  borderRadius: "4px"
                }}
              />
              <p>In presenting to guests, one must prioritize politeness and manners.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat5.jpg"
                alt="Cacat fisik"
                className="hover-image"
                style={{
                  width: "360px",
                  height: "460px",
                  marginRight: "50px",
                  objectFit: "cover",
                  borderRadius: "4px"
                }}
              />
              <p>Must obey the rules of the ceremony that have been set by the host.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/syarat6.jpg"
                alt="Cacat fisik"
                className="hover-image"
                style={{
                  width: "310px",
                  height: "460px",
                  marginRight: "50px",
                  objectFit: "cover",
                  borderRadius: "4px"
                }}
              />
              <p>Be friendly and have a smiling face (sumeh) to the guests.</p>
            </div>
          </li>
        </ol>
        <br />
        <h2>B. Manners and Ethics of Serving Dishes by Sinoman (Table and Lesehan Model)</h2>
        <br />
        <h3>1. Preparation</h3>
        <p>
          The sinoman's task begins with a direction from the head of the sinom, then together they head to the place of the ceremony. Upon arrival, the sinomans shake hands with the party who has a wish as a form of respect, deliver prayers, and ask permission to carry out their duties. After that, the sinomans go to the designated place according to the division of tasks by the head of the sinom. Generally, the female sinom is in charge of the reception area, where the guests wait for the dishes to be brought by the male sinom. Once the dishes arrive, the female sinom serves them with great politeness. Some female sinom are also in charge of guarding the buffet area to ensure order and smoothness in taking food. In this briefing, the division of tasks, serving procedures, and rules that must be obeyed during the event are conveyed. After the briefing, the sinom prepare the dishes in the form of hot tea and snacks or snacks that are neatly arranged in trays. The filling of the tea must be done with great care:
        </p>
        <ul>
          <li>&emsp;It is not allowed to fill tea while doing other activities such as playing cell phones, smoking, or joking.</li>
          <li>&emsp;Tea should be served warm instead of hot to avoid guest discomfort and maintain visual etiquette when serving.</li>
          <li>&emsp;The glass should be checked first so that there are no impurities such as ants or tea dregs left.</li>
        </ul>
        <p>
          Once the drinks are ready, sinoman putra carries the tray containing the tea, while sinoman putri places herself early at the side of the guests to welcome and serve. Serving is done in pairs (male and female). The way of carrying the tray is customized:
        </p>
        <ul>
          <li>&emsp;If it is light, it is carried with two hands in front of the abdomen.</li>
          <li>&emsp;If heavy, it is carried on the shoulders.</li>
        </ul>
        <br />
        <h3>2. Implementation</h3>
        <br />
        <h4>&emsp;A. For Guests with Tables</h4>
        <br />
        <ol>
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu1.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "300px",
                height: "460px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Serving is done one at a time, not all at once.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu2.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>When serving food, the right hand holds the center of the glass, not the top. The left hand supports the right elbow for stability.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu3.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>When the glass is placed on the table, the little finger of the right hand supports the bottom of the glass so that it does not make a loud noise.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu4.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>It is forbidden to drop the spoon, and if it happens, the spoon should be replaced with a clean one.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu5.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "320px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>The thumb should not enter the plate when serving heavy food.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu6.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>The spoon is served openly and placed directly on the right-hand plate, not in front of the guest.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu7.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Sinoman are prohibited from talking or joking during the serving process.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu8.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>After finishing serving, the sinomans walk back in order, starting with the young man carrying the tray, followed by the female sinomans.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/tamu9.jpg" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>When passing older guests, sinoman should bow slightly as a form of respect.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/lesehan10.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>If a guest requests water instead of tea, the female waitress remains in place and communicates with the sinoman putra or tray bearer to change the drink as requested.</p>
            </div>
          </li>
        </ol>
        <br />
        <h4>B. For Lesehan Guests (Sitting Cross-legged in a circle)</h4>
        <ol>
          <li>
            <br />
            <div className="img-row">
              <img
                src="/assets/21.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>The presentation is done in a slow squatting position, starting with stepping the right foot first, then placing the right foot in front when squatting.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/22.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>When walking in a squat, the feet are slightly spread apart and move slowly to remain polite and not in a hurry.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/23.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>When stopping to distribute, the body position changes from squatting to sitting cross-legged (left leg folded), then the food is placed in front of the body.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/24.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Drinks are served to guests in order: from the oldest to the youngest, and the distribution is done from two sides of the circle (5 from the right and 5 from the left) equally.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/25.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Glasses are placed from the side, not directly from the center of the circle.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/26.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>When returning to the original place, the tray is taken from the front of the body, then tucked into the side of the right armpit without lowering it completely. Sinoman then walks backwards in a squat manner so as not to turn their backs on the guests.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/27.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>The order of the glasses in the tray is made into a triangle, the right side for the guest on the right, and vice versa.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/28.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>When serving, the feet should be on the ground, not standing or squatting frontally.</p>
            </div>
          </li>
          <br />
          <li>
            <div className="img-row">
              <img
                src="/assets/29.png" // Ganti dengan path gambar Anda
                alt="Cacat fisik"
                className="hover-image"
                style={{
                width: "360px",
                height: "530px",
                marginRight: "50px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
              />
              <p>Dishes should not be served ranting (moving from one guest to another). However, if the ranting tradition is used, this is adjusted according to local custom.</p>
            </div>
          </li>
        </ol>
        <br />
        <h3>3. Closing</h3>
        <br />
        <p>
          After all the guests have received their meals and the event is over, the sinoman return to their original places while maintaining a polite demeanor. The Sinom Chairperson may conduct an evaluation to assess the execution of tasks, cohesiveness, and accuracy of attitude during the event.
        </p>
      </>
    ),
  },
};

export default function Tatacara() {
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
