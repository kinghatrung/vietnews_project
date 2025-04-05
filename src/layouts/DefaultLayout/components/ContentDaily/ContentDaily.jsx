import { Link, NavLink } from "react-router-dom";
import { LikeOutlined } from "@ant-design/icons";

import config from "~/config";

function ContentDaily() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-24 gap-[10px]">
      <div className="lg:col-span-9 col-span-full pr-0 lg:pr-[20px] border-r-0 lg:border-r border-[#E5E5E5]">
        <article className="border-b border-[#E5E5E5] pb-[20px] mb-[20px]">
          <h3 className="text-[18px] sm:text-[15px] font-title font-bold mb-2 ms:mb-0">
            <Link to={config.routes.home} style={{ color: "#222222" }}>
              Thủ tướng: Cần mạnh dạn giao việc khó cho doanh nghiệp tư nhân
            </Link>
          </h3>
          <div className="flex flex-col md:flex-row gap-[10px] mt-0 sm:mt-2">
            <Link to={config.routes.home} className="order-2 md:order-1">
              <div className="md:w-[145px] md:h-[87px] aspect-[5/3]">
                <img
                  className="size-full object-cover"
                  src="./src/assets/image/nothing.jpg"
                  alt="Thủ tướng: Cần mạnh dạn giao việc khó cho doanh nghiệp tư nhân"
                />
              </div>
            </Link>
            <p className="order-1 md:order-2 text-[17px] sm:text-[14px]">
              <Link to={config.routes.home} style={{ color: "#4f4f4f" }}>
                Thủ tướng cho rằng nên tin tưởng giao việc cho khu vực tư nhân,
                kể cả ở lĩnh vực khó như hiện đại hoá công nghiệp quốc phòng, an
                ninh.
              </Link>
            </p>
          </div>
        </article>
      </div>
      <div className="lg:col-span-15 col-span-full pl-0 lg:pl-[10px]">
        <div className="">
          <div className="flex mb-[12px] items-end gap-[16px]">
            <h3 className="font-title font-bold ms:mb-0">
              <Link to={config.routes.home} className="text-[18px] hover-color">
                Bất động sản
              </Link>
            </h3>
            <span className="">
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
            <span className="">
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
            <span className="">
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
            <span className="">
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
            <p className="">
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
            </p>
          </div>
          <div>
            <div>
              <article className="flex gap-[15px]">
                <Link to={config.routes.home}>
                  <div className="lg:w-[225px] lg:h-[135px] aspect-[5/3] block">
                    <img
                      className="size-full object-cover"
                      src="./src/assets/image/nothing.jpg"
                    />
                  </div>
                </Link>
                <div className="pt-[16px] sm:pt-0">
                  <h3 className="text-[15px] font-title font-bold">
                    <Link
                      to={config.routes.home}
                      className="hover-color text-color font-title font-bold"
                    >
                      Vua Bỉ thăm Hoàng thành Thăng Long
                    </Link>
                  </h3>
                  <p className="mt-1 text-[17px] sm:text-[14px]">
                    <Link style={{ color: "#4f4f4f" }}>
                      Hà Nội - Chủ tịch nước Lương Cường và Vua Philippe cùng
                      tham quan Hoàng thành Thăng Long, nghe giới thiệu về lịch
                      sử hàng nghìn năm của dân tộc Việt Nam.
                    </Link>
                  </p>
                  <p className="mt-2 text-[#757575] text-[12px]">
                    44' trước
                    <span className="ml-3">Kinh doanh</span>
                  </p>
                </div>
              </article>
              <article></article>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentDaily;
