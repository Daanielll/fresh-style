import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaXTwitter, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa6";
export function Footer() {
  return (
    <div className="flex flex-col justify-center content-center ">
      <div className="px-4">
        <button className="flex items-center justify-center gap-2 home-btns my-12 max-w-[1600px] m-auto w-full">
          <HiOutlineEnvelope className="text-2xl"></HiOutlineEnvelope>
          <span>Sign up for email and get 10% off!</span>
        </button>
      </div>

      <div className="bg-neutral-100 text-left">
        <ul className="max-w-[1600px] m-auto flex flex-col gap-6 text-sm child:cursor-pointer p-8 flex-wrap md:h-56">
          <li>My Account</li>
          <li>Store Locator</li>
          <li>Shipping & Returns</li>
          <li>Contact Us & FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Feedback</li>
        </ul>
      </div>

      <div className="flex justify-evenly text-2xl py-6 border border-neutral-200 child:cursor-pointer lg:hidden">
        <FaInstagram></FaInstagram> <FaFacebook></FaFacebook>
        <FaTiktok></FaTiktok> <FaXTwitter></FaXTwitter>
      </div>

      <div className="p-6 text-xs flex w-full max-w-[1600px] m-auto justify-between items-center">
        <span>© 2023 Daniel Moshe. All Rights Reserved</span>
        <div className="hidden lg:flex text-2xl py-6 gap-8 child:cursor-pointer ">
          <FaInstagram></FaInstagram> <FaFacebook></FaFacebook>
          <FaTiktok></FaTiktok> <FaXTwitter></FaXTwitter>
        </div>
      </div>
    </div>
  );
}
