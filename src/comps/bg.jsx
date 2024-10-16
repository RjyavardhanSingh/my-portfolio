"use client";
import React from "react";
import { ShootingStars } from "../components/ui/Shooting-Stars";
import { StarsBackground } from "../components/ui/Stars-Background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center bg-neutral-900">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
