import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export function Sidebar({ onSidebarClose }) {
  const [showText, setShowText] = useState(false);
  const barWidth = showText ? "w-[80vw] overflow-auto" : "w-0 overflow-hidden";

  useEffect(() => {
    setShowText(true);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-40 z-50">
      <div
        className={`${barWidth} py-8 h-screen absolute z-60 bg-white top-0 left-0 animate-width`}
      >
        {
          <>
            <AiOutlineClose
              className="absolute right-6 text-2xl"
              onClick={() => {
                setShowText(false);
                // onSidebarClose();
                setTimeout(() => {
                  onSidebarClose();
                }, 400);
                // if (barWidth == "w-0") console.log("finished");
                // await delay(1000);
                // onSidebarClose();
              }}
            >
              X
            </AiOutlineClose>

            <ul className="child:text-2xl child:font-bold child:my-6 mx-8">
              <li onClick={onSidebarClose}>
                <Link to="/">Home</Link>
              </li>

              <li onClick={onSidebarClose}>
                <Link to="/men">Men</Link>
              </li>
              <li onClick={onSidebarClose}>
                <Link to="/women">Women</Link>
              </li>
              <li onClick={onSidebarClose}>
                <Link to="/cart">Cart</Link>
              </li>
              <li>{showText}</li>
            </ul>
          </>
        }
      </div>
    </div>
  );
}
Sidebar.propTypes = {
  onSidebarClose: PropTypes.func,
};
