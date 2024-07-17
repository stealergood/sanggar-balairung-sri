import Alat1 from "../../assets/images/alat-musik/alat1.png"
import Alat2 from "../../assets/images/alat-musik/alat2.png"
import Alat3 from "../../assets/images/alat-musik/alat3.png"
import Alat4 from "../../assets/images/alat-musik/alat4.png"
import Alat5 from "../../assets/images/alat-musik/alat5.png"
import Alat6 from "../../assets/images/alat-musik/alat6.png"
import Alat7 from "../../assets/images/alat-musik/alat7.png"
import Alat8 from "../../assets/images/alat-musik/alat8.png"
import Alat9 from "../../assets/images/alat-musik/alat9.png"
import Nada1 from "../../assets/images/musik/bismillah1.jpg"
import Nada2 from "../../assets/images/musik/bismillah2.jpg"

export const AlatMusik = () => {
  return (
    <div className="w-full h-[800px] md:h-[1024px] bg-motif-android3 md:bg-motif3 bg-cover bg-center overflow-y-scroll">
      <div className="w-full flex justify-center py-20">
        <h1 className="font-blenda text-primary text-4xl lg:text-6xl">Alat Musik</h1>
      </div>
      <div className="w-full px-6 lg:px-20 pb-10 flex flex-col gap-3">
        <p className="text-black">
          Dalam tari zapin siak menggunakan iringan musik dengan alat
          tradisional yaitu :
        </p>
        <div className="w-full text-black flex flex-col gap-3 text-justify">
          <h1 className="font-mon-bold text-xl">1. Gambus</h1>
          <p>
            Gambus adalah bentuk musik tradisional dalam budaya Melayu,
            khususnya di Siak, Riau. Ini sering digunakan sebagai pendamping
            untuk berbagai lagu tradisional dan rakyat, seperti Zapin Siak.
            Gambus memiliki bentuk yang unik, menyerupai oud atau lute dari
            Timur Tengah, engan badan berbentuk buah pir dan leher yang pendek.
            Biasanya terbuat dari kayu, dengan bagian depan atau resonator yang
            bisa ditutupi kulit atau bahan lain yang menghasilkan suara yang
            khas. Gambus memiliki sejumlah senar (umumnya 3 hingga 12 senar)
            yang terbuat dari nilon atau usus hewan, yang dipetik dengan
            menggunakan jari atau plektrum (alat pemetik). Tujuan utama Gambus
            dalam musik tradisional Siak adalah untuk memberikan energi dan rasa
            tenang. Suara khasnya menciptakan suara otonik, yang merupakan
            refleksi budaya Melayu dan mengingatkan emosi. Ini juga dipengaruhi
            oleh musik Timur Tengah dan disesuaikan dengan wilayah Melayu.
            Gambus juga populer di Nusantara, di mana itu adalah elemen penting
            dalam musik tradisional Siak. Gambus juga digunakan dalam tarian dan
            festival tradisional, mempromosikan budaya dan meningkatkan kekuatan
            tarian tradisional Melayu.
          </p>
          <div className="flex gap-10 text-[10px] md:text-base">
            <div className="w-52 flex flex-col flex-wrap justify-center text-center gap-2">
              <img src={Alat1} alt="" className="w-52 rounded-[1.9rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
              <h2>Contoh bagaimana cara memegang alat musik gambus</h2>
            </div>
            <div className="w-52 flex flex-col flex-wrap justify-center text-center gap-2">
              <img src={Alat2} alt="" className="w-52 rounded-[1.9rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
              <h2>Contoh bagaimana cara memegang alat musik gambus</h2>
            </div>
          </div>
        </div>

        <div className="w-full text-black flex flex-col gap-3 text-justify">
          <h1 className="font-mon-bold text-xl">2. Marwas</h1>
          <p>
            Marwas (meruas) berasal dari kata “seruas”. Kata serua hanya
            terdapat pada jenis kayu-kayuan dan bambu. Menurut kamus umum bahasa
            Indonesia, kata ruas ini adalah bagian antara buku dengan denga
            buku. (Poerwadarminta, 1976: 834). Marwas adalah bentuk musik
            tradisional yang memainkan peran penting dalam budaya Melayu,
            khususnya di Siak, Riau. Ini adalah bagian integral dari musik
            Melayu tradisional, seperti Zapin. Marwas memiliki beberapa
            karakteristik, seperti instrumen drum sederhana, ritme ritme, dan
            elemen dinamis yang mendukung musik tradisional dan ritme.
            Pengaruhnya meluas ke era Zapin Siak, menyediakan energi dan ritme
            untuk waktu dan ruang. Marwas juga memiliki pengaruh dari era Timur
            Tengah, terutama musik Arab, yang dipengaruhi oleh Islam dan
            dianggap musik Melayu. Marwas digunakan dalam festival musik
            tradisional dan perayaan di Siak untuk mempromosikan dan
            mempertahankan warisan musik Melayu. Ini tidak hanya menyediakan
            hiburan tetapi juga mempromosikan identitas dan harmoni komunitas.
            Untuk menghindari salah pemahaman dan pengertian, diberilah istilah
            kata-kata”tak dan tung”. Kata “tak” bermakna memukul bagian tepi
            marwas, sedangkan “tung” adalah memukul bagian tengahnya. Selain itu
            tak tung juga memiliki makna tinggi dan rendah, dimana dalam kaidah
            permusikan (notasi) nada tinggi dinyatakan dengan not yang tarangkai
            keatas, dan nada rendah not tangkainya kebawah.
          </p>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 py-5 items-center">
            <img src={Alat5} alt="" className="w-48 rounded-[1.6rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
            <img src={Alat6} alt="" className="w-48 rounded-[1.6rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
          </div>
          <p>
            Didalam memainkan marwas terdapat beberapa macam pikulan seperti
            pukul satu, dua, tiga, dan empat. Dimana empat pukulan ini merupakan
            perpaduan harmonisasi. Berikut landasan utama bermain marwas dengan
            baik :
          </p>
          <ul className="list-decimal px-5 flex flex-col gap-5">
            <li>
              Pada bagian pertama pukul satu dengan simbol M1
              <div className="py-5">
                <img src={Alat7} alt="" className=" w-60 rounded-[1.3rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
              </div>
            </li>
            <li>
              Pada bagian kedua pukul dua dengan simbol M2
              <div className="py-5">
                <img src={Alat8} alt="" className="w-60 rounded-[1.9rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
              </div>
            </li>
            <li>
              Pada bagian ketiga pukul tiga dengan simbol M3
              <div className="py-5">
                <img src={Alat9} alt="" className="w-60 rounded-[1.3rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
              </div>
            </li>
            <li>
              Bagian empat merupakan improvisasi dari kesemuanya sebagai pengisi
              kekosongan pukulan, sehingga pukulan ini bersifat serba isi atau
              all around.
            </li>
          </ul>
          <div className="w-full flex justify-center md:justify-start pt-10 pb-5">
            <div className="w-52 flex flex-col flex-wrap justify-center text-center gap-2">
              <img src={Alat3} alt="" className="w-52 rounded-[1.8rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]" />
              <h2>alat musik marwas</h2>
            </div>
          </div>
          <div>
            <p>
              Ada istilah lanjutan atau tingkat pukulan yang harus dikuasai,
              istilah tersebut adalah “senting” atau “dogoh”. Kedua istilah ini
              berguna sebagai pukulan menaik (keras, nyaring dan melengking).
              Dalam bahasa istilah musik senting dan dogoh ini disebut “forte”
              yang artinya keras atau nyaring.
            </p>
            <p>
              Selain teknik pukulan, aturan dan posisi serta kedudukan marwas juga
              harus dipelajari dengan baik. Cara memegang marwas adalah dengan
              meletakkan marwas tersebut diatas tangan kiri dengan posisi yang
              tepat, dimana marwas berada di telapak tangan dengan ibu jari
              disangkutkan pada tali yang berbentuk mata jerat, sedangkan
              jari-jari lainya ada yang mengapit dan ada yang berada di bagian
              rongga bawahnya.
            </p>
            <p>
              Permainan jari manis, tengah dan telunjuk yang berada di sisi bawah
              tersebut menutup dan membuka menurut istilah tak tung. Sekain itu
              keakraban dan kerjasama antara jari-jari yang berada pada tangan
              kiri harus seimbang dengan jari-jari sebelah kanan. Keseimbangan
              inilah yang harus dijaga agar refleksinya tetap berjalan terus
              dengan lancar, sehingga harmonisasinya dapat dirasakan. Setelah tiga
              pukulan dasar, selanjutnyaa akan diketengahkan perkembangan
              pukulannya sesuai dengan dasar pembagianya. Misalnya pukul satu
              dipecah menjadi tiga pukulan dan seterusnya. Untuk lebih jelasnya
              lihatlah partitur dibawah :
            </p>
            <div className="py-5">
              <img src={Alat4} alt="" className="w-72 rounded-[1.2rem] shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]"/>
            </div>
          </div>
          <p className="mt-10">Untuk lebih jelas simaklah partitur komposisi musik zapin berikut :</p>
          <div className="w-full flex flex-col justify-center gap-10">
            <div className="w-full flex flex-col items-center ">
              <p>Bismillah Ciptaan:</p>
              <p>S. Berrein. SR</p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center gap-10">
              <div className="w-fit flex flex-col text-center gap-2">
                <img src={Nada1} alt="" className="w-[25rem] rounded-2xl shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]"/>
                <p>Note 1</p>
              </div>
              <div className="w-fit flex flex-col text-center gap-2">
                <img src={Nada2} alt="" className="w-[25rem] rounded-2xl shadow-[0px_0px_41px_-2px_rgba(0,0,0,0.75)]"/>
                <p>Note 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
