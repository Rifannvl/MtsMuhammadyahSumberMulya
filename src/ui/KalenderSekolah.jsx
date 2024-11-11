import React from "react";

const SchoolCalendar = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold">Kalender Sekolah</h1>
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
            <div className="bg-white shadow-md rounded-lg p-6">
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
            <div className="bg-white shadow-md rounded-lg p-6">
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
            <div className="bg-white shadow-md rounded-lg p-6">
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
        <section id="kalender-bulanan" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Kalender Bulanan</h2>
          <div className="mt-4 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Januari 2024
            </h3>
            <div className="mt-4">
              {/* Kalender Bulanan */}
              <table className="min-w-full table-auto text-left">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-2 px-4">Senin</th>
                    <th className="py-2 px-4">Selasa</th>
                    <th className="py-2 px-4">Rabu</th>
                    <th className="py-2 px-4">Kamis</th>
                    <th className="py-2 px-4">Jumat</th>
                    <th className="py-2 px-4">Sabtu</th>
                    <th className="py-2 px-4">Minggu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">3</td>
                    <td className="py-2 px-4">4</td>
                    <td className="py-2 px-4">5</td>
                    <td className="py-2 px-4">6</td>
                    <td className="py-2 px-4">7</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">8</td>
                    <td className="py-2 px-4">9</td>
                    <td className="py-2 px-4">10</td>
                    <td className="py-2 px-4">11</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">13</td>
                    <td className="py-2 px-4">14</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">15</td>
                    <td className="py-2 px-4">16</td>
                    <td className="py-2 px-4">17</td>
                    <td className="py-2 px-4">18</td>
                    <td className="py-2 px-4">19</td>
                    <td className="py-2 px-4">20</td>
                    <td className="py-2 px-4">21</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">22</td>
                    <td className="py-2 px-4">23</td>
                    <td className="py-2 px-4">24</td>
                    <td className="py-2 px-4">25</td>
                    <td className="py-2 px-4">26</td>
                    <td className="py-2 px-4">27</td>
                    <td className="py-2 px-4">28</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">29</td>
                    <td className="py-2 px-4">30</td>
                    <td className="py-2 px-4">31</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SchoolCalendar;
