import ImageNari from "../../../../assets/bg-nari-bawah.svg";
import ImageMotifAtas from "../../../../assets/bg-motif-atas.svg";

export const Background3 = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-fit relative ${className}`}>
      <img src={ImageMotifAtas} alt="" className="absolute top-0 w-full h-fit" />
      <img
        src={ImageNari}
        alt=""
        className="absolute bottom-0 w-full h-fit"
      />
      <div className="z-10 relative">
        {children}
      </div>
    </div>
  );
};
