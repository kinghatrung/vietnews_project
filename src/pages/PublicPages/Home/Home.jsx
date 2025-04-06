import TopStory from "~/layouts/DefaultLayout/components/Containers/TopStory";
import ContentDaily from "~/layouts/DefaultLayout/components/Containers/ContentDaily";
import MostViewed from "~/layouts/DefaultLayout/components/Containers/MostViewed";

function Home() {
  return (
    <div>
      <TopStory />
      <ContentDaily />
      <MostViewed />
    </div>
  );
}

export default Home;
