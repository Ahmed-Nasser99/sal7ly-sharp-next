import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Typography, Box } from "@mui/material";

const blogPosts = [
  {
    slug: "sharp-washing-machine-maintenance",
    title: "صيانة غسالات شارب: دليل شامل للحفاظ على غسالتك",
    content: `
      <p>صيانة غسالات شارب تتطلب اتباع بعض النصائح البسيطة لتجنب الأعطال الشائعة. في هذه المقالة، سنقدم لك دليلًا شاملًا للحفاظ على غسالتك.</p>
      <h2>نصائح لصيانة غسالات شارب</h2>
      <ul>
        <li>تجنب زيادة الحمولة عن الحد المسموح.</li>
        <li>تنظيف الفلتر بانتظام.</li>
        <li>استخدام المنظفات المناسبة.</li>
      </ul>
    `,
    image: "/assets/Imgs/Sharp/sharpBg.jpg",
  },
  {
    slug: "sharp-refrigerator-maintenance",
    title: "صيانة ثلاجات شارب: كيفية حل الأعطال الشائعة",
    content: `
      <p>صيانة ثلاجات شارب تساعد في الحفاظ على أدائها المثالي. تعرف على كيفية حل الأعطال الشائعة في هذه المقالة.</p>
      <h2>أعطال شائعة في ثلاجات شارب</h2>
      <ul>
        <li>تسريب الماء.</li>
        <li>ارتفاع درجة الحرارة.</li>
        <li>ضوضاء غير طبيعية.</li>
      </ul>
    `,
    image: "/assets/Imgs/Sharp/sharpBg.jpg",
  },
];

export default function BlogPost() {
  //   const router = useRouter();
  //   const { slug } = router.query;
  //   const post = blogPosts.find((p) => p.slug === slug);

  //   if (!post) {
  //     return <div>Post not found</div>;
  //   }

  return (
    <>
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
