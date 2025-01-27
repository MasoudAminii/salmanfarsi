import prisma from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
export async function getBlog(slug) {
  try {
    return prisma.post.findUnique({
      where: {
        id: slug, // Fetch the post by its ID
      },
      include: { categories: true }, // Include related categories if needed
    });
  } catch (err) {
    console.error("Error fetching blog by ID:", err);
    return null;
  }
}

export async function getRelatedPosts(categoryId, excludeSlug) {
  try {
    return prisma.post.findMany({
      where: {
        category_id: categoryId,
        id: { not: excludeSlug }, // Exclude current post
      },
      select: {
        id: true,
        slug: true,
        title_en: true,
        title: true,
        publish_date: true,
        categories: {
          select: {
            category_name_en: true,
            category_name: true,
          },
        },
        main_image: true,
      },
      take: 2,
    });
  } catch (err) {
    console.error("Error fetching related posts:", err);
    throw err;
  }
}

export async function getTopPosts() {
  noStore();
  try {
    return prisma.post.findMany({
      orderBy: { views: "desc" },
      take: 4,
      select: {
        id: true,
        slug: true,
        title_en: true,
        title: true,
        publish_date: true,
        categories: { select: { category_name_en: true, category_name: true } },
        main_image: true,
      },
    });
  } catch (err) {
    console.error("Error fetching top posts:", err);
    throw err;
  }
}

export async function getQuery(query) {
  try {
    if (!query || query.trim() === "") {
      return [];
    }
    return prisma.post.findMany({
      where: {
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
      },
      select: {
        slug: true,
        title_en: true,
        title: true,
        main_image: true,
      },
      orderBy: {
        publish_date: "desc", // Sort by publish_date in descending order
      },
      take: 10,
    });
  } catch (err) {
    console.error("Error fetching query:", err);
    throw err;
  }
}

export async function getQueryStaff(query) {
  try {
    if (!query || query.trim() === "") {
      return [];
    }
    return prisma.staff.findMany({
      where: {
        OR: [
          { name_en: { contains: query } },
          { name_fa: { contains: query } },
        ],
      },
      take: 10,
    });
  } catch (err) {
    console.error("Error fetching query:", err);
    throw err;
  }
}
