import { getStaff } from "@/lib/actions";
import Image from "next/image";
import StaffContent from "./StaffContent";
import { getTranslations } from "next-intl/server";

const InitialStaff = async ({ query }) => {
  const t = await getTranslations("ShoolStaffPage");
  const schoolStaff = await getStaff(1, query);

  if (!schoolStaff || schoolStaff.length === 0) {
    return (
      <div className="flex min-h-52 flex-col items-center justify-center p-4">
        <Image
          src={`/logo/no-result.png`}
          alt="NoResultFound"
          width={300}
          height={100}
          className="h-auto w-auto" // Fixed typo: 'wauto' to 'w-auto'
          quality={100}
        />
        <h2 className="text-center text-2xl font-bold capitalize text-[var(--primary-color)] md:text-3xl">
          {t("main.no_staff")}
        </h2>
      </div>
    );
  }

  return (
    <div className="Team-content grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      <StaffContent schoolStaff={schoolStaff} />
    </div>
  );
};

export default InitialStaff;
