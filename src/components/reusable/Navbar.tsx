import { Link, useNavigate } from "react-router-dom";
import { boxIcon, searchIcon } from "../../assets";
import { navbarLinks } from "../../util/constants";
import { styles } from "../../util/style";
import Button from "../reusable/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../app/userSlice";
import { RootState } from "../../app/store";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.users.users);
  const [hidden1, setHidden1] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(true);
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const dispatch = useDispatch();
  const addUser = (): void => {
    if (!accHidden) {
      let arr = {
        id: user.length,
        userName: nameValue,
        userEmail: emailValue,
        password: passwordValue,
      };
      if (arr) {
        dispatch(addUsers(arr));
      }
    }
    setHidden((prev) => !prev);
  };

  const logOut = (): void => {
    window.location.reload();
  };

  const [accHidden, setAccHidden] = useState<Boolean>(false);
  const [cartBtnHidden, setCartBtnHidden] = useState<boolean>(false);
  const product = useSelector((state: RootState) => state.products.products);
  const viewCard = (): void => {};
  const navigation = useNavigate();
  const toProductCart = (): void => {
    navigation("/product_cart");
  };
  const toCheckout = (): void => {
    navigation("/checkout");
  };
  return (
    <div
      className={`bg-white max-w-[1440px] fixed z-[99] w-full flex justify-between items-center lg:px-[100px] px-10 py-4 box-shadow-navbar`}
    >
      <div className="m-0">
        <Link to="/">
          <h1 className={`${styles.heading1}`}>
            <span className="text-greenCeladon">D</span>
            <span className="text-orangePortland">F</span>
            <span className="text-greenLight">P</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center m-0 gap-5 relative">
        <ul className={`list-none gap-[40px] flex`}>
          {navbarLinks.map((link, idx) => {
            return (
              <li key={idx}>
                <a className="text-silverRoman hover:text-greenCeladon" href="">
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setCartBtnHidden((prev) => !prev)}
          className={`bg-orangePortland hover:bg-orange-400 text-white rounded-[6px] flex items-center py-1 px-2 gap-2 `}
        >
          <img src={boxIcon} alt="box" /> <span>{product.length}</span>
        </button>

        {/* hidden cart */}
        <div
          className={`text-center rounded-lg absolute bg-white box-shadow p-5 w-[563px] leftTrans left-[35%] box-shadow border-2 ${
            cartBtnHidden ? "inline" : "hidden"
          } ${product.length === 0 ? "bottom-[-99px]" : "bottom-[-262px]"}`}
        >
          <h2
            className={`${styles.heading2} ${
              product.length === 0 ? "block" : "hidden"
            }`}
          >
            {product.length === 0 ? "Cart is empty" : "Yes"}
          </h2>
          <p
            className={`${styles.paragraph} ${
              product.length === 0 ? "block" : "hidden"
            }`}
          >
            Add some item to the cart
          </p>
          <div>
            <div
              className={`scrooll ${product.length === 0 ? "hidden" : "block"}`}
            >
              {product.map((item, idx) => {
                return (
                  <div
                    className={`${styles.heading2} ${
                      product.length === 0 ? "hidden" : "flex"
                    }  w-full items-center justify-between mb-3`}
                  >
                    <Button
                      title="x"
                      calssName="text-white bg-greenCeladon !rounded-[10px] text-[24px] px-2"
                    />
                    <div key={idx} className="flex items-center gap-8  m-0">
                      <div className="w-[100px] bg-whiteHovering p-2 rounded-lg">
                        <img className="w-full" src={item.img} alt="" />
                      </div>
                      <div className="text-start">
                        <h3 className={`${styles.heading3} m0 mb-1`}>
                          {item.title}
                        </h3>
                        <span className="m-0 text-[13px]">{item.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 m-0">
                      <Button
                        title="-"
                        calssName="text-white bg-greenCeladon !rounded-[10px] text-[24px] px-2"
                      />
                      <span>1</span>
                      <Button
                        title="+"
                        calssName="text-white bg-orangePortland !rounded-[10px] text-[24px] px-2"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              onClik={() => toCheckout()}
              title="Checkout"
              calssName={`text-white text-[18px] bg-orangePortland w-full py-3 ${
                product.length === 0 ? "hidden" : "block"
              } px-4 mb-3`}
            />
            <Button
              onClik={() => toProductCart()}
              title="View Cart"
              calssName={`text-[18px] hover:bg-bgButtonOrange text-orangePortland bg-white border-2 border-orangePortland w-full py-3  px-4 ${
                product.length === 0 ? "hidden" : "block"
              }`}
            />
          </div>
        </div>
        <div className="flex items-center border-2 rounded-[7px] py-1 px-2">
          <button className="p-1">
            <img src={searchIcon} alt="search" />
          </button>
          <input
            className="text-silverRoman outline-none lg:flex  xl:flex hidden ml-2 w-30"
            type="text"
            placeholder="Search"
          />
        </div>
        <Button
          onClik={() => setHidden((prev) => !prev)}
          title="Register/Login"
          calssName={`${styles.buttonCeladon} ${
            user.length === 0 ? "block" : "hidden"
          }`}
        />
        <Button
          onClik={() => setHidden1((prev) => !prev)}
          title={user
            .map((item) => item.userName)
            .join("")
            .toUpperCase()}
          calssName={`cursor-pointer text-bold text-greenCeladon ${
            user.length === 0 ? "hidden" : "block"
          }`}
        />
        <div
          className={`max-w-[306px] w-full rounded-xl box-shadow absolute bottom-[-200px] right-0 bg-white p-8 border-2 ${
            hidden1 ? "hidden" : "inline"
          }`}
        >
          <h1 className={`${styles.heading1} mb-1`}>
            {user
              .map((item) => item.userName)
              .join("")
              .toUpperCase()}
          </h1>
          <p className={`${styles.paragraph} mb-3 text-[12px]`}>
            Welcome! We are glad that you are here.
          </p>
          <Button
            onClik={() => logOut()}
            title="Logout"
            calssName="font-semibold hover:bg-orange-700 text-white bg-orangePortland py-3 px-6 w-full"
          />
        </div>
        <div
          className={`max-w-[306px] border-2 w-full rounded-xl box-shadow absolute right-0 bg-white p-8 ${
            accHidden ? "bottom-[-280px]" : "bottom-[-331px]"
          } ${hidden ? "hidden" : "inline"}`}
        >
          <input
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNameValue(e.target.value)
            }
            type="text"
            className={`outline-none border-2 w-full m-0 rounded-lg p-2 mb-2 ${
              accHidden ? "hidden" : "block"
            }`}
            placeholder="Your Name"
          />
          <input
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmailValue(e.target.value)
            }
            type="text"
            className="outline-none border-2 w-full m-0 rounded-lg p-2 mb-3"
            placeholder="Your Email"
          />
          <input
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordValue(e.target.value)
            }
            type="password"
            className="outline-none border-2 w-full m-0 rounded-lg p-2 mb-3"
            placeholder="Your Password"
          />
          <Button
            onClik={() => addUser()}
            title={accHidden ? "Login" : "Register"}
            calssName="font-semibold hover:bg-orange-700 text-white bg-orangePortland py-3 px-6 w-full mb-2"
          />
          <Button
            onClik={() => setAccHidden((prev) => !prev)}
            title={
              accHidden ? "Don’t have an account?" : "Already have an account?"
            }
            calssName="font-semibold hover:bg-bgButtonOrange text-orangePortland bg-white border-2 border-orangePortland py-3 px-6 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
