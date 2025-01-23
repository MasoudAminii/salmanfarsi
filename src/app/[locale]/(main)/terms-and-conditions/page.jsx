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
      <section className="terms-conditions">
        <div className="Terms-Container px-4 py-14 md:px-8 md:py-20">
          <div className="Terms-Wrapper mx-auto max-w-screen-2xl">
            <div className="Title">
              <div className="Title mb-8 lg:w-2/3">
                <h2 className="heading-1 mb-4 capitalize leading-snug text-[#242331]">
                  {terms("terms.admission_criteria")}
                </h2>
                <p className="paraghraph-1 py-2 text-[#808080] sm:sm:text-justify">
                  {terms("terms.admission_description")}
                </p>
                <Link
                  href={"#"}
                  className="text-xl font-extrabold capitalize text-[#808080] underline"
                  title="Regulations pdf file"
                >
                  {terms("terms.admission_link")}
                </Link>
              </div>
            </div>
            <div className="Terms-Content flex gap-8 max-lg:flex-col">
              <div className="Content flex flex-auto flex-col gap-8 text-lg md:text-xl">
                <div className="terms-card">
                  <h4 className="heading-2 mb-6 capitalize leading-tight text-[#2F2F2F]">
                    {terms("terms.enrollment_info_title")}
                  </h4>
                  <p className="paraghraph-1 mb-4 leading-relaxed text-[#808080] sm:text-justify">
                    {terms("terms.enrollment_info_content")}
                  </p>
                  <div className="list flex flex-col gap-3">
                    {enrollment_info_list.map((item, index) => (
                      <p
                        key={index}
                        className="flex items-center gap-2 font-light text-[#808080]"
                      >
                        <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                          <TiTick size={20} />
                        </span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="terms-card">
                  <h4 className="heading-2 mb-6 capitalize leading-tight text-[#2F2F2F]">
                    {terms("terms.transportation_title")}
                  </h4>
                  <p className="paraghraph-1 mb-4 leading-relaxed text-[#808080] sm:text-justify">
                    {terms("terms.transportation_content")}
                  </p>
                  <div className="list flex flex-col gap-3">
                    {routestop_list.map((item, index) => (
                      <p
                        key={index}
                        className="flex gap-2 font-light text-[#808080] sm:text-justify"
                      >
                        <span className="flex max-h-7 min-h-7 min-w-7 max-w-7 items-center justify-center rounded-full bg-[var(--secondary-color)] text-white">
                          {index + 1}
                        </span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="terms-card">
                  <h4 className="heading-1 mb-6 capitalize leading-tight text-[#2F2F2F]">
                    {terms("terms.tuition_fees_title")}
                  </h4>
                  <h4 className="mb-4 text-2xl font-semibold capitalize leading-tight text-[#2F2F2F]">
                    {terms("terms.basic_tuition_fees")}
                  </h4>
                  <div className="Basic-Fees relative mb-4 overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                      <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
                        <tr>
                          <th
                            scope="col"
                            className="bg-[var(--primary-color)] px-6 py-3 text-white"
                          >
                            {terms("terms.tuition_fees.table_headers.grade")}
                          </th>
                          <th scope="col" className="bg-[#EDF6FF] px-6 py-3">
                            {terms(
                              "terms.tuition_fees.table_headers.tuition_fee",
                            )}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tuition_fees_list.map((fees, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-300 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="whitespace-nowrap bg-[var(--primary-color)] px-6 py-4 font-medium text-white"
                            >
                              {fees.grade}
                            </th>
                            <td className="bg-[#EDF6FF] px-6 py-4">
                              ${fees.tuition_fee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h4 className="mb-4 text-2xl font-semibold capitalize leading-tight text-[#2F2F2F]">
                    {terms("terms.transportation_fees_title")}
                  </h4>
                  <div className="Transportation-Fees relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                      <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
                        <tr>
                          <th
                            scope="col"
                            className="bg-[var(--primary-color)] px-6 py-3 text-white"
                          >
                            {terms(
                              "terms.transportation_fees.table_headers.route",
                            )}
                          </th>
                          <th scope="col" className="bg-[#EDF6FF] px-6 py-3">
                            {terms(
                              "terms.transportation_fees.table_headers.transportation_fee",
                            )}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {transportation_fees_list.map((fees, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-300 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="whitespace-nowrap bg-[var(--primary-color)] px-6 py-4 font-medium text-white"
                            >
                              {fees.route}
                            </th>
                            <td className="bg-[#EDF6FF] px-6 py-4">
                              ${fees.transportation_fee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="terms-card">
                  <h4 className="heading-2 mb-6 capitalize leading-tight text-[#2F2F2F]">
                    {terms("terms.payment_method_title")}
                  </h4>
                  <div className="list flex flex-col gap-3">
                    {payment_method_method.map((item, index) => (
                      <p
                        key={index}
                        className="flex items-center gap-2 text-lg text-[#808080] sm:text-justify"
                      >
                        <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                          <TiTick size={20} />
                        </span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Apply flex flex-auto flex-col justify-center gap-6 rounded-2xl bg-gray-100 p-14 sm:h-[320px] lg:sticky lg:top-4 lg:min-w-[420px]">
                <h4 className="heading-3 capitalize leading-tight text-gray-900">
                  {terms("terms.apply_title")}
                </h4>
                <p className="leading-relaxed text-gray-600 sm:text-lg">
                  {terms("terms.apply_content")}
                </p>
                <Link
                  className="w-fit rounded-full bg-gray-900 px-8 py-4 text-white transition-all hover:bg-gray-700"
                  href="/contact-us"
                >
                  {terms("terms.apply_button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
