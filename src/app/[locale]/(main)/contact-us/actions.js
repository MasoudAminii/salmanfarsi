"use server";
import prisma from "@/lib/db";

export async function handleSubmit(prevState, formData) {
  // Add prevState as first parameter
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return { error: "All fields are required" };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { error: "Invalid email format" };
    }
    // Update to match your schema
    await prisma.contact_us.create({
      data: {
        name,
        email,
        message,
        submit_date: new Date(), // Add this to match your schema field
      },
    });

    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Submission error:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
