import Image from "next/image";
import { useLocale } from "next-intl";

const StaffContent = ({ schoolStaff }) => {
  const locale = useLocale();

  return (
    <>
      {schoolStaff.map((staff, index) => (
        <div
          key={index}
          className="Team-item flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md"
        >
          <div className="relative aspect-square w-[100%] overflow-hidden">
            <Image
              src={`/schoolstaff/${staff.photo_url || "no-profile.jpg"}`}
              alt={`${staff?.name}'s Profile Picture`}
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
          </div>
        </div>
      ))}
    </>
  );
};

export default StaffContent;
