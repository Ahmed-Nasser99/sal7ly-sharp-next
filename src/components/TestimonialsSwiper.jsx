"use client"; // <===== REQUIRED
import React from "react";
import { testimonialsData } from "./Testimonials";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import styles
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import arValues from "../../public/locales/ar/translation.json";

const t = (key) => {
  return arValues[key] || key; // Return the Arabic value or the key if not found
};

export default function TestimonialsSwiper() {
  const testimonials = testimonialsData;

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
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index}>
            <Card className="p-6 border rounded-lg shadow-lg bg-white min-h-[180px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.title}
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed italic text-gray-600">
                {testimonial.review}
              </blockquote>
              <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-yellow-500 mx-auto">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
