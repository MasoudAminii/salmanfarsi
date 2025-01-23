const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  try {
    // Seed Categories (assuming you want to create some categories)
    const categories = await prisma.category.createMany({
      data: [
        { name: "Technology", nameEn: "Technology" },
        { name: "Health", nameEn: "Health" },
        { name: "Education", nameEn: "Education" },
        { name: "Sports", nameEn: "Sports" },
      ],
    });

    console.log("Categories seeded:", categories);

    // Seed Posts
    const posts = [];
    for (let i = 1; i <= 32; i++) {
      const randomCategoryId = Math.floor(Math.random() * 4) + 1; // Random category ID between 1 and 4
      posts.push({
        slug: `post-${i}`,
        title: `Post Title ${i}`,
        titleEn: `Post Title ${i} (EN)`,
        mainImage: `/photo_main_post/imam-khomeini.png`,
        content1: `Content 1 for Post ${i}`,
        content1En: `Content 1 for Post ${i} (EN)`,
        image1: `/photo_two_page/imam-khomeini1.png`,
        image2: `/photo_two_page/imam-khomeini2.png`,
        content2: `Content 2 for Post ${i}`,
        content2En: `Content 2 for Post ${i} (EN)`,
        publishDate: new Date(),
        categoryId: randomCategoryId,
      });
    }

    await prisma.post.createMany({
      data: posts,
    });

    console.log("Posts seeded successfully");

    // Seed Staff
    const staffs = [];
    for (let i = 1; i <= 32; i++) {
      staffs.push({
        name: `Staff Name ${i}`,
        nameEn: `Staff Name ${i} (EN)`,
        position: `Position ${i}`,
        positionEn: `Position ${i} (EN)`,
        email: `staff${i}@example.com`,
        phone: `+123456789${i}`,
        education: `Education ${i}`,
        educationEn: `Education ${i} (EN)`,
        bio: `Bio for Staff ${i}`,
        photoUrl: `https://example.com/staff-${i}.jpg`,
      });
    }

    await prisma.staff.createMany({
      data: staffs,
    });

    console.log("Staff seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
