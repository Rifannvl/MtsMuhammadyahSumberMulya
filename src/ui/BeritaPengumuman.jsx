import React from "react";
import { FaBell, FaCalendarAlt, FaClipboardList } from "react-icons/fa"; // Import icons from react-icons

const NewsAndAnnouncements = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Berita dan Pengumuman</h1>
          <p className="mt-2 text-lg">
            Update Terbaru untuk Seluruh Civitas Akademika
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Pengumuman */}
        <section id="pengumuman" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Pengumuman</h2>
          <p className="mt-4 text-gray-700">
            Berikut adalah beberapa pengumuman penting yang perlu diperhatikan
            oleh seluruh civitas akademika:
          </p>

          <div className="mt-6 space-y-6">
            {/* Pengumuman 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center space-x-3">
                <FaBell className="text-blue-600 text-2xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Perubahan Jadwal Ujian Semester
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
                Sehubungan dengan perubahan jadwal, ujian semester 1 yang
                sebelumnya dijadwalkan pada 5 Desember akan dipindahkan ke 12
                Desember. Mohon untuk memperhatikan pengumuman lebih lanjut
                melalui email atau WhatsApp grup.
              </p>
              <span className="block mt-4 text-sm text-gray-500">
                Tanggal Pengumuman: 1 Desember 2024
              </span>
            </div>

            {/* Pengumuman 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-blue-600 text-2xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Libur Cuti Bersama
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
                Sekolah akan libur selama cuti bersama pada tanggal 24 hingga 26
                Desember. Semua aktivitas sekolah akan kembali normal setelah
                tanggal tersebut.
              </p>
              <span className="block mt-4 text-sm text-gray-500">
                Tanggal Pengumuman: 15 November 2024
              </span>
            </div>

            {/* Pengumuman 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center space-x-3">
                <FaClipboardList className="text-blue-600 text-2xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Pendaftaran Siswa Baru
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
                Pendaftaran siswa baru untuk tahun ajaran 2024-2025 akan dibuka
                mulai tanggal 1 Januari hingga 30 Maret 2024. Silakan kunjungi
                situs web kami untuk informasi lebih lanjut.
              </p>
              <span className="block mt-4 text-sm text-gray-500">
                Tanggal Pengumuman: 25 Desember 2024
              </span>
            </div>
          </div>
        </section>

        {/* Berita Sekolah */}
        <section id="berita-sekolah" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Berita Sekolah</h2>
          <p className="mt-4 text-gray-700">
            Berikut adalah beberapa berita dan update terbaru tentang kegiatan
            yang telah atau sedang berlangsung di sekolah:
          </p>

          <div className="mt-6 space-y-6">
            {/* Berita 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-blue-600 text-2xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Festival Seni Sekolah 2024
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
                Festival Seni Sekolah 2024 berlangsung dengan meriah pada
                tanggal 12-14 Februari. Acara ini menampilkan berbagai karya
                seni dari siswa, termasuk musik, tari, dan lukisan.
              </p>
              <span className="block mt-4 text-sm text-gray-500">
                Tanggal Berita: 15 Februari 2024
              </span>
            </div>

            {/* Berita 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-blue-600 text-2xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Acara Olahraga Antar-Kelas 2024
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
                Acara olahraga antar-kelas berlangsung dengan sukses pada
                tanggal 1-5 Mei 2024. Kegiatan ini diikuti oleh semua kelas dan
                mencakup berbagai cabang olahraga, termasuk sepak bola, basket,
                dan bulu tangkis.
              </p>
              <span className="block mt-4 text-sm text-gray-500">
                Tanggal Berita: 10 Mei 2024
              </span>
            </div>

            {/* Berita 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-blue-600 text-2xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Kunjungan Belajar ke Museum Sejarah
                </h3>
              </div>
              <p className="mt-4 text-gray-700">
                Pada tanggal 25 April, seluruh siswa kelas 10 mengunjungi Museum
                Sejarah untuk belajar lebih banyak tentang sejarah Indonesia.
                Kegiatan ini bertujuan untuk memberikan pengalaman langsung bagi
                siswa dalam mempelajari sejarah.
              </p>
              <span className="block mt-4 text-sm text-gray-500">
                Tanggal Berita: 26 April 2024
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsAndAnnouncements;
