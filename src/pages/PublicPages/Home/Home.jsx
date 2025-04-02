import { Link } from "react-router-dom";
import { LikeOutlined } from "@ant-design/icons";

import config from "~/config";
import TopStory from "~/layouts/DefaultLayout/components/TopStory";
import ContentDaily from "~/layouts/DefaultLayout/components/ContentDaily";

function Home() {
  return (
    <>
      <TopStory />
      <ContentDaily />
    </>
  );
}

export default Home;
