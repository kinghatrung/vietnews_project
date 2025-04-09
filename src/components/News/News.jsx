import { Link } from "react-router-dom";
import { LikeOutlined } from "@ant-design/icons";
import clsx from "clsx";

import config from "~/config";

function News({
  vertical = false,
  horizontal = false,
  author = false,
  reverse = false,
  large = false,
  medium = false,
  sizeDefault = false,
  sizeLarge = false,
  sizeSmall = false,
  sizeAuthor = false,
  hiddenSubTitle = false,
  noImage = false,
  noSubTitle = false,
  noImageAndSubTitle = false,
  noTime = false,
  title = false,
}) {
  return (
    <article
      className={clsx({
        "flex flex-col gap-[15px] pb-[15px] mb-[15px] border-b border-[#E5E5E5]":
          vertical,
        "flex flex-2 flex-col lg:flex-row gap-[15px] border-b lg:border-r lg:border-b-0 border-[#E5E5E5] pb-[20px] lg:pr-[20px] lg:pb-0":
          horizontal,
        "flex flex-col": author,
        "flex-1": noImageAndSubTitle,
        "sm:flex gap-[20px] border-b border-[#E5E5E5] pb-[20px] mb-[20px]":
          large,
        "flex flex-col-reverse justify-between": reverse,
      })}
    >
      {!noImage && (
        <Link to={config.routes.home}>
          <div
            className={clsx({
              "aspect-[5/3]": vertical,
              "lg:w-[225px] lg:h-[135px] aspect-[5/3]": horizontal,
              "xl:w-[520px] xl:h-[312px] lg:w-[440px] lg:h-[264px] md:w-[440px] md:h-[264px] aspect-[5/3]":
                large,
              "sm:w-[250px] sm:h-[150px] aspect-[5/3]": medium,
            })}
          >
            <img
              className="size-full object-cover"
              src="./src/assets/image/nothing.jpg"
            />
          </div>
        </Link>
      )}
      <div
        className={clsx({
          "pt-[20px] sm:pt-0": noImageAndSubTitle,
          "pt-[16px] sm:pt-0": large,
        })}
      >
        {title && (
          <h3
            className={clsx({
              "text-[18px] md:text-[15px]": sizeDefault,
              "text-[20px]": sizeLarge,
              "text-[18px] sm:text-[15px] mb-2 ms:mb-0": sizeSmall,
              "text-[20px] sm:text-[15px] mb-1": sizeAuthor,
            })}
          >
            <Link
              to={config.routes.home}
              className="hover-color text-color font-title font-bold"
            >
              Vua Bỉ thăm Hoàng thành Thăng Long
            </Link>
          </h3>
        )}
        {!noSubTitle && (
          <p
            className={clsx("text-[17px] sm:text-[14px]", {
              "mt-3 line-clamp-4": sizeLarge,
              "mt-1 line-clamp-4": sizeDefault,
              "block sm:hidden  mb-3 ms:mb-0": hiddenSubTitle,
              "line-clamp-3": sizeAuthor,
            })}
          >
            <Link style={{ color: "#4f4f4f" }}>
              Hà Nội - Chủ tịch nước Lương Cường và Vua Philippe cùng tham quan
              Hoàng thành Thăng Long, nghe giới thiệu về lịch sử hàng nghìn năm
              của dân tộc Việt Nam.
            </Link>
          </p>
        )}
        {!noTime && (
          <p className="mt-2 text-[#757575]">
            44' trước
            <span className="ml-3">Kinh doanh</span>
          </p>
        )}

        {author && (
          <div className="flex justify-between mt-5">
            <div className="flex flex-col">
              <h3 className="italic font-title text-[16px] sm:text-[14px]">
                <Link style={{ color: "#757575" }} to={config.routes.home}>
                  Nguyễn Minh Huyên
                </Link>
              </h3>
              <p className="mt-1 text-[12px]">
                <LikeOutlined /> 34
              </p>
            </div>
            <img
              className="block sm:hidden md:hidden lg:hidden xl:block w-[72px] sm:w-[60px] rounded-full"
              src="./src/assets/image/nothing.jpg"
              alt="Profile picture"
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default News;
