import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Divider, Flex, Row } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

import config from "~/config/";

function Navbar() {
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
            <img style={{ height: 40 }} src="./src/assets/image/NEWS.png" />
          </Link>
          <Divider style={{ height: 26 }} type="vertical" />
          <p>
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
              isActive ? "hover-color active-color" : "hover-color"
            }
          >
            Mới nhất
          </NavLink>
          <Divider style={{ height: 26 }} type="vertical" />
          <SearchOutlined className="cursor-pointer text-[15px]" />
          <Divider style={{ height: 26 }} type="vertical" />
          <p>
            <UserOutlined /> Đăng nhập
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
