import React, { useState } from "react";

export default function Faq() {
  // State untuk mengontrol apakah setiap item FAQ terbuka atau tertutup
  const [activeIndex, setActiveIndex] = useState(null);

  // Fungsi untuk menangani klik pada setiap FAQ
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        FAQ - MTs Muhammadiyah Sumber Mulya
      </h1>

      {/* FAQ List */}
      <div className="space-y-4">
        <div className="bg-white border rounded-lg shadow-md">
          <div
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => handleToggle(0)}
          >
            <h3 className="text-xl font-medium text-gray-700">
              Apa itu MTs Muhammadiyah Sumber Mulya?
            </h3>
            <span className="text-gray-500">
              {activeIndex === 0 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 0 && (
            <div className="p-4 text-gray-600">
              MTs Muhammadiyah Sumber Mulya adalah lembaga pendidikan swasta
              yang berada di bawah naungan Kementerian Agama Republik Indonesia.
              Sekolah ini menyediakan pendidikan tingkat menengah pertama (MTs)
              dengan kurikulum yang mengintegrasikan pendidikan umum dan agama.
            </div>
          )}
        </div>

        <div className="bg-white border rounded-lg shadow-md">
          <div
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => handleToggle(1)}
          >
            <h3 className="text-xl font-medium text-gray-700">
              Apa visi dan misi MTs Muhammadiyah Sumber Mulya?
            </h3>
            <span className="text-gray-500">
              {activeIndex === 1 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 1 && (
            <div className="p-4 text-gray-600">
              Visi dari MTs Muhammadiyah Sumber Mulya adalah menjadi lembaga
              pendidikan yang unggul dalam pembentukan karakter, pengetahuan,
              dan keterampilan siswa sesuai dengan nilai-nilai Islam. Misi
              sekolah ini adalah:
              <ul className="list-disc ml-6">
                <li>
                  Memberikan pendidikan berkualitas dengan pendekatan yang
                  berorientasi pada nilai-nilai agama.
                </li>
                <li>
                  Mengembangkan potensi siswa dalam berbagai bidang, baik
                  akademik maupun non-akademik.
                </li>
                <li>
                  Mewujudkan lingkungan pendidikan yang harmonis dan Islami.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="bg-white border rounded-lg shadow-md">
          <div
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => handleToggle(2)}
          >
            <h3 className="text-xl font-medium text-gray-700">
              Bagaimana cara mendaftar di MTs Muhammadiyah Sumber Mulya?
            </h3>
            <span className="text-gray-500">
              {activeIndex === 2 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 2 && (
            <div className="p-4 text-gray-600">
              Untuk mendaftar di MTs Muhammadiyah Sumber Mulya, calon siswa
              dapat mengikuti beberapa langkah, antara lain:
              <ol className="list-decimal ml-6">
                <li>
                  Melakukan pendaftaran secara online melalui website resmi
                  sekolah atau datang langsung ke sekolah.
                </li>
                <li>
                  Mengisi formulir pendaftaran dan melampirkan dokumen yang
                  diperlukan (akte kelahiran, foto terbaru, dsb).
                </li>
                <li>
                  Menunggu pengumuman hasil seleksi penerimaan siswa baru.
                </li>
              </ol>
            </div>
          )}
        </div>

        <div className="bg-white border rounded-lg shadow-md">
          <div
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => handleToggle(3)}
          >
            <h3 className="text-xl font-medium text-gray-700">
              Apa saja ekstrakurikuler yang tersedia di MTs Muhammadiyah Sumber
              Mulya?
            </h3>
            <span className="text-gray-500">
              {activeIndex === 3 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 3 && (
            <div className="p-4 text-gray-600">
              MTs Muhammadiyah Sumber Mulya menawarkan berbagai kegiatan
              ekstrakurikuler untuk mendukung perkembangan minat dan bakat
              siswa. Beberapa kegiatan ekstrakurikuler yang tersedia antara
              lain:
              <ul className="list-disc ml-6">
                <li>Olahraga (Futsal, Bola Voli, Basket)</li>
                <li>Senam dan Tari</li>
                <li>Pramuka</li>
                <li>Paduan Suara</li>
                <li>Organisasi Siswa</li>
                <li>Pengajian dan Keagamaan</li>
              </ul>
            </div>
          )}
        </div>

        <div className="bg-white border rounded-lg shadow-md">
          <div
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => handleToggle(4)}
          >
            <h3 className="text-xl font-medium text-gray-700">
              Apa yang membedakan MTs Muhammadiyah Sumber Mulya dengan sekolah
              lain?
            </h3>
            <span className="text-gray-500">
              {activeIndex === 4 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 4 && (
            <div className="p-4 text-gray-600">
              MTs Muhammadiyah Sumber Mulya memiliki pendekatan pendidikan yang
              menggabungkan antara pendidikan umum dan pendidikan agama dengan
              baik. Selain itu, sekolah ini juga fokus pada pembentukan karakter
              siswa dengan mengintegrasikan nilai-nilai Islami dalam setiap
              aspek pembelajaran.
            </div>
          )}
        </div>

        <div className="bg-white border rounded-lg shadow-md">
          <div
            className="p-4 cursor-pointer flex justify-between items-center"
            onClick={() => handleToggle(5)}
          >
            <h3 className="text-xl font-medium text-gray-700">
              Apakah MTs Muhammadiyah Sumber Mulya memiliki fasilitas yang
              memadai?
            </h3>
            <span className="text-gray-500">
              {activeIndex === 5 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 5 && (
            <div className="p-4 text-gray-600">
              Ya, MTs Muhammadiyah Sumber Mulya memiliki berbagai fasilitas yang
              mendukung proses pembelajaran, seperti:
              <ul className="list-disc ml-6">
                <li>Ruang kelas yang nyaman dan dilengkapi dengan AC.</li>
                <li>Laboratorium komputer dan IPA.</li>
                <li>Perpustakaan dengan koleksi buku yang lengkap.</li>
                <li>Lapangan olahraga yang memadai.</li>
                <li>Kantin yang menyediakan makanan sehat dan bergizi.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
