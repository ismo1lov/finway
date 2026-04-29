import { createContext, useContext, type ReactNode } from "react";

export type Lang = "uz";

const dict = {
  uz: {
    "nav.home": "Asosiy",
    "nav.intro": "Tanishuv",
    "nav.courses": "Kurslarimiz",
    "nav.projects": "Bitiruvchilar",
    "nav.contact": "Aloqa",
    "nav.start": "Ro'yxatdan o'tish",

    "hero.eyebrow": "Professional buxgalteriya o'quv markazi",
    "hero.title.1": "Buxgalteriyani",
    "hero.title.accent": "professional",
    "hero.title.2": "darajada kafolati bilan o'rgan!",
    "hero.subtitle":
      "1300+ o'quvchi. 1000+ ish bilan ta'minlangan. Amaliyotchi buxgalterlar sizni o'qitadi — real bilim, real natija.",
    "hero.cta.primary": "Ro'yxatdan o'tish",
    "hero.cta.secondary": "Kurslarni ko'rish",
    "hero.stat.students": "O'quvchilar",
    "hero.stat.courses": "Kurslar",
    "hero.stat.mentors": "Ekspertlar",
    "hero.stat.rate": "Ishga joylashish",

    "intro.eyebrow": "Tanishuv",
    "intro.title": "Finway bilan tanishing",
    "intro.body":
      "Finway — bu shunchaki o'quv markazi emas, bu o'sish uchun makon. Biz har bir o'quvchining maqsadini tushunib, unga mos yo'lni birga quramiz. Bu yerda nazariya amaliyot bilan, ustoz esa do'st bilan birlashadi.",
    "intro.card.1": "1300+",
    "intro.card.1.desc": "O'quvchilar",
    "intro.card.2": "1000+",
    "intro.card.2.desc": "Ish bilan ta'minlangan",
    "intro.card.3": "70%",
    "intro.card.3.desc": "Ish kafolati",
    "intro.card.4": "500K+",
    "intro.card.4.desc": "O'rtacha daromad",

    "courses.eyebrow": "Bizning kurslar",
    "courses.title": "Maqsadingizga mos kursni tanlang",
    "courses.subtitle": "3 ta kurs — har biri o'z darajasi uchun. Amaliyotchi o'qituvchilar, real loyihalar, real natija.",
    "course.1.title": "Noldan balansgacha",
    "course.1.desc": "Buxgalteriya asoslari va moliyaviy hisobotlarni tayyorlashni o'rganing.",
    "course.2.title": "1C kursi",
    "course.2.desc": "1C dasturida buxgalteriya hisobini yuritish bo'yicha amaliy ko'nikmalar.",
    "course.3.title": "Super glavbux",
    "course.3.desc": "Bosh buxgalterlar uchun soliq optimallashtirish va murakkab hisob-kitoblar.",
    "course.price": "4 000 000 so'm",
    "course.installment": "1 333 000 so'm × 3 oy bo'lib to'lash",
    "course.bonus": "Hozir ro'yxatdan o'tsangiz bonus olasiz",
    "course.next_group": "Keyingi guruh 45 kundan keyin",
    "course.limited": "Guruhda joylar cheklangan",

    "projects.eyebrow": "Bitiruvchilarimiz",
    "projects.title": "Ular allaqachon natijaga erishdi",
    "projects.subtitle": "Real odamlar. Real natijalar. 1000+ o'quvchi ish topgan.",
    "projects.cta": "Ish joyini ko'rish",

    "reviews.eyebrow": "Sharhlar",
    "reviews.title": "O'quvchilarimiz nima deyishadi",
    "review.1.text":
      "Finway menga nafaqat texnik ko'nikmalarni, balki muammolarni hal qilish uslubini ham o'rgatdi. Hozir xalqaro kompaniyada ishlayman.",
    "review.1.role": "Frontend Developer",
    "review.2.text":
      "Mentorlar har doim qo'llab-quvvatlashdi. Loyihalar real va portfoliomga juda yordam berdi.",
    "review.2.role": "UX Designer",
    "review.3.text":
      "Kurs tugagach 2 oy ichida ishga joylashdim. Bu yerda olgan bilim va aloqalar bebaho.",
    "review.3.role": "Data Analyst",

    "contact.eyebrow": "Aloqa",
    "contact.title": "Biz bilan bog'laning",
    "contact.subtitle": "Savollaringiz bormi? Bizga yozing yoki qo'ng'iroq qiling.",
    "contact.button": "Xabar yuborish",
    "contact.form.name": "Ismingiz",
    "contact.form.phone": "Telefon raqamingiz",
    "contact.form.message": "Xabaringiz",
    "contact.form.submit": "Yuborish",
    "contact.info.phone": "Telefon",
    "contact.info.email": "Email",

    "footer.tagline": "Zamonaviy ta'lim — kuchli kelajak.",
    "footer.contact": "BOG'LANISH UCHUN",
    "footer.courses": "Kurslar",
    "footer.menu": "Menyu",
    "footer.social.instagram": "Instagram",
    "footer.social.telegram": "Telegram",
    "footer.rights": "Barcha huquqlar himoyalangan.",
  },
} as const;

type Key = keyof (typeof dict)["uz"];

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "uz",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const t = (k: Key) => dict.uz[k] ?? k;
  return <I18nCtx.Provider value={{ lang: "uz", setLang: () => {}, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
