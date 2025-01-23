import React from "react";
import { Spinner } from "@nextui-org/react";
import { getTranslations } from "next-intl/server";

const Spiner = async () => {
  const t = await getTranslations("SearchPage");
  return (
    <div className="flex min-h-52 flex-col items-center justify-center gap-4">
      <Spinner size="md" color="primary" />
      <h2 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
        {t("loading")}
      </h2>
    </div>
  );
};

export default Spiner;
