import { Link, NavLink } from "react-router-dom";

import config from "~/config";
import ListTitle from "~/components/ListTitle";
import FullNews from "~/components/FullNews";
import NewsNoImage from "~/components/NewsNoImage";
import CategoryList from "~/components/CategoryList";

function ContentDaily() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-24">
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
      <div className="lg:col-span-15 col-span-full pl-0 lg:pl-[20px]">
        <h1>Quảng cáo</h1>
        <div className="mt-[20px] pt-[20px] border-t border-t-[#bdbdbd] border-[#E5E5E5]">
          <CategoryList />
          <div className="flex flex-col lg:flex-row gap-0 md:gap-[20px] border-b border-[#E5E5E5] pb-[20px]">
            <FullNews />
            <NewsNoImage />
          </div>
          <ListTitle />
        </div>
      </div>
    </section>
  );
}

export default ContentDaily;
