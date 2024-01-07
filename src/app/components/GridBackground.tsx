import React from "react";
import { Twitter,Github } from 'lucide-react';
import Link from "next/link";

export function GridBackground() {
  return (
    <>
      <div className="h-[100vh] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-center">
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            zsh labs
          </p>
          <div className="text-xl text-neutral-500 mt-3">
            we build amazing web products
          </div>
          <div className="mt-4 flex flex-row items-center justify-center ">
          <Link className="mx-2" href={'https://twitter.com/zshlabs'}>
          <Twitter className="text-neutral-500" size={35} />
          </Link>
          <Link className="mx-2" href={'https://github.com/zshlabs'}>
          <Github className="text-neutral-500" size={35} />
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
