import { Outlet } from "react-router-dom";
import GNB from "../components/GNB";

const Layout = ({ children }) => {
  return (
    <Layout>
      <GNB />
      <Outlet />
    </Layout>
  );
};

export default Layout;
