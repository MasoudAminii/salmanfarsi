// import ViewCounter from "@/components/actions/ViewCounter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import prisma from "@/lib/db";
import { getBlog, getRelatedPosts, getTopPosts } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiFolderOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { getTranslations } from "next-intl/server";

// export async function generateMetadata({ params }) {
//   const blogData = await getBlog(params.slug);

//   if (!blogData) {
//     return {
//       title: "404 - Page Not Found",
//       description: "The page you are looking for does not exist.",
//     };
//   }

//   return {
//     title: blogData?.title_en,
//     description: blogData?.content1_en || "this is a blog",
//     openGraph: {
//       title: blogData?.title_en,
//       description: blogData?.content1_en,
//       url: "armanegar.site",
//       images: {
//         url: `/photo_main_post/${blogData.main_image}`,
//         width: 1200,
//         height: 630,
//         alt: `${blogData?.title_en} image`,
//       },
//     },
//   };
// }

// export async function generateStaticParams() {
//   try {
//     const posts = await prisma.post.findMany({
//       select: { id: true },
//     });
//     return posts.map((post) => ({ id: post.id }));
//   } catch (error) {
//     console.error("Error in generateStaticParams:", error);
//     return [];
//   }
// }

const page = async ({ params }) => {
  const [blog, topPosts] = await Promise.all([
    getBlog(params.slug),
    getTopPosts(),
  ]);
  const relatedPosts = await getRelatedPosts(blog.category_id, blog.id);

  const t = await getTranslations("SchoolNewsDetailPage");
  const locale = params.locale || "en";

  if (!blog) {
    console.error(`Blog not found for slug: ${params.slug}`);
    notFound();
  }

  const formatedDate = new Date(blog.publish_date).toLocaleDateString();
  return (
    <div className="NewsPage">
      {/* <ViewCounter slug={params.slug} /> */}
      <div className="Blogs mt-24 px-4 py-14 md:px-8 md:py-20">
        <div className="Main-Wrapper mx-auto max-w-screen-2xl">
          <div className="breadcrumb pb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link className="transition-all hover:text-black" href="/">
                    {t("breadcrumb.first")}
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link
                    className="transition-all hover:text-black"
                    href="/school-news"
                  >
                    {t("breadcrumb.second")}
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {locale == "en" ? blog?.title_en : blog?.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="main-container items-start gap-4 lg:flex">
            <div className="News-container flex-auto lg:w-4/6">
              <div className="page-image relative h-full max-h-[500px] min-h-[300px] w-full overflow-hidden rounded-xl sm:min-h-[400px]">
                <Image
                  src={
                    blog?.main_image
                      ? `/photo_main_post/${blog?.main_image}`
                      : "/placeholder.jpg"
                  }
                  alt={blog?.title || "Default Alt Text"}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="likes flex flex-wrap gap-8 py-6 text-sm text-[#696969] sm:justify-center">
                <p className="flex min-w-fit items-center gap-2">
                  <span className="text-base">
                    <SlCalender />
                  </span>
                  {t("main.date")}: {formatedDate}
                </p>
                <p className="flex min-w-fit items-center gap-2">
                  <span className="text-lg">
                    <CiFolderOn />
                  </span>
                  {t("main.category")}:
                  {locale == "en"
                    ? blog?.categories?.category_name_en
                    : blog?.categories?.category_name}
                </p>
              </div>
              <div className="page-text mb-8">
                <h2 className="heading-2 mb-4 capitalize text-[#072F60] rtl:leading-snug">
                  {locale == "en" ? blog?.title_en : blog?.title}
                </h2>
                {blog.content1 && (
                  <p className="paraghraph-2 mb-4 text-justify leading-relaxed text-[#504E4E]">
                    {locale == "en" ? blog?.content1_en : blog?.content1}
                  </p>
                )}
                {blog.content2 && (
                  <p className="paraghraph-2 text-justify leading-relaxed text-[#504E4E]">
                    {locale == "en" ? blog?.content2_en : blog?.content2}
                  </p>
                )}
              </div>
              {(blog.image1 || blog.image2) && (
                <div className="second-image flex gap-4 max-sm:flex-col">
                  {blog.image1 && (
                    <div className="page-image relative h-full max-h-[370px] min-h-[250px] w-full overflow-hidden rounded-xl sm:min-h-[370px]">
                      <Image
                        src={`/photo_two_page/${blog?.image1}`}
                        alt="image"
                        fill
                        sizes="(max-width: 640px) 100vw, 640px"
                        className="rounded-xl object-cover"
                        quality={100}
                      />
                    </div>
                  )}
                  {blog.image2 && (
                    <div className="page-image relative h-full max-h-[370px] min-h-[250px] w-full overflow-hidden rounded-xl sm:min-h-[370px]">
                      <Image
                        src={`/photo_two_page/${blog?.image2}`}
                        alt="image"
                        fill
                        sizes="(max-width: 640px) 100vw, 640px"
                        className="rounded-xl object-cover"
                        quality={100}
                      />
                    </div>
                  )}
                </div>
              )}

              {relatedPosts.length > 0 && (
                <div className="Related">
                  <div className="line my-12 h-[1px] bg-gray-400"> </div>
                  <h4 className="mb-6 text-2xl font-bold text-[#072F60] md:text-3xl">
                    {t("main.relatedpost_title")}
                  </h4>
                  <div className="Related-item grid gap-6 sm:grid-cols-2">
                    {relatedPosts.map((related, index) => {
                      const RelatedDate = new Date(
                        blog?.publish_date,
                      ).toLocaleDateString();
                      return (
                        <div
                          key={index}
                          className="Blog-Item relative z-20 flex flex-col rounded-2xl shadow-md"
                        >
                          <div className="image relative min-h-[227px] w-full rounded-t-2xl bg-gray-400">
                            <Image
                              src={`/photo_main_post/${related.main_image}`}
                              alt={`${related.title_en} image`}
                              fill
                              sizes="(max-width: 640px) 100vw, 640px"
                              className="rounded-xl object-cover"
                              quality={100}
                            />
                          </div>
                          <div className="content flex flex-grow flex-col justify-between gap-4 p-4">
                            <div className="text">
                              <div className="category mb-4 flex flex-wrap items-center gap-4">
                                <p className="w-fit rounded-[100px] border border-[#EAF3F8] px-4 py-1 text-sm text-[var(--secondary-color)]">
                                  {locale == "en"
                                    ? related?.categories?.category_name_en
                                    : related?.categories?.category_name}
                                </p>
                                <p className="w-fit text-sm uppercase text-[#445375]">
                                  {RelatedDate}
                                </p>
                              </div>
                              <Link href={`/school-news/${related?.id}`}>
                                <h3 className="Title line-clamp-3 text-xl font-semibold">
                                  {locale == "en"
                                    ? related?.title_en
                                    : related?.title}
                                </h3>
                              </Link>
                            </div>
                            <div className="bottom-blog flex flex-col">
                              <span className="my-2 h-[1px] w-full rounded-full bg-[#EAF3F8]" />
                              <div className="admin-content flex flex-wrap items-center justify-between gap-4">
                                <div className="admin flex w-fit items-center gap-2"></div>
                                <Link
                                  href={`/school-news/${blog?.id}`}
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
                  </div>
                </div>
              )}
            </div>
            <div className="topPost flex-auto max-lg:mt-6 lg:sticky lg:top-6 lg:w-2/6">
              <div className="top-post rounded-lg bg-[#F5F5F5] p-4">
                <div className="top-title flex items-center gap-2">
                  <div className="h-[10px] w-[4px] rounded-lg bg-[var(--secondary-color)]"></div>
                  <p className="text-xl font-semibold">
                    {t("main.toppost_title")}
                  </p>
                </div>
                <div className="item-container flex flex-wrap gap-4 py-4 lg:flex-col">
                  {topPosts?.map((post, index) => (
                    <div
                      key={index}
                      className="TopPost-item flex flex-grow items-start gap-4"
                    >
                      <div className="image-container relative h-20 w-20 flex-shrink-0 rounded-lg bg-gray-400">
                        <Image
                          src={`/photo_main_post/${post?.main_image}`} // Placeholder if no image
                          alt={post?.title_en}
                          fill
                          className="rounded-lg object-cover"
                          quality={100}
                        />
                      </div>
                      <div className="content flex-1">
                        <p className="text-sm text-[#504E4E]">
                          {locale == "en"
                            ? post.categories?.category_name_en
                            : post.categories?.category_name ||
                              "Uncategorized"}{" "}
                          . {new Date(post?.publish_date).toLocaleDateString()}
                        </p>
                        <Link href={`/school-news/${post.id}`}>
                          <h5 className="line-clamp-2 text-lg font-semibold text-[var(--primary-color)] hover:underline">
                            {locale == "en" ? post?.title_en : post?.title}
                          </h5>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
