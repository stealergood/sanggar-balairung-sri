import VisiMisiPicture from "../../assets/images/visimisi.jpeg";

export const VisiMisi = () => {
  return (
    <div className="w-full h-[1264px] md:h-[1200px] py-10 md:py-0">
      <div className="w-full flex justify-center pt-10 pb-10 md:py-20 md:pt-48">
        <h1 className="font-blenda text-primary text-4xl lg:text-6xl">Visi & Misi</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-6 justify-between px-6 lg:px-20 md:pb-10">
        <div className="w-full flex justify-center lg:w-[48%]">
          <img src={VisiMisiPicture} alt="visi misi" className=" rounded-xl" />
        </div>
        <div className="w-full lg:w-[48%] lg:order-1 flex flex-col gap-6">
          <div>
            <h2 className="font-blenda text-primary text-2xl">Misi</h2>
            <ul className="text-black list-disc list-inside text-[12px] md:text-lg text-justify mt-3">
              <li>Menegaskan jejak seni budaya Siak sebagai akar dan puncak seni budaya Melayu serumpun.</li>
              <li>Menjadikan Sanggar Tari dan Musik Balairung Sri Siak sebagai wadah pengembangan, pelestarian, dan kreasi seni budaya Melayu yaitu tari zapin tradisi.</li>
              <li>Menjadikan Sanggar Tari dan Musik Balairung Sri Siak sebagai pusat seni tradisi Siak, serta mitra Pemerintah Kabupaten Siak dalam menjaga, mengembangkan, dan mendidik generasi muda dalam melestarikan seni zapin Siak sebagai warisan budaya Melayu.</li>
              <li>Mengembangkan dan melestarikan kreasi budaya Melayu yang berorientasi pada nilai-nilai Islami melalui seni dakwah, termasuk karya lagu, syair, dan tarian Melayu bernuansa Islam.</li>
              <li>Mengangkat budaya Melayu sebagai cerminan kehidupan masyarakat masa lalu, menghargai jasa leluhur, dan menyesuaikannya dengan kemajuan zaman.</li>
              <li>Mengembangkan nilai-nilai intelektual melalui seni budaya dan berpartisipasi dalam lembaga pendidikan untuk mempersiapkan individu yang produktif dan mandiri, serta menjadikan Siak sebagai Pusat Kebudayaan Melayu di Asia Tenggara menyongsong visi dan misi Riau 2020.</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-full flex flex-col gap-6 lg:order-2">
          <div>
            <h2 className="font-blenda text-primary text-2xl">Visi</h2>
            <ul className="text-black list-disc list-inside text-[12px] md:text-lg text-justify mt-3">
              <li>Mengangkat dan melestarikan seni dan budaya Melayu sebagai bentuk pengabdian kepada negeri, dengan menjunjung tinggi marwah dan kedaulatan Melayu yang berlandaskan iman dan taqwa.</li>
              <li>Menyebarluaskan seni budaya Melayu Siak ke seluruh kawasan nusantara</li>
              <li>Menumbuhkembangkan seni budaya Melayu Siak serta mempererat hubungan kekerabatan Melayu di berbagai belahan dunia.</li>
              <li>Mempertegas dan mengaktualisasikan Zapin Siak sebagai pusat Zapin Melayu dengan semboyan &apos;Siak, The Truly Malay&apos;.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
