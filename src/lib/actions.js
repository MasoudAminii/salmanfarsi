"use server";
import prisma from "@/lib/db";

export async function incrementViewCount(blogSlug) {
  const decodedSlug = decodeURIComponent(blogSlug);
  try {
    await prisma.post.update({
      where: { slug: decodedSlug },
      data: { views: { increment: 1 } },
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating view count:", error);
    return { success: false, error: "Failed to update view count" };
  }
}
export async function getBlog(page, query) {
  try {
    let whereCondition = {};
    // If query is not provided or is empty, fetch all blogs
    if (query && query.trim() !== "") {
      whereCondition = {
        OR: [
          {
            title_en: {
              contains: query,
            },
          },
          {
            title: {
              contains: query,
            },
          },
          {
            categories: {
              category_name_en: {
                contains: query,
              },
            },
          },
          {
            categories: {
              category_name: {
                contains: query,
              },
            },
          },
        ],
      };
    }
    return await prisma.post.findMany({
      where: whereCondition,
      include: { categories: true },
      skip: (page - 1) * 9,
      take: 9,
      orderBy: { publish_date: "desc" }, // Add sorting
    });
  } catch (error) {
    console.error("Error fetching blogs", error);
    return [];
  }
}

export async function getStaff(page, query) {
  try {
    let whereCondition = {};
    // If query is not provided or is empty, fetch all blogs
    if (query && query.trim() !== "") {
      whereCondition = {
        OR: [
          { name_en: { contains: query } },
          { name_fa: { contains: query } },
        ],
      };
    }
    return await prisma.staff.findMany({
      where: whereCondition,
      skip: (page - 1) * 8,
      take: 8,
    });
  } catch (error) {
    console.error("Error fetching blogs", error);
    return [];
  }
}
