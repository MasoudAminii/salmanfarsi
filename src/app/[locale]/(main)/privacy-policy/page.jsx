import React from "react";
import { getTranslations } from "next-intl/server";
import TextParallax from "@/components/animations/TextParallax";
import { TiTick } from "react-icons/ti";

export const metadata = {
  title: "Privacy Policy",
};

const page = async () => {
  const privacy = await getTranslations("PrivacyPolicyPage");

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={privacy("banner.title")}
          imgUrl={"/banner/banner (3).jpg"}
          heading={privacy("banner.description")}
        />
      </section>
      <section className="Privacy-Policy">
        <div className="Privacy-Policy-Container px-4 py-14 md:px-8 md:py-20">
          <div className="Privacy-Policy-Wrapper mx-auto max-w-screen-lg">
            <div className="Title mb-8">
              <h2 className="mb-4 text-4xl font-bold capitalize leading-snug text-[#242331] max-sm:text-center sm:text-5xl">
                {privacy("privacy_policy.privacy_policy_title")}
              </h2>
              <p className="font-light leading-relaxed text-[#808080] sm:text-justify sm:text-xl">
                {privacy("privacy_policy.privacy_policy_description")}
              </p>
            </div>
            <div className="Privacy-Policy-Content">
              <div className="privacy_list flex flex-col gap-8">
                {privacy
                  .raw("privacy_policy.privacy_policy_list")
                  .map((item, index) => (
                    <div key={index} className="card flex flex-col gap-4">
                      <h4 className="text-3xl font-bold capitalize leading-tight text-[#2F2F2F] md:text-4xl">
                        {item.title}
                      </h4>
                      <p className="text-lg font-light leading-relaxed text-[#808080] sm:text-justify md:text-xl">
                        {item.content}
                      </p>
                      {item.list && (
                        <div className="list flex flex-col gap-3">
                          {item.list?.map((list_item, index) => (
                            <p
                              key={index}
                              className="flex items-center gap-2 text-lg font-light text-[#808080] sm:text-justify md:text-xl"
                            >
                              <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                                <TiTick size={20} />
                              </span>
                              {list_item}
                            </p>
                          ))}
                        </div>
                      )}
                      {item.content_2 && (
                        <p className="text-lg font-light leading-relaxed text-[#808080] sm:text-justify md:text-xl">
                          {item.content_2}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
