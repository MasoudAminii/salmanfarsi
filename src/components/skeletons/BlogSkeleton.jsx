import React from "react";

const BlogSkeleton = () => {
  const skeletonItems = new Array(6).fill(null); // creates an array with 8 empty values

  return (
    <div className="Blog-Wrapper mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="Blog-Item flex flex-col rounded-2xl shadow-md"
        >
          <div className="image h-[227px] animate-pulse overflow-hidden rounded-t-2xl bg-gray-300"></div>
          <div className="content flex flex-1 flex-col justify-between gap-4 p-4">
            <div className="text flex flex-col justify-between gap-4">
              <div className="category flex flex-wrap items-center gap-4">
                <div className="h-4 w-1/4 animate-pulse rounded-[100px] bg-gray-300"></div>
                <div className="h-4 w-1/4 animate-pulse rounded-3xl bg-gray-300"></div>
              </div>
              <div className="h-4 w-3/4 animate-pulse rounded-3xl bg-gray-300"></div>
              <div className="h-4 w-2/4 animate-pulse rounded-3xl bg-gray-300"></div>
            </div>
            <div className="bottom-blog flex flex-col">
              <span className="my-4 h-[1px] w-full rounded-full bg-[#EAF3F8]" />
              <div className="admin-content flex flex-wrap items-center justify-between gap-4">
                <div className="admin flex items-center gap-2">
                  <div className="Admin-Image size-10 animate-pulse rounded-full bg-gray-300"></div>
                  <div className="admin-text w-52">
                    <div className="h-4 w-1/4 animate-pulse rounded-3xl bg-gray-300"></div>
                    <div className="h-4 w-2/4 mt-2 animate-pulse rounded-3xl bg-gray-300"></div>
                  </div>
                </div>
                <div className="animate-pulse rounded-md bg-gray-300 p-5"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
