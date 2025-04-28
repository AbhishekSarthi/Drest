import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

const Header = () => {
  return (
    <header className="">
      <div className="w-full bg-stone-100 py-8">
        <Link
          href="/"
          className={cn([
            integralCF.className,
            "flex justify-center text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
          ])}
        >
          DREST
        </Link>
        <div className="flex justify-center text-lg">
          Luxury Has Never Felt This Good
        </div>
      </div>
    </header>
  );
};

export default Header;
