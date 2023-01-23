import { motion } from "framer-motion";
import React from "react";

const ASebelumBook = [
  {
    li: "Booking hanya dapat dilakukan minimal 1-2 hari sebelum hari-H.",
  },
  {
    li: "Client WAJIB UNTUK melakukan pembayaran uang muka atau Down Payment sebesar 50% untuk menjaga slot booking.",
  },
  {
    li: "Penyewaan atau Booking studio yang telah melewati waktu sewa akan dikenakan biaya overtime sesuai dengan hitungan sewa studio perjam.",
  },
  {
    li: "Waktu booking penyewaan terhitung berdasarkan sesi/waktu yang sudah dipesan (bukan waktu mulai start produksi) dan sudah termasuk waktu untuk pemasangan set up properti, set-up dekorasi, lighting, dll.",
  },
  {
    li: "Pembatalan booking pemesanan dapat dilakukan maksimal kurang dari 2×24 jam dari jam booking, jika melebihi batas waktu yang ditentukan, maka uang muka dianggap hangus dan tidak dapat dikembalikan kepada Client.",
  },
  {
    li: "Harga hanya termasuk untuk booking mencakup rental studio dan properti, tidak termasuk untuk jasa fotografer dan/atau videografer.",
  },
  {
    li: "Client hanya bisa melakukan reschedule tanggal atau jam booking maksimal 1(satu) kali.",
  },
  {
    li: "Studio tidak menerima reschedule di hari booking yang sama.",
  },
];

const BPenggunaanStudio = [
  {
    li: "Listrik hanya disediakan untuk penggunaan AC dan peralatan dengan total daya di bawah 3,500 Watt.",
  },
  {
    li: "Pemakaian listrik diatas 3,500 Watt harus menggunakan genset yang telah dibawa Client sendiri.",
  },
  {
    li: "Setiap studio telah dilengkapi dengan 3 (tiga) buah lighting untuk fotografi dan1 (satu) buah lighting untuk videografi.",
  },
  {
    li: "Untuk penggunaan studio 2 telah dilengkapi dengan 2 (dua) pilihan background kertas. Background tambahan akan dikenakan biaya Rp100.000 /pcs, sesuai dengan warna yang tersedia.",
  },
  {
    li: "Studio akan dibuka 30 menit sebelum sesi dimulai.",
  },
  {
    li: "Jika kebutuhan RECCE di luar hari penyewaan studio akan dikenakan biaya 150rb/jam.",
  },

  {
    li: "Seluruh proses set-up properti dan peralatan studio WAJIB dilakukan oleh Staff Studio Belinsky.",
  },
  {
    li: "Apabila terjadi ada kerusakan atau kehilangan pada properti dan peralatan equipment studio, maka Client harus mengganti rugi sesuai harga yang ditetapkan Studio.",
  },
  {
    li: "Lampu foto tidak diperbolehkan dipakai untuk shooting video. Client diwajibkan untuk diharapkan selalu memperhatikan kebersihan studio.",
  },
];

const CPenggunaanStudio = [
  {
    li: "Estimasi waktu untuk Loading out diberikan (dua puluh) menit setelah jam booking studio berakhir. Apabila melebihi waktu yang ditentukan, akan dihitung biaya overtime.",
  },
  {
    li: "Client DIWAJIBKAN mengembalikan dan merapikan properti atau peralatan yang telah dipakai ke posisi semula.",
  },
];

const NewNormalProtocol = [
  {
    li: "Maximum kapasitas adalah 20 orang/studio 1, 10 orang/studio 2, dan 6 orang/studio 3. Jika melebihi kapasitas, Client dianggap menyewa studio tambahan dengan jangka waktu yang sama. (contoh: Client sewa studio 1, dan kapasitas melebihi 20 orang maka akan dikenakan biaya sewa tambahan studio 2).",
  },
  {
    li: "Semua Client, Crew dan Staff diwajibkan mematuhi prokes ketat. Jika tidak mematuhi prokes, Client harus membeli masker yang tersedia di Studio.",
  },
  {
    li: "Studio tutup pukul 22.00 WIB. Maximum Overtime hanya sampai pukul 22.00 WIB saja.",
  },
];

const TnC = () => {
  return (
    <motion.section
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 md:py-32 px-[2vw]"
    >
      {/* TnC  */}
      <section className="text-[#022581] h-full w-full">
        <h1 className="font-[900] text-center text-3xl md:text-5xl lg:text-6xl mb-16 md:mb-24">
          TERMS & CONDITIONS
        </h1>
        <div className="flex flex-col gap-12 lg:px-[2vw]">
          <div>
            <h1 className="text-xl md:text-2xl">A. Sebelum Booking Studio</h1>
            <ol className="list-decimal pl-7 md:pl-14 mt-3">
              {ASebelumBook?.map((e) => {
                return (
                  <li className="font-semibold text-lg md:text-xl">{e.li}</li>
                );
              })}
            </ol>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl">B. Penggunaan Studio</h1>
            <ol className="list-decimal pl-7 md:pl-14 mt-3">
              {BPenggunaanStudio?.map((e) => {
                return (
                  <li className="font-semibold text-lg md:text-xl">{e.li}</li>
                );
              })}
            </ol>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl">C. Setelah Pemakaian Studio</h1>
            <ol className="list-decimal pl-7 md:pl-14 mt-3 pb-12">
              {CPenggunaanStudio?.map((e) => {
                return (
                  <li className="font-semibold text-lg md:text-xl">{e.li}</li>
                );
              })}
            </ol>
          </div>
        </div>
        {/* COVID 19 */}
        <section className="font-semibold text-lg md:text-xl md:pt-20 pt-8">
          <h1 className="font-[900] text-center text-2xl md:text-5xl lg:text-6xl my-12 lg:my-24">
            New Normal Protocol Related to COVID-19
          </h1>
          <div className="flex  flex-col gap-3 lg:px-[2vw]">
            <p>
              Peraturan Studio Belinsky selama masa New Normal Pandemi COVID-19:
            </p>
            <ol className="list-decimal pl-7 md:pl-14">
              {NewNormalProtocol?.map((e) => {
                return (
                  <li className="font-semibold text-lg md:text-xl">{e.li}</li>
                );
              })}
            </ol>
            <p>
              Apabila ditemukan Client melanggar peraturan diatas, maka pihak
              Manajemen Belinsky berhak untuk mengenakan denda kepada Client.{" "}
              <br />
            </p>
            <p>
              Peraturan ini dibuat demi kebaikan dan kesehatan lingkungan
              bersama, baik Client dan team Belinsky.
              <br />
              Terima kasih atas perhatian Anda.
            </p>

            <p className="py-6">
              Salam hormat,
              <br />
              Management Studio Belinsky
            </p>
          </div>
        </section>
      </section>
    </motion.section>
  );
};

export default TnC;
