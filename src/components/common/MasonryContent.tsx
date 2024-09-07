"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";
import { Button } from "../ui/button";

type Image = {
  id: number;
  src: string;
}[];

export default function MasonryContent({ images }: { images: Image }) {
  const [openModal, setOpenModal] = useState(false);
  const [cur, setCur] = useState(1);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex w-full gap-5 select-none"
    >
      {images.map((image, index) => (
        <div key={image.id} className="min-w-full relative group mb-5">
          <Image
            onClick={() => {
              setOpenModal(true);
              setCur(index + 1);
            }}
            src={image.src}
            alt=""
            width={318}
            height={350}
            className="h-full rounded w-full"
          />

          {/* Modal */}
          <div
            className={`fixed flex justify-center items-center z-[100] ${
              cur === index + 1 && openModal
                ? "visible opacity-1"
                : "invisible opacity-0"
            } inset-0 w-full h-full backdrop-blur-md bg-black/30 duration-100`}
          >
            <div
              onClick={(e_) => e_.stopPropagation()}
              className={`absolute drop-shadow-2xl rounded-lg ${
                cur === index + 1 && openModal
                  ? "opacity-1 duration-300 translate-y-0"
                  : "-translate-y-20 opacity-0 duration-150"
              } group`}
            >
              {/* close button */}
              <X
                onClick={() => cur === index + 1 && setOpenModal(false)}
                className="-mr-8 mb-2 ml-auto z-50 cursor-pointer text-white"
              />
              {/* image */}
              <Image
                src={image.src}
                width={318}
                height={350}
                className="min-w-[300px] md:min-w-[500px] min-h-[200px] md:min-h-[350px] bg-black/20 rounded"
                alt=""
              />
            </div>
          </div>

          <div className="absolute right-3 bottom-3 invisible group-hover:visible duration-150">
            <Button className="text-lg bg-violet-500 hover:bg-violet-600 rounded-full border-violet-400 border">
              Use prompt
            </Button>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
