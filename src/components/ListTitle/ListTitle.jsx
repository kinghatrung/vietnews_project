import { Link } from "react-router-dom";

import config from "~/config";

function ListTitle() {
  return (
    <div className="list-disc pl-[20px] pt-[20px]">
      <ul className="flex flex-col lg:flex-row justify-between list-disc gap-[20px] lg:gap-[40px]">
        <li>
          <h3 className="text-[16px]  lg:text-[15px] font-title font-bold">
            <Link
              to={config.routes.home}
              className="hover-color text-color font-title font-bold"
            >
              Vua Bỉ thăm Hoàng thành Thăng Long
            </Link>
          </h3>
        </li>
        <li>
          <h3 className="text-[16px]  lg:text-[15px] font-title font-bold">
            <Link
              to={config.routes.home}
              className="hover-color text-color font-title font-bold"
            >
              Vua Bỉ thăm Hoàng thành Thăng Long
            </Link>
          </h3>
        </li>
        <li>
          <h3 className="text-[16px]  lg:text-[15px] font-title font-bold">
            <Link
              to={config.routes.home}
              className="hover-color text-color font-title font-bold"
            >
              Vua Bỉ thăm Hoàng thành Thăng Long
            </Link>
          </h3>
        </li>
      </ul>
    </div>
  );
}

export default ListTitle;
