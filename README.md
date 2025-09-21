Bu proje, Next.js 15 App Router kullanılarak geliştirilmiş modern bir web uygulamasıdır. Next.js'in son sürümü ile oluşturulmuş, performans ve geliştirici deneyimi odaklı bir yapıya sahiptir.

Proje Klasör Yapısı;

rc/app/ <br>
├── layout.tsx # Tüm sayfalar için temel düzen (layout) <br>
├── page.tsx # Kök sayfa <br>
├── globals.css # Global stil dosyası <br>
└── (routes)/ # Sayfa gruplandırma dizini <br>

Teknoloji Yığını
-Framework: Next.js 15 (App Router)
-Stil Yönetimi: Tailwind CSS v4
-Programlama Dili: TypeScript
-Rendering: Server-Side Rendering (SSR)
-Slider Yapısı: SwiperJS

Kurulum ve Çalıştırma
Gereksinimler

-Node.js 18+
-npm veya yarn

Proje Kurulumu

Tarayıcıda Görüntüleme

-Projeyi http://localhost:3000 adresinde açarak görüntüleyebilirsiniz.

Sayfa Düzenleme

-app/page.tsx dosyasını düzenleyerek sayfayı değiştirebilirsiniz. Dosya üzerindeki değişiklikler otomatik olarak yansıtılır.

-Font Optimizasyonu

Bu proje, `next/font` kullanarak Geist font ailesini otomatik olarak optimize eder.

-Icon

Iconlar için gemiş bir icon ağı bulunan React-icons icon kutuphanesı kullanılmıştır.

-Responsive Mobil Menu için hamburger-react kutuphanesi kullanıldı.

🚢 Vercel'de Deployment
Next.js uygulamanızı en kolay şekilde Vercel Platformu üzerinden deploy edebilirsiniz.

Vercel Deploy Link : "https://codezone-rapkology-project.vercel.app/tr"

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
