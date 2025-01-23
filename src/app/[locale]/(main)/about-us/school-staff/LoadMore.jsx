"use client";
import { getStaff } from "@/lib/actions";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import StaffContent from "./StaffContent";
const LoadMore = ({ query }) => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(2); // Start at page 2
  const [staffs, setStaffs] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Tracks if there’s more data to fetch
  const [loading, setLoading] = useState(false); // Tracks if a fetch is in progress

  useEffect(() => {
    // Reset state when the query changes
    setStaffs([]);
    setPage(2);
    setHasMore(true);
  }, [query]);

  const fetchStaffs = useCallback(async () => {
    if (inView && hasMore && !loading) {
      setLoading(true); // Start fetching
      try {
        const newStaff = await getStaff(page, query);
        if (newStaff.length === 0) {
          setHasMore(false); // No more data to fetch
        } else {
          setStaffs((prevStaffs) => [...prevStaffs, ...newStaff]);
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error("Error fetching staffs:", error);
      } finally {
        setLoading(false); // Fetching finished
      }
    }
  }, [inView, hasMore, loading, page, query]);

  useEffect(() => {
    fetchStaffs();
  }, [fetchStaffs]);

  return (
    <>
      <div className="Team-content mt-4 grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <StaffContent schoolStaff={staffs} />
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
