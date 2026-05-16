import { BookingForm } from "@/components/BookingForm";
import { EnvironmentCarousel } from "@/components/EnvironmentCarousel";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const navItems = [
  ["服务", "#services"],
  ["环境", "#environment"],
  ["套餐", "#prices"],
  ["流程", "#process"],
  ["口碑", "#reviews"],
  ["到店", "#contact"],
];

const services = [
  {
    number: "01",
    title: "基础洁净洗护",
    body: "温和清洁、耳道外部护理、指甲修剪、脚底毛处理，适合日常维持。",
  },
  {
    number: "02",
    title: "皮毛深层护理",
    body: "针对干燥、打结、换毛期和敏感皮肤，搭配滋养护毛与低刺激配方。",
  },
  {
    number: "03",
    title: "造型修剪",
    body: "泰迪、比熊、雪纳瑞、长毛猫等常见造型，兼顾好看和日常打理难度。",
  },
  {
    number: "04",
    title: "新手幼宠适应",
    body: "降低吹风、水流和陌生环境带来的压力，帮助幼宠建立温和洗护体验。",
  },
];

const prices = [
  {
    tag: "日常维护",
    title: "洁净洗护",
    price: "¥88",
    featured: false,
    items: ["基础清洁洗吹", "耳部外清洁", "指甲与脚底毛", "护理后状态反馈"],
  },
  {
    tag: "热门选择",
    title: "舒缓养护",
    price: "¥158",
    featured: true,
    items: ["低刺激洗护组合", "护毛素或精华护理", "换毛期梳理", "皮肤与毛发观察记录"],
  },
  {
    tag: "造型升级",
    title: "洗剪造型",
    price: "¥238",
    featured: false,
    items: ["全套洗护流程", "脸部与身体造型", "局部精修", "回家护理建议"],
  },
];

const steps = [
  ["1", "到店评估", "确认性格、皮肤状态、毛结位置和护理禁忌。"],
  ["2", "温和清洁", "用合适水温与洗剂，避开眼耳敏感区域。"],
  ["3", "分段烘干", "根据宠物接受度调整风量和间歇休息。"],
  ["4", "护理反馈", "交付照片、毛发状态和居家护理建议。"],
];

const contacts = [
  ["门店名称", "宝可梦·POKEMON·宠物生活馆（中田南小区店）"],
  ["营业时间", "周一至周日 10:00-20:30"],
  ["门店地址", "上海市宜川路街道陕西北路1620号"],
  ["联系电话", "138-0000-2026"],
  ["温馨提示", "首次到店请携带疫苗记录；皮肤病、术后恢复期请提前说明。"],
];

