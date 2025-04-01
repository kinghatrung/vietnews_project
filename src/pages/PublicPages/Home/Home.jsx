import { Row, Col, Flex, Divider } from "antd";
import { Link } from "react-router-dom";

import config from "~/config";

function Home() {
  return (
    <Row gutter={[20, 10]}>
      <Col
        className="border-b border-[#E5E5E5] pb-[20px]"
        lg={17}
        md={24}
        sm={24}
        xs={24}
      >
        <article className="border-b border-[#E5E5E5] pb-[20px] mb-[20px]">
          <Flex gap="20px">
            <img
              className="w-[520px] object-cover"
              src="./src/assets/image/test.webp"
            />
            <div>
              <h3 className="text-[24px] font-title font-medium">
                <Link
                  to={config.routes.home}
                  className="hover-color text-color"
                >
                  Vua Bỉ thăm Hoàng thành Thăng Long
                </Link>
              </h3>
              <p className="mt-[10px]">
                <Link style={{ color: "#4f4f4f" }}>
                  Hà Nội - Chủ tịch nước Lương Cường và Vua Philippe cùng tham
                  quan Hoàng thành Thăng Long, nghe giới thiệu về lịch sử hàng
                  nghìn năm của dân tộc Việt Nam.
                </Link>
              </p>
              <p className="mt-2 text-[#757575]">44' trước</p>
            </div>
          </Flex>
        </article>

        <Flex className="w-full" gap="20px">
          <div className="w-[30%]">
            <h3 className="text-[15px] font-title font-medium">
              <Link to={config.routes.home}>
                Cả nước dự kiến còn 5.000 xã phường
              </Link>
            </h3>
            <Link to={config.routes.home}>
              <img className="w-full" src="./src/assets/image/test.webp" />
            </Link>
          </div>
        </Flex>
      </Col>
      <Col lg={7} md={24} sm={24} xs={24}>
        Quản cáo
      </Col>
    </Row>
  );
}

export default Home;
