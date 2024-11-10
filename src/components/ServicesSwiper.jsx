"use client"; // <===== REQUIRED
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import styles
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { servicesData } from "./Services";
import Image from "next/image";
import arValues from "../../public/locales/ar/translation.json";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};

export default function ServicesCarousel() {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 4,
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 3,
          },
        },
      }}
      className="py-3 mx-auto"
    >
      {servicesData.map((service, index) => (
        <SplideSlide key={index}>
          <Card className="min-h-[250px]">
            <div className="relative h-36 w-full">
              <Image
                src={service.icon} // Use the src prop for the image source
                alt={t(service.title)}
                layout="fill" // Use layout fill to make the image responsive
                objectFit="contain" // Adjust object fit to contain
              />
            </div>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
              <Typography variant="h6" className="text-lg font-bold">
                {t(service.title)}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </CardContent>
          </Card>
        </SplideSlide>
      ))}
    </Splide>
  );
}
