import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
const BlogContent = ({ blogs }) => {
  const locale = useLocale();

  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="item group transition-all hover:scale-105"
        >
          <Link href={`/school-news/${blog.id}`}>
            <div className="Image shine relative h-[260px] overflow-hidden rounded-lg bg-[#303030] group-hover:shadow-inner max-sm:h-[60vw] sm:h-[270px]">
              <Image
                src={`/photo_main_post/${blog.main_image}`}
                alt={`${blog.title_en} Image`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </Link>
          <div className="text line-clamp-2 px-2 py-1 capitalize text-white sm:text-lg">
            {locale == "en" ? blog?.title_en : blog?.title}
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogContent;
