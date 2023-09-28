import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaXTwitter, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa6";
export function Footer() {
  return (
    <div className="flex flex-col justify-center content-center">
      <button className="flex items-center justify-center gap-2 home-btns my-12">
        <HiOutlineEnvelope className="text-2xl"></HiOutlineEnvelope>
        <span>Sign up for email and get 10% off!</span>
      </button>
      <ul className="text-sm child:my-5 child:cursor-pointer py-2 px-8 bg-neutral-100">
        <li>My Account</li>
        <li>Store Locator</li>
        <li>Shipping & Returns</li>
        <li>Contact Us & FAQ</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Feedback</li>
      </ul>
      <div className="flex justify-evenly text-2xl py-6 border border-neutral-200 child:cursor-pointer">
        <FaInstagram></FaInstagram> <FaFacebook></FaFacebook>
        <FaTiktok></FaTiktok> <FaXTwitter></FaXTwitter>
      </div>

      <div className="p-6 text-xs">
        © 2023 Fresh Style Co. All Rights Reserved
      </div>
    </div>
  );
}
