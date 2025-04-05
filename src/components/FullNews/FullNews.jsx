import { Link } from "react-router-dom";

import config from "~/config";

function FullNews() {
  return (
    <>
      <article className="flex flex-2 flex-col lg:flex-row gap-[15px] border-b lg:border-r lg:border-b-0 border-[#E5E5E5] pb-[20px] lg:pr-[20px] lg:pb-0">
        <Link to={config.routes.home}>
          <div className="lg:w-[225px] lg:h-[135px] aspect-[5/3] block">
            <img
              className="size-full object-cover"
              src="./src/assets/image/nothing.jpg"
            />
          </div>
        </Link>
        <div className="">
          <h3 className="text-[18px] lg:text-[15px] font-title font-bold mb-2 ms:mb-0">
            <Link
              to={config.routes.home}
              className="hover-color text-color font-title font-bold"
            >
              Vua Bỉ thăm Hoàng thành Thăng Long
            </Link>
          </h3>
          <p className="mt-1 text-[17px] sm:text-[14px] line-clamp-4">
            <Link style={{ color: "#4f4f4f" }}>
              Hà Nội - Chủ tịch nước Lương Cường và Vua Philippe cùng tham quan
              Hoàng thành Thăng Long, nghe giới thiệu về lịch sử hàng nghìn năm
              của dân tộc Việt Nam.
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}

export default FullNews;
