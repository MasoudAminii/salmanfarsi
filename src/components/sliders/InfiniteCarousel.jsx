import Image from "next/image";

const InfiniteCarousel = ({ Images, width, height, reverse = false }) => {
  return (
    <div
      style={{
        "--quantity": Images.length,
        "--width": `${width}px`,
        "--height": `${height}px`, // Fix height typo
      }}
      data-reverse={reverse ? "true" : "false"}
      className="Slider mask-image z-20 mx-auto h-[var(--height)] w-full max-w-screen-2xl overflow-hidden"
    >
      <div className="list relative z-20 flex">
        {Images.map((image, index) => (
          <div
            style={{ "--position": index }}
            className="item InfiniteSliderAnimation absolute left-full z-20 h-[var(--height)] w-[var(--width)]"
            key={index}
          >
            <Image
              src={image.path}
              alt={`collage` + index}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              className="z-20"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
