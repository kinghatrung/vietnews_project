import { Link } from "react-router-dom";

import config from "~/config";

function MostViewed() {
  return (
    <section className="">
      <h3 className="text-[18px] font-title font-bold mb-[12px] border-b border-[#E5E5E5]">
        <Link
          to={config.routes.home}
          className="hover-color text-color font-title font-bold"
        >
          Xem nhiều
        </Link>
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        <article className="flex items-center gap-[20px]">
          <span className="text-[48px] font-title">#1</span>
          <h3 className="text-[18px] lg:text-[14px] font-title font-bold">
            <Link
              to={config.routes.home}
              className="hover-color text-color font-title font-light"
            >
              Thủ tướng: Mỹ là thị trường lớn nhất nhưng không phải duy nhất
            </Link>
          </h3>
        </article>
      </div>
    </section>
  );
}

export default MostViewed;
