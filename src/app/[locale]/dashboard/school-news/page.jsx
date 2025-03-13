// app/dashboard/school-news/page.tsx
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { Suspense } from "react";
import InitialNews from "./InitialNews";
import NewsSearch from "./NewsSearch";
import LoadMore from "./LoadMore";

export default async function SchoolNewsPage({ searchParams }) {
  const query = searchParams?.query || "";

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      {/* Header Section */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">News Management</h1>
          <p className="text-gray-600">
            Manage published articles and announcements
          </p>
        </div>
        <Link
          href="/dashboard/school-news/add-news"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
        >
          <FiPlus className="text-lg transition-transform hover:scale-110" />
          <span>New Post</span>
        </Link>
      </div>
      <div className="search mb-4">
        <NewsSearch />
      </div>
      {/* Posts Table */}
      <div className="news">
        <div className="overflow-hidden rounded-lg border shadow-sm">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
              <tr>
                {["Title", "Category", "Publish Date", "Views", "Actions"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-6 py-4 text-left text-sm font-semibold text-white"
                    >
                      {header}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <Suspense
                key={query}
                fallback={
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-gray-500">
                      Loading posts...
                    </td>
                  </tr>
                }
              >
                <InitialNews query={query} />
              </Suspense>
              <LoadMore query={query} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Client Component
