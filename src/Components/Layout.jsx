import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {

  return (
    <div className="flex h-screen w-full overflow-hidden transition-colors duration-300 selection:bg-blue-500/30">
      <div className="relative flex h-full flex-1 flex-col overflow-hidden">
        <Navbar />

        {/* Content Area */}
        <main className="custom-scrollbar relative flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
          <div className="mx-auto min-h-[calc(100vh-4rem)] w-full">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
