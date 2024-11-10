"use client"; // <===== REQUIRED
import React from "react";
import { brandData } from "./Brands";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import styles
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image"; // Import Next.js Image component
import arValues from "../../public/locales/ar/translation.json";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};

export default function BrandsSwiper() {
  const brands = brandData;

  return (
    <div>
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          gap: "1rem",
          autoplay: true,
          pauseOnHover: false,
          breakpoints: {
            320: {
              perPage: 1,
            },
            480: {
              perPage: 1,
            },
            640: {
              perPage: 2,
            },
            1024: {
              perPage: 4,
            },
          },
        }}
        className="py-3 mx-auto"
      >
        {brands.map((brand, index) => (
          <SplideSlide key={index}>
            <Card className="min-h-[250px]">
              <div className="relative h-36 w-full">
                <Image
                  src={brand.logo} // Use the src prop for the image source
                  alt={t(brand.name)}
                  layout="fill" // Use layout fill to make the image responsive
                  objectFit="contain" // Adjust object fit to contain
                />
              </div>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <Typography variant="h6" className="text-lg font-bold">
                  {t(brand.name)}
                </Typography>
                <Typography variant="body2">{t(brand.description)}</Typography>
              </CardContent>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
