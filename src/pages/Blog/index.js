import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Typography, Box, Button } from "@mui/material";
import { LocalPhone as LocalPhoneIcon, WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import arValues from "../../../public/locales/ar/translation.json";
const blogPosts = [
  {
    slug: "sharp-washing-machine-maintenance",
    title: "دليل صيانة غسالات شارب الشامل: حلول مبتكرة ونصائح خبراء",
    content: `
      <section class="intro">
        <img src="/assets/Imgs/Sharp/washing-machine-diagram.jpg" alt="مخطط غسالة شارب مع أجزاء رئيسية" class="float-right">
        <p>تُعتبر غسالات شارب من الأجهزة المنزلية عالية الكفاءة، ولكنها تحتاج لصيانة دورية لتجنب 73% من الأعطال الشائعة حسب إحصاءات مراكز الصيانة المعتمدة.</p>
      </section>

      <h2>الأسرار الخفية لطول عمر الغسالة</h2>
      <div class="video-embed">
        <iframe src="https://youtube.com/embed/example" title="فيديو صيانة غسالات شارب"></iframe>
      </div>

      <h3>جدول صيانة ربع سنوي</h3>
      <table class="maintenance-schedule">
        <tr><th>المهمة</th><th>الطريقة</th><th>الأدوات</th></tr>
        <tr><td>تنظيف الخرطوم</td><td>استخدم فرشاة ناعمة مع خل التفاح</td><td>قفازات مطاطية</td></tr>
        <tr><td>فحص المحرك</td><td>قياس الاهتزازات بجهاز قياس خاص</td><td>Vibration meter</td></tr>
      </table>

      <h3>أعطال نموذج NE-FD810PS-W</h3>
      <div class="comparison-chart">
        <div class="issue">
          <h4>كود الخطأ E3</h4>
          <p>الحل: إعادة ضبط مستشعر الحمل الزائد</p>
          <button class="cta-button" onclick="showModal('scheduleForm')">احجز فحصًا فنيًا</button>
        </div>
      </div>

      <section class="expert-tip">
        <h2>نصيحة الخبير</h2>
        <p>"الغسيل عند 40°C يوفر 35% من الطاقة مقارنة بـ 60°C" - مهندس صيانة معتمد</p>
      </section>

      <div class="faq-section">
        <h3>الأسئلة الشائعة</h3>
        <details>
          <summary>كم مرة يحتاج الفلتر للتنظيف؟</summary>
          <p>كل 30 دورة غسيل مع استخدام منقي ماء</p>
        </details>
      </div>

      <div class="related-posts">
        <a href="/blog/sharp-warranty-policies">سياسة الضمان الرسمية من شارب</a>
        <a href="/blog/energy-saving-tips">توفير 40% في فواتير الكهرباء</a>
      </div>
    `,
    image: "/assets/Imgs/Sharp/sharp-washing-machine-3d.jpg",
    metaDescription:
      "اكتشف أسرار صيانة غسالات شارب الدقيقة مع جداول زمنية مفصلة وفيديوهات إرشادية من خبراء معتمدين. حلول فورية لأعطال E3 وأخطاء التشغيل الشائعة.",
    structuredData: {
      "@type": "HowTo",
      name: "صيانة غسالة شارب",
      step: [
        {
          name: "تنظيف الفلتر",
          text: "افك الجزء السفلي باستخدام مفك نجمي",
          image: "/assets/Imgs/Sharp/filter-cleaning.jpg",
        },
      ],
    },
  },
];

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};
export default function BlogPost() {
  //   const router = useRouter();
  //   const { slug } = router.query;
  //   const post = blogPosts.find((p) => p.slug === slug);

  //   if (!post) {
  //     return <div>Post not found</div>;
  //   }

  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";
  return (
    <>
      <section
        title="صيانة أعطال شارب فى مصر"
        className="w-full py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-screen"
      >
        <Container className="relative max-w-full !w-[95%] mx-auto h-full">
          <Box className="relative w-full h-full mx-auto aspect-video overflow-hidden rounded-xl lg:aspect-square bg-gray-400">
            <Image
              src="/assets/Imgs/Sharp/sharpBg.jpg"
              alt="صيانة شارب"
              layout="fill"
              className="object-cover"
            />
            <Box className="absolute inset-0 bg-[#0003]" />
          </Box>

          <Box className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4">
            <Typography
              variant="h1"
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
              style={{ letterSpacing: "2px" }}
            >
              صيانة أعطال شارب فى مصر
            </Typography>
            <Typography
              variant="body1"
              className="text-muted-foreground md:text-xl"
            >
              نقدم خدمات صيانة متميزة لجميع أجهزة شارب، بما في ذلك الثلاجات
              والتكييفات والغسالات. فريقنا من الخبراء مستعد لحل جميع مشاكل
              أجهزتكم بكفاءة عالية.
            </Typography>
            <Box className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button
                variant="contained"
                color="success"
                startIcon={<LocalPhoneIcon />}
                component="a"
                href={`tel:${phoneNumber}`}
              >
                {t("call_us")}
              </Button>
              <Button
                variant="outlined"
                startIcon={<WhatsApp className="text-green-500" />}
                component="a"
                href={`https://wa.me/${phoneNumber}`}
              >
                {t("whatsapp")}
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
      <Container maxWidth="lg" className="py-12">
        {blogPosts?.map((post) => (
          <>
            <Typography variant="h1" className="text-4xl font-bold mb-8">
              {post?.title}
            </Typography>
            <img
              src={post?.image}
              alt={post?.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <Box
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            />
          </>
        ))}
      </Container>
    </>
  );
}
