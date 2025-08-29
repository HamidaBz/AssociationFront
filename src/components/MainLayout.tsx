import { Outlet } from "react-router-dom";
import NavigationDesktop from "./NavigationDesktop";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <NavigationDesktop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default MainLayout;
