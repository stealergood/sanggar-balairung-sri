import Pakaian1 from "../../assets/images/pakaian/pakaian1.png";
import Pakaian3 from "../../assets/images/pakaian/pakaian3.png";
import Pakaian4 from "../../assets/images/pakaian/pakaian4.png";
import Pakaian5 from "../../assets/images/pakaian/pakaian5.png";
import Pakaian6 from "../../assets/images/pakaian/pakaian6.png";
import Pakaian7 from "../../assets/images/pakaian/pakaian7.jpeg";

export const Pakaian = () => {
  return (
    <div className="w-full h-[800px] md:h-[1024px] bg-motif-android2 md:bg-motif2 bg-cover bg-center overflow-y-scroll">
      <div className="w-full flex justify-center pt-16 md:pt-0 py-10 md:py-20">
        <h1 className="font-blenda text-primary text-center text-4xl md:text-6xl">Pakaian</h1>
      </div>
      <div className="w-full px-6 lg:px-20 pb-10 text-[12px] md:text-base">
        <ul className="text-black text-justify list-disc">
          <li>
            Pakaian pada laki-laki yang menarikan tari zapin Siak berupa setelan
            baju melayu cekak musang atau tekuk belanga dengan memakai kain
            sampin serta kopiah atau peci di kepala. Pakaian tersebut
            disesuaikan dengan bentuk acara yang akan ditampilkan. Jika tarian
            zapin akan ditampilkan dihadapan Sultan/ di Istana Siak Sri ndrapura
            maka pakainanya menggunakan kain tenun Siak. Kain tenun Siak
            merupakan kain songket bertabur benang emas yang merupakan industri
            rumah yang dikerjakan oleh wanita di Siak. Jika tari zapin
            ditampilkan pada upacara perkawinan, sunat rosul atau penyambutan
            tamu, penari memakai songket tenun Siak. Jika tari zapin ditampilkan
            sebagai hiburan biasa dilingkungan masyarakat umum, penari tidak
            perlu menggunakan kain tenun siak. Mereka bisa menggunakan kain dari
            bahan lain misalnya kain pelikat.
          </li>
          <li>
            Pakaian penari wanita Zapin Siak biasanya terdiri dari baju kurung
            berwarna cerah dan bermotif bunga atau daun, terbuat dari kain halus
            seperti katun atau rayon. Pakaian ini dilengkapi dengan selendang,
            sepatu, dan aksesori yang serasi, semuanya menyesuaikan tema tari
            Zapin Siak.
          </li>
        </ul>
        <div className="w-full flex flex-wrap gap-16 justify-center pt-20">
          <div className="w-fit h-fit flex flex-col gap-2 text-center text-black">
            <img src={Pakaian7} alt="pakaian1" className="w-64 md:w-80 rounded-[2rem] shadow-[-1px_-1px_20px_9px_rgba(0,0,0,0.54)]"/>
            <span>Baju Melayu Cekak Musang</span>
          </div>
          <div className="w-fit h-fit flex flex-col gap-2 text-center text-black">
            <img src={Pakaian1} alt="pakaian1" className="w-64 md:w-80 h-[426px] rounded-[2rem] shadow-[-1px_-1px_20px_9px_rgba(0,0,0,0.54)]"/>
            <span>Baju Kurung</span>
          </div>
        </div>
      </div>
    </div>
  );
};
