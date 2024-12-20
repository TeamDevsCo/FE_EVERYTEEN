import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  justify?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "start" | "end" | "center" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};

export default function FlexBox(props: Props) {
  const { children, className, direction, justify, align, wrap } = props;
  const flexDirection = direction ? `flex-${direction}` : "";
  const flexJustify = justify ? `justify-${justify}` : "";
  const flexAlign = align ? `items-${align}` : "";
  const flexWrap = wrap ? `flex-${wrap}` : "";

  return (
    <div
      className={cn(flexDirection, flexJustify, flexAlign, flexWrap, className)}
    >
      {children}
    </div>
  );
}
