import { Link } from "react-router-dom";
export function HomeScreen() {
  return (
    <>
      <div className="text-sm text-center py-3 bg-amber-500">
        <p>Free Shipping Over US$99</p>
        <div className="flex gap-2 w-screen justify-center my-3 text-xs underline">
          <Link to="/women">Shop Women&apos;s</Link>
          <Link to="/men">Shop Men&apos;s</Link>
        </div>
      </div>
      <div className="bg-home-image w-screen h-[34rem] bg-cover bg-[30%] text-center text-neutral-100 px-16 flex flex-col gap-1 justify-center font-Merriweather">
        <h2 className="text-lg [text-shadow:_3px_1px_0px_rgb(0_0_0_/_50%)]">
          Fresh Style
        </h2>
        <h4 className="font-extrabold text-xl [text-shadow:_3px_2px_2px_rgb(0_0_0_/_50%)]">
          WARM UP IN COZY STYLE AND COMFORT
        </h4>
        <p className="text-xs [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]">
          Experience the coziest winter with our trendy hoodies
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <Link to="/men" className="home-btns">
          Shop Men&apos;s
        </Link>
        <div className="w-screen h-[28rem] bg-man-square bg-cover"></div>
        <Link to="/women" className="home-btns">
          Shop Women&apos;s
        </Link>
        <div className="w-screen h-[28rem] bg-woman-square bg-cover"></div>
      </div>
    </>
  );
}
