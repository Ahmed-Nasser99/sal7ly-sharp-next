import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { LocalPhone as LocalPhoneIcon, WhatsApp } from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import arValues from "../../../public/locales/ar/translation.json";

const t = (key) => arValues[key] || key;

const SharpMaintenance = () => {
  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";

  return (
    <>
      <Head>
        <title>صيانة شارب - خدمات الصيانة الموثوقة لأجهزة شارب في مصر</title>
        <meta
          name="description"
          content="خدمات صيانة موثوقة لجميع أجهزة شارب في مصر. نقدم صيانة للثلاجات والتكييفات والغسالات بأيدي خبراء متخصصين. اتصل بنا على 01102941029."
        />
        <meta
          name="keywords"
          content="صيانة شارب, صيانة ثلاجات شارب, صيانة تكييف شارب, صيانة غسالات شارب, رقم صيانة شارب"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/Imgs/Sharp/logoSharp.png"
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
              <ListItem>صيانة ثلاجات شارب | اتصل بنا الآن 01062000763</ListItem>
              <ListItem>صيانة غسالات شارب | اتصل الآن 01062000763</ListItem>
              <ListItem>صيانة شاشات شارب | اتصل الآن 01062000763</ListItem>
              <ListItem>عيوب شاشات شارب | اتصل بنا الآن 01062000763</ListItem>
            </List>
            <Typography variant="body1" className="mt-4 text-xl text-gray-700">
              للحصول على المزيد من المعلومات حول الخدمات المقدمة، يمكنك الاتصال
              بأرقام صيانة شارب الموجودة في المقال.
            </Typography>
          </Box>
        </Container>
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
};

export default SharpMaintenance;
