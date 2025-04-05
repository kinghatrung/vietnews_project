import { Link, NavLink } from "react-router-dom";

import config from "~/config";

function CategoryList() {
  return (
    <div className="flex mb-[12px] items-end gap-[16px]">
      <h3 className="font-title font-bold ms:mb-0">
        <Link to={config.routes.home} className="text-[18px] hover-color">
          Bất động sản
        </Link>
      </h3>
      <span className="hidden lg:block">
        <NavLink
          to={config.routes.home}
          className={({ isActive }) =>
            isActive
              ? "text-[18px] sm:text-[13px] hover-color active-color"
              : "text-[18px] sm:text-[13px] hover-color"
          }
        >
          Chính sách
        </NavLink>
      </span>
      <span className="hidden lg:block">
        <NavLink
          to={config.routes.home}
          className={({ isActive }) =>
            isActive
              ? "text-[18px] sm:text-[13px] hover-color active-color"
              : "text-[18px] sm:text-[13px] hover-color"
          }
        >
          Thị trường
        </NavLink>
      </span>
      <span className="hidden lg:block">
        <NavLink
          to={config.routes.home}
          className={({ isActive }) =>
            isActive
              ? "text-[18px] sm:text-[13px] hover-color active-color"
              : "text-[18px] sm:text-[13px] hover-color"
          }
        >
          Dự án
        </NavLink>
      </span>
      <span className="hidden lg:block">
        <NavLink
          to={config.routes.home}
          className={({ isActive }) =>
            isActive
              ? "text-[18px] sm:text-[13px] hover-color active-color"
              : "text-[18px] sm:text-[13px] hover-color"
          }
        >
          Không gian sống
        </NavLink>
      </span>
      <span className="hidden lg:block">
        <NavLink
          to={config.routes.home}
          className={({ isActive }) =>
            isActive
              ? "text-[18px] sm:text-[13px] hover-color active-color"
              : "text-[18px] sm:text-[13px] hover-color"
          }
        >
          Tư vấn
        </NavLink>
      </span>
    </div>
  );
}

export default CategoryList;
