import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import { LocalPhone as LocalPhoneIcon, WhatsApp } from "@mui/icons-material";
import { tabsClasses } from "@mui/material/Tabs";
import Image from "next/image";
import arValues from "../../../public/locales/ar/translation.json";
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
      {/* <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box> */}
      <Container maxWidth="lg" className="py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {blogPosts?.map((post) => (
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post?.image}
                    alt={post?.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      <Box
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                      />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </>
          ))}
        </div>
      </Container>
    </>
  );
}
