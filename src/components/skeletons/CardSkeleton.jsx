const CardSkeleton = () => {
  const skeletonItems = new Array(8).fill(null); // creates an array with 8 empty values

  return (
    <div className="Team-content xs:grid-cols-2 grid gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="Team-item flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-4 shadow-md"
        >
          <div className="relative mb-4 aspect-square w-[100%] max-w-[200px] animate-pulse overflow-hidden rounded-full bg-gray-300"></div>

          <div className="mb-2 h-4 w-3/4 animate-pulse rounded-3xl bg-gray-300"></div>

          <div className="h-4 w-2/4 animate-pulse rounded-3xl bg-gray-300"></div>

          <div className="my-4 h-px w-full bg-gray-200"></div>

          <div className="flex w-full flex-col gap-2 px-2">
            <div className="h-4 w-4/6 animate-pulse rounded-3xl bg-gray-300"></div>
            <div className="h-4 w-5/6 animate-pulse rounded-3xl bg-gray-300"></div>
            <div className="h-4 w-3/6 animate-pulse rounded-3xl bg-gray-300"></div>
            <div className="h-8 w-2/6 animate-pulse rounded-md bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
