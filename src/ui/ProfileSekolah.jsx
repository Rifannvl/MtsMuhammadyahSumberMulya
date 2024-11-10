import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold">Profil Sekolah</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Sejarah Sekolah */}
        <section id="sejarah" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Sejarah Sekolah</h2>
          <p className="mt-4 text-gray-700">
            Sekolah ini didirikan pada tahun [tahun] dengan tujuan untuk
            memberikan pendidikan berkualitas kepada generasi muda. Seiring
            dengan perkembangan zaman, sekolah ini terus berkembang dan menjadi
            salah satu sekolah terbaik di daerah ini, dengan fokus pada
            pengembangan akademik dan karakter siswa.
          </p>
        </section>

        {/* Visi & Misi */}
        <section id="visi-misi" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Visi & Misi</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">Visi:</h3>
            <p className="text-gray-700">
              Menjadi lembaga pendidikan yang unggul dalam mencetak siswa dengan
              karakter yang kuat, berpengetahuan luas, dan berdaya saing tinggi
              di tingkat nasional dan internasional.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">Misi:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Menyediakan pendidikan berkualitas dengan mengedepankan
                nilai-nilai moral dan spiritual.
              </li>
              <li>
                Mengembangkan potensi siswa dalam bidang akademik, olahraga,
                seni, dan keterampilan.
              </li>
              <li>
                Menciptakan lingkungan sekolah yang inklusif, aman, dan
                mendukung tumbuh kembang siswa.
              </li>
            </ul>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section id="struktur-organisasi" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Struktur Organisasi
          </h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Kepala Sekolah:
            </h3>
            <p className="text-gray-700">Dr. [Nama Kepala Sekolah], M.Pd</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">Guru-guru:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>[Nama Guru 1] - [Mata Pelajaran]</li>
              <li>[Nama Guru 2] - [Mata Pelajaran]</li>
              <li>[Nama Guru 3] - [Mata Pelajaran]</li>
              {/* Tambahkan daftar guru lainnya sesuai kebutuhan */}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Staf Pengajar Lainnya:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>[Nama Staf 1] - [Posisi]</li>
              <li>[Nama Staf 2] - [Posisi]</li>
              {/* Tambahkan staf pengajar lainnya jika ada */}
            </ul>
          </div>
        </section>

        {/* Fasilitas Sekolah */}
        <section id="fasilitas" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Fasilitas Sekolah
          </h2>
          <p className="mt-4 text-gray-700">
            Sekolah ini dilengkapi dengan fasilitas yang memadai untuk mendukung
            kegiatan belajar mengajar dan kegiatan ekstrakurikuler, antara lain:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              Ruang Kelas yang nyaman dan lengkap dengan alat bantu
              pembelajaran.
            </li>
            <li>
              Laboratorium IPA yang modern untuk mendukung pembelajaran
              praktikum.
            </li>
            <li>
              Perpustakaan yang lengkap dengan berbagai koleksi buku dan sumber
              belajar.
            </li>
            <li>
              Lapangan olahraga untuk kegiatan fisik dan olahraga
              ekstrakurikuler.
            </li>
            <li>Ruang musik dan seni untuk kegiatan kreatif siswa.</li>
            <li>
              Wi-Fi dan fasilitas teknologi untuk mendukung pembelajaran
              digital.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Profile;
