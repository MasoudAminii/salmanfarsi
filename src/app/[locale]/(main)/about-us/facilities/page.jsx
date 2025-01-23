// TextParallax
import TextParallax from "@/components/animations/TextParallax";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

export const metadata = {
  title: "Facilities",
};

const page = async () => {
  const facilities = await getTranslations("FacilitiesPage");

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={facilities("banner.title")}
          imgUrl={"/banner/banner (2).jpg"}
          heading={facilities("banner.description")}
        />
      </section>
      <section className="School-Facilities">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/school.jpeg`}
                  alt={`salman Farsi school `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.main.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities("facilities.main.title_description")}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities("facilities.main.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Classroom">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:flex-row-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/classes.jpg`}
                  alt={`Classroom `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities(
                    "facilities.FacilitiesAndServices.classroom.title",
                  )}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.classroom.description",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Labs">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/laboratoy.jpg`}
                  alt={`Labs `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities("facilities.FacilitiesAndServices.labs.title")}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.labs.description",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="library">
        <div className="Our-Curriculum bg-[#F9F9F9] px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex flex-row-reverse gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/library.png`}
                  alt={`library `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities("facilities.FacilitiesAndServices.library.title")}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.library.description",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sports">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/football feild.png`}
                  alt={`footbal field `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities("facilities.FacilitiesAndServices.sports.title")}
                </h3>
                <div className="list flex flex-col gap-4">
                  {facilities
                    .raw("facilities.FacilitiesAndServices.sports.items")
                    .map((item, index) => (
                      <p
                        key={index}
                        className="paraghraph-2 flex items-center gap-2 text-[#6E6E6E]"
                      >
                        <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                          <TiTick size={20} />
                        </span>
                        {item}
                      </p>
                    ))}
                </div>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.sports.conclusion",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cultural">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:flex-row-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/arts.png`}
                  alt={`arts`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities(
                    "facilities.FacilitiesAndServices.cultural.title",
                  )}
                </h3>
                <div className="list flex flex-col gap-4">
                  {facilities
                    .raw("facilities.FacilitiesAndServices.cultural.items")
                    .map((item, index) => (
                      <p
                        key={index}
                        className="paraghraph-2 flex items-center gap-2 text-[#6E6E6E]"
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
          </div>
        </div>
      </section>
      <section className="prayerHall">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/prayerhall.jpg`}
                  alt={`prayerHall `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities(
                    "facilities.FacilitiesAndServices.prayerHall.title",
                  )}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.prayerHall.description",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="healthClinic">
        <div className="Our-Curriculum bg-[#F9F9F9] px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex flex-row-reverse gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/clinic.png`}
                  alt={`healthClinic `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities(
                    "facilities.FacilitiesAndServices.healthClinic.title",
                  )}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.healthClinic.description",
                  )}
                </p>
                <div className="list flex flex-col gap-4">
                  {facilities
                    .raw("facilities.FacilitiesAndServices.healthClinic.items")
                    .map((item, index) => (
                      <p
                        key={index}
                        className="paraghraph-2 flex items-center gap-2 text-[#6E6E6E]"
                      >
                        <span className="rounded-full bg-[var(--secondary-color)] p-1 text-white">
                          <TiTick size={20} />
                        </span>
                        {item}
                      </p>
                    ))}
                </div>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.healthClinic.conclusion",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counseling">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/counseling.jpg`}
                  alt={`curriculum `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities(
                    "facilities.FacilitiesAndServices.counseling.title",
                  )}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.counseling.description",
                  )}
                </p>
                <div className="list flex flex-col gap-4">
                  {facilities
                    .raw("facilities.FacilitiesAndServices.counseling.items")
                    .map((item, index) => (
                      <p
                        key={index}
                        className="paraghraph-2 flex items-center gap-2 text-[#6E6E6E]"
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
          </div>
        </div>
      </section>
      <section className="Hygienic">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex flex-row-reverse gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/cafeteria.jpg`}
                  alt={`curriculum `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities(
                    "facilities.FacilitiesAndServices.cafeteria.title",
                  )}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.cafeteria.description",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special needs">
        <div className="Our-Curriculum px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/students/ehsan.jpg`}
                  alt={`special needs students`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities(
                    "facilities.FacilitiesAndServices.specialNeeds.title",
                  )}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.specialNeeds.description",
                  )}
                </p>
                <div className="list flex flex-col gap-4">
                  {facilities
                    .raw("facilities.FacilitiesAndServices.specialNeeds.items")
                    .map((item, index) => (
                      <p
                        key={index}
                        className="paraghraph-2 flex items-center gap-2 text-[#6E6E6E]"
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
          </div>
        </div>
      </section>
      <section className="safety">
        <div className="Our-Curriculum bg-[#F9F9F9] px-4 py-14 md:px-8 md:py-20 lg:px-20">
          <div className="Curriculum-Container mx-auto max-w-screen-2xl">
            <div className="Content flex flex-row-reverse gap-4 max-md:flex-col-reverse md:gap-8 lg:gap-14">
              <div className="Image relative min-h-[300px] flex-1 overflow-hidden rounded-[30px] md:min-h-[450px]">
                <Image
                  src={`/facilities/saftey.jpg`}
                  alt={`curriculum `}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="Text flex flex-1 flex-col justify-center gap-5 md:py-8">
                <h3 className="inline-block bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text font-semibold uppercase text-transparent">
                  {facilities("facilities.FacilitiesAndServices.title")}
                </h3>
                <h3 className="text-3xl font-semibold capitalize md:text-4xl lg:text-5xl rtl:leading-tight">
                  {facilities("facilities.FacilitiesAndServices.safety.title")}
                </h3>
                <p className="paraghraph-2 text-[#6E6E6E]">
                  {facilities(
                    "facilities.FacilitiesAndServices.safety.description",
                  )}
                </p>
                <div className="border-[#7E8D85] ltr:border-l-[7px] ltr:pl-[35px] rtl:border-r-[7px] rtl:pr-[35px]">
                  <p className="mb-2 text-xl font-semibold">
                    {facilities(
                      "facilities.FacilitiesAndServices.safety.keyFocus",
                    )}
                  </p>
                  <p className="paraghraph-2 mb-2 text-[#6E6E6E]">
                    {facilities(
                      "facilities.FacilitiesAndServices.safety.keyFocusDescription",
                    )}
                  </p>
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
