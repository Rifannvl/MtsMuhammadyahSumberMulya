import React, { useState } from "react";

const AcademicProgram = () => {
  const [activeTab, setActiveTab] = useState("kurikulum"); // Default tab is "kurikulum"

  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Program Akademik</h1>
          <p className="mt-2 text-lg">
            Meningkatkan Kompetensi dan Karakter Siswa
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Tab Navigation */}
        <div className="mb-8 flex justify-center space-x-6">
          <button
            className={`py-2 px-4 rounded-md text-lg font-semibold transition-all duration-300 ${
              activeTab === "kurikulum"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab("kurikulum")}
          >
            Kurikulum
          </button>
          <button
            className={`py-2 px-4 rounded-md text-lg font-semibold transition-all duration-300 ${
              activeTab === "jadwal-pelajaran"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab("jadwal-pelajaran")}
          >
            Jadwal Pelajaran
          </button>
          <button
            className={`py-2 px-4 rounded-md text-lg font-semibold transition-all duration-300 ${
              activeTab === "ekstrakurikuler"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab("ekstrakurikuler")}
          >
            Ekstrakurikuler
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "kurikulum" && (
          <section id="kurikulum" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Kurikulum</h2>
            <p className="mt-4 text-gray-700">
              Kurikulum yang diterapkan di sekolah ini berfokus pada
              pengembangan akademik dan karakter siswa. Kami menggunakan
              kurikulum [Nama Kurikulum], yang mencakup mata pelajaran wajib dan
              pilihan yang dirancang untuk membekali siswa dengan pengetahuan
              dan keterampilan untuk sukses di masa depan. Berikut adalah
              beberapa mata pelajaran yang diajarkan:
            </p>
            <div className="mt-6 space-y-4">
              <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-xl text-gray-800">
                  Matematika
                </h3>
                <p className="text-gray-700">
                  Mata pelajaran untuk mengembangkan kemampuan logika dan
                  analisis siswa.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-xl text-gray-800">
                  Bahasa Indonesia
                </h3>
                <p className="text-gray-700">
                  Memperkenalkan dan mengasah kemampuan komunikasi dalam bahasa
                  Indonesia.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-xl text-gray-800">
                  Bahasa Inggris
                </h3>
                <p className="text-gray-700">
                  Meningkatkan keterampilan bahasa Inggris untuk kebutuhan
                  global.
                </p>
              </div>
              {/* Tambahkan mata pelajaran lainnya sesuai dengan kurikulum sekolah */}
            </div>
          </section>
        )}

        {activeTab === "jadwal-pelajaran" && (
          <section id="jadwal-pelajaran" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Jadwal Pelajaran
            </h2>
            <p className="mt-4 text-gray-700">
              Berikut adalah contoh jadwal pelajaran untuk kelas [Tingkat
              Kelas], yang dapat berubah sesuai dengan kebutuhan:
            </p>

            {/* Jadwal Kelas */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse text-left border border-gray-300">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-2 px-4 border-b">Waktu</th>
                    <th className="py-2 px-4 border-b">Senin</th>
                    <th className="py-2 px-4 border-b">Selasa</th>
                    <th className="py-2 px-4 border-b">Rabu</th>
                    <th className="py-2 px-4 border-b">Kamis</th>
                    <th className="py-2 px-4 border-b">Jumat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">08:00 - 09:00</td>
                    <td className="py-2 px-4 border-b">Matematika</td>
                    <td className="py-2 px-4 border-b">Bahasa Inggris</td>
                    <td className="py-2 px-4 border-b">IPA</td>
                    <td className="py-2 px-4 border-b">Bahasa Indonesia</td>
                    <td className="py-2 px-4 border-b">Olahraga</td>
                  </tr>
                  {/* Tambahkan baris lainnya untuk jadwal pelajaran */}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === "ekstrakurikuler" && (
          <section id="ekstrakurikuler" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Kegiatan Ekstrakurikuler
            </h2>
            <p className="mt-4 text-gray-700">
              Sekolah kami menyediakan berbagai kegiatan ekstrakurikuler untuk
              mendukung pengembangan minat dan bakat siswa di luar kegiatan
              akademik. Berikut adalah beberapa kegiatan ekstrakurikuler yang
              tersedia:
            </p>
            <div className="mt-6 space-y-4">
              <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-xl text-gray-800">
                  Sepak Bola
                </h3>
                <p className="text-gray-700">
                  Untuk siswa yang berminat dalam olahraga sepak bola.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-xl text-gray-800">
                  Basketball
                </h3>
                <p className="text-gray-700">
                  Kegiatan ekstrakurikuler olahraga basket untuk mengasah
                  keterampilan tim.
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-xl text-gray-800">
                  Paduan Suara
                </h3>
                <p className="text-gray-700">
                  Untuk siswa yang tertarik dengan seni suara dan musik.
                </p>
              </div>
              {/* Tambahkan kegiatan ekstrakurikuler lainnya */}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AcademicProgram;
