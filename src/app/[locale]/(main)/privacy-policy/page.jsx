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
      <section className="terms-conditions bg-gray-50">
        <div className="Terms-Container px-4 py-16 md:px-8 md:py-24 lg:py-28">
          <div className="Terms-Wrapper mx-auto max-w-screen-lg">
            {/* Header Section */}
            <div className="Title mb-12 lg:mb-16">
              <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 max-sm:text-center md:text-5xl lg:text-6xl">
                {privacy("privacy_policy.privacy_policy_title")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl md:leading-relaxed">
                {privacy("privacy_policy.privacy_policy_description")}
              </p>
            </div>

            {/* Content Section */}
            <div className="Privacy-Policy-Content">
              <div className="privacy_list flex flex-col gap-12">
                {privacy
                  .raw("privacy_policy.privacy_policy_list")
                  .map((item, index) => (
                    <div
                      key={index}
                      className="card rounded-2xl bg-white p-8 shadow-lg"
                    >
                      <h4 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                        {item.title}
                      </h4>

                      <p className="mb-6 text-lg leading-relaxed text-gray-600">
                        {item.content}
                      </p>

                      {item.list && (
                        <div className="list grid gap-4 sm:grid-cols-2">
                          {item.list?.map((list_item, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <span className="flex max-h-7 min-h-7 min-w-7 max-w-7 items-center justify-center rounded-full bg-[var(--secondary-color)] text-white">
                                <TiTick size={20} />
                              </span>
                              <p className="text-lg text-gray-600">
                                {list_item}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.content_2 && (
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
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
