'use client'
import Image from "next/image";
import FlipCarousel from "./Components/FlipCarousel";
import AshapurnaCarousel from "./Components/AshapurnaCarousel";

export default function Home() {
  return (
    <>
      <FlipCarousel />
       <br />
       <br />

       <AshapurnaCarousel /> 
    </>
  );
}
