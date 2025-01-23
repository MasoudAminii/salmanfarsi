import Link from "next/link";
import { useRouter } from "next/navigation";
const BodyTransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  function sleep(ms) {
    return new Promise((resovle) => {
      setTimeout(resovle, ms);
    });
  }

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(500);

    router.push(href);

    await sleep(500);

    body?.classList.remove("page-transition");
  };
  return (
    <button  onClick={handleTransition} {...props}>
      {children}
    </button>
  );
};

export default BodyTransitionLink;
