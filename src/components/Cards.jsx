import { PropTypes } from "prop-types";
import { useState } from "react";
export function Cards({ item, cartItems, setCartItems }) {
  const [changeText, setChangeText] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const handleAddToCart = (item) => {
    const itemIndex = cartItems.findIndex((i) => i.title == item.title);

    if (itemIndex != -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };
  return (
    <>
      <div className="flex flex-col  p-3  bg-white ">
        <img
          className=" h-[30vw] lg:h-48 w-fit mx-auto my-2"
          src={item.image}
          alt={item.title}
        />
        <h1 className="my-1 text-sm">{item.title}</h1>

        <p className="font-bold text-slate-500">{`$${item.price}`}</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            const itemIndex = cartItems.findIndex((i) => i.title == item.title);
            if (itemIndex == -1 || cartItems[itemIndex].quantity < 10) {
              if (!changeText) {
                handleAddToCart(item);
                setChangeText(true);
                setFlipped(true);
                setTimeout(() => {
                  setFlipped(false);
                  setChangeText(false);
                }, 2000);
              }
            }
          }}
          className={`font-bold text-xs rounded-mg border-2 rounded-md border-slate-200 shadow-md w-32 py-2 mb-4 text-slate-500 ${
            flipped ? "animate-wiggle" : ""
          }`}
        >
          {changeText ? "Item Added" : "Add To Cart"}
        </button>
      </div>
    </>
  );
}
Cards.propTypes = {
  item: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};
