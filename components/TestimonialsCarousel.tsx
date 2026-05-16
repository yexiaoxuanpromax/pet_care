"use client";

import { useEffect, useMemo, useState } from "react";

const testimonials = [
  {
    quote:
      "我家狗以前一进洗护店就发抖，这次美容师一直给它暂停休息，回家后状态很松弛，还主动去喝水睡觉。",
    reviewer: "柴犬栗子家长",
    pet: "4岁柴犬",
    tag: "低压洗护",
  },
  {
    quote:
      "长毛猫打结处理得很仔细，没有硬拉。美容师还标出了容易复发的位置，回家梳毛终于有方向了。",
    reviewer: "布偶奶糖家长",
    pet: "2岁布偶猫",
    tag: "长毛护理",
  },
  {
    quote:
      "第一次带幼犬来洗澡，工作人员会先让它闻工具、适应水声，全程都很温柔。现在它对吹风机没那么抗拒了。",
    reviewer: "柯基团子家长",
    pet: "7个月柯基",
    tag: "幼宠适应",
  },
  {
    quote:
      "之前做造型总担心剪太短，这次会先沟通脸型、毛量和日常打理习惯，修完清爽但不突兀，很适合夏天。",
    reviewer: "比熊桃桃家长",
    pet: "3岁比熊",
    tag: "造型修剪",
  },
  {
    quote:
      "皮肤敏感的猫洗完没有泛红，回访也问得很细。护理记录里写了用的产品和注意事项，这点很让人安心。",
    reviewer: "英短可乐家长",
    pet: "5岁英短",
    tag: "敏感皮肤",
  },
  {
    quote:
      "接送前后都会发照片，耳朵、脚底和指甲都处理得干净。价格透明，额外项目会先确认，不会到店才加价。",
    reviewer: "金毛年糕家长",
    pet: "6岁金毛",
    tag: "透明服务",
  },
];

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];
  const previewTestimonials = useMemo(
    () =>
      [1, 2].map(
        (offset) => testimonials[(activeIndex + offset) % testimonials.length],
      ),
    [activeIndex],
  );

  const showTestimonial = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-ink/15 bg-white shadow-soft">
      <div className="grid grid-cols-[1.15fr_0.85fr] gap-0 max-[960px]:grid-cols-1">
        <article className="relative min-h-[390px] overflow-hidden bg-[#f4faf7] p-[clamp(24px,4vw,42px)] max-[620px]:min-h-[440px]">
          <div className="absolute right-8 top-8 rounded-lg bg-white/80 px-3 py-2 text-sm font-extrabold text-sage-dark">
            {activeTestimonial.tag}
          </div>
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                className="flex min-w-full flex-col justify-between pr-12 max-[620px]:pr-0"
                key={testimonial.reviewer}
              >
                <p className="m-0 max-w-[660px] pt-12 text-[clamp(24px,3.2vw,38px)] font-extrabold leading-[1.22] text-muted max-[620px]:pt-14">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8">
                  <div className="text-xl font-black text-sage-dark">
                    {testimonial.reviewer}
                  </div>
                  <div className="mt-1 text-sm font-bold text-muted">
                    {testimonial.pet}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="flex flex-col justify-between border-l border-ink/10 bg-white p-7 max-[960px]:border-l-0 max-[960px]:border-t max-[620px]:p-5">
          <div className="grid gap-4">
            {previewTestimonials.map((testimonial) => (
              <button
                className="rounded-lg border border-ink/10 bg-paper p-5 text-left transition hover:-translate-y-0.5 hover:border-sage-dark/30 hover:bg-[#f6fbf8]"
                type="button"
                key={testimonial.reviewer}
                onClick={() =>
                  showTestimonial(
                    testimonials.findIndex(
                      (item) => item.reviewer === testimonial.reviewer,
                    ),
                  )
                }
              >
                <span className="mb-3 inline-flex min-h-[28px] items-center rounded-lg bg-mint px-2.5 text-xs font-extrabold text-sage-dark">
                  {testimonial.tag}
                </span>
                <p className="m-0 line-clamp-3 text-[15px] leading-relaxed text-muted">
                  {testimonial.quote}
                </p>
                <div className="mt-4 font-extrabold text-ink">
                  {testimonial.reviewer}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between gap-4">
            <div className="flex gap-2" aria-label="客户评价分页">
              {testimonials.map((testimonial, index) => (
                <button
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-7 bg-coral" : "w-2.5 bg-ink/25"
                  }`}
                  type="button"
                  aria-label={`显示${testimonial.reviewer}的评价`}
                  aria-current={activeIndex === index}
                  key={testimonial.reviewer}
                  onClick={() => showTestimonial(index)}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className="grid h-[42px] w-[42px] place-items-center rounded-lg border border-ink/10 bg-white text-2xl leading-none text-ink transition hover:-translate-y-0.5 hover:bg-paper"
                type="button"
                aria-label="上一条评价"
                onClick={() => showTestimonial(activeIndex - 1)}
              >
                ‹
              </button>
              <button
                className="grid h-[42px] w-[42px] place-items-center rounded-lg border border-ink/10 bg-white text-2xl leading-none text-ink transition hover:-translate-y-0.5 hover:bg-paper"
                type="button"
                aria-label="下一条评价"
                onClick={() => showTestimonial(activeIndex + 1)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
