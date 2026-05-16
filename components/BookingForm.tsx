"use client";

import { useEffect, useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  service: string;
  arrivalTime: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Notice = { type: "success" | "error"; message: string } | null;

const formatDateTimeLocal = (date: Date) => {
  const pad = (value: number) => value.toString().padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const getDefaultArrivalTime = () => {
  const tomorrowMorning = new Date();
  tomorrowMorning.setDate(tomorrowMorning.getDate() + 1);
  tomorrowMorning.setHours(9, 30, 0, 0);

  return formatDateTimeLocal(tomorrowMorning);
};

const initialValues: FormValues = {
  name: "",
  phone: "",
  service: "",
  arrivalTime: "",
  message: "",
};

const createInitialValues = (): FormValues => ({
  ...initialValues,
  arrivalTime: getDefaultArrivalTime(),
});

const phonePattern =
  /^(?:(?:\+?86[-\s]?)?1[3-9]\d{9}|0\d{2,3}[-\s]?\d{7,8})$/;

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "请填写你的称呼。";
  }

  if (!values.phone.trim()) {
    errors.phone = "请填写联系电话。";
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "请输入有效的手机号或座机号码。";
  }

  if (!values.service) {
    errors.service = "请选择服务项目。";
  }

  if (!values.arrivalTime) {
    errors.arrivalTime = "请选择期望到店时间。";
  }

  return errors;
}

export function BookingForm() {
  const [values, setValues] = useState<FormValues>(createInitialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [notice, setNotice] = useState<Notice>(null);

  useEffect(() => {
    if (!notice) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNotice(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [notice]);

  const updateValue = (
    field: keyof FormValues,
    value: FormValues[keyof FormValues],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice({
        type: "error",
        message: "请先完善必填信息，再提交预约。",
      });
      return;
    }

    setNotice({
      type: "success",
      message: "预约信息已记录，我们会尽快与你确认时间。",
    });
    setValues(createInitialValues());
  };

  return (
    <>
      <form className="grid gap-3.5 max-[620px]:gap-2.5" onSubmit={handleSubmit}>
        <label className="grid gap-1.5">
          <span className="sr-only">你的称呼</span>
          <input
            className="min-h-[50px] w-full rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-ink outline-none transition placeholder:text-muted/75 focus:border-sage focus:ring-4 focus:ring-sage/20"
            type="text"
            name="name"
            value={values.name}
            placeholder="你的称呼"
            aria-invalid={Boolean(errors.name)}
            onChange={(event) => updateValue("name", event.target.value)}
          />
          {errors.name && (
            <span className="text-sm font-semibold text-coral">{errors.name}</span>
          )}
        </label>

        <label className="grid gap-1.5">
          <span className="sr-only">联系电话</span>
          <input
            className="min-h-[50px] w-full rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-ink outline-none transition placeholder:text-muted/75 focus:border-sage focus:ring-4 focus:ring-sage/20"
            type="tel"
            name="phone"
            value={values.phone}
            placeholder="联系电话"
            aria-invalid={Boolean(errors.phone)}
            onChange={(event) => updateValue("phone", event.target.value)}
          />
          {errors.phone && (
            <span className="text-sm font-semibold text-coral">
              {errors.phone}
            </span>
          )}
        </label>

        <label className="grid gap-1.5">
          <span className="sr-only">选择服务</span>
          <div className="relative">
            <select
              className="min-h-[50px] w-full appearance-none rounded-lg border border-ink/15 bg-white px-3.5 py-3 pr-14 text-ink outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/20"
              name="service"
              value={values.service}
              aria-invalid={Boolean(errors.service)}
              onChange={(event) => updateValue("service", event.target.value)}
            >
              <option value="">选择服务项目</option>
              <option>洁净洗护</option>
              <option>舒缓养护</option>
              <option>洗剪造型</option>
              <option>幼宠适应护理</option>
            </select>
            <span
              className="pointer-events-none absolute right-5 top-1/2 h-3 w-3 -translate-y-[60%] rotate-45 border-b-2 border-r-2 border-sage-dark"
              aria-hidden="true"
            />
          </div>
          {errors.service && (
            <span className="text-sm font-semibold text-coral">
              {errors.service}
            </span>
          )}
        </label>

        <label className="grid gap-1.5">
          <span className="sr-only">期望到店时间</span>
          <input
            className="min-h-[50px] w-full rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-ink outline-none transition placeholder:text-muted/75 focus:border-sage focus:ring-4 focus:ring-sage/20"
            type="datetime-local"
            name="arrivalTime"
            value={values.arrivalTime}
            aria-label="期望到店时间"
            aria-invalid={Boolean(errors.arrivalTime)}
            suppressHydrationWarning
            onChange={(event) => updateValue("arrivalTime", event.target.value)}
          />
          {errors.arrivalTime && (
            <span className="text-sm font-semibold text-coral">
              {errors.arrivalTime}
            </span>
          )}
        </label>

        <label className="grid gap-1.5">
          <span className="sr-only">预约备注</span>
          <textarea
            className="min-h-[92px] w-full resize-y rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-ink outline-none transition placeholder:text-muted/75 focus:border-sage focus:ring-4 focus:ring-sage/20 max-[620px]:min-h-[78px]"
            name="message"
            value={values.message}
            placeholder="宠物品种、体重、毛发情况或其他备注"
            onChange={(event) => updateValue("message", event.target.value)}
          />
        </label>

        <button
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-coral px-[18px] font-bold text-white shadow-button transition hover:-translate-y-0.5"
          type="submit"
        >
          提交预约信息
        </button>
      </form>

      {notice && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-charcoal/30 px-4 backdrop-blur-sm">
          <div
            className="w-full max-w-sm rounded-lg border border-white/70 bg-white p-6 text-ink shadow-panel"
            role="dialog"
            aria-modal="true"
            aria-live="polite"
            aria-label={notice.type === "success" ? "预约成功" : "预约失败"}
          >
            <div
              className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg font-black text-white ${
                notice.type === "success" ? "bg-sage-dark" : "bg-coral"
              }`}
            >
              {notice.type === "success" ? "✓" : "!"}
            </div>
            <h3 className="mb-2 text-2xl font-black">
              {notice.type === "success" ? "预约已收到" : "信息还不完整"}
            </h3>
            <p className="mb-5 text-muted">{notice.message}</p>
            <button
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-charcoal px-4 font-bold text-white transition hover:-translate-y-0.5"
              type="button"
              onClick={() => setNotice(null)}
            >
              知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
}
