import Image from "next/image";
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="mx-auto flex h-screen max-w-screen-2xl items-center justify-center px-4 py-40">
        <div className="not-container flex flex-col items-center justify-center gap-4">
          <div className="not-image flex-auto">
            <Image
              className="z-10"
              width={500}
              height={500}
              src={`/logo/404.png`}
              alt="error404"
              style={{ width: "auto", height: "auto", objectFit: "contain" }}
              priority
            />
          </div>
          <div className="not-text flex flex-col gap-4 text-center">
            <h3 className="text-3xl font-semibold text-[var(--primary-color)] sm:text-4xl">
              Sorry We Can`t Find That Page!
            </h3>
            <p className="text-[#666666] sm:text-lg">
              The page you are looking for was moved, removed, renamed or never
              existed.
            </p>
            <Link
              className="group mx-auto flex h-[64px] w-full max-w-[222px] items-center justify-center rounded-[10px] bg-[var(--primary-color)] px-[5px] py-[30px] text-white transition-all"
              href={"/"}
            >
              Return To Home Page
              <div className="ml-2 text-lg transition-all duration-100 group-hover:animate-spin-fast">
                <GiReturnArrow />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
