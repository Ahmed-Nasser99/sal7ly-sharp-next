import React from "react";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import homeBackground from "../../../public/assets/Imgs/appliancesGroupHomeBackground.png";
import logo from "../../../public/assets/Imgs/BrandsLogo/Samsung.png";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import { brandData } from "../../components/Brands";
import { servicesData } from "../../components/Services";
import { testimonialsData } from "../../components/Testimonials";
import BrandsSwiper from "@/components/BrandsSwiper";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import ServicesSwiper from "@/components/ServicesSwiper";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import arValues from "../../../public/locales/ar/translation.json";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};
export default function MainComponent() {
  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";
  const faqs = [
    {
      question: "اطرح اسئلتك علي خدمة العملاء واعرف التفاصيل",
      answer: (
        <ul className="list-disc pl-5 text-lg text-gray-900 rtl:text-right">
          <li>كيف يمكنني معرفة تكلفة صيانة جهازي؟</li>
          <li>
            عند التحدث مع احد ممثلي خدمة عملاء سامسونج العربى سيطلب منك بعض
            التفاصيل الخاصة بالجهاز.
          </li>
          <li>
            مثل نوع الجهاز، الموديل، مظاهر الخلل، وهل المنتج ما زال داخل ضمان
            سامسونج العربى أم خارج مدة الضمان.
          </li>
          <li>
            اذا كان لابد من الصيانة المنزلية سيتم تزويد العميل بكل الأسعار
            والمكونات المطلوبة.
          </li>
        </ul>
      ),
    },
    {
      question: "كم يستغرق وقت الاصلاح بمنزلي؟",
      answer: (
        <Typography className="text-lg text-gray-900 rtl:text-right">
          عادة ما يستغرق وقت صيانة الجهاز بين 40 إلى 150 دقيقة تقريباً، ولكن قد
          تختلف المدة بناءً على عدة عوامل.
        </Typography>
      ),
    },
    {
      question: "اعرف طرق التواصل مع صيانة سامسونج مصر؟",
      answer: (
        <Typography className="text-lg text-gray-900 rtl:text-right">
          هناك العديد من طرق الاتصال بمراكز صيانة سامسونج المنتشرة في المدن
          المختلفة، مثل الخط الساخن ورقم الواتساب.
        </Typography>
      ),
    },
    {
      question: "ما هي مميزات خدمات صيانة سامسونج؟",
      answer: (
        <Typography className="text-lg text-gray-900 rtl:text-right">
          تتميز خدمات صيانة سامسونج بالسرعة، الجودة، وتوفر قطع الغيار الأصلية،
          بالإضافة إلى فريق دعم فني محترف.
        </Typography>
      ),
    },
    {
      question: "كيف يمكنني حجز موعد صيانة لجهازي؟",
      answer: (
        <Typography className="text-lg text-gray-900 rtl:text-right">
          يمكنك حجز موعد صيانة من خلال الاتصال بالخط الساخن، أو عبر موقعنا
          الإلكتروني، أو من خلال تطبيق الهاتف المحمول.
        </Typography>
      ),
    },
    {
      question: "هل توفر سامسونج ضمان بعد الصيانة؟",
      answer: (
        <Typography className="text-lg text-gray-900 rtl:text-right">
          نعم، نوفر ضماناً على جميع عمليات الصيانة وقطع الغيار الأصلية
          المستخدمة، لضمان راحة العملاء.
        </Typography>
      ),
    },
  ];
  return (
    <>
      {" "}
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/Imgs/BrandsLogo/Samsung.png"
          width="30"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="-PvRBDpzOv6C3TyToejrkmpSg-q6TN2J8yo7ofEE2A0"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Arabic" />
        <title>
          صيانة سامسونج - خدمات الصيانة الموثوقة لأجهزة سامسونج في مصر
        </title>
        <meta
          name="description"
          content="خدمات صيانة موثوقة لجميع أجهزة سامسونج في مصر. نقدم صيانة للثلاجات والتكييفات والغسالات بأيدي خبراء متخصصين. اتصل بنا على 19319."
        />
        <meta
          name="keywords"
          content="صيانة سامسونج, صيانة ثلاجات سامسونج, صيانة تكييف سامسونج, صيانة غسالات سامسونج, رقم صيانة سامسونج"
        />
        {/* Twitter Card */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@elarabygroup64" />
        <meta name="twitter:creator" content="@elarabygroup64" />
        <meta
          name="twitter:title"
          content="صيانة أعطال سامسونج فى مصر | العربى جروب"
        />
        <meta
          name="twitter:url"
          content="https://sharp-maintenance.vercel.app/"
        />
        <meta
          name="twitter:description"
          content="مرحباً بكم مع خدمة صيانة سامسونج من العربى جروب ✓ هل لديك بعض أعطال فى منتجات أو أجهزة منزلية سامسونج تحتاج الدعم الفنى أو مراكز صيانة سامسونج العربى."
        />
        <meta name="twitter:image" content="/assets/Imgs/Sharp/logoSharp.png" />

        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://sharp-maintenance.vercel.app/"
        />
        <meta
          property="og:title"
          content="صيانة أعطال سامسونج فى مصر | العربى جروب"
        />
        <meta
          property="og:description"
          content="مرحباً بكم مع خدمة صيانة سامسونج من العربى جروب ✓ هل لديك بعض أعطال فى منتجات أو أجهزة منزلية سامسونج تحتاج الدعم الفنى أو مراكز صيانة سامسونج العربى."
        />
        <meta property="og:image" content="/assets/Imgs/Sharp/logoSharp.png" />
        <meta property="og:site_name" content="صيانة سامسونج" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "صيانة سامسونج العربى",
              image: "/assets/Imgs/Sharp/logoSharp.png",
              "@id": "https://sharp-maintenance.vercel.app/",
              url: "https://sharp-maintenance.vercel.app/",
              telephone: "+201102941029",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "شارع التحرير",
                addressLocality: "القاهرة",
                addressRegion: "القاهرة",
                postalCode: "11511",
                addressCountry: "EG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.0444,
                longitude: 31.2357,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </Head>
      <Navbar
        logo="/assets/Imgs/BrandsLogo/Samsung.png"
        logoTitle="صيانة سامسونج"
        PhoneNmberTitle="رقم صيانة سامسونج"
        whatsAppTitle="هاتف صيانة سامسونج"
      />
      <section
        title="صيانة أعطال سامسونج فى مصر"
        className="w-full py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-screen"
      >
        <Container className="relative max-w-full !w-[95%] mx-auto h-full">
          <Box className="relative w-full h-full mx-auto aspect-video overflow-hidden rounded-xl lg:aspect-square bg-gray-400">
            <Image
              src="/assets/Imgs/Toshiba/Toshiba_Bg.jpg"
              alt="صيانة سامسونج"
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
              صيانة أعطال سامسونج فى مصر
            </Typography>
            <Typography
              variant="body1"
              className="text-muted-foreground md:text-xl"
            >
              نقدم خدمات صيانة متميزة لجميع أجهزة سامسونج، بما في ذلك الثلاجات
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
      <section
        title="خدمة عملاء سامسونج"
        className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto"
      >
        <Container className="grid max-w-7xl mx-auto gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:items-start my-3">
          <Box className="lg:pr-4">
            <Box className="lg:max-w-lg">
              <Typography
                variant="h1"
                color="primary"
                className="font-semibold"
              >
                صيانة سامسونج
              </Typography>
              <Typography
                variant="h1"
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                خدمة عملاء سامسونج
              </Typography>
              <Typography
                variant="body1"
                className="mt-6 text-xl text-gray-700"
              >
                خدمة عملاء سامسونج متوفرة على مدار 24 ساعة لتلقي بلاغات الأعطال
                ولتقديم خدمة متميزة لصيانة تكييف سامسونج بالضمان المعتمد.
              </Typography>
              <List className="mt-6 text-xl text-gray-700 list-disc list-inside">
                <ListItem>توفير قطع غيار أصلية بضمان لمدة 12 شهر.</ListItem>
                <ListItem>
                  أسعار تنافسية وخصم 20% على قطع الغيار الأصلية.
                </ListItem>
                <ListItem>
                  خدمات فورية لتركيب وصيانة تكييفات سامسونج بالضمان المعتمد.
                </ListItem>
              </List>
              <Typography
                variant="body1"
                className="mt-6 text-xl text-gray-700"
              >
                رقم توكيل صيانة سامسونج العربي 01062000763 الخط الساخن المباشر.
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
              <ListItem>صيانة تكييف سامسونج</ListItem>
              <ListItem>
                صيانة ثلاجات سامسونج | اتصل بنا الآن 01102941029
              </ListItem>
              <ListItem>صيانة غسالات سامسونج | اتصل الآن 01102941029</ListItem>
              <ListItem>صيانة شاشات سامسونج | اتصل الآن 01102941029</ListItem>
              <ListItem>
                عيوب شاشات سامسونج | اتصل بنا الآن 01102941029
              </ListItem>
            </List>
            <Typography variant="body1" className="mt-4 text-xl text-gray-700">
              للحصول على المزيد من المعلومات حول الخدمات المقدمة، يمكنك الاتصال
              بأرقام صيانة سامسونج الموجودة في المقال.
            </Typography>
          </Box>
        </Container>
      </section>
      <section
        title="صيانة سامسونج"
        className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto text-center"
      >
        <h1>صيانة سامسونج</h1>
        <p>
          تقوم شركة سامسونج العربي بعمل الصيانة المجانية لمدة خمس سنوات على
          التكييفات بالكامل على الجهاز ضد عيوب الصناعة طول فترة الضمان وتشمل
          الصيانة قطع الغيار في حال تلف أي من قطع غيار التكييف يتم تبديلها على
          نفقة الشركة وتقوم الشركة بالتوصيل والتركيب مجاني ويقوم الفنيين
          المدربين طرفنا على أعلى مستوى بعمل الصيانة اللازمة وإبلاغ الشركة بذلك
          حين تتم وتتم الصيانة المجانية مرتين في العام مرة صيفاً ومرة شتاءاً
          وتعمل شركة سامسونج العربي على إرضاء العملاء بشتى الطرق وتوفير جميع
          احتياجاتهم من قطع غيار داخل الضمان وخارج الضمان ومن شروط الصيانة
          المجانية أن يكون تم التركيب بمعرفة الشركة حيث أن لاضمان يسري من تاريخ
          التركيب بمعرفة الفني المختص من الشركة ويتم اعتماد الضمان من قبل الفني
          المختص أثناء التركيب ولا يجوز التركيب خارج الشركة حتى لا يسقط الضمان
          ويضيع حق العميل فيما يتعلق بالخمس سنوات ضمان.متطلبات الإفصاح من الجهة
          المنظمة للصناعة
        </p>
      </section>
      <section
        title="العربي الخط الساخن"
        className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto"
      >
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: "#ff0000" }}>
            <a style={{ color: "#ff0000" }} href={`tel:${phoneNumber}`}>
              صيانة سامسونج
            </a>{" "}
            العربي الخط الساخن{" "}
            <span style={{ fontFamily: "arial, helvetica, sans-serif" }}>
              19069 sharp egypt
            </span>
          </span>
        </h1>
        <p style={{ textAlign: "center" }}>
          لدينا يمكنكم الحصول علي افضل خدمات الصيانة المنزلية لغسالات سامسونج
          بقطع الغيار الاصلية وبشهادة ضمان معتمدة من مركز صيانة سامسونج للغسالات
          المعتمد في مصر علي رقم خدمة عملاء غسالات سامسونج مصر
          <br />
          نوفر لكم الحلول التقنية و قطع الغيار الاصلية ونساعدكم في اتمام الصيانة
          اللازمة لأجهزتكم المنزلية في الحدود الامنة التي تحافظ علي الكفاءة
          المعتادة لغسالات الملابس والاطباق سامسونج
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
              رقم مركز صيانة غسالات سامسونج
            </a>
          </span>{" "}
          للحفاظ علي غسالات سامسونج
        </h3>
        <p style={{ textAlign: "center" }}>
          الغسالة الكهربائية من الاجهزة التي لا يمكن ان يخلو المنزل منها ، فهي
          الحل الذي انقذ السيدات من مشقة غسيل الملابس ؛ و لكن&nbsp;اعطال
          الغسالات&nbsp;واردة الحدوث بشكل كبير مع استخدامنا الشبه يومي لها ، فلا
          يوجد اسهل من القاء الملابس المتسخة بها و تشغيلها ، و هي ستقوم باللازم
        </p>
        <p style={{ textAlign: "center" }}>
          ارقام توكيل سامسونج للغسالات بالقاهرة ،توكيل غسالات سامسونج في
          مصر،مركز صيانة غسالات سامسونج بالجيزة ،
          <span style={{ color: "#800000" }}>خدمة عملاء غسالات سامسونج </span>
          بالاسكندرية ،ارقام توكيل غسالات سامسونج البحيرة،رقم صيانة غسالات
          القاهرة – توكيل اصلاح غسالات سامسونج بالجيزة – القليوبية – مركز صيانة
          غسالات سامسونج المنصورة – الشرقية – المنوفية – الفيوم – توكيل غسالات
          سامسونج دمياط – البحيرة – مركز صيانة غسالات سامسونج بالاسكندرية بكفر
          الدوار – بنها – شبرا الخيمة – امبابة – مركز خدمة غسالات سامسونج في
          طنطا – دمنهور – كفر الشيخ – المحلة – بورسعيد – الاسماعيلية – صيانة
          سامسونج للغسالات بالسويس – الوادي الجديد – مدينة السادات – مركز صيانة
          سامسونج للغسالات باسيوط – سوهاج – المنيا – قنا –رقم سامسونج المختصر
          لصيانة الغسالات الاقصر – اسوان – بني سويف – رقم صيانة سامسونج المختصر
          بني مزار – مغاغة – العين السخنة – مركز صيانة الساحل الشمالي – رقم
          تليفون مركز صيانه سامسونج بمرسي مطروح – شبين القناطر – ابوحمص – ارقام
          توكيل سامسونج بايتاي البارود – دسوق – مركز اشمون – مركز الشهداء – شركة
          صيانة غسالات سامسونج في شبين الكوم – الباجور – دكرنس – رقم صيانة
          غسالات سامسونج في ميت غمر – شربين – طلخا – السنبلاوين – فاقوس – توكيل
          سامسونج الزقازيق – منيا القمح – بلبيس – الحوامدية – العياط – البدرشين
          – مدينة العاشر من رمضان – البحر الاحمر – مركز صيانة سامسونج بكفر
          الزيات –
        </p>
      </section>
      <section
        title="رقم صيانة سامسونج الخط الساخن"
        className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto"
      >
        <h1 style={{ textAlign: "center" }}>
          <span style={{ color: "#ff0000" }}>
            رقم صيانة سامسونج الخط الساخن{" "}
            <span
              style={{
                fontFamily: "arial, helvetica, sans-serif; font-size: 24pt",
              }}
            >
              <span style={{ color: "#008000" }}>19078</span>{" "}
            </span>
            خدمة عملاء صيانة سامسونج مصر Shap Egypt
          </span>
        </h1>
        <p>
          <span style={{ color: "#000000" }}>
            <strong>
              تعرف على عناويين وارقام صيانة سامسونج بمصرنحن{" "}
              <a
                style={{ color: "#000000" }}
                href="https://sharp-maintenance.vercel.app/"
              >
                مركز صيانة سامسونج
              </a>{" "}
              نعمل على مدار الساعه من اجل خدمة عملاء شركة سامسونج ولان شركة
              سامسونج تعتبر من اعرق الشركات المتخصصة فى انتاج الاجهزة المنزلية
              والتى لاقت نجاح كبير فى العالم خصوصا بمصر فقد وجب عليها ان تنتقى
              مراكز الصيانة والتى ستقوم بصيانة اجهزة سامسونج لذلك فقط اعطتنا نحن
              مركز صيانة سامسونج المعتمد من شركة سامسونج شرف صيانة اجهزة سامسونج
              فنحن نعمل على مدار الساعه من اجلك انت عميل صيانة سامسونج ، فبمجرد
              اتصالك ب{" "}
              <a
                style={{ color: "#000000" }}
                href="https://sharp-maintenance.vercel.app"
              >
                خدمة عملاء صيانة سامسونج
              </a>{" "}
              المعتمد والتى يمكنك ان تتصل بها فى اى وقت لانها تعمل على مدار
              الساعه ،فانها تقوم بتسليمك الى المهندس المتخصص والذى يقوم بدورة
              بالاتصال بك لتحديد ميعاد للتواصل معك ، ولاننا نملك اكبر اسطول
              سيارات خاص بمراكز صيانة سامسونج ومراكزنا تملاء جميع محافظات ومراكز
              جمهورية مصر العربية فاننا نصلك فى اسرع وقت ممكن ، ولاننا مركز
              صيانة سامسونج المعتمد فقد وجب علينا ان نحذر من المراكز الغير
              معتمدة من
            </strong>
            <strong>&nbsp;شركة سامسونج</strong>
            <strong>&nbsp;</strong>
            <strong>
              والتى كثرت فى الاونة الاخير بشدة وانتحلت صفة مركز صيانة سامسونج
              وبالتالى فاننا نخلى مسؤليتنا نحن مركز صيانة سامسونج من هذة المراكز
              الغير معتمدة من شركة سامسونج ، واخير نود ان نشير الى ان هدفنا
              ورؤيتنا هى ارضاء عميل سامسونج فنحن نعمل على مدار الساعه من اجل ان
              تنعم انت واسرتك بافضل خدمة من مركز صيانة سامسونج ، اخى عميل
              سامسونج يمكنك ان تتصل بنا نحن توكيل صيانة سامسونج فى اى وقت على
              الخط الساخن لصيانة سامسونج نقوم بصيانة ثلاجات سامسونج وصيانة
              بوتجازات سامسونج وصيانة تكييفات سامسونج وصيانة غسالات سامسونج
              والاننا نعلم ان شركة سامسونج العربي لها عميل من طابع خاص فان{" "}
              <a
                style={{ color: "#000000" }}
                href="https://sharp-maintenance.vercel.app/"
              >
                مراكز صيانة سامسونج
              </a>{" "}
              ايضا هى من طابع خاص ما يهمنا هو رضاء ع
              <a
                style={{ color: "#000000" }}
                href="https://sharp-maintenance.vercel.app/"
              >
                ميل شركة سامسونج
              </a>{" "}
              والعالمية
            </strong>
          </span>
        </p>
      </section>
      {/* Section To Target "خدمة عملاء سامسونج للغسالات" Keyword */}
      <section
        title="ما هي خدمة عملاء سامسونج للغسالات؟"
        className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto"
      >
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">خدمة عملاء سامسونج للغسالات</h1>
            <p className="text-lg mt-2">الدعم الفني والصيانة لمساعدتك دائمًا</p>
          </div>
        </header>
        <main className="container mx-auto p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              ما هي خدمة عملاء سامسونج للغسالات؟
            </h2>
            <p className="text-lg leading-7">
              تعد خدمة عملاء سامسونج للغسالات واحدة من أفضل خدمات الدعم الفني في
              السوق. تقدم هذه الخدمة حلولاً مبتكرة وسريعة لمشاكل الغسالات، سواء
              كانت تتعلق بالصيانة أو الاستخدام اليومي.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              أهم مميزات خدمة عملاء سامسونج
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>دعم فني متاح على مدار الساعة لحل جميع مشاكلك.</li>
              <li>فريق عمل مدرب ومتخصص في صيانة غسالات سامسونج.</li>
              <li>ضمان استخدام قطع غيار أصلية للحصول على أفضل أداء.</li>
              <li>تقديم نصائح وإرشادات لتحسين أداء الغسالة.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              كيفية التواصل مع خدمة عملاء سامسونج
            </h2>
            <p className="text-lg">
              للتواصل مع خدمة العملاء، يمكنك الاتصال على الرقم المخصص أو زيارة
              الموقع الرسمي للحصول على المزيد من التفاصيل. فريق الدعم الفني جاهز
              للإجابة على جميع استفساراتك.
            </p>
            <div className="bg-blue-100 p-4 rounded mt-4">
              <p className="text-lg font-medium">
                رقم خدمة العملاء:{" "}
                <span className="text-blue-600 font-bold">+201102941029</span>
              </p>
              <a
                href="https://sharp-maintenance.vercel.app/"
                className="text-blue-500 underline mt-2 block"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">أسئلة شائعة</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">
                  هل تقدم خدمة العملاء صيانة منزلية؟
                </h3>
                <p className="text-lg">
                  نعم، يمكن لفريق الدعم الفني زيارة منزلك لإجراء الصيانة
                  اللازمة.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">ما هي أوقات عمل خدمة العملاء؟</h3>
                <p className="text-lg">
                  خدمة العملاء متاحة على مدار الساعة لضمان تقديم الدعم الكامل.
                </p>
              </div>
            </div>
          </section>
        </main>
      </section>
      {/* Section To Target "خدمة عملاء سامسونج للثلاجات" Keyword */}
      <section
        title="ما هي خدمة عملاء سامسونج للثلاجات؟"
        className="bg-white shadow-lg rounded-lg p-8 mb-8 w-[90%] mx-auto"
      >
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">خدمة عملاء سامسونج للثلاجات</h1>
            <p className="text-lg mt-2">الدعم الفني والصيانة لمساعدتك دائمًا</p>
          </div>
        </header>
        <main className="container mx-auto p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              ما هي خدمة عملاء سامسونج للثلاجات؟
            </h2>
            <p className="text-lg leading-7">
              تعد خدمة عملاء سامسونج للثلاجات واحدة من أفضل خدمات الدعم الفني في
              السوق. تقدم هذه الخدمة حلولاً مبتكرة وسريعة لمشاكل الغسالات، سواء
              كانت تتعلق بالصيانة أو الاستخدام اليومي.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              أهم مميزات خدمة عملاء سامسونج
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>دعم فني متاح على مدار الساعة لحل جميع مشاكلك.</li>
              <li>فريق عمل مدرب ومتخصص في صيانة غسالات سامسونج.</li>
              <li>ضمان استخدام قطع غيار أصلية للحصول على أفضل أداء.</li>
              <li>تقديم نصائح وإرشادات لتحسين أداء الغسالة.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              كيفية التواصل مع خدمة عملاء سامسونج
            </h2>
            <p className="text-lg">
              للتواصل مع خدمة العملاء، يمكنك الاتصال على الرقم المخصص أو زيارة
              الموقع الرسمي للحصول على المزيد من التفاصيل. فريق الدعم الفني جاهز
              للإجابة على جميع استفساراتك.
            </p>
            <div className="bg-blue-100 p-4 rounded mt-4">
              <p className="text-lg font-medium">
                رقم خدمة العملاء:{" "}
                <span className="text-blue-600 font-bold">+201102941029</span>
              </p>
              <a
                href="https://sharp-maintenance.vercel.app/"
                className="text-blue-500 underline mt-2 block"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">أسئلة شائعة</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">
                  هل تقدم خدمة العملاء صيانة منزلية؟
                </h3>
                <p className="text-lg">
                  نعم، يمكن لفريق الدعم الفني زيارة منزلك لإجراء الصيانة
                  اللازمة.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">ما هي أوقات عمل خدمة العملاء؟</h3>
                <p className="text-lg">
                  خدمة العملاء متاحة على مدار الساعة لضمان تقديم الدعم الكامل.
                </p>
              </div>
            </div>
          </section>
        </main>
      </section>
      <main
        title="أفضل خدمات صيانة سامسونج في مصر"
        className="bg-gray-50 py-16 md:py-24 max-w-[90%] mx-auto mb-8"
      >
        <Container maxWidth="lg" className="max-w-[90%]">
          <Typography
            variant="h1"
            component="h1"
            className="text-4xl font-bold text-center mb-8"
          >
            صيانة أعطال سامسونج فى مصر
          </Typography>

          <Box className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              أفضل خدمات صيانة سامسونج في مصر
            </Typography>
            <Typography variant="body1" className="text-right mb-4">
              نقدم خدمات صيانة متميزة لجميع أجهزة سامسونج، بما في ذلك الثلاجات
              والتكييفات والغسالات. فريقنا من الخبراء مستعد لحل جميع مشاكل
              أجهزتكم بكفاءة عالية.
            </Typography>
          </Box>

          <Box className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              خدماتنا
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="صيانة سامسونج ثلاجات"
                  secondary="إصلاح جميع أنواع الأعطال في ثلاجات سامسونج"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="صيانة سامسونج تكييف"
                  secondary="صيانة وإصلاح تكييفات سامسونج بجميع أنواعها"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="صيانة سامسونج غسالات"
                  secondary="حلول متكاملة لجميع مشاكل غسالات سامسونج"
                />
              </ListItem>
            </List>
          </Box>

          <Box className="bg-white shadow-lg rounded-lg p-8 ">
            <Typography variant="h2" className="text-2xl font-semibold mb-4">
              تواصل معنا
            </Typography>
            <Typography variant="body1" className="mb-2">
              رقم الخط الساخن:{" "}
              <a
                href={`tel:+201102941029`}
                title={"رقم صيانة سامسونج"}
                className="text-blue-600 hover:underline"
              >
                19319
              </a>
            </Typography>
            <Typography variant="body1" className="mb-2">
              رقم صيانة سامسونج:{" "}
              <a
                href={`tel:+201102941029`}
                title={"رقم صيانة سامسونج"}
                className="text-blue-600 hover:underline"
              >
                {displayPhoneNumber}
              </a>
            </Typography>
          </Box>
        </Container>
      </main>
      <Container maxWidth="lg" className="mb-8 max-w-[90%] w-full mx-auto">
        {/* Red Background Section */}
        <Box className="bg-red-700 py-2">
          <Typography
            variant="h6"
            className="text-center text-pink-100"
            sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            مركز صيانة سامسونج لخدمة اصلاح الاجهزة
          </Typography>
        </Box>

        {/* Gray Background Section */}
        <Box className="bg-gray-100 py-4 text-center">
          <Typography
            variant="body1"
            className="text-black text-lg"
            sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            إذا كنت تواجه مشكلات تتعلق بأجهزة سامسونج الخاصة بك، يمكنك التواصل
            مع الدعم الفني المتخصص لخدمة منتجات Sharp المتوفر على مدار اليوم
            لخدمتك.
          </Typography>
          <Typography
            variant="body1"
            className="text-black text-lg"
            sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            ابدأ مع{" "}
            <Link
              href="https://sharp-maintenance.vercel.app/"
              className="text-blue-600"
            >
              صيانة سامسونج
            </Link>{" "}
            تجربة فريدة ومثالية لحماية منتج سامسونج ومنع الإصلاحات المكلفة.
          </Typography>
          <Typography
            variant="body1"
            className="text-black text-lg"
            sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            نعمل دائماً لتنفيذ طلبات <strong>إصلاح سامسونج</strong> بالطرق
            الصحيحة والفعالة، للوصول بالأداء المثالي المعروف عن منتجات سامسونج.
          </Typography>
          <Typography
            variant="body1"
            className="text-black text-lg"
            sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            لدينا في مركز صيانة سامسونج أحدث معدات استكشاف الأعطال وتصحيح
            الأخطاء، مما يتيح إصلاحها باحترافية وضمان استخدام المكونات الأصلية.
          </Typography>
          <Typography
            variant="body1"
            className="text-black text-lg"
            sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            اطرح الأسئلة لموظفي خدمة العملاء أو اتصل على{" "}
            <strong>رقم صيانة سامسونج الموحد</strong> 19319 للتعرف على المزايا
            الإضافية.
          </Typography>
          <Typography
            variant="body1"
            className="text-black text-lg"
            sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            نضمن حصول عملائنا على تجربة إصلاح مثالية تحافظ على جودة الأجهزة
            الكهربائية وفق معايير الجودة العالمية لشركة سامسونج اليابانية.
          </Typography>
        </Box>
      </Container>
      <section
        calssName="bg-white shadow-lg rounded-lg p-8 !my-8 !w-[90%] max-w-[90%] mx-auto mb-8"
        name="faq"
      >
        <div className="p-4 w-full bg-white rounded-lg shadow-lg rtl max-w-[90%] mx-auto">
          {faqs.map((faq, index) => (
            <Accordion key={index} className="shadow-sm w-full">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="bg-gray-200"
              >
                <Typography className="font-semibold text-gray-800 rtl:text-right">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>
    </>
  );
}
