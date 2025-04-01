import { Row, Col, Flex, Divider } from "antd";

function Home() {
  return (
    <Row gutter={[20, 10]}>
      <Col lg={17} md={24} sm={24} xs={24}>
        <article>
          <Flex gap="20px">
            <img className="object-cover" src="./src/assets/image/test.webp" />

            <div>
              <h1>Vua Bỉ thăm Hoàng thành Thăng Long</h1>
              <p>
                Chủ tịch nước Lương Cường và Vua Philippe cùng tham quan Hoàng
                thành Thăng Long, nghe giới thiệu về lịch sử hàng nghìn năm của
                dân tộc Việt Nam.
              </p>
              <span>44' trước</span>
            </div>
          </Flex>
        </article>
        <Divider className="w-full bg-[#e5e5e5]" />
        <div></div>
      </Col>
      <Col lg={7} md={24} sm={24} xs={24}>
        Quản cáo
      </Col>
    </Row>
  );
}

export default Home;
