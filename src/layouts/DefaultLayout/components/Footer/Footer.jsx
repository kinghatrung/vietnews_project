import { Link } from "react-router-dom";
import { Col, Row, Flex } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  TikTokOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

import config from "~/config";

const apps = [
  {
    name: "Facebook",
    icon: <FacebookFilled />,
    to: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: <InstagramOutlined />,
    to: "https://www.instagram.com/",
  },
  {
    name: "Tiktok",
    icon: <TikTokOutlined />,
    to: "https://www.tiktok.com/",
  },
  {
    name: "Youtube",
    icon: <YoutubeFilled />,
    to: "https://www.youtube.com/",
  },
];

// const infos = [
//   {
//     key: 1,
//     info: `© 1997-2025. Toàn bộ bản quyền thuộc VietNews <br/>
//           Thuộc Bộ Khoa học và Công nghệ <br />
//           Số giấy phép: 548/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
//           24/08/2021`,
//   },
//   {
//     key: 2,
//     info: `Tổng biên tập: Nguyễn Minh Huyên <br />
//           Phó tổng biên tập: Nguyễn Minh Huyên <br />
//           Phó tổng biên tập: Nguyễn Minh Huyên <br />
//           Phó tổng biên tập: Nguyễn Minh Huyên <br />
//           Tổng thư ký tòa soạn: Nguyễn Minh Huyên`,
//   },
//   {
//     key: 3,
//     info: `Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu
//           Giấy, Hà Nội <br />
//           Điện thoại: 024 7300 8899 - máy lẻ 4500 <br />
//           Email: webmaster@vnexpress.net`,
//   },
// ];

function Footer() {
  return (
    <div className="max-w-[1130px] px-4 mx-auto">
      <Row
        align="center"
        justify="space-between"
        className="border-b border-t border-t-[#bdbdbd] border-[#E5E5E5] h-[50px]"
      >
        <Flex align="center">
          <Link to={config.routes.home}>
            <img style={{ height: 40 }} src="./src/assets/image/NEWS.png" />
          </Link>
        </Flex>

        <Flex align="center">
          {apps.map((app) => (
            <Link
              key={app.name}
              style={{ color: "#757575" }}
              className="text-[16px] px-[2px] mx-[3px] hover:opacity-[0.7]"
              to={app.to}
            >
              {app.icon}
            </Link>
          ))}
        </Flex>
      </Row>

      <Row
        gutter={[48, { lg: 16, md: 16, sm: 16, xs: 16 }]}
        className="mb-[20px] mt-[15px]"
      >
        {/* {infos.map((item) => (
          <Col lg={8} md={8} sm={8} xs={24} key={item.key}>
            {item.info}
          </Col>
        ))} */}
        <Col lg={8} md={8} sm={8} xs={24}>
          © 1997-2025. Toàn bộ bản quyền thuộc VietNews <br />
          Thuộc Bộ Khoa học và Công nghệ <br />
          Số giấy phép: 548/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
          24/08/2021
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          Tổng biên tập: Nguyễn Minh Huyên <br />
          Phó tổng biên tập: Nguyễn Minh Huyên <br />
          Phó tổng biên tập: Nguyễn Minh Huyên <br />
          Phó tổng biên tập: Nguyễn Minh Huyên <br />
          Tổng thư ký tòa soạn: Nguyễn Minh Huyên
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
          Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu
          Giấy, Hà Nội <br />
          Điện thoại: 024 7300 8899 - máy lẻ 4500 <br />
          Email: webmaster@vnexpress.net
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
