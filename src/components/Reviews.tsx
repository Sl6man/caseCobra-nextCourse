"use client";

import React, { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

function ReviewsGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className=" relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start overflow-hidden
      px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    ></div>
  );
}

export default function Reviews() {
  return (
    <MaxWidthWrapper className=" relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className=" absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewsGrid />
    </MaxWidthWrapper>
  );
}
