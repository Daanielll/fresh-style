import { useQuery } from "react-query";
import { Header } from "./components/header";
import { HomeScreen } from "./components/HomeScreen";
import "./App.css";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { MenClothes } from "./components/MenClothes";
import { Cart } from "./components/Cart";
import { WomenClothes } from "./components/WomenClothes";
import { useEffect, useState } from "react";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const waitFor = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));
  const [itemAdded, setItemAdded] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  document.body.style.overflow = showSidebar ? "hidden" : "";
  // useEffect(() => {
  //   const addItemAndReset = async () => {
  //     setItemAdded(true);
  //     await waitFor(4000);
  //     setItemAdded(false);
  //   };

  //   addItemAndReset();
  // }, [cartItems]);
  return (
    <>
      {itemAdded && cartItems.length > 0 && (
        <div className="absolute-center bg-slate-400 px-2 py-1 rounded-sm text-sm ">
          Item Added To Cart
        </div>
      )}
      <Header
        cartLength={cartItems.length}
        onMenuClick={() => setShowSidebar(true)}
      ></Header>
      {showSidebar && (
        <Sidebar onSidebarClose={() => setShowSidebar(false)}></Sidebar>
      )}
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>

        <Route
          path="/men"
          element={
            <MenClothes cartItems={cartItems} setCartItems={setCartItems} />
          }
        ></Route>
        <Route
          path="/women"
          element={
            <WomenClothes cartItems={cartItems} setCartItems={setCartItems} />
          }
        ></Route>

        <Route
          path="cart"
          element={
            <Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>
          }
        ></Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
