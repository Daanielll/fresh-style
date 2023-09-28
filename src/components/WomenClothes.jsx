import { useQuery } from "react-query";
import { PropTypes } from "prop-types";

export function WomenClothes({ cartItems, setCartItems }) {
  async function fetchData() {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/women's%20clothing`
    );
    return res.json();
  }
  const { data, status } = useQuery("womenpProdcuts", fetchData);

  const handleAddToCart = (item) => {
    const itemIndex = cartItems.findIndex((i) => i.title == item.title);

    if (itemIndex != -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };
  if (status == "loading")
    return (
      <>
        <div></div>
        <h1 className="text-center py-5 text-2xl  font-Merriweather border-t-[0.15rem] border-neutral-200 ">
          Women
        </h1>
        <div className="w-screen h-96 flex justify-center items-center">
          <svg
            className="animate-spin"
            fill="none"
            height="50"
            viewBox="0 0 20 20"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z"
              fill="#212121"
            />
          </svg>
        </div>
      </>
    );
  if (status == "error") return <h1>Error</h1>;

  if (status == "success")
    return (
      <>
        <h1 className="text-center py-5 text-2xl  font-Merriweather border-y-[0.15rem] border-neutral-200">
          Women
        </h1>
        <div className="grid grid-cols-2 gap-2 p-2">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-white h-full rounded-xl  p-1 shadow-custom"
            >
              <div className="flex flex-col  p-3  bg-white ">
                <img
                  className=" h-[30vw] w-fit mx-auto my-2"
                  src={item.image}
                  alt={item.title}
                />
                <h1 className="my-1">{item.title}</h1>

                <p className="font-bold">{`US$${item.price}`}</p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="font-bold text-xs rounded-md border border-neutral-200 bg-white shadow-md px-5 py-2 mb-4"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}
WomenClothes.propTypes = {
  setCartItems: PropTypes.func,
  cartItems: PropTypes.array,
};
