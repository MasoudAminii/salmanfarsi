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
// Animation Link
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
      href: "/about-us",
      drop: [
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
      dropTitle: t("media"),
      href: "#",
      drop: [
        {
          label: t("blogs"),
          href: "/school-news",
          icon: <GiNewspaper size={iconSize} />,
        },
      ],
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
    pathName.startsWith(`/${locale}/school-news/`);

  const bgColor =
    pathName === `/${locale}/admission` ||
    pathName.startsWith(`/${locale}/school-news/`);
  return (
    <>
      <nav
        dir="ltr"
        className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <motion.div
          className={`mx-auto max-w-screen-xl rounded-b-[30px] ${
            hasScrolled ? "bg-[#EDF6FF]" : ""
          } transition-colors duration-300 ${bgColor ? "bg-[#EDF6FF]" : ""}`}
        >
          <div className="top-nav min-h-[50px] rounded-b-[30px] bg-[#17012C] px-4 py-2 sm:px-6">
            <div className="contact-container flex min-h-[53px] flex-wrap items-center justify-center sm:justify-between">
              <div className="digit flex w-fit flex-wrap items-center gap-4 text-white max-sm:justify-center">
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
              <div className="social mr-4 flex items-center gap-4 text-xl text-[#635AD9] max-sm:hidden">
                <a
                  href="https://api.whatsapp.com/send?phone=97142988116"
                  className="transition-all duration-300 hover:text-white"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="transition-all duration-300 hover:text-white"
                  href="https://www.instagram.com/ir.salmanfarsi/profilecard/?igsh=MXZtd2FybXd1OTNobw=="
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  className="transition-all duration-300 hover:text-white"
                  href="https://www.youtube.com/@salmanfarsiiranianschool73"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-nav px-4 py-4 sm:px-8">
            <div className="menu-container flex items-center justify-center gap-4 xxs:justify-between sm:gap-8">
              <div className="logo relative max-xxs:hidden">
                <Image
                  src={!isHomePage && !hasScrolled ? NoBgLogo : Logo}
                  alt="Logo"
                  width={260}
                  quality={100}
                  priority
                />
              </div>
              <div className="menu flex min-w-fit items-center gap-6 max-md:hidden">
                <div className="links flex gap-4 capitalize rtl:flex-row-reverse">
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
              className={`group relative p-1 transition-all duration-300 ease-in-out rtl:text-end ${
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
  const iconSize = 18; // Define a consistent icon size
  const navLinks = [
    { title: t("home"), href: "/", icon: <HiHome size={iconSize} /> },
    {
      dropTitle: t("about"),
      href: "/about-us",
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
          icon: <GiSchoolBag size={iconSize} />,
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
      dropTitle: t("media"),
      href: "#",
      drop: [
        {
          label: t("blogs"),
          href: "/school-news",
          icon: <GiNewspaper size={iconSize} />,
        },
      ],
    },
    {
      title: t("contactUs"),
      href: "/contact-us",
      icon: <MdContactEmergency size={iconSize} />,
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const [linkItems, setLinkItems] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when menu closes
    };
  }, [openMenu]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleDropdownToggle = (index) => {
    setLinkItems(linkItems === index ? null : index);
  };

  return (
    <div>
      <button
        onClick={() => toggleMenu()}
        className={`relative flex h-10 w-10 items-center justify-center rounded-full ${!isHomePage && !hasScrolled ? "bg-[var(--secondary-color)] hover:bg-white hover:text-[var(--primary-color)]" : "bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]"} text-white transition-colors`}
      >
        <HiMenuAlt3 size={27} className="absolute" />
      </button>
      {
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
                className="mobile-menu-container fixed left-0 top-0 z-50 flex h-screen w-full max-w-[300px] flex-col justify-between gap-16 overflow-y-auto bg-[var(--primary-color)]"
              >
                <div className="Menu-Container">
                  <div className="top flex items-center justify-between gap-4 p-4">
                    <div className="mobile-logo">
                      <div className="logo relative max-xxs:hidden">
                        <Image
                          src={NoBgLogo}
                          alt="Logo"
                          width={240}
                          quality={100}
                          priority
                        />
                      </div>
                    </div>
                    <div className="close">
                      <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--primary-color)] transition-colors hover:bg-[var(--secondary-color)] hover:text-white">
                        <HiX
                          size={27}
                          onClick={() => {
                            toggleMenu();
                            setLinkItems(false);
                          }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mobile-menu-links flex flex-col py-4 capitalize text-white">
                    {navLinks.map((link, index) => {
                      if (link.dropTitle) {
                        return (
                          <div
                            className="w-full border-b border-white/50"
                            key={index}
                          >
                            <button
                              onClick={() => handleDropdownToggle(index)}
                              className="flex w-full items-center gap-2 p-3 text-left capitalize"
                            >
                              <motion.div
                                initial={{ rotate: 0 }}
                                animate={{
                                  rotate: linkItems === index ? 135 : 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                              >
                                <HiPlus size={20} />
                              </motion.div>
                              {link.dropTitle}
                            </button>
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{
                                height: linkItems === index ? "auto" : 0,
                              }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="flex w-full flex-col overflow-hidden"
                            >
                              {link.drop.map((dropLink, dropIndex) => (
                                <div
                                  className="border-t border-white/50"
                                  key={dropIndex}
                                >
                                  <Link
                                    className="flex items-center gap-2 p-3 pl-8"
                                    href={dropLink.href}
                                  >
                                    {dropLink.icon}
                                    {dropLink.label}
                                  </Link>
                                </div>
                              ))}
                            </motion.div>
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={index}
                          className="flex items-center gap-2 border-b border-white/50 p-3"
                          href={link.href}
                        >
                          {link.icon}
                          {link.title}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="digit flex w-fit flex-col gap-2 px-3 text-white max-sm:justify-center">
                    <a
                      className="flex w-fit items-center gap-2 hover:underline"
                      href="tel:+971 4 298 811 6"
                    >
                      <span className="rounded-full bg-[var(--secondary-color)] p-3 text-xl text-white">
                        <HiOutlinePhoneIncoming size={20} />
                      </span>
                      +971 4 298 811 6
                    </a>
                    <a
                      className="flex w-fit items-center gap-2 hover:underline"
                      href="mailto:info@ir-salmanfarsi.com"
                    >
                      <span className="rounded-full bg-[var(--secondary-color)] p-3 text-white">
                        <HiOutlineMail size={20} />
                      </span>
                      info@ir-salmanfarsi.com
                    </a>
                  </div>
                </div>
                <div className="CopyRight-bottom flex flex-col gap-2 p-2">
                  <div className="social flex items-center gap-2 text-white">
                    <a
                      href="#"
                      className="flex w-fit items-center gap-2 hover:underline"
                    >
                      <span className="rounded-full bg-[var(--secondary-color)] p-3 text-xl text-white">
                        <FaWhatsapp size={20} />
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/ir.salmanfarsi/profilecard/?igsh=MXZtd2FybXd1OTNobw=="
                      target="_blank"
                      className="flex w-fit items-center gap-2 hover:underline"
                    >
                      <span className="rounded-full bg-[var(--secondary-color)] p-3 text-xl text-white">
                        <FaInstagram size={20} />
                      </span>
                    </a>
                    <a
                      href="https://www.youtube.com/@salmanfarsiiranianschool73"
                      target="_blank"
                      className="flex w-fit items-center gap-2 hover:underline"
                    >
                      <span className="rounded-full bg-[var(--secondary-color)] p-3 text-xl text-white">
                        <FaYoutube size={20} />
                      </span>
                    </a>
                  </div>
                  <div className="CopyRight text-sm capitalize text-white">
                    <p>all copyright (c) 2024 reserved</p>
                  </div>
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
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      }
    </div>
  );
};
