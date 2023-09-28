import { HiBars3BottomLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
export function Header({ onMenuClick, cartItems }) {
  const cartLength = cartItems.reduce((total, currItem) => {
    return total + currItem.quantity;
  }, 0);
  return (
    <>
      <div className="p-4 bg-white w-full font-Merriweather sticky top-0">
        <div className="flex justify-between w-full max-w-[1600px] m-auto items-center lg:px-6">
          <HiBars3BottomLeft
            onClick={onMenuClick}
            className="text-2xl lg:hidden"
          ></HiBars3BottomLeft>
          <div className="flex gap-10 items-center lg:p-3">
            <Link className="text-lg" to="/">
              Fresh Style
            </Link>
            <div className="hidden lg:flex gap-10 font-Helvetica font-bold">
              <Link to="/">Home</Link>
              <Link to="/men">{"Men's"}</Link>
              <Link to="/women">{"Women's"}</Link>
            </div>
          </div>

          <div className="flex relative">
            <Link to="/cart">
              <HiOutlineShoppingBag className="text-2xl"></HiOutlineShoppingBag>

              {cartLength > 0 && (
                <div className="bg-neutral-500 rounded-full w-5 h-5 absolute right-[-0.4rem] top-[-0.4rem]  font-Helvetica text-white">
                  <p
                    className={`relative text-sm ${
                      cartLength > 9 ? "left-[0.1rem]" : "left-[0.4rem]"
                    }`}
                  >
                    {cartLength}
                  </p>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
Header.propTypes = {
  onMenuClick: PropTypes.func,
  cartItems: PropTypes.array,
};
