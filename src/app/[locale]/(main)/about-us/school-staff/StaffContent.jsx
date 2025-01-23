"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
const StaffContent = ({ schoolStaff }) => {
  const t = useTranslations("ShoolStaffPage");
  const locale = useLocale();

  return (
    <>
      {schoolStaff.map((staff, index) => (
        <div
          key={index}
          className="Team-item flex flex-col items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
        >
          <div className="relative aspect-square w-[100%] overflow-hidden bg-gray-300">
            <Image
              src={`/schoolstaff/${staff.photo_url || "no-profile.jpg"}`}
              alt={`${staff?.name_en}'s Profile Picture`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
              quality={100}
            />
          </div>
          <div className="content w-full p-4">
            <h3 className="text-sm font-bold capitalize text-gray-800 sm:text-center sm:text-base md:text-lg">
              {locale == "en" ? staff?.name_en : staff?.name_fa}
            </h3>
            <p className="text-sm capitalize text-gray-500 sm:text-center md:text-base">
              {locale == "en" ? staff?.position_en : staff?.position_fa}
            </p>

            <div className="my-2 h-px w-full bg-gray-200"></div>

            <div className="flex w-full flex-col items-start gap-2 px-2 text-xs text-gray-600 sm:text-sm md:text-base">
              {staff?.education_en && (
                <div>
                  <p>
                    <span className="inline-block font-bold text-gray-700">
                      {t("main.card.education")}
                    </span>{" "}
                    {locale == "en" ? staff?.education_en : staff?.education_fa}
                  </p>
                </div>
              )}
              {staff?.email && (
                <div>
                  <p className="truncate">
                    <span className="font-bold text-gray-700">Email:</span>{" "}
                    {staff?.email}
                  </p>
                </div>
              )}
              {staff?.phone && (
                <div>
                  <p className="truncate">
                    <span className="font-bold text-gray-700">Phone:</span>{" "}
                    {staff?.phone}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StaffContent;
