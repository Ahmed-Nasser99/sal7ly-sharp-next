import React from "react";
import Image from "next/image";
import homeBackground from "../../public/assets/Imgs/appliancesGroupHomeBackground.png";
import logo from "../../public/assets/Imgs/Logo.png";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  CardMedia,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import {
  LocalPhone as LocalPhoneIcon,
  Email,
  WhatsApp,
  Phone,
  LocationCity,
  Star,
} from "@mui/icons-material";
import { brandData } from "../components/Brands";
import { servicesData } from "../components/Services";
import { testimonialsData } from "../components/Testimonials";
import BrandsSwiper from "@/components/BrandsSwiper";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import ServicesSwiper from "@/components/ServicesSwiper";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import arValues from "../../public/locales/ar/translation.json";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};
export default function MainComponent() {
  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";

  return (
    <>
      {" "}
      <Head>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/Imgs/Sharp/logoSharp.png"
          width="30"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="-PvRBDpzOv6C3TyToejrkmpSg-q6TN2J8yo7ofEE2A0"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Arabic" />
        <title>صيانة شارب - خدمات الصيانة الموثوقة لأجهزة شارب في مصر</title>
        <meta
          name="description"
          content="خدمات صيانة موثوقة لجميع أجهزة شارب في مصر. نقدم صيانة للثلاجات والتكييفات والغسالات بأيدي خبراء متخصصين. اتصل بنا على 19319."
        />
        <meta
          name="keywords"
          content="صيانة شارب, صيانة ثلاجات شارب, صيانة تكييف شارب, صيانة غسالات شارب, رقم صيانة شارب"
        />
      </Head>
      <Navbar
        logo="/assets/Imgs/Sharp/logoSharp.png"
        logoTitle="صيانة شارب"
        PhoneNmberTitle="رقم صيانة شارب"
        whatsAppTitle="هاتف صيانة شارب"
      />
      <section className="w-full py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-screen">
        <Container className="relative mx-auto h-full">
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
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto">
        <Container className="grid max-w-7xl mx-auto gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:items-start my-3">
          <Box className="lg:pr-4">
            <Box className="lg:max-w-lg">
              <Typography
                variant="h6"
                color="primary"
                className="font-semibold"
              >
                صيانة شارب
              </Typography>
              <Typography
                variant="h2"
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                خدمة عملاء شارب
              </Typography>
              <Typography
                variant="body1"
                className="mt-6 text-xl text-gray-700"
              >
                خدمة عملاء شارب متوفرة على مدار 24 ساعة لتلقي بلاغات الأعطال
                ولتقديم خدمة متميزة لصيانة تكييف شارب بالضمان المعتمد.
              </Typography>
              <List className="mt-6 text-xl text-gray-700 list-disc list-inside">
                <ListItem>توفير قطع غيار أصلية بضمان لمدة 12 شهر.</ListItem>
                <ListItem>
                  أسعار تنافسية وخصم 20% على قطع الغيار الأصلية.
                </ListItem>
                <ListItem>
                  خدمات فورية لتركيب وصيانة تكييفات شارب بالضمان المعتمد.
                </ListItem>
              </List>
              <Typography
                variant="body1"
                className="mt-6 text-xl text-gray-700"
              >
                رقم توكيل صيانة شارب العربي 01062000763 الخط الساخن المباشر.
              </Typography>
            </Box>
          </Box>

          <Box className="lg:pr-4 lg:max-w-lg">
            <Typography
              variant="body1"
              className="text-base leading-7 text-gray-700"
            >
              <strong>الخدمات:</strong>
            </Typography>
            <List className="mt-4 text-xl text-gray-700 list-disc list-inside">
              <ListItem>صيانة تكييف شارب</ListItem>
              <ListItem>صيانة ثلاجات شارب | اتصل بنا الآن 01102941029</ListItem>
              <ListItem>صيانة غسالات شارب | اتصل الآن 01102941029</ListItem>
              <ListItem>صيانة شاشات شارب | اتصل الآن 01102941029</ListItem>
              <ListItem>عيوب شاشات شارب | اتصل بنا الآن 01102941029</ListItem>
            </List>
            <Typography variant="body1" className="mt-4 text-xl text-gray-700">
              للحصول على المزيد من المعلومات حول الخدمات المقدمة، يمكنك الاتصال
              بأرقام صيانة شارب الموجودة في المقال.
            </Typography>
          </Box>
        </Container>
      </section>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto">
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: "#ff0000" }}>
            <a style={{ color: "#ff0000" }} href={`tel:${phoneNumber}`}>
              صيانة شارب
            </a>{" "}
            العربي الخط الساخن{" "}
            <span style={{ fontFamily: "arial, helvetica, sans-serif" }}>
              19069 sharp egypt
            </span>
          </span>
        </h1>
        <p style={{ textAlign: "center" }}>
          لدينا يمكنكم الحصول علي افضل خدمات الصيانة المنزلية لغسالات شارب بقطع
          الغيار الاصلية وبشهادة ضمان معتمدة من مركز صيانة شارب للغسالات المعتمد
          في مصر علي رقم خدمة عملاء غسالات شارب مصر
          <br />
          نوفر لكم الحلول التقنية و قطع الغيار الاصلية ونساعدكم في اتمام الصيانة
          اللازمة لأجهزتكم المنزلية في الحدود الامنة التي تحافظ علي الكفاءة
          المعتادة لغسالات الملابس والاطباق شارب
          <br />
          وايضا متوسط العمر الافتراضي
          <br />
          نقدم لكم خدمة مريحة تجمع بين الجودة والسرعة والاسعار المحددة و ضمان
          مابعد الاصلاح ونجنبكم التجارب السيئة التي تهدر الوقت والمال:
        </p>
        <h3 style={{ textAlign: "center" }}>
          &nbsp;!اهم النصائح&nbsp; من
          <span style={{ color: "#ff0000" }}>
            <a style={{ color: "#ff0000" }} href={`tel:${phoneNumber}`}>
              {" "}
              رقم مركز صيانة غسالات شارب
            </a>
          </span>{" "}
          للحفاظ علي غسالات شارب
        </h3>
        <p style={{ textAlign: "center" }}>
          الغسالة الكهربائية من الاجهزة التي لا يمكن ان يخلو المنزل منها ، فهي
          الحل الذي انقذ السيدات من مشقة غسيل الملابس ؛ و لكن&nbsp;اعطال
          الغسالات&nbsp;واردة الحدوث بشكل كبير مع استخدامنا الشبه يومي لها ، فلا
          يوجد اسهل من القاء الملابس المتسخة بها و تشغيلها ، و هي ستقوم باللازم
        </p>
        <p style={{ textAlign: "center" }}>
          ارقام توكيل شارب للغسالات بالقاهرة ،توكيل غسالات شارب في مصر،مركز
          صيانة غسالات شارب بالجيزة ،
          <span style={{ color: "#800000" }}>خدمة عملاء غسالات شارب </span>
          بالاسكندرية ،ارقام توكيل غسالات شارب البحيرة،رقم صيانة غسالات القاهرة
          – توكيل اصلاح غسالات شارب بالجيزة – القليوبية – مركز صيانة غسالات شارب
          المنصورة – الشرقية – المنوفية – الفيوم – توكيل غسالات شارب دمياط –
          البحيرة – مركز صيانة غسالات شارب بالاسكندرية بكفر الدوار – بنها – شبرا
          الخيمة – امبابة – مركز خدمة غسالات شارب في طنطا – دمنهور – كفر الشيخ –
          المحلة – بورسعيد – الاسماعيلية – صيانة شارب للغسالات بالسويس – الوادي
          الجديد – مدينة السادات – مركز صيانة شارب للغسالات باسيوط – سوهاج –
          المنيا – قنا –رقم شارب المختصر لصيانة الغسالات الاقصر – اسوان – بني
          سويف – رقم صيانة شارب المختصر بني مزار – مغاغة – العين السخنة – مركز
          صيانة الساحل الشمالي – رقم تليفون مركز صيانه شارب بمرسي مطروح – شبين
          القناطر – ابوحمص – ارقام توكيل شارب بايتاي البارود – دسوق – مركز اشمون
          – مركز الشهداء – شركة صيانة غسالات شارب في شبين الكوم – الباجور –
          دكرنس – رقم صيانة غسالات شارب في ميت غمر – شربين – طلخا – السنبلاوين –
          فاقوس – توكيل شارب الزقازيق – منيا القمح – بلبيس – الحوامدية – العياط
          – البدرشين – مدينة العاشر من رمضان – البحر الاحمر – مركز صيانة شارب
          بكفر الزيات –
        </p>
      </section>
      <main className="bg-gray-50 py-16 md:py-24">
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            component="h1"
            className="text-4xl font-bold text-center mb-8"
          >
            صيانة أعطال شارب فى مصر
          </Typography>

          <Box className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              أفضل خدمات صيانة شارب في مصر
            </Typography>
            <Typography variant="body1" className="text-right mb-4">
              نقدم خدمات صيانة متميزة لجميع أجهزة شارب، بما في ذلك الثلاجات
              والتكييفات والغسالات. فريقنا من الخبراء مستعد لحل جميع مشاكل
              أجهزتكم بكفاءة عالية.
            </Typography>
          </Box>

          <Box className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              خدماتنا
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="صيانة شارب ثلاجات"
                  secondary="إصلاح جميع أنواع الأعطال في ثلاجات شارب"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="صيانة شارب تكييف"
                  secondary="صيانة وإصلاح تكييفات شارب بجميع أنواعها"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="صيانة شارب غسالات"
                  secondary="حلول متكاملة لجميع مشاكل غسالات شارب"
                />
              </ListItem>
            </List>
          </Box>

          <Box className="bg-white shadow-lg rounded-lg p-8">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              تواصل معنا
            </Typography>
            <Typography variant="body1" className="mb-2">
              رقم الخط الساخن:{" "}
              <a
                href={`tel:+201102941029`}
                title={"رقم صيانة شارب"}
                className="text-blue-600 hover:underline"
              >
                19319
              </a>
            </Typography>
            <Typography variant="body1" className="mb-2">
              رقم صيانة شارب:{" "}
              <a
                href={`tel:+201102941029`}
                title={"رقم صيانة شارب"}
                className="text-blue-600 hover:underline"
              >
                {displayPhoneNumber}
              </a>
            </Typography>
          </Box>
        </Container>
      </main>
    </>
  );
}
