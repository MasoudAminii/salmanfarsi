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
          <article
            key={blog.id}
            className={`item group relative overflow-hidden rounded-xl ${
              index === 0
                ? "sm:col-span-2 md:row-span-2"
                : index === 3
                  ? "sm:col-span-2"
                  : ""
            } min-h-[250px]`}
          >
            <Link
              href={`/school-news/${blog.id}`}
              aria-label={`Read more about ${blog.title}`}
            >
              <div className="image-container relative h-full w-full transform-gpu overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={`/photo_main_post/${blog.main_image}`}
                  alt={blog.title || "Blog post image"}
                  fill
                  quality={80}
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="content-overlay absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <div className="space-y-3 text-white">
                  <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/20">
                    {locale === "en"
                      ? blog?.categories?.category_name_en
                      : blog?.categories?.category_name}
                  </span>

                  <h3 className="line-clamp-2 text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    {locale === "en" ? blog?.title_en : blog?.title}
                  </h3>

                  <time
                    className="block text-sm font-medium text-white/80"
                    dateTime={blog.publish_date}
                  >
                    {formattedDate}
                  </time>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default BlogContent;
