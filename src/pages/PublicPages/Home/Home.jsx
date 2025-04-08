import TopStory from "~/layouts/DefaultLayout/components/Containers/TopStory";
import ContentDaily from "~/layouts/DefaultLayout/components/Containers/ContentDaily";
import MostViewed from "~/layouts/DefaultLayout/components/Containers/MostViewed";
import ContentVertical from "~/layouts/DefaultLayout/components/Containers/ContentVertical";

function Home() {
  return (
    <div>
      <TopStory />
      <ContentDaily />
      <ContentVertical />
      <MostViewed />
    </div>
  );
}

export default Home;
