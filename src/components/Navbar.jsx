import { Phone, WhatsApp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arValues from "../../public/locales/ar/translation.json";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};

export default function Navbar({
  logo,
  logoTitle,
  PhoneNmberTitle,
  whatsAppTitle,
}) {
  const phoneNumber = "+201102941029";
  const displayPhoneNumber = "01102941029";
  const email = "ahmednasserr86@gmail.com";
  const location = "٢ شارع اليمني - أرض اللواء - حي العجوزة - محافظة الجيزة";
  return (
    <header className="px-4 py-4 lg:px-6 h-14 flex items-center justify-between w-[95%] mx-auto fixed top-0 left-0 right-0 z-50 rounded-b-lg bg-background shadow-md overflow-hidden">
      <Link href="#" className="flex items-center gap-2">
        <div className="w-[150px] h-[90px] pt-2">
          <Image
            src={logo}
            alt={logoTitle}
            className="w-full h-full"
            width={150}
            height={90}
          />
        </div>
      </Link>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            title={PhoneNmberTitle}
            className="flex items-center gap-1"
          >
            <Phone className="w-5 h-5 text-green-500" />
            <span className="hidden sm:inline">{displayPhoneNumber}</span>
          </a>
          <Link
            href={`https://wa.me/${phoneNumber}`}
            className="flex items-center gap-3"
            title={whatsAppTitle}
          >
            <WhatsApp className="w-5 h-5 text-green-500" />
            <span className="hidden sm:inline">{t("whatsapp")}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
