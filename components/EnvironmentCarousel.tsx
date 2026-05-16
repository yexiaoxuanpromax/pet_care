"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/environment-reception.png",
    alt: "高端宠物洗护店接待等候区，木质前台、产品陈列和玻璃洗护间",
    title: "接待与等候区",
    body: "临街采光、舒适等候座与护理产品陈列，入店第一眼就能看见整洁的洗护动线。",
  },
  {
    src: "/assets/environment-wash.png",
    alt: "高端宠物洗护店透明洗护区，不锈钢浴缸、花洒、毛巾与玻璃隔断",
    title: "透明洗护区",
    body: "防滑湿区、专业浴缸和独立喷淋设备，让清洁流程更稳定，也便于主人理解护理细节。",
  },
  {
    src: "/assets/environment-grooming.png",
    alt: "高端宠物洗护店烘干修剪区，升降美容台、低噪烘干箱和整齐工具墙",
    title: "烘干修剪区",
    body: "低噪烘干、升降美容台和分区工具收纳，适合精修造型与长毛宠物护理。",
  },
];

export function EnvironmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-ink/15 bg-white shadow-soft"
      aria-label="店内环境轮播图"
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <article
            className="relative aspect-[16/8.4] min-w-full overflow-hidden bg-[#dfeae5] max-[960px]:aspect-[4/3]"
            key={slide.title}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1160px"
              className="object-cover"
              priority={slide.title === "接待与等候区"}
            />
            <div className="absolute inset-x-6 bottom-6 w-[min(430px,calc(100%-48px))] rounded-lg bg-charcoal/75 p-5 text-white backdrop-blur-md max-[620px]:inset-x-3.5 max-[620px]:bottom-[82px] max-[620px]:w-[calc(100%-28px)] max-[620px]:p-3.5">
              <h3 className="mb-1.5 text-[22px] font-bold leading-tight max-[620px]:text-lg">
                {slide.title}
              </h3>
              <p className="m-0 text-sm text-white/80">{slide.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div
        className="absolute bottom-[18px] right-[18px] z-10 flex items-center gap-2.5 max-[620px]:inset-x-3.5 max-[620px]:bottom-3.5 max-[620px]:justify-between"
        aria-label="切换店内环境图片"
      >
        <button
          className="grid h-[42px] w-[42px] place-items-center rounded-lg bg-white/90 text-2xl leading-none text-ink transition hover:-translate-y-0.5 hover:bg-white"
          type="button"
          aria-label="上一张"
          onClick={() => showSlide(activeIndex - 1)}
        >
          ‹
        </button>
        <div
          className="flex gap-2 rounded-lg bg-white/90 p-3"
          role="tablist"
          aria-label="店内环境图片分页"
        >
          {slides.map((slide, index) => (
            <button
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-coral" : "w-2.5 bg-ink/25"
              }`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`显示${slide.title}`}
              key={slide.title}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
        <button
          className="grid h-[42px] w-[42px] place-items-center rounded-lg bg-white/90 text-2xl leading-none text-ink transition hover:-translate-y-0.5 hover:bg-white"
          type="button"
          aria-label="下一张"
          onClick={() => showSlide(activeIndex + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
