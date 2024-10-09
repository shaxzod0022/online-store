import { partners } from "../util/constants";
import { styles } from "../util/style";

const Partners = () => {
  return (
    <div className="text-center sm:py-20 py-10 md:px-[100px] px-10">
      <h2 className={`${styles.heading2} mb-7`}>Our Partners</h2>
      <ul className="list-none flex md:flex-row flex-wrap md: gap-4">
        {partners.map((part, idx) => {
          return (
            <li
              key={idx}
              className="p-4 box-shadow relative border-2 rounded-[20px] sm:w-full w-[150px] max-w-[288px] sm:h-[220px] h-[150px] flex flex-col justify-center sm:mb-20 mb-14"
            >
              <img className="w-full" src={part} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Partners;
