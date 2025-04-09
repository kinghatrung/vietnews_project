import { Link } from "react-router-dom";

import config from "~/config";
import News from "~/components/News";

function TopStory() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-24 gap-[10px] mb-[20px]">
      <div className="col-span-17 border-b border-[#E5E5E5] pb-[20px]">
        <News large title sizeLarge />
        <div className="flex flex-col sm:flex-row gap-[20px]">
          <News title noTime medium reverse hiddenSubTitle sizeDefault />
          <News title noTime medium reverse hiddenSubTitle sizeDefault />

          <div className="bg-[#f7f7f7] p-[16px] md:p-[10px] lg:bg-transparent lg:p-0">
            <p className="text-[20px] sm:text-[14px] font-bold font-title mb-2">
              <Link
                style={{ color: "#c4302e" }}
                to={config.routes.home}
                className="hover-color"
              >
                Góc nhìn
              </Link>
            </p>

            <News author noImage title noTime sizeAuthor />
          </div>
        </div>
      </div>
      <div className="col-span-7">Quảng cáo</div>
    </section>
  );
}

export default TopStory;
