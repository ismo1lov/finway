import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] z-0",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:-translate-x-full before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:to-[#64748b]",
            className
          )}
          style={{
            top: Math.floor(Math.random() * -20) + "%",
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 8 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
