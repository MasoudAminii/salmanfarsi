import Link from "next/link";
import TextParallax from "@/components/animations/TextParallax";
import { getTranslations } from "next-intl/server";
import { TiTick } from "react-icons/ti";

export const metadata = {
  title: "Terms And Conditions",
};

const page = async () => {
  const terms = await getTranslations("TermsAndConditionPage");
  const enrollment_info_list = terms.raw("terms.enrollment_info_list");
  const routestop_list = terms.raw("terms.routestop_list");
  const tuition_fees_list = terms.raw("terms.tuition_fees.rows");
  const transportation_fees_list = terms.raw("terms.transportation_fees.rows");
  const payment_method_method = terms.raw("terms.payment_method_list.methods");

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={terms("banner.title")}
          imgUrl={"/banner/banner (3).jpg"}
          heading={terms("banner.description")}
        />
      </section>
      <section className="terms-conditions bg-gray-50">
        <div className="Terms-Container px-4 py-16 md:px-8 md:py-24 lg:py-28">
          <div className="Terms-Wrapper mx-auto max-w-screen-2xl">
            {/* Header Section */}
            <div className="Title mb-12 lg:mb-16 lg:w-3/4">
              <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                {terms("terms.admission_criteria")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl md:leading-relaxed">
                {terms("terms.admission_description")}
              </p>
              <Link
                href={"#"}
                className="mt-4 inline-flex items-center text-lg font-semibold text-[var(--primary-color)] underline transition hover:text-[var(--secondary-color)]"
                title="Regulations pdf file"
              >
                {terms("terms.admission_link")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Main Content */}
            <div className="Terms-Content flex gap-12 max-lg:flex-col">
              {/* Left Column */}
              <div className="Content flex flex-auto flex-col gap-12">
                {/* Enrollment Info */}
                <div className="terms-card rounded-2xl bg-white p-8 shadow-lg">
                  <h4 className="mb-6 text-3xl font-bold text-gray-900">
                    {terms("terms.enrollment_info_title")}
                  </h4>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    {terms("terms.enrollment_info_content")}
                  </p>
                  <div className="list space-y-4">
                    {enrollment_info_list.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="flex max-h-7 min-h-7 min-w-7 max-w-7 items-center justify-center rounded-full bg-[var(--secondary-color)] text-white">
                          <TiTick size={20} />
                        </span>
                        <p className="text-lg text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div className="terms-card rounded-2xl bg-white p-8 shadow-lg">
                  <h4 className="mb-6 text-3xl font-bold text-gray-900">
                    {terms("terms.transportation_title")}
                  </h4>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    {terms("terms.transportation_content")}
                  </p>
                  <div className="list grid gap-4 sm:grid-cols-2">
                    {routestop_list.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="flex max-h-7 min-h-7 min-w-7 max-w-7 items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
                          {index + 1}
                        </span>
                        <p className="text-lg text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tuition Fees */}
                <div className="terms-card space-y-8 rounded-2xl bg-white p-8 shadow-lg">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {terms("terms.tuition_fees_title")}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                        {terms("terms.basic_tuition_fees")}
                      </h3>
                      <div className="overflow-hidden rounded-xl shadow-lg">
                        <table className="w-full">
                          <thead className="bg-[var(--primary-color)]">
                            <tr>
                              <th className="w-1/2 px-4 py-3 text-left text-base font-semibold text-white sm:px-6 sm:py-4 sm:text-lg">
                                {terms(
                                  "terms.tuition_fees.table_headers.grade",
                                )}
                              </th>
                              <th className="w-1/2 px-4 py-3 text-right text-base font-semibold text-white sm:px-6 sm:py-4 sm:text-lg">
                                {terms(
                                  "terms.tuition_fees.table_headers.tuition_fee",
                                )}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {tuition_fees_list.map((fees, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="w-1/2 px-4 py-3 text-base font-medium text-gray-900 sm:px-6 sm:py-4 sm:text-lg">
                                  {fees.grade}
                                </td>
                                <td className="w-1/2 px-4 py-3 text-right sm:px-6 sm:py-4">
                                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 sm:px-4 sm:py-2 sm:text-base">
                                    ${fees.tuition_fee}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                        {terms("terms.transportation_fees_title")}
                      </h3>
                      <div className="overflow-hidden rounded-xl shadow-lg">
                        <table className="w-full">
                          <thead className="bg-[var(--primary-color)]">
                            <tr>
                              <th className="w-1/2 px-4 py-3 text-left text-base font-semibold text-white sm:px-6 sm:py-4 sm:text-lg">
                                {terms(
                                  "terms.transportation_fees.table_headers.route",
                                )}
                              </th>
                              <th className="w-1/2 px-4 py-3 text-right text-base font-semibold text-white sm:px-6 sm:py-4 sm:text-lg">
                                {terms(
                                  "terms.transportation_fees.table_headers.transportation_fee",
                                )}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {transportation_fees_list.map((fees, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="w-1/2 px-4 py-3 text-base font-medium text-gray-900 sm:px-6 sm:py-4 sm:text-lg">
                                  {fees.route}
                                </td>
                                <td className="w-1/2 px-4 py-3 text-right sm:px-6 sm:py-4">
                                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 sm:px-4 sm:py-2 sm:text-base">
                                    ${fees.transportation_fee}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="terms-card rounded-2xl bg-white p-8 shadow-lg">
                  <h4 className="mb-6 text-3xl font-bold text-gray-900">
                    {terms("terms.payment_method_title")}
                  </h4>
                  <div className="list grid gap-4 sm:grid-cols-2">
                    {payment_method_method.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="flex max-h-7 min-h-7 min-w-7 max-w-7 items-center justify-center rounded-full bg-[var(--secondary-color)] text-white">
                          <TiTick size={20} />
                        </span>
                        <p className="text-lg text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Apply Section */}
              <div className="Apply flex flex-col justify-center gap-8 rounded-2xl bg-[var(--primary-color)] p-10 text-white lg:sticky lg:top-8 lg:min-w-[420px] lg:self-start">
                <div className="space-y-6">
                  <h4 className="text-3xl font-bold leading-tight">
                    {terms("terms.apply_title")}
                  </h4>
                  <p className="text-lg leading-relaxed opacity-90">
                    {terms("terms.apply_content")}
                  </p>
                  <Link
                    className="inline-flex w-fit items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-[var(--primary-color)] transition-all hover:bg-gray-100 hover:shadow-lg"
                    href="/contact-us"
                  >
                    {terms("terms.apply_button")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
