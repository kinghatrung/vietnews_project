import CategoryList from "~/components/CategoryList";
import FullNews from "~/components/FullNews";
import NewsNoImage from "~/components/NewsNoImage";

function ContentVertical() {
  const vertical = true;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] pb-[20px] mb-[20px] border-b border-[#E5E5E5]">
      <div className="">
        <CategoryList />
        <FullNews vertical={vertical} />
        <NewsNoImage />
      </div>
    </section>
  );
}

export default ContentVertical;
