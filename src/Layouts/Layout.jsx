import { Outlet } from "react-router-dom";
import GNB from "../components/GNB";

const Layout = ({ children }) => {
  return (
    <>
      <GNB />
      <Outlet />
    </>
  );
};

export default Layout;
