"use client";

import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const items = [
  {
    id: 1,
    image: "/images/pic1.png",
    title: "LV Rugby Polo",
    bgColor: "bg-[#e3e3db]",
  },
  {
    id: 2,
    image: "/images/pic2.png",
    title: "Gucci Rugby Polo",
    bgColor: "bg-[#ecede8]",
  },
  {
    id: 3,
    image: "/images/pic3.png",
    title: "Burberry Polo",
    bgColor: "bg-[#f3f3ef]",
  },
  {
    id: 4,
    image: "/images/pic4.png",
    title: "Prada Rugby",
    bgColor: "bg-[#ecede8]",
  },
  {
    id: 5,
    image: "/images/pic5.png",
    title: "Hermès Polo",
    bgColor: "bg-[#e3e3db]",
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => prevSlide(),
    onSwipedRight: () => nextSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true, // also allows dragging on desktop
  });

  return (
    <div
      {...handlers}
      className="relative w-full max-w-6xl mx-auto px-4 touch-pan-y"
    >
      {/* Buttons */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={prevSlide}
          className="bg-white border rounded-full p-2 sm:p-3 shadow hover:bg-gray-100"
        >
          ‹
        </button>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={nextSlide}
          className="bg-white border rounded-full p-2 sm:p-3 shadow hover:bg-gray-100"
        >
          ›
        </button>
      </div>

      {/* Carousel Track */}
      <div className="relative flex items-center justify-center h-[400px] sm:h-[500px]">
        {items.map((item, index) => {
          const position = (index - currentIndex + items.length) % items.length;

          const offset = {
            0: "z-30 scale-100 translate-y-0",
            1: "z-20 scale-95 -translate-y-2 sm:-translate-y-4 -translate-x-16 sm:-translate-x-32",
            2: "z-10 scale-90 -translate-y-4 sm:-translate-y-8 -translate-x-32 sm:-translate-x-64",
            [items.length - 1]:
              "z-20 scale-95 -translate-y-2 sm:-translate-y-4 translate-x-16 sm:translate-x-32",
            [items.length - 2]:
              "z-10 scale-90 -translate-y-4 sm:-translate-y-8 translate-x-32 sm:translate-x-64",
          };

          return (
            <div
              key={item.id}
              className={`absolute transition-all duration-700 ease-in-out transform ${
                offset[position] || "opacity-0 scale-75"
              }`}
            >
              <div
                className={`w-[260px] sm:w-[400px] md:w-[500px] lg:w-[580px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[480px] ${item.bgColor} rounded-2xl sm:rounded-3xl shadow-xl flex flex-col items-center justify-center`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
                />
                <p className="text-center mt-4 font-semibold text-base sm:text-lg">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
