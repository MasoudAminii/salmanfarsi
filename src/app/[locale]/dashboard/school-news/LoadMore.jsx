"use client";
import { Badge } from "@/components/ui/badge";
import { getBlog } from "@/lib/actions";
import { Spinner } from "@nextui-org/react";
import { format } from "date-fns";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const LoadMore = ({ query }) => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(2); // Start at page 2
  const [blogs, setBlogs] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Tracks if there’s more data to fetch
  const [loading, setLoading] = useState(false); // Tracks if a fetch is in progress

  // Reset state when the query changes
  useEffect(() => {
    setBlogs([]);
    setPage(2);
    setHasMore(true);
  }, [query]);

  // Memoize the fetch function to avoid unnecessary re-creation
  const fetchBlogs = useCallback(async () => {
    if (inView && hasMore && !loading) {
      setLoading(true); // Start fetching
      try {
        const newBlogs = await getBlog(page, query);
        if (newBlogs.length === 0) {
          setHasMore(false); // No more blogs to fetch
        } else {
          setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Fetching finished
      }
    }
  }, [inView, hasMore, loading, page, query]);

  // Trigger fetching when dependencies change
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <>
      <NewsContent blogs={blogs} />
      {hasMore && (
        <tr>
          {/* Wrap spinner in table row */}
          <td colSpan={5} className="py-4">
            <div ref={ref} className="flex justify-center">
              {loading && <Spinner size="lg" />}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default LoadMore;

function NewsContent({ blogs }) {
  return (
    <>
      {blogs.map((post) => (
        <tr key={post.id} className="transition-colors hover:bg-gray-50">
          <td className="max-w-96 px-6 py-4">
            <div className="flex items-center gap-3">
              <div>
                <div className="line-clamp-2 text-sm font-semibold text-gray-900">
                  {post.title_en}
                </div>
                <div className="mt-1 line-clamp-1 text-xs text-gray-500">
                  {post.content1_en}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <Badge
              variant="outline"
              className="border-blue-200 bg-blue-50 text-blue-700"
            >
              {post.categories?.category_name_en || "General"}
            </Badge>
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            <div className="flex flex-col">
              <span className="font-medium">
                {format(new Date(post.publish_date), "MMM dd, yyyy")}
              </span>
              <span className="text-xs text-gray-500">
                {format(new Date(post.publish_date), "hh:mm a")}
              </span>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-1">
              <FiEye className="text-gray-500" />
              <span className="font-medium text-gray-900">{post.views}</span>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <Link
                href={`/dashboard/school-news/edit/${post.slug}`}
                className="rounded-lg p-2 text-gray-500 transition-all hover:bg-blue-50 hover:text-blue-600"
                title="Edit"
              >
                <FiEdit className="h-5 w-5" />
              </Link>
              <button
                className="rounded-lg p-2 text-gray-500 transition-all hover:bg-red-50 hover:text-red-600"
                title="Delete"
              >
                <FiTrash2 className="h-5 w-5" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
