"use client";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
// Icons
import { BsCashCoin, BsImages, BsShieldShaded } from "react-icons/bs";
import { FaUserTie, FaSchool } from "react-icons/fa";
import { GiBookshelf, GiNewspaper, GiSchoolBag } from "react-icons/gi";
import {
  HiHome,
  HiMenuAlt3,
  HiOutlineMail,
  HiOutlinePhoneIncoming,
  HiPlus,
  HiX,
} from "react-icons/hi";
import { MdContactEmergency } from "react-icons/md";
import {
  Menu,
  X,
  Plus,
  Phone,
  Mail,
  Home,
  School,
  UserSquare2,
  BookOpen,
  Building2,
  Shield,
  HelpCircle,
  Newspaper,
  ContactRound,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaSearch,
  FaYoutube,
  FaQuestion,
} from "react-icons/fa";

// import toggles
import Language from "@/components/buttons/Language";
import Logo from "../../../public/logo/logo-header.png";
import NoBgLogo from "../../../public/logo/logo-header-white.png";
import LogoFrasi from "../../../public/logo/farsi-logo.png";
import FarsiNoBgLogo from "../../../public/logo/farsi-logo-bg.png";

// Framer motion for animations
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const NavAnimation = () => {
  const locale = useLocale();
  const t = useTranslations("Header");
  const iconSize = 18; // Define a consistent icon size
  const navLinks = [
    { title: t("home"), href: "/", icon: <HiHome size={iconSize} /> },
    {
      dropTitle: t("about"),
      href: "#",
      drop: [
        {
          label: t("about_us"),
          href: "/about-us",
          icon: <FaSchool size={iconSize} />,
        },
        {
          label: t("schoolStaff"),
          href: "/about-us/school-staff",
          icon: <FaUserTie size={iconSize} />,
        },
        {
          label: t("curriculum"),
          href: "/about-us/curriculum",
          icon: <GiBookshelf size={iconSize} />,
        },
        {
          label: t("facilities"),
          href: "/about-us/facilities",
          icon: <GiBookshelf size={iconSize} />,
        },
      ],
    },
    {
      dropTitle: t("admission"),
      href: "#",
      drop: [
        {
          label: t("termsConditions"),
          href: "/terms-and-conditions",
          icon: <BsShieldShaded size={iconSize} />,
        },
        {
          label: t("faq"),
          href: "/faq",
          icon: <FaQuestion size={iconSize} />,
        },
      ],
    },
    {
      title: t("blogs"),
      href: "/school-news",
      icon: <GiNewspaper size={iconSize} />,
    },
    {
      title: t("contactUs"),
      href: "/contact-us",
      icon: <MdContactEmergency size={iconSize} />,
    },
  ];

  const pathName = usePathname();
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const hiddenAtY = useRef(0); // Track the position where the menu was hidden

  useMotionValueEvent(scrollY, "change", (currentY) => {
    const isScrollingDown = currentY > lastScrollY.current;
    // Handle hiding the menu
    if (isScrollingDown && currentY > 150) {
      setIsHidden(true);
      hiddenAtY.current = currentY; // Record the scroll position where the menu was hidden
    }
    // Handle showing the menu
    if (!isScrollingDown && hiddenAtY.current - currentY > 150) {
      setIsHidden(false);
    }
    // Toggle background color based on scroll position
    setHasScrolled(currentY > 0);

    // Update the last scroll position
    lastScrollY.current = currentY;
  });

  const isHomePage =
    pathName === `/${locale}` ||
    pathName === `/${locale}/admission` ||
    pathName === `/${locale}/about-us/curriculum/ehsan` ||
    pathName.startsWith(`/${locale}/school-news/`);

  const bgColor =
    pathName === `/${locale}/admission` ||
    pathName === `/${locale}/about-us/curriculum/ehsan` ||
    pathName.startsWith(`/${locale}/school-news/`);
  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <motion.div
          className={`mx-auto max-w-screen-xl rounded-b-[30px] ${
            hasScrolled ? "bg-[#EDF6FF]" : ""
          } transition-colors duration-300 ${bgColor ? "bg-[#EDF6FF]" : ""}`}
        >
          <div className="top-nav rounded-b-2xl bg-[#17012C] py-4 md:rounded-b-3xl">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between sm:flex-row">
                {/* Contact Info */}
                <div className="flex flex-col items-center gap-4 max-xs:hidden xs:flex-row xs:gap-6">
                  <a
                    href="tel:+971 4 298 811 6"
                    className="group flex items-center gap-2 text-white transition-colors duration-300 hover:text-[#9881FF]"
                    aria-label="Call us"
                  >
                    <HiOutlinePhoneIncoming className="text-2xl text-[#635AD9] group-hover:animate-pulse" />
                    <span className="text-sm font-medium sm:text-base">
                      +971 4 298 811 6
                    </span>
                  </a>

                  <div
                    className="hidden h-6 w-px bg-[#635AD9]/50 xs:block"
                    aria-hidden="true"
                  ></div>

                  <a
                    href="mailto:info@ir-salmanfarsi.com"
                    className="group flex items-center gap-2 text-white transition-colors duration-300 hover:text-[#9881FF]"
                    aria-label="Email us"
                  >
                    <HiOutlineMail className="text-2xl text-[#635AD9] group-hover:animate-pulse" />
                    <span className="text-sm font-medium sm:text-base">
                      info@ir-salmanfarsi.com
                    </span>
                  </a>
                </div>
                <div className="digit flex w-fit flex-wrap items-center gap-4 text-white max-sm:justify-center xs:hidden">
                  <a
                    className="flex w-fit items-center gap-1 text-sm hover:underline xs:text-base"
                    href="tel:+971 4 298 811 6"
                  >
                    <span className="text-xl text-[#635AD9]">
                      <HiOutlinePhoneIncoming />
                    </span>
                    +971 4 298 811 6
                  </a>
                  <a
                    className="flex w-fit items-center gap-1 text-sm hover:underline xs:text-base"
                    href="mailto:info@ir-salmanfarsi.com"
                  >
                    <span className="text-xl text-[#635AD9]">
                      <HiOutlineMail />
                    </span>
                    info@ir-salmanfarsi.com
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-5 max-sm:hidden sm:space-x-6">
                  <a
                    href="https://api.whatsapp.com/send?phone=97142988116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[#635AD9] transition-colors duration-300 hover:scale-110 hover:text-white"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.instagram.com/ir.salmanfarsi/profilecard/?igsh=MXZtd2FybXd1OTNobw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[#635AD9] transition-colors duration-300 hover:scale-110 hover:text-white"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/@salmanfarsiiranianschool73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[#635AD9] transition-colors duration-300 hover:scale-110 hover:text-white"
                    aria-label="YouTube"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-nav px-4 py-4 sm:px-8">
            <div className="menu-container flex items-center justify-center gap-4 xxs:justify-between sm:gap-8">
              <div className="logo relative max-xxs:hidden">
                <Link href={"/"}>
                  {locale == "en" ? (
                    <Image
                      src={!isHomePage && !hasScrolled ? NoBgLogo : Logo}
                      alt="Logo"
                      width={260}
                      quality={100}
                      priority
                    />
                  ) : (
                    <Image
                      src={
                        !isHomePage && !hasScrolled ? FarsiNoBgLogo : LogoFrasi
                      }
                      alt="Logo"
                      width={260}
                      quality={100}
                      priority
                    />
                  )}
                </Link>
              </div>
              <div className="menu flex min-w-fit items-center gap-6 max-md:hidden">
                <div className="links flex gap-4 capitalize">
                  {navLinks.map((link, index) => {
                    const isActive =
                      pathName === link.href ||
                      (link.drop &&
                        link.drop.some((item) => item.href === pathName)) ||
                      (link.drop && pathName.startsWith(link.href));
                    return (
                      <FlyoutLink
                        FlyoutContent={pricingContent}
                        isHomePage={isHomePage}
                        pathName={pathName}
                        key={index}
                        href={link.href}
                        drop={link.drop}
                        hasScrolled={hasScrolled}
                      >
                        <span
                          style={{
                            transform: isActive ? "scaleX(1)" : "scaleX(0)",
                          }}
                          className={`absolute -bottom-2 -left-1 -right-1 h-1 origin-left rounded-full ${
                            !isHomePage && !hasScrolled
                              ? "bg-[var(--secondary-color)]"
                              : "bg-[var(--primary-color)]"
                          } transition-transform duration-300 ease-out`}
                        />
                        {link.title || link.dropTitle}
                      </FlyoutLink>
                    );
                  })}
                </div>
                <div className="Icons flex items-center justify-center gap-2">
                  <div className="search">
                    <div className="search">
                      <Link
                        href={"/search"}
                        className={`relative flex h-10 w-10 items-center justify-center rounded-full ${!isHomePage && !hasScrolled ? "bg-[var(--secondary-color)] hover:bg-white hover:text-[var(--primary-color)]" : "bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]"} text-white transition-colors`}
                      >
                        <FaSearch size={20} className="absolute" />
                      </Link>
                    </div>
                  </div>
                  <div className="language">
                    <Language
                      isHomePage={isHomePage}
                      hasScrolled={hasScrolled}
                    />
                  </div>
                </div>
              </div>
              <div className="mobile-menu flex gap-2 md:hidden">
                <div className="Icons flex items-center justify-center gap-2">
                  <div className="search max-xs:hidden">
                    <Link
                      href={"/search"}
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full ${!isHomePage && !hasScrolled ? "bg-[var(--secondary-color)] hover:bg-white hover:text-[var(--primary-color)]" : "bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]"} text-white transition-colors`}
                    >
                      <FaSearch size={20} className="absolute" />
                    </Link>
                  </div>
                  <div className="language">
                    <Language
                      isHomePage={isHomePage}
                      hasScrolled={hasScrolled}
                    />
                  </div>
                </div>
                <MobileMenu isHomePage={isHomePage} hasScrolled={hasScrolled} />
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};
export default NavAnimation;

const FlyoutLink = ({
  children,
  href,
  pathName,
  hasScrolled,
  FlyoutContent,
  drop,
  isHomePage,
}) => {
  // Link stylings
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent && drop;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link
        className={`relative capitalize ${!isHomePage && !hasScrolled ? "text-white" : "text-black"}`}
        href={href}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className={`absolute -bottom-2 -left-1 -right-1 h-1 origin-left rounded-full ${
            !isHomePage && !hasScrolled
              ? "bg-[var(--secondary-color)]"
              : "bg-[var(--primary-color)]"
          } transition-transform duration-300 ease-out`}
        />
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-11"
            >
              <div className="absolute -top-6 left-0 right-0 h-8"></div>
              <div
                className={`absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 ${
                  !isHomePage && !hasScrolled
                    ? "bg-[var(--secondary-color)]"
                    : "bg-[var(--primary-color)]"
                }`}
              ></div>
              <FlyoutContent
                drop={drop}
                pathName={pathName}
                isHomePage={isHomePage}
                hasScrolled={hasScrolled}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
};

const pricingContent = ({ drop, pathName, isHomePage, hasScrolled }) => {
  if (!drop) return null;

  // NavLinks
  return (
    <div
      className={`w-64 rounded-xl p-4 text-white shadow-xl ${
        !isHomePage && !hasScrolled
          ? "bg-[var(--secondary-color)]"
          : "bg-[var(--primary-color)]"
      }`}
    >
      <ul>
        {drop?.map((dropLink, dropIndex) => {
          const isActive =
            pathName.startsWith(dropLink.href) || pathName === dropLink.href;
          return (
            <li
              key={dropIndex}
              className={`group relative p-1 transition-all duration-300 ease-in-out ${
                isActive
                  ? "ltr:translate-x-3 rtl:-translate-x-3"
                  : "ltr:hover:translate-x-3 rtl:hover:-translate-x-3"
              }`}
            >
              <span
                className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ease-in-out ltr:-translate-x-3 rtl:right-0 rtl:translate-x-3 ${
                  isActive ? "h-1 w-2" : "h-1 w-0 group-hover:w-2"
                }`}
              />
              <Link href={dropLink.href}>{dropLink.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const MobileMenu = ({ isHomePage, hasScrolled }) => {
  const t = useTranslations("Header");
  const iconSize = 20;

  const navLinks = [
    { title: t("home"), href: "/", icon: <Home size={iconSize} /> },
    {
      dropTitle: t("about"),
      href: "#",
      drop: [
        {
          label: t("about_us"),
          href: "/about-us",
          icon: <School size={iconSize} />,
        },
        {
          label: t("schoolStaff"),
          href: "/about-us/school-staff",
          icon: <UserSquare2 size={iconSize} />,
        },
        {
          label: t("curriculum"),
          href: "/about-us/curriculum",
          icon: <BookOpen size={iconSize} />,
        },
        {
          label: t("facilities"),
          href: "/about-us/facilities",
          icon: <Building2 size={iconSize} />,
        },
      ],
    },
    {
      dropTitle: t("admission"),
      href: "#",
      drop: [
        {
          label: t("termsConditions"),
          href: "/terms-and-conditions",
          icon: <Shield size={iconSize} />,
        },
        { label: t("faq"), href: "/faq", icon: <HelpCircle size={iconSize} /> },
      ],
    },
    {
      title: t("blogs"),
      href: "/school-news",
      icon: <Newspaper size={iconSize} />,
    },
    {
      title: t("contactUs"),
      href: "/contact-us",
      icon: <ContactRound size={iconSize} />,
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const [linkItems, setLinkItems] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const handleDropdownToggle = (index) =>
    setLinkItems(linkItems === index ? null : index);

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full ${
          !isHomePage && !hasScrolled
            ? "bg-[var(--secondary-color)] hover:bg-white hover:text-[var(--primary-color)]"
            : "bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]"
        } text-white transition-all duration-300 hover:scale-105`}
      >
        <Menu
          size={28}
          className="transition-transform group-hover:rotate-180"
        />
      </button>

      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ x: -300, opacity: 0 }} // Start from outside the viewport (off-screen right)
              animate={{ x: 0, opacity: 1 }} // Slide into view
              exit={{ x: -300, opacity: 0 }} // Slide out to the right
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="fixed left-0 top-0 z-50 flex h-screen w-full max-w-[320px] flex-col justify-between overflow-y-auto bg-gradient-to-b from-[var(--primary-color)] to-[color-mix(in_srgb,var(--primary-color),#000_20%)] shadow-2xl"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-4 p-5">
                  <div className="logo relative max-xxs:hidden">
                    <Image
                      src={NoBgLogo}
                      alt="Logo"
                      width={240}
                      quality={100}
                      priority
                    />
                  </div>
                  <button
                    onClick={() => {
                      toggleMenu();
                      setLinkItems(false);
                    }}
                    className="group relative flex max-h-12 min-h-12 min-w-12 max-w-12 items-center justify-center rounded-full bg-white text-[var(--primary-color)] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--secondary-color)] hover:text-white"
                  >
                    <X
                      size={28}
                      className="transition-transform group-hover:rotate-90"
                    />
                  </button>
                </div>

                <div className="mt-4 flex flex-col space-y-1 px-3 text-white">
                  {navLinks.map((link, index) => {
                    if (link.dropTitle) {
                      return (
                        <div key={index} className="rounded-lg bg-black/10">
                          <button
                            onClick={() => handleDropdownToggle(index)}
                            className="flex w-full items-center gap-3 rounded-lg p-4 transition-colors hover:bg-white/10"
                          >
                            <motion.div
                              initial={{ rotate: 0 }}
                              animate={{
                                rotate: linkItems === index ? 135 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="rounded-full bg-[var(--secondary-color)] p-2"
                            >
                              <Plus size={20} />
                            </motion.div>
                            <span className="text-lg font-medium">
                              {link.dropTitle}
                            </span>
                          </button>
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{
                              height: linkItems === index ? "auto" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {link.drop.map((dropLink, dropIndex) => (
                              <a
                                key={dropIndex}
                                href={dropLink.href}
                                className="flex items-center gap-3 p-4 pl-14 transition-colors hover:bg-white/5"
                              >
                                <span className="bg-[var(--secondary-color)]/80 rounded-full p-2">
                                  {dropLink.icon}
                                </span>
                                <span>{dropLink.label}</span>
                              </a>
                            ))}
                          </motion.div>
                        </div>
                      );
                    }
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg bg-black/10 p-4 transition-all hover:bg-white/10"
                      >
                        <span className="rounded-full bg-[var(--secondary-color)] p-2">
                          {link.icon}
                        </span>
                        <span className="text-lg font-medium">
                          {link.title}
                        </span>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 space-y-4 px-4">
                  <a
                    href="tel:+971 4 298 811 6"
                    className="group flex items-center gap-3 rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10"
                  >
                    <span className="rounded-full bg-[var(--secondary-color)] p-3 transition-transform group-hover:scale-110">
                      <Phone size={22} />
                    </span>
                    <span className="text-white">+971 4 298 811 6</span>
                  </a>
                  <a
                    href="mailto:info@ir-salmanfarsi.com"
                    className="group flex items-center gap-3 rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10"
                  >
                    <span className="rounded-full bg-[var(--secondary-color)] p-3 transition-transform group-hover:scale-110">
                      <Mail size={22} />
                    </span>
                    <span className="text-white">info@ir-salmanfarsi.com</span>
                  </a>
                </div>
              </div>

              <div className="mt-auto space-y-4 p-4">
                <div className="flex justify-center gap-4">
                  {[
                    {
                      icon: <FaWhatsapp size={22} />,
                      href: "https://api.whatsapp.com/send?phone=97142988116",
                    },
                    {
                      icon: <FaInstagram size={22} />,
                      href: "https://www.instagram.com/ir.salmanfarsi/profilecard/?igsh=MXZtd2FybXd1OTNobw==",
                    },
                    {
                      icon: <FaYoutube size={22} />,
                      href: "https://www.youtube.com/@salmanfarsiiranianschool73",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-full bg-[var(--secondary-color)] p-3 text-white transition-all hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-center text-sm text-white/80">
                  {t("mobilemenu.rights")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="background-shadow fixed left-0 top-0 z-40 h-screen w-full bg-black/60 backdrop-blur-md"
              onClick={() => {
                setOpenMenu(false);
                setLinkItems(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
