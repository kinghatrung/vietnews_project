import { FloatButton } from "antd";

import Navbar from "~/layouts/DefaultLayout/components/Header/Navbar";
import Footer from "~/layouts/DefaultLayout/components/Footer";
import Category from "~/layouts/DefaultLayout/components/Header/Category";

function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Category />
      <div className="max-w-[1130px] px-4 mx-auto py-[20px]">{children}</div>
      <Footer />
      <FloatButton.BackTop shape="square" />
    </div>
  );
}

export default DefaultLayout;
