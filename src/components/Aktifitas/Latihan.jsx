
export const Latihan = () => {
  return (
    <div className="w-full h-[70rem] md:h-[52rem] bg-motif bg-cover bg-center">
      <div className="w-full flex flex-col items-center font-blenda text-primary text-4xl md:text-6xl py-10 gap-3">
        <h1>Latihan Rutin</h1>
        <h2 className="text-lg md:text-xl font-mon-bold">Jadwal Latihan</h2>
      </div>
      <div className="w-full h-fit px-5 lg:px-0 flex flex-col md:flex-row justify-center gap-7">
        <div className="md:w-3/6 lg:w-2/6 text-black bg-[#C2B4B4] p-5 lg:py-10 flex flex-col items-center gap-2 rounded-3xl">
          <h1 className="text-2xl md:text-3xl text-center font-mon-bold">
            Kelas A
          </h1>
          <h2 className="font-semibold md:text-lg text-center">kelas reguler (kelas diluar sekolah)</h2>
          <div className="bg-primary w-4/6 h-[2px]"></div>
          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Selasa</h3>
              <p>07.30 - 09.30 PM</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Rabu</h3>
              <p>07.30 - 09.30 PM</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Jumat</h3>
              <p>07.30 - 09.30 PM</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Sabtu</h3>
              <p>sesi 1 08.30 - 12.00 AM</p>
              <p>sesi 2 03.00 - 05.30 PM</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Minggu</h3>
              <p>sesi 1 08.30 - 12.00 AM</p>
              <p>sesi 2 02.00 - 05.30 PM</p>
            </div>
          </div>
        </div>
        <div className="md:w-3/6 lg:w-2/6 text-black bg-[#C2B4B4] p-5 lg:py-10 flex flex-col items-center gap-2 rounded-3xl">
          <h1 className="text-2xl md:text-3xl text-center font-mon-bold">
            Kelas B
          </h1>
          <h2 className="hidden md:block font-semibold md:text-lg text-center">kelas ekstrakulikuler <br /> (kelas tari di dalam lingkungan sekolah)</h2>
          <h2 className="md:hidden font-semibold md:text-lg text-center">kelas ekstrakulikuler (kelas tari di dalam lingkungan sekolah)</h2>
          <div className="bg-primary w-4/6 h-[2px]"></div>

          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Selasa</h3>
              <p>02.00 - 04.30 PM</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Rabu</h3>
              <p>02.00 - 04.30 PM</p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-mon-semiBold">Jumat</h3>
              <p>02.00 - 04.30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
