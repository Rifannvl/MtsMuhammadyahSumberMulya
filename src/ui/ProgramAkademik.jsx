import React from "react";

const AcademicProgram = () => {
  return (
    <div className="bg-gray-50 font-poppins">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-semibold">Program Akademik</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {/* Kurikulum */}
        <section id="kurikulum" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Kurikulum</h2>
          <p className="mt-4 text-gray-700">
            Kurikulum yang diterapkan di sekolah ini berfokus pada pengembangan
            akademik dan karakter siswa. Kami menggunakan kurikulum [Nama
            Kurikulum], yang mencakup mata pelajaran wajib dan pilihan yang
            dirancang untuk membekali siswa dengan pengetahuan dan keterampilan
            untuk sukses di masa depan. Berikut adalah beberapa mata pelajaran
            yang diajarkan:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Matematika</li>
            <li>Bahasa Indonesia</li>
            <li>Bahasa Inggris</li>
            <li>IPA (Ilmu Pengetahuan Alam)</li>
            <li>IPS (Ilmu Pengetahuan Sosial)</li>
            <li>Olahraga</li>
            <li>Seniman dan Budaya</li>
            {/* Tambahkan mata pelajaran lainnya sesuai dengan kurikulum sekolah */}
          </ul>
        </section>

        {/* Jadwal Pelajaran */}
        <section id="jadwal-pelajaran" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Jadwal Pelajaran</h2>
          <p className="mt-4 text-gray-700">
            Berikut adalah contoh jadwal pelajaran untuk kelas [Tingkat Kelas],
            yang dapat berubah sesuai dengan kebutuhan:
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
                <tr>
                  <td className="py-2 px-4 border-b">09:00 - 10:00</td>
                  <td className="py-2 px-4 border-b">Bahasa Indonesia</td>
                  <td className="py-2 px-4 border-b">Matematika</td>
                  <td className="py-2 px-4 border-b">Bahasa Inggris</td>
                  <td className="py-2 px-4 border-b">Seniman</td>
                  <td className="py-2 px-4 border-b">IPS</td>
                </tr>
                {/* Tambahkan baris lainnya untuk jadwal pelajaran */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Kegiatan Ekstrakurikuler */}
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
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Sepak Bola</li>
            <li>Basketball</li>
            <li>Band dan Musik</li>
            <li>Paduan Suara</li>
            <li>Drama dan Teater</li>
            <li>Pramuka</li>
            <li>Klub Sains</li>
            <li>Klub Bahasa Inggris</li>
            {/* Tambahkan kegiatan ekstrakurikuler lainnya */}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AcademicProgram;
