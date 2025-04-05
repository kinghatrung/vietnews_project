import { Link } from "react-router-dom";

import config from "~/config";

function NewsNoImage() {
  return (
    <article className="flex-1">
      <div className="pt-[20px] sm:pt-0">
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
  );
}

export default NewsNoImage;
