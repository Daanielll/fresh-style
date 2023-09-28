import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
export function Cart({ cartItems, setCartItems }) {
  const handleIncrease = (itemIndex) => {
    const updatedCart = [...cartItems];
    updatedCart[itemIndex].quantity += 1;
    setCartItems(updatedCart);
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
        <ul className="flex flex-col items-center p-6 max-h-[60vh] overflow-auto gap-2 text-neutral-800">
          {cartItems.map((item, i) => (
            <li
              key={i}
              className="flex p-3 pr-6 bg-white w-full justify-left gap-4 items-center border shadow-lg"
            >
              <img
                className=" h-[30vw] w-[25vw]"
                src={item.image}
                alt={item.title}
              />
              <div>
                <h1 className="my-1 w-[50vw]">{item.title}</h1>

                <p className="font-bold flex justify-between">{`US$${item.price}`}</p>
                <div className="flex gap-4 mt-2">
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
                  <button
                    onClick={() => handleRemove(i)}
                    className="text-neutral-600 text-xs "
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="p-8 py-4 w-screen">
        <button className="w-full py-3 bg-neutral-500 text-white text-lg rounded-full">
          Checkout
        </button>
      </div>
    </>
  );
}
Cart.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};
