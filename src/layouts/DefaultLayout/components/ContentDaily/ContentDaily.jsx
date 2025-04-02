import { Link } from "react-router-dom";

import config from "~/config";

function ContentDaily() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-24 gap-[10px] pt-[20px]">
      <div className="col-span-9 pr-[20px] border-r border-[#E5E5E5]">Left</div>
      <div className="col-span-15 pl-[px]">Right</div>
    </section>
  );
}

export default ContentDaily;
