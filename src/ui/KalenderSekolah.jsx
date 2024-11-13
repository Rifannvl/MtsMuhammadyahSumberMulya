import React from "react";
import Calendar2025 from "../components/Kalender2025";

const SchoolCalendar = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">Kalender Sekolah</h1>
          <p className="mt-2 text-lg">
            Informasi Penting Tahun Ajaran [Tahun Ajaran]
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Tahun Ajaran */}
        <section id="tahun-ajaran" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Tahun Ajaran</h2>
          <p className="mt-4 text-gray-700">
            Berikut adalah kalender tahun ajaran untuk tahun [Tahun Ajaran],
            yang mencakup jadwal liburan, ujian, dan kegiatan penting lainnya:
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jadwal Liburan */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">Liburan</h3>
              <ul className="mt-4 text-gray-700">
                <li>
                  <strong>Liburan Semester 1:</strong> 20 Desember - 5 Januari
                </li>
                <li>
                  <strong>Liburan Semester 2:</strong> 1 Juni - 15 Juni
                </li>
                <li>
                  <strong>Liburan Natal:</strong> 24 Desember - 1 Januari
                </li>
                {/* Tambahkan tanggal liburan lainnya */}
              </ul>
            </div>

            {/* Jadwal Ujian */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                Jadwal Ujian
              </h3>
              <ul className="mt-4 text-gray-700">
                <li>
                  <strong>Ujian Tengah Semester 1:</strong> 10 - 14 Oktober
                </li>
                <li>
                  <strong>Ujian Akhir Semester 1:</strong> 15 - 20 Desember
                </li>
                <li>
                  <strong>Ujian Tengah Semester 2:</strong> 25 - 30 Maret
                </li>
                <li>
                  <strong>Ujian Akhir Semester 2:</strong> 5 - 10 Juni
                </li>
                {/* Tambahkan jadwal ujian lainnya */}
              </ul>
            </div>

            {/* Kegiatan Penting */}
            <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-800">
                Kegiatan Penting
              </h3>
              <ul className="mt-4 text-gray-700">
                <li>
                  <strong>Festival Seni:</strong> 12 - 14 Februari
                </li>
                <li>
                  <strong>Acara Olahraga:</strong> 1 - 5 Mei
                </li>
                <li>
                  <strong>Pertemuan Orang Tua:</strong> 15 Februari dan 15
                  Agustus
                </li>
                <li>
                  <strong>Penerimaan Siswa Baru:</strong> 1 - 5 Juli
                </li>
                {/* Tambahkan kegiatan lainnya */}
              </ul>
            </div>
          </div>
        </section>

        {/* Kalender Bulanan */}
        <Calendar2025 />
      </main>
    </div>
  );
};

export default SchoolCalendar;
