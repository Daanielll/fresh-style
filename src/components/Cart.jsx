import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
export function Cart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce((total, currItem) => {
    return total + currItem.price * currItem.quantity;
  }, 0);
  const totalItems = cartItems.reduce((total, currItem) => {
    return total + currItem.quantity;
  }, 0);
  const handleIncrease = (itemIndex) => {
    const updatedCart = [...cartItems];
    if (updatedCart[itemIndex].quantity < 10) {
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    }
  };

  const handleDecrease = (itemIndex) => {
    const updatedCart = [...cartItems];
    if (updatedCart[itemIndex].quantity > 1) {
      updatedCart[itemIndex].quantity -= 1;
      setCartItems(updatedCart);
    }
  };
  const handleRemove = (itemIndex) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(itemIndex, 1);
    setCartItems(updatedCart);
  };
  return (
    <>
      <h1 className="text-center py-5 text-2xl  font-Merriweather border-y-[0.15rem] border-neutral-200">
        Cart
      </h1>
      {cartItems.length == 0 ? (
        <div className="h-64 flex flex-col items-center justify-center text-neutral-500 gap-2">
          <p>Your cart is empty.</p>
          <Link to="/" className="text-xs underline">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row max-w-[1600px] m-auto lg:justify-between">
          <ul className="flex flex-col items-center lg:items-start p-6 gap-2 text-neutral-800 w-full">
            {cartItems.map((item, i) => (
              <li
                key={i}
                className="flex p-3 pr-6 rounded-sm bg-white w-full max-w-[60rem] justify-left gap-4 md:gap-8 items-center border shadow-lg"
              >
                <img
                  className=" h-[30vw] aspect-[5/6] max-h-32 lg:max-h-40"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col md:flex-row w-full justify-between">
                  <div className="w-full">
                    <h1 className="my-1 ">{item.title}</h1>

                    <p className="font-bold flex justify-between">{`$${item.price}`}</p>
                  </div>

                  <div className="flex flex-col gap-1 my-2 items-start md:w-28 md:ml-8">
                    <p className="text-ss">Quantity</p>
                    <p className="flex items-center gap-3 text-lg ">
                      <FaSquareMinus
                        onClick={() => handleDecrease(i)}
                        className="text-neutral-300"
                      ></FaSquareMinus>
                      <span>{item.quantity}</span>
                      <FaSquarePlus
                        onClick={() => handleIncrease(i)}
                        className="text-neutral-300"
                      ></FaSquarePlus>
                    </p>
                    <p className="text-xs">{`Subtotal:`}</p>
                    <p className="text-xs">
                      {(item.quantity * item.price).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemove(i)}
                      className="text-sky-600 text-sm mt-1 "
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-6 py-6 w-screen lg:max-w-[42rem]">
            <div className="p-6 bg-neutral-100 rounded-sm mb-6">
              <h1 className="flex justify-between font-bold mb-3 text-lg">
                Order summary <span>{`${totalItems} Item(s)`}</span>
              </h1>
              <ul className="child:flex child:justify-between flex flex-col gap-3 border-y border-neutral-300 py-6 ">
                <li>
                  {`Item(s) subtotal: `} <span>${totalPrice.toFixed(2)}</span>
                </li>
                <li>
                  Shipping <span>FREE</span>
                </li>
                <li>
                  Estimated tax:{" "}
                  <span>${(totalPrice * 0.08875).toFixed(2)}</span>
                </li>
              </ul>
              <h1 className="flex justify-between font-bold text-lg border-b border-neutral-300 py-3">
                Order total{" "}
                <span>${(totalPrice + totalPrice * 0.08875).toFixed(2)}</span>
              </h1>
            </div>
            <button
              onClick={() => setCartItems([])}
              className="w-full py-3 bg-black text-white text-lg rounded-sm"
            >
              Checkout
            </button>
            <Link to="/">
              <button
                to="/"
                className="w-full py-3 border-2 border-black  text-lg rounded-sm mt-4"
              >
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
Cart.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};
