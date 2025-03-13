// app/dashboard/add-post/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addPost } from "./actions";

export default function AddPostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await addPost(formData);
      router.push("/dashboard/school-news");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Create New Post</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-sm text-gray-600 transition-colors hover:text-gray-800"
        >
          ← Back
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
          Error: {error}
        </div>
      )}

      <form action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Title Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Title (TH) <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              required
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Title (EN) <span className="text-red-500">*</span>
            </label>
            <input
              name="title_en"
              required
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URLs */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Main Image URL <span className="text-red-500">*</span>
            </label>
            <input
              name="main_image"
              required
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Image 2 URL
            </label>
            <input
              name="image1"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Image 3 URL
            </label>
            <input
              name="image2"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category_id"
              required
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              {/* {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.category_name}
                </option>
              ))} */}
            </select>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content 1 (TH) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content1"
              required
              rows={4}
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content 1 (EN) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content1_en"
              required
              rows={4}
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content 2 (TH)
            </label>
            <textarea
              name="content2"
              rows={4}
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content 2 (EN)
            </label>
            <textarea
              name="content2_en"
              rows={4}
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-lg px-6 py-3 font-medium text-white transition-colors ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Creating Post..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
