import { cn } from "@/lib/utils";
import React from "react";

export default function Phone({
  className,
  imgSrc,
  darkMode = false,
  ...props
}: {
  className?: string;
  imgSrc: string;
  darkMode?: boolean;
}) {
  return (
    <div
      {...props}
      className={cn(
        " relative pointer-events-none z-50 overflow-hidden",
        className
      )}
    >
      <img
        src={
          darkMode
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className=" pointer-events-none z-50 select-none"
        alt="phone case template"
      />
      <div className=" absolute -z-10 inset-0">
        <img className=" object-cover" src={imgSrc} />
      </div>
    </div>
  );
}
