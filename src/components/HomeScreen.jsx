import { Link } from "react-router-dom";
export function HomeScreen() {
  return (
    <>
      <div className="bg-amber-500 lg:px-4">
        <div className="lg:flex text-sm text-center py-3 px-9 max-w-[1600px] m-auto lg:text-start items-center gap-8">
          <p>Free Shipping Over $99</p>
          <div className="flex gap-2 w-full lg:w-fit justify-center lg:justify-normal my-3 text-xs underline text-center">
            <Link to="/women">Shop Women&apos;s</Link>
            <Link to="/men">Shop Men&apos;s</Link>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-[1600px]">
        <div className="bg-home-sm md:bg-home-lg w-full aspect-square md:aspect-[2/1] bg-cover text-center text-neutral-100 px-16 flex flex-col gap-1 justify-center font-Merriweather">
          <h2 className="text-lg [text-shadow:_3px_1px_0px_rgb(0_0_0_/_50%)] md:text-xl lg:text-2xl">
            Fresh Style
          </h2>
          <h4 className="font-extrabold text-xl [text-shadow:_3px_2px_2px_rgb(0_0_0_/_50%)] md:text-2xl lg:text-3xl">
            WARM UP IN COZY STYLE AND COMFORT
          </h4>
          <p className="text-xs [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)] md:text-sm lg:text-base">
            Experience the coziest winter with our trendy hoodies
          </p>
          <div className="hidden md:flex gap-6 self-center my-4 ">
            <Link
              to="/men"
              className="px-4 py-2 font-bold border border-amber-700 bg-[rgba(255_255_255_/_0.8)] text-amber-700 font-Helvetica rounded-full"
            >
              Shop Men
            </Link>
            <Link
              to="/women"
              className="px-4 py-2 font-bold border border-amber-700 bg-[rgba(255_255_255_/_0.8)] text-amber-700 font-Helvetica rounded-full"
            >
              Shop Women
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-3 child:md:mt-4">
          <Link to="/men" className="home-btns md:hidden ">
            Shop Men&apos;s
          </Link>

          <div className="w-full aspect-square bg-man-square bg-cover md:aspect-video md:bg-man-long flex text-white text-center">
            <div className="hidden md:block self-center mx-[8%] max-w-xs lg:max-w-md">
              <h4 className="font-extrabold [text-shadow:_3px_2px_2px_rgb(0_0_0_/_50%)] text-4xl lg:text-6xl font-Abril">
                FEEL THE FALL MAGIC
              </h4>
              <p className="md:text-lg lg:text-2xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)] my-3 lg:my-6">
                Discover the Latest Fall Collection
              </p>
              <button className="bg-transparent border-2 rounded-full px-4 py-1 font text-sm lg:text-base">
                Shop Fall / Winter &apos;23 Collection
              </button>
            </div>
          </div>
          <Link to="/women" className="home-btns md:hidden">
            Shop Women&apos;s
          </Link>
          <div className="w-full aspect-square bg-woman-square bg-cover md:aspect-video md:bg-woman-long  flex text-white font-Helvetica text-center justify-end">
            <div className="hidden md:block  self-center  max-w-xs lg:max-w-md mx-[8%]">
              <h4 className=" [text-shadow:_3px_2px_2px_rgb(0_0_0_/_50%)] text-4xl lg:text-6xl font-Lobster">
                SUN-KISSED SUMMER LOOKS
              </h4>
              <p className="text-lg lg:text-2xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)] my-3 lg:my-6">
                Stay Cool and Stylish This Summer
              </p>
              <button className="bg-transparent border-2 rounded-full px-4 py-1 text-sm lg:text-base">
                Shop Spring / Summer &apos;23 Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
