import { PiTelegramLogo } from "react-icons/pi";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaAngleDoubleRight,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhoneIncoming,
  HiLocationMarker,
} from "react-icons/hi";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const footer = await getTranslations("Footer");

  const quickLinks = [
    {
      title: footer("main.quicklinks.home"),
      href: "/",
    },
    {
      title: footer("main.quicklinks.about"),
      href: "/about-us",
    },
    {
      title: footer("main.quicklinks.schoolstaff"),
      href: "/about-us/school-staff",
    },
    {
      title: footer("main.quicklinks.schoolnews"),
      href: "/school-news",
    },
    {
      title: footer("main.quicklinks.contactus"),
      href: "/contact-us",
    },
  ];

  const curriculum = [
    {
      title: footer("main.curriculum_links.elemantryschool"),
      href: "/about-us/curriculum#elementory school",
    },
    {
      title: footer("main.curriculum_links.middleschool"),
      href: "/about-us/curriculum#middle school",
    },
    {
      title: footer("main.curriculum_links.highschool"),
      href: "/about-us/curriculum#highschool",
    },
    {
      title: footer("main.curriculum_links.ehsan"),
      href: "/about-us/curriculum#ehsan",
    },
  ];

  return (
    <div className="h-full bg-[var(--primary-color)]">
      <div className="footer-container mx-auto max-w-screen-2xl">
        <div className="newslleter">
          <Newsletter footer={footer} />
        </div>
        <div className="main-footer-container mx-auto flex flex-wrap gap-4 gap-y-4 px-4 py-14 max-[400px]:flex-col md:px-8">
          <div className="footer-about flex flex-auto flex-col py-4 min-[400px]:w-2/6 min-[400px]:min-w-60 ltr:gap-6 rtl:gap-8">
            <div className="logo">
              <h1 className="text-3xl font-bold capitalize text-white">
                {footer("main.title")}
              </h1>
            </div>
            <div className="about-text">
              <p className="text-[#D9D9D9] ltr:leading-relaxed rtl:leading-loose">
                {footer("main.description")}
              </p>
            </div>
            <div className="contact-link mt-3">
              <Link
                className="rounded-[30px] bg-gradient-to-r from-[#BD21FC] to-[#077EEC] px-5 py-3 font-bold text-white"
                href="/contact-us"
              >
                {footer("main.link")}
              </Link>
            </div>
          </div>
          <div className="footer-link flex-auto py-4 min-[400px]:w-1/6 min-[400px]:min-w-40">
            <div className="relative mb-5 w-fit">
              <h3 className="text-lg font-bold capitalize text-white">
                {footer("main.quicklink_title")}
              </h3>
              <span className="absolute -bottom-2 left-0 h-[2px] w-5 bg-[#219BE4]" />
              <span className="absolute -bottom-2 left-7 h-[2px] w-[70px] bg-white" />
            </div>
            <ul className="capitalize text-[#D9D9D9]">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-[var(--secondary-color)]"
                >
                  <FaAngleDoubleRight />
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-service flex-auto py-4 min-[400px]:w-1/6 min-[400px]:min-w-40">
            <div className="relative mb-5 w-fit">
              <h3 className="text-lg font-bold capitalize text-white">
                {footer("main.curriculum_title")}
              </h3>
              <span className="absolute -bottom-2 left-0 h-[2px] w-5 bg-[#219BE4]" />
              <span className="absolute -bottom-2 left-7 h-[2px] w-[70px] bg-white" />
            </div>
            <ul className="capitalize text-[#D9D9D9]">
              {curriculum.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-[var(--secondary-color)]"
                >
                  <FaAngleDoubleRight />
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact flex-auto py-4 min-[400px]:w-1/6 min-[400px]:min-w-40">
            <div className="relative mb-5 w-fit">
              <h3 className="text-lg font-bold capitalize text-white">
                {footer("main.contactus_title")}
              </h3>
              <span className="absolute -bottom-2 left-0 h-[2px] w-5 bg-[#219BE4]" />
              <span className="absolute -bottom-2 left-7 h-[2px] w-[70px] bg-white" />
            </div>
            <ul className="capitalize text-[#D9D9D9]">
              <li className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-[var(--secondary-color)]">
                <HiLocationMarker
                  size={20}
                  className="text-[var(--secondary-color)]"
                />
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Salman+Farsi+Iranian+Boys+School/@25.2805319,55.3676033,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5c5ccc1839a7:0x4dc94820fc33cef1!8m2!3d25.2805271!4d55.3701782!16s%2Fg%2F1pyqgj7wl?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                >
                  {footer("main.contactus_link.address")}
                </a>
              </li>
              <li className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-[var(--secondary-color)]">
                <HiOutlinePhoneIncoming
                  size={20}
                  className="text-[var(--secondary-color)]"
                />
                <a target="_blank" href="tel:+971 4 2988116">
                  {footer("main.contactus_link.phone")}
                </a>
              </li>
              <li className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-[var(--secondary-color)]">
                <HiOutlineMail
                  size={20}
                  className="text-[var(--secondary-color)]"
                />
                <a target="_blank" href="mailto:info@ir-salmanfarsi.com">
                  {footer("main.contactus_link.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-line mx-auto h-[1px] w-full rounded-full bg-white/30"></div>
        <div className="CopyRight flex items-center gap-4 px-4 py-4 max-md:flex-col max-md:justify-center md:justify-between md:px-8">
          <p className="text-sm capitalize text-white">
            {footer("copyright.title")}
          </p>
          <div className="rules flex flex-wrap gap-4 text-sm capitalize text-white">
            <Link className="hover:underline" href="/privacy-policy">
              {" "}
              {footer("copyright.policy")}
            </Link>
            <Link className="hover:underline" href="/terms-and-conditions">
              {footer("copyright.terms")}
            </Link>
            <Link className="hover:underline" href="/faq">
              {" "}
              {footer("copyright.faq")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Newsletter = ({ footer }) => {
  return (
    <div className="mx-auto flex h-[142.52px] w-full max-w-screen-xl justify-between gap-2 rounded-b-[30px] bg-[var(--secondary-color)] px-6 py-2 max-sm:flex-col sm:items-center">
      <div className="footer-logo flex-auto sm:w-1/4">
        <h1 className="flex-auto text-3xl font-bold text-white">
          {footer("newsletter.title")}
        </h1>
      </div>
      <div className="search-newsletter flex flex-auto justify-center sm:w-2/4">
        <div className="flex w-full justify-center">
          <form className="focus-within:none flex max-h-[56.21px] w-full items-center rounded-full bg-white py-2 sm:max-w-[504px] ltr:pl-4 ltr:pr-2 rtl:pl-2 rtl:pr-4">
            <input
              placeholder={footer("newsletter.placeholder")}
              className="w-full appearance-none bg-white focus:outline-none"
            />
            <button
              className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-[var(--secondary-color)] px-3 py-1 ltr:ml-2 rtl:mr-2"
              type="submit"
            >
              <PiTelegramLogo size={30} className="text-white" />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-social w-1/4 flex-auto max-md:hidden">
        <div className="social flex items-center justify-end gap-4 p-2 text-2xl text-white">
          <a
            href="https://api.whatsapp.com/send?phone=97142988116"
            className="rounded-full border border-white/50 bg-transparent p-2 transition-all duration-300 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a
            className="rounded-full border border-white bg-transparent p-2 transition-all duration-300 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
            target="_blank"
            href="https://www.instagram.com/ir.salmanfarsi/profilecard/?igsh=MXZtd2FybXd1OTNobw=="
          >
            <FaInstagram />
          </a>
          <a
            className="rounded-full border border-white/50 bg-transparent p-2 transition-all duration-300 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
            target="_blank"
            href="https://www.youtube.com/@salmanfarsiiranianschool73"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
