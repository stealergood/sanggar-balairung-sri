import ImageNari from "../../../../assets/bg-nari.svg";
import ImageMotif from "../../../../assets/bg-motif.svg";
import ImageMotifAndroid from "../../../../assets/bg-motif-android.svg";

export const Background1 = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-fit relative ${className}`}>
      <img src={ImageNari} alt="" className="absolute hidden md:block w-full h-full" />
      <img src={ImageMotifAndroid} alt="" className="absolute block md:hidden w-full h-full" />
      <img
        src={ImageMotif}
        alt=""
        className="absolute bottom-0 w-full h-fit"
      />
      <div className="z-10 relative">
        {children}
      </div>
    </div>
  );
};
