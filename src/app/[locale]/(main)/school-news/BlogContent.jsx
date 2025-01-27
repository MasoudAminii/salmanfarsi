"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

const BlogContent = ({ blogs }) => {
  const t = useTranslations("ShoolStaffPage");
  const locale = useLocale();

  return (
    <>
      {blogs.map((blog, index) => {
        const formattedDate = new Date(blog.publish_date).toLocaleDateString();
        return (
          <div
            key={blog.id}
            className="Blog-Item flex flex-col rounded-2xl shadow-md"
          >
            <Link href={`/school-news/${blog.id}`}>
              <div className="image relative h-[227px] overflow-hidden rounded-t-2xl bg-gray-400">
                <Image
                  src={`/photo_main_post/${blog.main_image}`}
                  alt={`${blog.title_en} Image`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="content flex flex-1 flex-col justify-between gap-4 p-4">
              <div className="text flex flex-col justify-between gap-4">
                <div className="category flex flex-wrap items-center gap-4">
                  <p className="w-fit rounded-[100px] border border-[#EAF3F8] px-4 py-1 text-sm text-[var(--secondary-color)]">
                    {locale == "en"
                      ? blog?.categories?.category_name_en
                      : blog?.categories?.category_name}
                  </p>
                  <p className="w-fit text-sm uppercase text-[#445375]">
                    {formattedDate}
                  </p>
                </div>
                <Link href={`/school-news/${blog.id}`}>
                  <h3 className="Title line-clamp-2 text-xl font-semibold">
                    {locale == "en" ? blog?.title_en : blog?.title}
                  </h3>
                </Link>
              </div>
              <div className="bottom-blog flex flex-col">
                <span className="my-4 h-[1px] w-full rounded-full bg-[#EAF3F8]" />
                <div className="admin-content flex flex-wrap items-center justify-between gap-4">
                  <div className="admin flex w-fit items-center gap-2"></div>
                  <Link
                    href={`/school-news/${blog.id}`}
                    className="w-fit rounded-[4px] bg-[#F3F7FB] p-3 text-[#635AD9] transition-all hover:bg-[#635AD9] hover:text-[#F3F7FB] rtl:scale-x-[-1]"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogContent;
