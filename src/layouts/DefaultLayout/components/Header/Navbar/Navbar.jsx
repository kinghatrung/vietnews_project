import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Divider, Button, Modal } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";

import config from "~/config/";
import Login from "~/components/FormValidate/Login";
import Register from "~/components/FormValidate/Register";

const fadeSlide = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangeForm, setIsChangeForm] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-[#E5E5E5] text-[#757575]">
      <div className="max-w-[1130px] px-4 mx-auto h-[50px] flex justify-between items-center">
        <div className="flex items-center">
          <Link to={config.routes.home}>
            <img className="h-[40px]" src="./src/assets/image/NEWS.png" />
          </Link>
          <Divider
            className="!hidden md:!block"
            style={{ height: 26 }}
            type="vertical"
          />
          <p className="hidden md:block">
            {currentDate.toLocaleDateString("vi-VN", {
              weekday: "long",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex items-center">
          <NavLink
            to={config.routes.home}
            className={({ isActive }) =>
              isActive
                ? "hover-color active-color hidden md:block"
                : "hover-color hidden md:block"
            }
          >
            Mới nhất
          </NavLink>
          <Divider
            className="!hidden md:!block"
            style={{ height: 26 }}
            type="vertical"
          />
          <SearchOutlined className="cursor-pointer text-[15px] !hidden md:!block" />
          <Divider
            className="!hidden md:!block"
            style={{ height: 26 }}
            type="vertical"
          />
          <Button
            className="!text-[#4f4f4f] hover:!text-[#c4302e] !p-0"
            color="default"
            variant="link"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <UserOutlined /> Đăng nhập
          </Button>

          <Modal
            width={420}
            classNames={{
              header: "!m-0",
              content: "!p-0 !rounded-[4px]",
            }}
            afterClose={() => setIsChangeForm(!isChangeForm)}
            title={
              <div className="flex justify-center items-center border-b border-[#E5E5E5]">
                <img className="h-[50px]" src="./src/assets/image/NEWS.png" />
              </div>
            }
            open={isModalOpen}
            onCancel={() => setIsModalOpen(!isModalOpen)}
            footer={null}
          >
            <div className="px-[24px] pt-[24px] pb-[64px] bg-[#F4F6F8] rounded-[4px]">
              <AnimatePresence mode="wait">
                {!isChangeForm ? (
                  <motion.div key="login" {...fadeSlide}>
                    <Login
                      isChangeForm={isChangeForm}
                      setIsChangeForm={setIsChangeForm}
                    />
                  </motion.div>
                ) : (
                  <motion.div key="register" {...fadeSlide}>
                    <Register
                      isChangeForm={isChangeForm}
                      setIsChangeForm={setIsChangeForm}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <Divider className="!font-body">Hoặc</Divider>
              <div className="flex justify-center items-center gap-3">
                <Button className="!border !border-[#E5E5E5] !p-[20px]">
                  <img src="https://s1.vnecdn.net/myvne/i/v352/ls/icons/icon-google.svg" />
                  Google
                </Button>
                <Button className="!border !border-[#E5E5E5] !p-[20px]">
                  <img src="https://s1.vnecdn.net/myvne/i/v352/ls/icons/icon-facebook.svg" />
                  Facebook
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
