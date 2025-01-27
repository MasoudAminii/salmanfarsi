import TextParallax from "@/components/animations/TextParallax";
import Image from "next/image";
import { Input, Textarea } from "@nextui-org/react";
import ImageContact from "../../../../../public/skeleton/Contact.png";
import {
  HiOutlineMail,
  HiOutlinePhoneIncoming,
  HiLocationMarker,
} from "react-icons/hi";
import { getTranslations } from "next-intl/server";
import ContactVideo from "@/components/buttons/ContactVideo";

export const metadata = {
  title: "Conatct Us",
};
const page = async () => {
  const t = await getTranslations("ContactUsPage");

  return (
    <div>
      <section className="Banner">
        <TextParallax
          subheading={t("banner.title")}
          imgUrl={"/banner/banner (5).jpg"}
          heading={t("banner.description")}
        />
      </section>
      <section className="ContactUs px-4 py-14 md:px-8 md:py-20">
        <div className="Contact-Container mx-auto max-w-screen-2xl">
          <div className="Contact-Wrapper flex items-center justify-center gap-2 gap-y-4 max-lg:flex-col">
            <div className="Contact-Image relative z-10 flex max-w-[600px] flex-auto flex-col items-center justify-center">
              <div className="image z-10 mb-6">
                <Image
                  src={ImageContact}
                  alt="ImageContact"
                  width={450}
                  quality={100}
                />
              </div>
              <div className="video z-10 max-lg:hidden">
                <ContactVideo />
              </div>
            </div>
            <div className="Contact-Text max-w-[600px] flex-auto p-2">
              <div className="ContactTitle">
                <h4 className="mb-2 text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
                  {t("contact.title")}
                </h4>
                <p className="text-[#504E4E]">{t("contact.description")}</p>
              </div>
              <form action="">
                <div className="Form-Container md mt-6 flex flex-col gap-4 rounded-2xl p-6 py-8 shadow-lg shadow-gray-400">
                  <p className="text-xl font-bold capitalize text-[var(--secondary-color)]">
                    {t("contact.form.getintouch")}
                  </p>
                  <div className="Inputs flex flex-wrap gap-4 md:flex-nowrap">
                    <Input
                      variant="faded"
                      type="Name"
                      label={t("contact.form.name")}
                    />
                    <Input
                      variant="faded"
                      type="Email"
                      label={t("contact.form.email")}
                    />
                  </div>
                  <div className="Textarea">
                    <Textarea
                      variant="faded"
                      label={t("contact.form.message.label")}
                      placeholder={t("contact.form.message.placeholder")}
                      minRows={7}
                      className="w-full"
                    />
                  </div>
                  <div className="Submit">
                    <button className="w-fit rounded-[100px] bg-[#EAF3F8] px-6 py-4 text-sm font-bold uppercase text-[var(--secondary-color)] transition-all duration-300 hover:bg-[#635ad9] hover:text-white">
                      {t("contact.form.submit")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="Map relative">
        <div className="Map-Container h-[450px]">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7044105734994!2d55.3701782!3d25.280527099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c5ccc1839a7%3A0x4dc94820fc33cef1!2sSalman%20Farsi%20Iranian%20Boys%20School!5e0!3m2!1sen!2sae!4v1730836760722!5m2!1sen!2sae"
          ></iframe>
        </div>
        <div className="Link absolute right-4 top-4 h-[322px] w-[358px] bg-[var(--secondary-color)] p-6 max-lg:hidden">
          <div className="Title mb-4">
            <h4 className="text-xl text-white">Contact Info</h4>
          </div>
          <div className="Line mb-4 h-[1px] w-full bg-white/15"></div>
          <div className="Link">
            <ul className="capitalize text-white">
              <li className="flex items-center gap-2 py-2 hover:underline">
                <span className="rounded-full bg-white/10 p-2 backdrop-blur-3xl">
                  <HiLocationMarker size={20} className="text-white" />
                </span>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Salman+Farsi+Iranian+Boys+School/@25.2805319,55.3676033,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5c5ccc1839a7:0x4dc94820fc33cef1!8m2!3d25.2805271!4d55.3701782!16s%2Fg%2F1pyqgj7wl?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                >
                  Al Qusais - Al Qusais 1 - Dubai
                </a>
              </li>
              <div className="Line my-2 h-[1px] w-full bg-white/15"></div>
              <li className="flex items-center gap-2 py-2 hover:underline">
                <span className="rounded-full bg-white/10 p-2 backdrop-blur-3xl">
                  <HiOutlinePhoneIncoming size={20} className="text-white" />
                </span>
                <a target="_blank" href="tel:+971 4 2988116">
                  +971 4 298 811 6
                </a>
              </li>
              <div className="Line my-2 h-[1px] w-full bg-white/15"></div>
              <li className="flex items-center gap-2 py-2 hover:underline">
                <span className="rounded-full bg-white/10 p-2 backdrop-blur-3xl">
                  <HiOutlineMail size={20} className="text-white" />
                </span>
                <a target="_blank" href="mailto:info@ir-salmanfarsi.com">
                  info@ir-salmanfarsi.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
