import { Header } from "./components/Header";
import { HomeScreen } from "./components/HomeScreen";
import "./App.css";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { MenClothes } from "./components/MenClothes";
import { Cart } from "./components/Cart";
import { WomenClothes } from "./components/WomenClothes";
import { useState } from "react";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  document.body.style.overflow = showSidebar ? "hidden" : "";

  return (
    <>
      <Header
        cartItems={cartItems}
        onMenuClick={() => setShowSidebar(true)}
      ></Header>
      {showSidebar && (
        <Sidebar onSidebarClose={() => setShowSidebar(false)}></Sidebar>
      )}
      <ScrollToTop></ScrollToTop>
      <div className="min-h-screen flex flex-col justify-between child:w-full">
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
          <Route
            path="*"
            element={
              <h1 className="font-bold text-lg m-auto text-center">
                Not found
              </h1>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
