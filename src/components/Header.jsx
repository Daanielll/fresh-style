import { HiBars3BottomLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
export function Header({ onMenuClick, cartLength }) {
  return (
    <>
      <div className="p-4 bg-white inline-flex justify-between w-screen font-Merriweather sticky top-0">
        <HiBars3BottomLeft
          onClick={onMenuClick}
          className="text-2xl"
        ></HiBars3BottomLeft>

        <Link to="/">Fresh Style</Link>
        <div className="flex relative">
          <Link to="/cart">
            <HiOutlineShoppingBag className="text-2xl"></HiOutlineShoppingBag>
          </Link>
          {cartLength > 0 && (
            <div className="bg-neutral-500 rounded-full w-5 h-5 absolute right-[-6px] top-[-6px]  font-Helvetica text-white">
              <p className="relative left-[0.4rem]  text-sm ">{cartLength}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
Header.propTypes = {
  onMenuClick: PropTypes.func,
};
