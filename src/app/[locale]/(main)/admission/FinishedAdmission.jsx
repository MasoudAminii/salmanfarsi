import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const FinishedAdmission = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-8 rounded-[34px] border border-[#EFF0F6] bg-white p-12 shadow-[0_32px_64px_-12px_rgba(74,58,255,0.15)] backdrop-blur-lg transition-all">
        <div className="flex flex-col items-center">
          {/* Animated Checkmark */}
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#4A3AFF]">
            <svg
              className="h-14 w-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title with gradient text */}
          <h2 className="mb-4 bg-gradient-to-r from-[#4A3AFF] to-[#8B7DFF] bg-clip-text py-2 text-center text-4xl font-bold tracking-tight text-transparent">
            Registration Successful!
          </h2>

          {/* Enhanced description */}
          <p className="text-center text-lg leading-relaxed text-[#6F6C90]">
            Thank you for registering with{" "}
            <span className="font-semibold text-[#4A3AFF]">
              Iranian Salman Farsi School
            </span>
            . Your application has been received, and our team will review it
            shortly.
            <br />
            <br />
            We will contact you with the next steps via email or phone within
            3-5 business days. If you have any urgent questions, please contact
            our admissions office at{" "}
            <a
              href="mailto:admissions@salmanfarsi.sch.ir"
              className="text-[#4A3AFF] underline hover:text-[#3729CC]"
            >
              admissions@salmanfarsi.sch.ir
            </a>
            .
          </p>

          {/* Enhanced button with hover effects */}
          <div className="mt-5">
            <Link
              href={"/"}
              className="group flex w-fit items-center gap-2 rounded-[30px] bg-gradient-to-r from-[#4A3AFF] to-[#8B7DFF] px-6 py-4 capitalize text-white transition-all"
            >
              <span className="transition-all duration-300 ltr:group-hover:translate-x-3 rtl:group-hover:-translate-x-3">
                return to HomePage
              </span>
              <FaArrowRight className="transition-all duration-500 ltr:group-hover:translate-x-4 ltr:group-hover:opacity-0 rtl:scale-x-[-1] rtl:group-hover:-translate-x-4 rtl:group-hover:opacity-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedAdmission;
