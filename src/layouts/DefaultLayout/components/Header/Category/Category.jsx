import { NavLink } from "react-router-dom";
import { Flex } from "antd";

import config from "~/config/";

function Category() {
  return (
    <Flex
      align="center"
      justify="center"
      className="h-[50px] border-b border-[#E5E5E5] sticky top-0 bg-white z-10 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]"
    >
      <div className="scroll-container px-4">
        <ul className="inline-flex items-center gap-[15px]">
          <NavLink
            to={config.routes.home}
            // Cách dùng active ClassName của Router
            className={({ isActive }) =>
              isActive ? "active-color hover-color active-color" : "text-color"
            }
          >
            <li className="item-link">Chính trị</li>
          </NavLink>

          <NavLink
            to="/home"
            // Cách dùng active ClassName của Router
            className={({ isActive }) =>
              isActive ? "active-color" : "text-color"
            }
          >
            <li className="item-link">Chính trị</li>
          </NavLink>
        </ul>
      </div>
    </Flex>
  );
}

export default Category;
