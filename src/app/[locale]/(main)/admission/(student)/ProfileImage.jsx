"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ProfileImage = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  // ✅ Load the saved image from localStorage on page load
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setPreviewUrl(savedImage);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image type
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    // Convert image to Base64 for storage
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setPreviewUrl(base64String);
      localStorage.setItem("profileImage", base64String); // ✅ Save image in localStorage
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="Photo sm:col-span-full lg:col-span-1">
      <label className="block text-sm font-medium text-gray-700">
        Student Photo
      </label>
      <div className="mt-2 flex items-center gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-dashed border-gray-300">
          <Image
            src={previewUrl || "/schoolstaff/no-profile.jpg"}
            alt="Profile preview"
            fill
            className="object-cover"
          />
        </div>
        <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 font-medium text-white transition-all hover:bg-[#1E4BB8]">
          <span className="text-sm">Upload</span>
          <input
            type="file"
            name="studentPhoto"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default ProfileImage;
