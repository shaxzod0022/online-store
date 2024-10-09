import { FC } from "react";
import { User1 } from "../../assets";
import { styles } from "../../util/style";

interface Props {
  className?: string;
  img: string;
  name: string;
  title: string;
}
const Reviews: FC<Props> = ({ className, img, name, title }): JSX.Element => {
  return (
    <div className={`w-full p-[24px] border-2 rounded-[10px] ${className}`}>
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center m-0 gap-4">
          <img src={img} alt="" />
          <p className="font-semibold">{name}</p>
        </div>
        <span className="p-3 m-0 bg-bgButtonOrange rounded-lg text-orangePortland">
          9/10
        </span>
      </div>
      <div>
        <h2 className={`${styles.heading2} mb-3`}>Amazing Product</h2>
        <p className={`${styles.paragraph}`}>{title}</p>
      </div>
    </div>
  );
};

export default Reviews;
