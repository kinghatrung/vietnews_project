import { Divider, Button, Form, Input } from "antd";

function Login({ isChangeForm, setIsChangeForm }) {
  return (
    <>
      <h1 className="text-[22px] mb-[24px] font-title text-center font-bold">
        Đăng Nhập
      </h1>
      <Form name="login" layout="vertical">
        <Form.Item
          layout="vertical"
          className="!mb-[16px] !font-bold"
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Email không hợp lệ!",
            },
            {
              message: "Vui lòng nhập email!",
            },
          ]}
        >
          <Input
            className="!p-[14px] !rounded-none !font-medium"
            type="email"
            placeholder="Nhập Email của bạn"
          />
        </Form.Item>

        <Form.Item
          layout="vertical"
          label="Mật khẩu"
          name="password"
          className="!mb-[16px] !font-bold"
          rules={[
            {
              type: "password",
              message: "Password không hợp lệ!",
            },
            {
              message: "Vui lòng nhập Password!",
            },
          ]}
        >
          <Input
            className="!p-[12px] !rounded-none !font-medium"
            type="password"
            placeholder="Hãy nhập mật khẩu"
          />
        </Form.Item>

        <Form.Item className="!m-0">
          <Button
            block
            type="primary"
            htmlType="submit"
            className="!rounded-none !p-[22px] !bg-[#757575] !font-bold"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <div className="flex justify-between items-center">
        <Button
          className="!mt-[10px] !text-[#757575] !p-0"
          color="default"
          variant="link"
        >
          Quên mật khẩu
        </Button>
        <Button
          className="!mt-[10px] !text-[#757575] !p-0"
          color="default"
          variant="link"
          onClick={() => setIsChangeForm(!isChangeForm)}
        >
          Tạo tài khoản
        </Button>
      </div>
    </>
  );
}

export default Login;
