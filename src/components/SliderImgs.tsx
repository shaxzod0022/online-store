import { slideImages } from "../util/constants";

const SliderImgs = () => {
  return (
    <div className="wrapper py-10 w-full">
      <ul className="corusel">
        {slideImages.map((img, idx) => {
          return (
            <li
              key={idx}
              className={`card lg:w-[515px] md:w-[450px] md:h-[260px] w-[380px] lg:h-[345px] h-[180px]`}
            >
              <img className={`h-full w-full`} src={img} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SliderImgs;
