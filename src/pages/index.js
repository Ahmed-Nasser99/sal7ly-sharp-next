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
import arValues from "../../public/locales/ar/translation.json";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};
export default function MainComponent() {
  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";
  const email = "ahmednasserr86@gmail.com";
  const location = "٢ شارع اليمني - أرض اللواء - حي العجوزة - محافظة الجيزة";

  return (
    <>
      {" "}
      <Head>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/Imgs/Logo.png"
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
          content="خدمات صيانة موثوقة لجميع أجهزة شارب في مصر. نقدم صيانة للثلاجات والتكييفات والغسالات بأيدي خبراء متخصصين. اتصل بنا على 01102941029."
        />
        <meta
          name="keywords"
          content="صيانة شارب, صيانة ثلاجات شارب, صيانة تكييف شارب, صيانة غسالات شارب, رقم صيانة شارب"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar
          logo={logo}
          logoTitle={"صلحلي_sal7ly"}
          PhoneNmberTitle="الخط الساخن للصيانة المنزلية"
          whatsAppTitle="رقم الواتساب للصيانة المنزلية"
        />
        <section className="w-full py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-screen">
          <div className="container mx-auto px-2 md:px-4 grid gap-3 lg:grid-cols-2 xl:grid-cols-2 w-full h-full">
            <Image
              src={homeBackground}
              alt="صيانة جميع الاجهزة الكهربائة"
              width
              height={500}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square bg-gray-400 h-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Typography
                  variant="h1"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
                >
                  {t("main_title")}
                </Typography>
                <Typography
                  variant="body1"
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                >
                  {t("main_description")}
                </Typography>
              </div>
              <div className="flex flex-col justify-center gap-2 sm:flex-row">
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<LocalPhoneIcon className="mx-2" />}
                  component="a"
                  href={`tel:${phoneNumber}`}
                >
                  {t("call_us")}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<WhatsApp className="text-green-500 mx-2" />}
                  component="a"
                  href={`https://wa.me/${phoneNumber}`}
                >
                  {t("whatsapp")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Typography
                  variant="h2"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  {t("our_services")}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-muted-foreground md:text-xl lg:text-base xl:text-xl"
                >
                  {t("services_description")}
                </Typography>
              </div>
            </div>
            <ServicesSwiper />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Typography
                  variant="h2"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  {t("trusted_brands")}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-muted-foreground md:text-xl lg:text-base xl:text-xl"
                >
                  {t("brands_description")}
                </Typography>
              </div>
            </div>
            <BrandsSwiper />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Typography
                  variant="h2"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  {t("customer_feedback")}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-muted-foreground md:text-xl lg:text-base xl:text-xl"
                >
                  {t("feedback_description")}
                </Typography>
              </div>
            </div>
            <TestimonialsSwiper />
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="my-5">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t("contact_us")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[95vw] overflow-hidden">
            <div className="flex justify-center lg:justify-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d693.8995184123253!2d31.17989613369147!3d30.059597478605692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1722352321125!5m2!1sar!2seg"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <LocalPhoneIcon
                    style={{ width: "2rem", height: "2rem" }}
                    className="text-green-500"
                  />
                  <Typography variant="h6" className="text-lg font-bold">
                    {t("contact_us")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-muted-foreground text-center"
                  >
                    <a href={`tel:${phoneNumber}`} className="font-bold">
                      {displayPhoneNumber}
                    </a>
                  </Typography>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <Email
                    style={{ width: "2rem", height: "2rem" }}
                    className="text-[#09c]"
                  />
                  <Typography variant="h6" className="text-lg font-bold">
                    {t("email_us")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-muted-foreground text-center"
                  >
                    <a href={`mailto:${email}`} className="font-bold">
                      {email}
                    </a>
                  </Typography>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <WhatsApp
                    style={{ width: "2rem", height: "2rem" }}
                    className="text-green-500"
                  />
                  <Typography variant="h6" className="text-lg font-bold">
                    {t("whatsapp")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-muted-foreground text-center"
                  >
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      className="font-bold"
                    >
                      {displayPhoneNumber}
                    </a>
                  </Typography>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <LocationCity
                    style={{ width: "2rem", height: "2rem" }}
                    className="text-[#09c]"
                  />
                  <Typography variant="h6" className="text-lg font-bold">
                    {t("our_location")}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-muted-foreground text-center"
                  >
                    <a
                      href={`https://maps.app.goo.gl/t6ogR3DfGoEo459i7`}
                      className="font-bold"
                    >
                      {location}
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <footer className="w-full py-4 bg-gray-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <Typography variant="body2" className="text-center">
              © {new Date().getFullYear()} {t("company_name")}.{" "}
              {t("all_rights_reserved")}.
            </Typography>
          </div>
        </footer>
      </div>
    </>
  );
}
