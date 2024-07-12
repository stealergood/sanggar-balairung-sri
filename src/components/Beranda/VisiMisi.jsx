import VisiMisiPicture from "../../assets/images/visimisi.jpeg"

export const VisiMisi = () => {
  return (
    <div className='w-full bg-motif3 bg-cover bg-center'>
      <div className="w-full flex justify-center py-10">
        <h1 className="font-blenda text-primary text-4xl lg:text-7xl">Visi & Misi</h1>
      </div>
      <div className="w-full p-7 lg:p-10 lg:px-28 flex flex-wrap gap-10">
        <div className=" flex justify-center">
          <img src={VisiMisiPicture} alt="visi misi" className="w-[25rem] rounded-xl" />
        </div>
        <div className="lg:w-[57%] flex flex-col gap-3 order-last md:order-none">
          <h2 className="font-blenda text-primary text-2xl">Misi</h2>
          <ul className="text-black decoration list-disc text-sm text-justify">
            <li>Menegaskan jejak seni budaya Siak sebagai akar dan puncak seni budaya Melayu serumpun.</li>
            <li>Menjadikan Sanggar Tari dan Musik Balairung Sri Siak sebagai wadah pengembangan, pelestarian, dan kreasi seni budaya Melayu yaitu tari zapin tradisi</li>
            <li>Menjadikan Sanggar Tari dan Musik Balairung Sri Siak sebagai pusat seni tradisi Siak, serta mitra Pemerintah Kabupaten Siak dalam menjaga, mengembangkan, dan mendidik generasi muda dalam melestarikan seni zapin Siak sebagai warisan budaya Melayu.</li>
            <li>Mengembangkan dan melestarikan kreasi budaya Melayu yang berorientasi pada nilai-nilai Islami melalui seni dakwah, termasuk karya lagu, syair, dan tarian Melayu bernuansa Islam.</li>
            <li>Mengangkat budaya Melayu sebagai cerminan kehidupan masyarakat masa lalu, menghargai jasa leluhur, dan menyesuaikannya dengan kemajuan zaman.</li>
            <li>Mengembangkan nilai-nilai intelektual melalui seni budaya dan berpartisipasi dalam lembaga pendidikan untuk mempersiapkan individu yang produktif dan mandiri, serta menjadikan Siak sebagai Pusat Kebudayaan Melayu di Asia Tenggara menyongsong visi dan misi Riau 2020.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-blenda text-primary text-2xl">Visi</h2>
          <ul className="text-black decoration list-disc text-sm text-justify">
            <li>Mengangkat dan melestarikan seni dan budaya Melayu sebagai bentuk pengabdian kepada negeri, dengan menjunjung tinggi marwah dan kedaulatan Melayu yang berlandaskan iman dan taqwa.</li>
            <li>Menyebarluaskan seni budaya Melayu Siak ke seluruh kawasan nusantara</li>
            <li>Menumbuhkembangkan seni budaya Melayu Siak serta mempererat hubungan kekerabatan Melayu di berbagai belahan dunia.</li>
            <li>Mempertegas dan mengaktualisasikan Zapin Siak sebagai pusat Zapin Melayu dengan semboyan `Siak, The Truly Malay`.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
