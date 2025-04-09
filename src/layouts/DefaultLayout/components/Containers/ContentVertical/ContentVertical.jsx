import CategoryList from "~/components/CategoryList";
import News from "~/components/News";

function ContentVertical() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] pb-[20px] mb-[20px] border-b border-[#E5E5E5]">
      <div>
        <CategoryList />
        <News vertical title noTime sizeDefault />
        <News vertical title noImage noTime sizeDefault />
      </div>
    </section>
  );
}

export default ContentVertical;
