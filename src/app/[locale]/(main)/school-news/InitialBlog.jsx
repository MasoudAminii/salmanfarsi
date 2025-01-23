import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getBlog } from "@/lib/actions";
import BlogContent from "./BlogContent";

const InitialBlog = async ({ query }) => {
  const blogs = await getBlog(1, query);

  if (blogs.length <= 0) {
    return (
      <div className="flex min-h-52 flex-col items-center justify-center p-4">
        <Image
          src="/logo/no-result.png"
          alt="NoResultFound"
          width={300}
          height={100}
          quality={100}
        />
        <h2 className="text-center text-2xl font-bold capitalize text-[var(--primary-color)] md:text-3xl">
          Oops, No Blogs match your search!
        </h2>
      </div>
    );
  }

  return (
    <div className="Blog-Wrapper mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <BlogContent blogs={blogs} />
    </div>
  );
};

export default InitialBlog;