function SectionHead({
  title,
  body,
  light = false,
}: {
  title: string;
  body: string;
  light?: boolean;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-7 max-[620px]:block">
      <h2 className="m-0 max-w-[600px] text-[clamp(30px,4vw,48px)] font-black leading-[1.12]">
        {title}
      </h2>
      <p
        className={`m-0 max-w-[430px] max-[620px]:mt-3.5 ${
          light ? "text-white/70" : "text-muted"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between gap-6 border-b border-ink/15 bg-cream/90 px-[clamp(18px,4vw,56px)] py-4 backdrop-blur-xl max-[620px]:px-4 max-[620px]:py-3">
        <a
          className="flex min-w-[180px] items-center gap-3 font-extrabold max-[620px]:min-w-0"
          href="#top"
          aria-label="绒光宠物洗护首页"
        >
          <span className="grid h-[38px] w-[38px] place-items-center rounded-lg bg-gradient-to-br from-sage-dark to-blue font-bold text-white shadow-[0_10px_28px_rgba(65,105,91,0.22)]">
            RG
          </span>
          <span>绒光宠物洗护</span>
        </a>
        <nav
          className="flex items-center gap-[clamp(14px,2.5vw,30px)] whitespace-nowrap text-[15px] text-muted max-[960px]:hidden"
          aria-label="主导航"
        >
          {navItems.map(([label, href]) => (
            <a className="transition hover:text-sage-dark" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-coral px-[18px] font-bold text-white shadow-button transition hover:-translate-y-0.5 max-[620px]:min-h-10 max-[620px]:px-3 max-[620px]:text-sm"
          href="#booking"
        >
          预约洗护
        </a>
      </header>

      <main id="top">
        <section
          className="relative grid min-h-[min(820px,86vh)] items-center overflow-hidden bg-[#e7efe9] px-[clamp(18px,4vw,56px)] pb-11 pt-[104px] before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(255,250,241,0.98)_0%,rgba(255,250,241,0.88)_38%,rgba(255,250,241,0.42)_62%,rgba(255,250,241,0.08)_100%),url('/assets/hero-cats-dogs.png')] before:bg-cover before:bg-center max-[960px]:min-h-[820px] max-[960px]:items-start max-[960px]:before:bg-[linear-gradient(180deg,rgba(255,250,241,0.98)_0%,rgba(255,250,241,0.88)_52%,rgba(255,250,241,0.2)_100%),url('/assets/hero-cats-dogs.png')] max-[960px]:before:bg-bottom max-[620px]:min-h-0 max-[620px]:px-4 max-[620px]:pb-8 max-[620px]:pt-[92px]"
          aria-label="绒光宠物洗护首屏"
        >
          <div className="relative mx-auto grid w-[min(1080px,100%)] grid-cols-[minmax(340px,560px)_minmax(340px,420px)] content-center items-center justify-between gap-x-[clamp(28px,5vw,72px)] gap-y-[clamp(18px,3vw,34px)] max-[960px]:grid-cols-1">
            <div className="relative w-[min(620px,100%)]">
              <p className="mb-[18px] inline-flex items-center gap-2.5 text-sm font-extrabold text-sage-dark before:h-0.5 before:w-[34px] before:bg-coral before:content-['']">
                PET GROOMING SALON
              </p>
              <h1 className="mb-5 max-w-[590px] text-[clamp(42px,7vw,82px)] font-black leading-[1.02]">
                把每一次洗护，做成安心的日常。
              </h1>
              <p className="mb-[30px] max-w-[520px] text-[clamp(17px,2vw,20px)] text-[#4d5d58]">
                绒光为猫咪和狗狗提供低压洗护、皮毛护理、造型修剪与基础健康观察。透明流程、独立烘干、预约制服务，让毛孩子干净，也让你放心。
              </p>
              <div className="mb-[34px] flex flex-wrap gap-3.5">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-coral px-[18px] font-bold text-white shadow-button transition hover:-translate-y-0.5"
                  href="#booking"
                >
                  立即预约
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sage-dark/20 bg-white/90 px-[18px] font-bold text-sage-dark transition hover:-translate-y-0.5"
                  href="#prices"
                >
                  查看套餐
                </a>
              </div>
              <div
                className="grid max-w-[560px] grid-cols-3 overflow-hidden rounded-lg border border-sage-dark/15 bg-white/75 shadow-soft max-[620px]:grid-cols-1"
                aria-label="门店数据"
              >
                {[
                  ["1v1", "全程专属护理"],
                  ["35+", "细分毛发方案"],
                  ["98%", "复购满意反馈"],
                ].map(([value, label]) => (
                  <div
                    className="border-r border-ink/15 p-[18px] last:border-r-0 max-[620px]:border-b max-[620px]:border-r-0 max-[620px]:last:border-b-0"
                    key={value}
                  >
                    <strong className="block text-[25px] font-black leading-none text-sage-dark">
                      {value}
                    </strong>
                    <span className="mt-2 block text-[13px] text-muted">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative w-full rounded-lg border border-sage-dark/20 bg-white/75 p-7 shadow-panel backdrop-blur-md max-[960px]:w-[min(560px,100%)] max-[620px]:p-5"
              id="booking"
            >
              <h2 className="mb-1.5 text-[clamp(24px,3vw,34px)] font-black leading-[1.15]">
                快速预约
              </h2>
              <p className="mb-5 text-[15px] text-muted max-[620px]:mb-3.5">
                留下联系方式和宠物情况，我们会尽快确认合适的护理时间。
              </p>
              <BookingForm />
            </div>
          </div>
        </section>

        <section
          className="bg-paper px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,104px)]"
          id="services"
        >
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="按性格和毛发状态定制护理。"
              body="不赶场、不强迫。美容师会先观察宠物状态，再选择合适的水温、手法、洗剂和烘干节奏。"
            />
            <div className="grid grid-cols-4 gap-4 max-[960px]:grid-cols-2 max-[620px]:grid-cols-1">
              {services.map((service) => (
                <article
                  className="flex min-h-[250px] flex-col justify-between rounded-lg border border-ink/15 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
                  key={service.number}
                >
                  <div>
                    <div className="grid h-[46px] w-[46px] place-items-center rounded-lg bg-mint font-black text-sage-dark">
                      {service.number}
                    </div>
                    <h3 className="mb-2.5 mt-[22px] text-[21px] font-black">
                      {service.title}
                    </h3>
                    <p className="m-0 text-[15px] text-muted">{service.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-gradient-to-b from-[#f6fbf8] to-cream px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,104px)]"
          id="environment"
        >
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="真实店内分区，干净、通透，也更安心。"
              body="从接待等候、透明洗护到独立烘干修剪，空间按宠物情绪和护理流程分区，让主人看得见专业，也让宠物少一点紧张。"
            />
            <EnvironmentCarousel />
          </div>
        </section>

        <section
          className="bg-gradient-to-b from-cream to-[#f3f8f5] px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,104px)]"
          id="prices"
        >
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="清晰套餐，按体型和毛量微调。"
              body="以下为基础参考价，到店后会根据体重、毛量、打结程度和宠物配合度确认最终方案。"
            />
            <div className="grid grid-cols-3 gap-[18px] max-[960px]:grid-cols-1">
              {prices.map((item) => (
                <article
                  className={`relative overflow-hidden rounded-lg border bg-white p-7 ${
                    item.featured
                      ? "border-coral/40 shadow-soft"
                      : "border-ink/15"
                  }`}
                  key={item.title}
                >
                  <span className="inline-flex min-h-[30px] items-center rounded-lg bg-mint px-2.5 text-[13px] font-extrabold text-sage-dark">
                    {item.tag}
                  </span>
                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                  <div className="mb-2 mt-[22px] text-[42px] font-black leading-none">
                    {item.price}{" "}
                    <small className="text-base font-semibold text-muted">
                      起
                    </small>
                  </div>
                  <ul className="mt-[22px] list-none p-0">
                    {item.items.map((feature) => (
                      <li
                        className="border-t border-ink/10 py-2.5 text-muted"
                        key={feature}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-charcoal px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,104px)] text-white"
          id="process"
        >
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="让宠物知道，这里不用害怕。"
              body="预约制减少等待和互相干扰，独立护理台与分区烘干让每只宠物都有自己的节奏。"
              light
            />
            <ol className="grid list-none grid-cols-4 gap-3.5 p-0 max-[960px]:grid-cols-2 max-[620px]:grid-cols-1">
              {steps.map(([number, title, body]) => (
                <li
                  className="min-h-[214px] rounded-lg border border-white/15 bg-white/5 p-6"
                  key={number}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#f7c66b] font-black text-charcoal">
                    {number}
                  </span>
                  <h3 className="mb-2.5 mt-[22px] text-xl font-black">
                    {title}
                  </h3>
                  <p className="m-0 text-white/70">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="bg-paper px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,104px)]"
          id="reviews"
        >
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="被反复选择，靠的是细节。"
              body="我们更在意宠物离店后的状态：毛发是否蓬松、情绪是否稳定、主人是否知道下一步怎么护理。"
            />
            <TestimonialsCarousel />
          </div>
        </section>

        <section
          className="bg-cream px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,104px)]"
          id="contact"
        >
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="到店更方便，位置一眼看清。"
              body="门店位于中田南小区附近，靠近新城小学与凤仪东路，预约后按确认时间到店即可。"
            />
            <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] items-start gap-7 max-[960px]:grid-cols-1">
              <figure
                className="m-0 overflow-hidden rounded-lg border border-sage-dark/15 bg-[#f6fbf8] shadow-soft"
                aria-label="门店位置示意地图"
              >
                <div className="aspect-[16/10] w-full">
                  {/* Direct public asset rendering avoids local Next image optimizer issues. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/store-map-ai.png"
                    alt="宝可梦 POKEMON 宠物生活馆中田南小区店，上海市宜川路街道陕西北路1620号位置示意地图"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-sage-dark/10 bg-white/85 px-4 py-3.5 text-sm text-muted max-[620px]:flex-col max-[620px]:items-start">
                  <strong className="text-[15px] text-sage-dark">
                    陕西北路1620号
                  </strong>
                  <span>靠近中田南小区、新城小学与凤仪东路</span>
                </figcaption>
              </figure>

              <div className="rounded-lg border border-ink/15 bg-white p-[30px] shadow-soft">
                <h3 className="text-2xl font-black">门店信息</h3>
                <div className="mt-6 grid gap-[18px]">
                  {contacts.map(([label, value]) => (
                    <div
                      className="grid grid-cols-[96px_1fr] gap-[18px] border-b border-ink/10 pb-4 last:border-b-0 last:pb-0 max-[620px]:grid-cols-1 max-[620px]:gap-1"
                      key={label}
                    >
                      <span className="font-bold text-muted">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal px-[clamp(18px,4vw,56px)] py-6 text-sm text-white/75">
        <div className="mx-auto flex w-[min(1160px,100%)] flex-wrap justify-between gap-4">
          <span>© 2026 绒光宠物洗护</span>
          <span>温柔洗护 | 预约制服务 | 猫狗友好</span>
        </div>
      </footer>
    </>
  );
}
