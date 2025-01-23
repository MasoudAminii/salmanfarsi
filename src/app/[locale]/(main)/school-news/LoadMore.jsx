"use client";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { getBlog } from "@/lib/actions";
import BlogContent from "./BlogContent";

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
      <div className="Blog-Wrapper mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogContent blogs={blogs} />
      </div>
      {hasMore && (
        <div
          ref={ref}
          className="Spinner-Container flex items-center justify-center pt-8"
        >
          {loading && <Spinner size="lg" />}
        </div>
      )}
    </>
  );
};

export default LoadMore;
