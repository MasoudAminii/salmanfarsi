import { Badge } from "@/components/ui/badge";
import { getBlog } from "@/lib/actions";
import { format } from "date-fns";
import Link from "next/link";
import { FiEdit, FiEye, FiTrash2, FiPlus } from "react-icons/fi";
const InitialNews = async ({ query }) => {
  const posts = await getBlog(1, query);

  {
    posts.length === 0 && (
      <div className="py-12 text-center">
        <div className="mx-auto max-w-md">
          <div className="mb-4 text-6xl text-gray-300">📰</div>
          <h3 className="text-xl font-medium text-gray-900">No posts found</h3>
          <p className="mt-2 text-gray-600">
            Get started by creating a new post
          </p>
          <Link
            href="/dashboard/school-news/create"
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700"
          >
            <FiPlus className="mr-2" />
            Create New Post
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
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
};

export default InitialNews;
