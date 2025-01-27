"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const BlogContent = ({ blogs }) => {
  const locale = useLocale();
  return (
    <div className="Blog-Content grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {blogs.map((blog, index) => {
        const formattedDate = new Date(blog.publish_date).toLocaleDateString();
        return (
          <div
            key={index}
            className={`item group relative overflow-hidden rounded-xl ${
              index === 0
                ? "sm:col-span-2 md:row-span-2"
                : index === 3
                  ? "sm:col-span-2"
                  : ""
            } min-h-[250px]`}
          >
            <Link href={`/school-news/${blog.id}`}>
              <div className="image relative h-full w-full transition-all duration-400 group-hover:scale-105">
                <Image
                  src={`/photo_main_post/${blog.main_image}`}
                  alt="eid"
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Link>
            <div className="text absolute bottom-0 left-0 right-0 flex flex-col gap-3 bg-gradient-to-t from-black to-transparent p-4 px-6">
              <p className="w-fit rounded-full border border-gray-300 px-4 py-1 text-sm text-[var(--secondary-color)] text-white backdrop-blur-md">
                {locale == "en"
                  ? blog?.categories?.category_name_en
                  : blog?.categories?.category_name}
              </p>
              <Link href={`/school-news/${blog.id}`}>
                <h3 className="title line-clamp-2 text-base font-semibold text-white md:text-lg">
                  {locale == "en" ? blog?.title_en : blog?.title}
                </h3>
              </Link>
              <p className="date text-sm uppercase text-gray-300">
                {formattedDate}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogContent;
