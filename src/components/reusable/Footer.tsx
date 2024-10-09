import { idText } from "typescript";
import { footerLinks, Pay } from "../../util/constants";
import { styles } from "../../util/style";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-full bg-greenCeladon px-[20px] sm:px-[80px] md:px-[100px] ">
      <div className="py-10">
        <h2 className={`${styles.heading2} text-white mb-10`}>
          Dairy Farm Products
        </h2>
        <div className="flex justify-between flex-wrap">
          <ul className="flex flex-wrap gap-6 justify-between lg:w-[60%] w-full list-none m-0 sm:p-0 px-16">
            {footerLinks.map((link, idx) => {
              return (
                <li key={idx} className="m-0 ">
                  <p className={`${styles.paragraph} text-footerColors my-4`}>
                    {link.title}
                  </p>
                  <ul className="flex flex-col items-start gap-2 m-0">
                    {link.links.map((item, itemIdx) => {
                      return (
                        <li key={itemIdx} className="m-0 text-white">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className="m-0 lg:mt-0 mt-4">
            <p className={`${styles.paragraph} text-footerColors my-4`}>
              Subscribe to Newsletter
            </p>
            <div className="flex w-full rounded-[10px] justify-between border-2 p-1">
              <input
                className="outline-none bg-transparent pl-2 w-[60%]"
                placeholder="Enter Your"
                type="text"
              />
              <Button
                title="Submit"
                calssName="hover:bg-whiteHovering hover:text-greenLight bg-greenLight px-6 py-2 text-montserrat text-white font-bold rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-wrap gap-4 justify-between items-center py-3">
        <p className={`${styles.paragraph} text-footerColors`}>
          All Rights Reserved - Dairy Farm Products
        </p>
        <ul className="m-0 flex gap-3 list-none items-center">
          {Pay.map((item, idText) => {
            return (
              <li
                key={idText}
                className="m-0 cursor-pointer rounded-[10px] items-center flex bg-white sm:w-[60px] w-[40px] h-[30px] sm:h-[40px]"
              >
                <img className="w-[60%]" src={item} alt={item} />
              </li>
            );
          })}
        </ul>
        <p className={`${styles.paragraph} text-footerColors`}>
          Terms & Conditions . Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
