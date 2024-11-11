import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react"; // Import Tailwind transition for smooth animations

const Profile = () => {
  const [openSection, setOpenSection] = useState("sejarah"); // Set default to "sejarah"

  // Handle toggle for accordion-style sections
  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">
            Profil MTs Muhammadiyah Sumber Mulya
          </h1>
          <p className="mt-2 text-lg">Menjadi Lembaga Pendidikan yang Unggul</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex space-x-8 justify-center text-lg">
            <li>
              <button
                className="text-blue-900 hover:text-blue-600"
                onClick={() => handleToggle("sejarah")}
              >
                Sejarah
              </button>
            </li>
            <li>
              <button
                className="text-blue-900 hover:text-blue-600"
                onClick={() => handleToggle("visi-misi")}
              >
                Visi & Misi
              </button>
            </li>
            <li>
              <button
                className="text-blue-900 hover:text-blue-600"
                onClick={() => handleToggle("struktur-organisasi")}
              >
                Struktur Organisasi
              </button>
            </li>
            <li>
              <button
                className="text-blue-900 hover:text-blue-600"
                onClick={() => handleToggle("fasilitas")}
              >
                Fasilitas
              </button>
            </li>
          </ul>
        </nav>

        {/* Sejarah Sekolah */}
        <section id="sejarah" className="mb-12">
          <Transition
            show={openSection === "sejarah"}
            enter="transition-all duration-500"
            leave="transition-all duration-300"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-900">
                Sejarah Sekolah
              </h2>
              <p className="mt-4 text-gray-700">
                MTs Muhammadiyah Sumber Mulya didirikan pada tahun 1995 dengan
                tujuan untuk memberikan pendidikan berkualitas kepada generasi
                muda. Seiring dengan perkembangan zaman, sekolah ini terus
                berkembang dan menjadi salah satu sekolah terbaik di daerah ini,
                dengan fokus pada pengembangan akademik dan karakter siswa.
              </p>
            </div>
          </Transition>
        </section>

        {/* Visi & Misi */}
        <section id="visi-misi" className="mb-12">
          <Transition
            show={openSection === "visi-misi"}
            enter="transition-all duration-500"
            leave="transition-all duration-300"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Visi & Misi</h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Visi:</h3>
                <p className="text-gray-700">
                  Menjadi lembaga pendidikan yang unggul dalam mencetak siswa
                  dengan karakter yang kuat, berpengetahuan luas, dan berdaya
                  saing tinggi di tingkat nasional dan internasional.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Misi:</h3>
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
            </div>
          </Transition>
        </section>

        {/* Struktur Organisasi */}
        <section id="struktur-organisasi" className="mb-12">
          <Transition
            show={openSection === "struktur-organisasi"}
            enter="transition-all duration-500"
            leave="transition-all duration-300"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-900">
                Struktur Organisasi
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Kepala Sekolah:
                </h3>
                <p className="text-gray-700">Dr. Ahmad Riza, M.Pd</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Guru-guru:
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Mr. Ali - Matematika</li>
                  <li>Mrs. Siti - Bahasa Indonesia</li>
                  <li>Mr. Farhan - IPA</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Staf Pengajar Lainnya:
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Ms. Rina - Administrasi</li>
                  <li>Mr. Yasin - Teknologi Informasi</li>
                </ul>
              </div>
            </div>
          </Transition>
        </section>

        {/* Fasilitas Sekolah */}
        <section id="fasilitas" className="mb-12">
          <Transition
            show={openSection === "fasilitas"}
            enter="transition-all duration-500"
            leave="transition-all duration-300"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-900">
                Fasilitas Sekolah
              </h2>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Ruang Kelas
                  </h3>
                  <p className="text-gray-700">
                    Ruang kelas yang nyaman dan dilengkapi dengan alat bantu
                    pembelajaran yang modern.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Laboratorium IPA
                  </h3>
                  <p className="text-gray-700">
                    Laboratorium IPA yang dilengkapi peralatan modern untuk
                    kegiatan praktikum.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Perpustakaan
                  </h3>
                  <p className="text-gray-700">
                    Perpustakaan yang menyediakan berbagai koleksi buku dan
                    sumber belajar.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Lapangan Olahraga
                  </h3>
                  <p className="text-gray-700">
                    Lapangan olahraga untuk mendukung kegiatan fisik dan
                    ekstrakurikuler olahraga.
                  </p>
                </div>
              </div>
            </div>
          </Transition>
        </section>
      </main>
    </div>
  );
};

export default Profile;
