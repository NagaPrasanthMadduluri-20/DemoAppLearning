import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ bg, children, className }) => {
  return (
    <section className={cn("py-12 px-8 lg:px-0 mx-auto max-w-6xl w-full", bg, className)}>
      <div>{children}</div>
    </section>
  );
};

export default Container;
