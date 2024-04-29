import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

function Layout() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? "dark" : " "}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Outlet />
          <Footer />
          {/* <Router /> */}
        </div>
      </div>
    </>
  );
  // return (
  //   <div>
  //     <Navbar />
  //     <Outlet />
  //     <Footer />
  //   </div>
  // );
}

export default Layout;
