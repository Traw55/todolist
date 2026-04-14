# 📝 متتبع المهام | Task Tracker

<div align="center">
  <img src="static/task.svg" alt="Task Tracker Logo" width="120" height="120" />
  <p align="center">
    <strong>تطبيق بسيط وأنيق لتتبع مهامك اليومية بكفاءة</strong>
    <br />
    <i>A sleek and efficient task tracking application to manage your daily goals.</i>
  </p>

  [![Svelte](https://img.shields.io/badge/Svelte-4.2.7-ff3e00?logo=svelte&logoColor=white)](https://svelte.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.6-38b2ac?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Skeleton UI](https://img.shields.io/badge/Skeleton_UI-2.10.2-5755ff?logo=skeleton&logoColor=white)](https://www.skeleton.dev/)
  [![PWA](https://img.shields.io/badge/PWA-Ready-success?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
</div>

---

## 🌟 المميزات | Features

- **🇸🇦 دعم كامل للغة العربية (RTL):** واجهة مستخدم مصممة خصيصاً للمستخدم العربي.
- **📅 جدولة المهام:** إمكانية تحديد تاريخ ووقت لكل مهمة مع فرز تلقائي حسب الأولوية الزمنية.
- **🔍 تصفية المهام:** تصفية المهام لعرض "جميع المهام" أو "مهام اليوم" فقط.
- **👋 تحية ديناميكية:** واجهة ترحب بك بعبارات (صباح الخير / مساء الخير) بناءً على الوقت الحالي.
- **💾 حفظ البيانات محلياً:** يتم حفظ مهامك تلقائياً في المتصفح حتى لا تفقدها عند التحديث.
- **📱 تطبيق ويب تقدمي (PWA):** يمكنك تثبيته على هاتفك واستخدامه كأنه تطبيق أصلي.
- **🎨 واجهة عصرية:** مبني باستخدام Skeleton UI و Tailwind CSS لتوفير تجربة مستخدم سلسة وجميلة.
- **⚡ سرعة فائقة:** أداء عالي بفضل استخدام SvelteKit و Vite.

---

## 🛠️ التقنيات المستخدمة | Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Skeleton UI](https://www.skeleton.dev/)
- **Data Persistence:** [Svelte Persisted Store](https://github.com/pablo-abc/svelte-persisted-store)
- **Time Handling:** [Day.js](https://day.js.org/)
- **Tooling:** [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **PWA Support:** [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)

---

## 🚀 البدء في العمل | Getting Started

### المتطلبات الأساسية | Prerequisites

تأكد من تثبيت [Node.js](https://nodejs.org/) في جهازك.

### التثبيت | Installation

1. قم بتحميل المستودع:
   ```bash
   git clone <repository-url>
   cd todolist-1
   ```

2. قم بتثبيت التبعيات:
   ```bash
   npm install
   ```

3. ابدأ تشغيل خادم التطوير:
   ```bash
   npm run dev -- --open
   ```

### بناء نسخة الإنتاج | Building for Production

لإنشاء نسخة جاهزة للنشر:
```bash
npm run build
```

