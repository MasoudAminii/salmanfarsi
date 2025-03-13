// app/dashboard/add-post/actions.ts
"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; // Added missing redirect import

export async function addPost(formData) {
  // Added TypeScript type
  // Extract form data
  const title = formData.get("title");
  const title_en = formData.get("title_en");
  const main_image = formData.get("main_image");
  const content1 = formData.get("content1");
  const content1_en = formData.get("content1_en");
  const categoryIdString = formData.get("category_id");
  const category_id = parseInt(categoryIdString);

  // New fields from post table
  const image1 = formData.get("image1");
  const image2 = formData.get("image2");
  const content2 = formData.get("content2");
  const content2_en = formData.get("content2_en");

  // Validate required fields
  if (!title || !main_image || !content1 || !categoryIdString) {
    throw new Error("Missing required fields");
  }

  // Generate unique slug
  const slug = `${title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;

  try {
    await prisma.post.create({
      data: {
        title: title,
        title_en: title_en,
        main_image: main_image,
        content1: content1,
        content1_en: content1_en,
        slug,
        publish_date: new Date(),
        category_id,
        // Optional fields
        image1: image1,
        image2: image2,
        content2: content2,
        content2_en: content2_en,
      },
    });

    revalidatePath("/dashboard/school-news");
    redirect("/dashboard/school-news");
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
}
